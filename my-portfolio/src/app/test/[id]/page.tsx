import React from "react";
import connectDB from "@/config/connect";
import TestModel from "@/models/dummyModel";

const SingleTest = async ({ params }: { params: { id: string } }) => {
  await connectDB();
  const singletestData = await TestModel.findById(params.id);
  return <div>{singletestData}</div>;
};

export default SingleTest;
