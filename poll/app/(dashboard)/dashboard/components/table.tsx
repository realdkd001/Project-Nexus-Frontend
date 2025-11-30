"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Action from "./actions";
import { Pencil, LineChart, Trash2 } from "lucide-react";
import { PollProps } from "@/interface";


export const DashboardTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full overflow-x-auto lg:overflow-visible">
      <table className="min-w-max lg:min-w-full text-sm border-collapse">{children}</table>
    </div>
  );
};

export const DashboardTableHead = () => (
  <thead>
    <tr className="text-left text-gray-500 border-b bg-white">
      <th className="py-3 px-4">Title</th>
      <th className="py-3 px-4 text-center">Total Votes</th>
      <th className="py-3 px-4 text-center">Status</th>
      <th className="py-3 px-4 text-center">Created At</th>
      <th className="py-3 px-4 sticky right-0 bg-white z-10">Actions</th>
    </tr>
  </thead>
);

export const DashboardTableBody = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.tbody layout>
      <AnimatePresence>{children}</AnimatePresence>
    </motion.tbody>
  );
};

export const DashboardTableRow = ({
  poll,
  onEdit,
}: {
  poll: Required<PollProps>;
  onEdit: (p: PollProps) => void;
}) => {

  return (
    <motion.tr
      key={poll.id}
      layout
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, height: 0, padding: 0, margin: 0 }}
      transition={{ duration: 0.25 }}
      className="hover:bg-gray-50 hover:cursor-pointer"
      onClick={() => {
        window.location.href = `/poll/${poll.id}`;
      }}
    >

      <td className="py-3 px-4 font-medium">{poll.title}</td>
      <td className="py-3 px-4 text-center">{Object.values(poll.votes).reduce((a, b) => a + b, 0).toLocaleString()}</td>
      <td className="py-3 px-4 text-center">
        <span className={`px-3 py-1 rounded-full text-xs ${poll.status === "Active" ? "bg-green-100 text-green-700" : poll.status === "Pending" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"}`}>
          {poll.status}
        </span>
      </td>
      <td className="py-3 px-4 text-center">{new Date(poll.createdAt).toLocaleDateString()}</td>
      <td className="py-3 px-4 sticky right-0 bg-white z-10 hover:cursor-default" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-center gap-2 ">
          <Action id={poll.id} 
          icon={<Pencil size={16} />} 
          action="edit" 
          onEdit={(data) => onEdit(data)} />
          <Action id={poll.id} icon={<LineChart size={16} />} action="view" />
          <Action id={poll.id} icon={<Trash2 size={16} />} action="delete" />
        </div>
      </td>
    </motion.tr>
  );
};
