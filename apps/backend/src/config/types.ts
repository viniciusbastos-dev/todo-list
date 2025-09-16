import { t } from 'elysia';

export const errorResponse = t.Object({
  error: t.String(),
});

export type ErrorResponse = typeof errorResponse.static;
