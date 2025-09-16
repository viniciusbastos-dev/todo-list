import Elysia from 'elysia';
import { errorResponse } from '../../config/types';
import { exampleResponse } from './types';

export const ExampleController = new Elysia().get(
  '/example',
  () => {
    return {
      message: 'Hello World',
    };
  },
  {
    response: {
      200: exampleResponse,
      400: errorResponse,
    },
  }
);
