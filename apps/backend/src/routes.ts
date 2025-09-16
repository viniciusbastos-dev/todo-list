import Elysia from 'elysia';
import { ExampleController } from './modules/example/controller';

export const Routes = new Elysia().use(ExampleController);
