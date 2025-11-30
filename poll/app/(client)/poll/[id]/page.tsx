import VoteWrapper from "../component/vote-wrapper";
import axios from "axios";
import { PollProps } from "@/interface";


export default async function Home({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  let res = null;
  try {
     res = await axios.get(`http://localhost:4000/polls/${id}`);
  }catch(e){
    console.log(e)  
  }
  
  const data = res?.data;


  
  return (
    <div>
      <VoteWrapper election_id={id} data={data as PollProps} />
    </div>
  );
}
