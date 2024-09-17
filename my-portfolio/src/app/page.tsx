import connectDB from "./../config/connect";

export default function Home() {
  connectDB();
  return <h1>Hello world</h1>;
}
