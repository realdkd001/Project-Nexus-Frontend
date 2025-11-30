"use client";
import { ArrowLeft } from "lucide-react";
import { PollProps } from "@/interface";
import { useRouter } from "next/navigation";


const GraphTitle = ({ data }: { data: PollProps | null }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => router.back()}
        className="text-gray-500 hover:text-gray-700 transition-colors mb-4 flex items-center gap-3">
        <ArrowLeft size={24} /> Back
      </button>
      <h2 className="text-xl sm:text-3xl font-semibold text-foreground">{data?.title}</h2>
      <p className="text-sm text-muted-foreground">Vote Distribution</p>
    </div>
  );
};

export default GraphTitle;
