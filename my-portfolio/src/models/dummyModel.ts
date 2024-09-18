import { Schema, model, models } from "mongoose";

const TestSchema = new Schema({
  test: {
    type: String,
  },
});

const TestModel = models.Test || model("Test", TestSchema);

export default TestModel;
