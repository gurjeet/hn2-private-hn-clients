import { readFile } from 'node:fs/promises';
import process from 'node:process';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';

const schemaPath = new URL('../schema/client.schema.json', import.meta.url);
const dataPath = new URL('../data/clients.json', import.meta.url);
const taxonomyPath = new URL('../data/taxonomy.json', import.meta.url);

const [schemaRaw, dataRaw, taxonomyRaw] = await Promise.all([
  readFile(schemaPath, 'utf-8'),
  readFile(dataPath, 'utf-8'),
  readFile(taxonomyPath, 'utf-8')
]);

const schema = JSON.parse(schemaRaw);
const clients = JSON.parse(dataRaw);
const taxonomy = JSON.parse(taxonomyRaw);

if (!Array.isArray(clients)) {
  console.error('data/clients.json must be an array.');
  process.exit(1);
}

const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(schema);

const ids = new Set();
const allowedTags = new Set(taxonomy.tags || []);
let ok = true;

for (const client of clients) {
  if (ids.has(client.id)) {
    console.error(`Duplicate id detected: ${client.id}`);
    ok = false;
  } else {
    ids.add(client.id);
  }

  const valid = validate(client);
  if (!valid) {
    ok = false;
    console.error(`Schema errors for ${client.id || 'unknown-id'}:`);
    for (const error of validate.errors || []) {
      const path = error.instancePath || '(root)';
      console.error(`  ${path} ${error.message}`);
    }
  }

  if (Array.isArray(client.tags)) {
    for (const tag of client.tags) {
      if (!allowedTags.has(tag)) {
        ok = false;
        console.error(`Unknown tag "${tag}" in ${client.id}`);
      }
    }
  }
}

if (!ok) {
  process.exitCode = 1;
} else {
  console.log(`ok: validated ${clients.length} clients`);
}
