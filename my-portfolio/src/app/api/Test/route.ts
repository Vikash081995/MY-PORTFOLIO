import connectDB from "@/config/connect";
import TestModel from "@/models/dummyModel";

export const GET = async () => {
  try {
    await connectDB();
    const TestData = await TestModel.find({});
    return new Response(JSON.stringify(TestData), {
      status: 200,
    });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
