import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PollProps } from "@/interface";

const initialState: PollProps[] = [
    {
        title: "Who is the best programming language?",
        createdAt: "Jan 12, 2024",
        options: ["JavaScript", "Python", "Java", "C#"],
        id: "1",
        votes: 12450,
        status: "Active"
    },
    {
        title: "Best frontend framework in 2024?",
        createdAt: "Feb 02, 2024",
        options: ["React", "Vue", "Angular", "Svelte"],
        id: "2",
        votes: 8230,
        status: "Pending"
    },
];




const pollsSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    setPolls(state, action: PayloadAction<PollProps[]>) {
      return action.payload;
    },
    addPoll(state, action: PayloadAction<PollProps>) {
      state.unshift(action.payload); // put newest first
    },
    updatePoll(state, action: PayloadAction<PollProps>) {
      const idx = state.findIndex((p) => p.id === action.payload.id);
      if (idx !== -1) state[idx] = action.payload;
    },
    deletePoll(state, action: PayloadAction<number | string>) {
      return state.filter((p) => p.id !== action.payload);
    },
  },
});

export const { setPolls, addPoll, updatePoll, deletePoll } = pollsSlice.actions;
export default pollsSlice.reducer;