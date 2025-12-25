import { readFile } from 'node:fs/promises';

const CLIENTS_PATH = new URL('../../data/clients.json', import.meta.url);

let cachedClients = null;

export async function getClients() {
  if (cachedClients) {
    return cachedClients;
  }

  const raw = await readFile(CLIENTS_PATH, 'utf-8');
  cachedClients = JSON.parse(raw);
  return cachedClients;
}

export async function getClientById(id) {
  const clients = await getClients();
  return clients.find((client) => client.id === id);
}
