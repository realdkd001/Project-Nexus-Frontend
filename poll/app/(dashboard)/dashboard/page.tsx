"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setPolls } from "@/store/slice/features/polls";
import { RootState } from "@/store";
import PollModal from "./components/create-poll";
import { DashboardTable, DashboardTableHead, DashboardTableBody, DashboardTableRow } from "./components/table";
import { Plus } from "lucide-react";
import { PollProps } from "@/interface";

export default function PollsPage() {
  const dispatch = useDispatch();
  const polls = useSelector((s: RootState) => s.polls);
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedPoll, setSelectedPoll] = useState<PollProps | null>(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get("http://localhost:4000/polls");
        dispatch(setPolls(res.data));
      } catch (err) {
        console.error("fetch polls failed", err);
      }
    };
    fetch();
  }, [dispatch]);

  const openEditFromAction = (pollData: PollProps) => {
    setSelectedPoll(pollData);
    setEditOpen(true);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Polls</h1>
        <div className="flex items-center gap-3">
          <button onClick={() => setCreateOpen(true)} className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-md">
            <Plus size={16} /> Create Poll
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow">
        <DashboardTable>
          <DashboardTableHead />
          <DashboardTableBody>
            {polls.map((p: PollProps) => (
              <DashboardTableRow key={p.id} poll={p as Required<PollProps>} onEdit={openEditFromAction} />
            ))}
          </DashboardTableBody>
        </DashboardTable>

      </div>

        

      {/* Create Modal */}
      <PollModal isOpen={createOpen} closeModal={() => setCreateOpen(false)} mode="create" />

      {/* Edit Modal */}
      <PollModal isOpen={editOpen} closeModal={() => setEditOpen(false)} mode="edit" initial={selectedPoll} />
    </div>
  );
}
