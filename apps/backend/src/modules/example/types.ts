import { t } from 'elysia';

export interface ExampleI {
  string: string;
  number: number;
  boolean: boolean;
  array: string[];
  date: Date;
}

export const exampleResponse = t.Object({
  message: t.String(),
});
