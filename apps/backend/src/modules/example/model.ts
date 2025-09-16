import { model, Schema } from 'mongoose';

const ExampleSchema = new Schema({
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
