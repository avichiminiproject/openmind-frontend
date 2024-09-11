import { Client, Account } from 'appwrite';
const client = new Client();

client
    .setEndpoint('http://192.168.29.242:80/v1')
    .setProject('66e141970016133f872b');
export const account = new Account(client)
export { ID } from 'appwrite';