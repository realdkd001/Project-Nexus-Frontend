"use client";
import axios from "axios";
import { useDispatch } from "react-redux";
import { deletePoll } from "@/store/slice/features/polls";
import { useRouter } from "next/navigation";
import { ActionProps } from "@/interface";


export default function Action({ id, icon, action = "edit", onEdit }: ActionProps) {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = async () => {
    switch (action) {
      case "delete":
        if (!confirm("Delete this poll?")) return;
        try {
          await axios.delete(`http://localhost:4000/polls/${id}`);
          dispatch(deletePoll(id));
        } catch (err) {
          console.error("Delete failed", err);
          alert("Delete failed");
        }
        break;

      case "edit":
        try {
          const res = await axios.get(`http://localhost:4000/polls/${id}`);
          if (onEdit) onEdit(res.data);
        } catch (err) {
          console.error("Failed to fetch poll for edit", err);
          alert("Failed to fetch poll for editing");
        }
        break;
        
      case "view":
        router.push(`/dashboard/analytics/${id}`);
        break;

      default:
        break;
    }
  };

  const isDestructive = action === "delete";

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`p-2 rounded-lg border transition-all ${
        isDestructive
          ? "border-red-300 text-red-600 hover:bg-red-50"
          : "border-gray-300 text-gray-600 hover:bg-gray-50"
      }`}
      aria-label={action}
    >
      {icon}
    </button>
  );
}
