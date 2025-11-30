import VoteWrapper from "../component/vote-wrapper";
import axios from "axios";
import { PollProps } from "@/interface";

export default async function Home({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const res = await axios.get(`http://localhost:4000/polls/${id}`);
  const data = res.data;

  if (!data || (Array.isArray(data) && data.length === 0) || data.id === undefined || data.status !== "Active") {
    return <div className="w-full h-screen flex justify-center items-center text-gray-500">Election not found...</div>;
  }
  return (
    <div>
      <VoteWrapper data={data as PollProps} />
    </div>
  );
}
