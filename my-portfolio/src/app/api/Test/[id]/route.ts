import connectDB from "@/config/connect";
import TestModel from "@/models/dummyModel";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDB();
    const TestData = await TestModel.findById(params.id);
    return new Response(JSON.stringify(TestData), {
      status: 200,
    });
  } catch (error) {
    return new Response("Something went wrong", { status: 500 });
  }
};
