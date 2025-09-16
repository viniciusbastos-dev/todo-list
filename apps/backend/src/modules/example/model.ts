import { model, Schema } from 'mongoose';
import { ExampleI } from './types';

const ExampleSchema = new Schema<ExampleI>({
  string: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
  },
  boolean: {
    type: Boolean,
  },
  array: {
    type: [String],
  },
  date: {
    type: Date,
  },
});

export const Example = model('Example', ExampleSchema);
