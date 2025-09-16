import { Elysia } from 'elysia';
import { Routes } from './routes';

const app = new Elysia().use(Routes).listen(3333);

console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`);
