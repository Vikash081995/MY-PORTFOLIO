//server component

import React from "react";
import connectDB from "@/config/connect";
import TestModel from "@/models/dummyModel";

const TestComponents = async () => {
  await connectDB();
  const testData = await TestModel.find({});
  return <div>{testData}</div>;
};

export default TestComponents;
