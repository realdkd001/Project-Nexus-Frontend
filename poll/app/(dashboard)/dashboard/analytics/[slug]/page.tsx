import { ChartComponent } from '../../components/chart-component';

async function Page({params}: { params: Promise<{ slug: string }> }) {
  const election_id = (await params).slug;
  return (
    <div>
      <ChartComponent election_id={election_id}/> 
    </div>
  )
}

export default Page