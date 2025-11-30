import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PollProps } from "@/interface";

const initialState: PollProps[] = [
    {
      "title": "Who is the best programming language?",
      "description": "",
      "options": [
        "JavaScript",
        "Python",
        "Java",
        "C#"
      ],
      "votes": {
        "JavaScript": 50001,
        "Python": 4000,
        "Java": 2502,
        "C#": 950
      },
      "status": "Active",
      "privacy": "Public",
      "createdAt": "Jan 12, 2024",
      "id": "1"
    },
    {
      "title": "Best frontend framework in 2024?",
      "description": "Hello",
      "options": [
        "React",
        "Vue",
        "Angular"
      ],
      "votes": {
        "React": 4001,
        "Vue": 3001,
        "Angular": 1234
      },
      "status": "Active",
      "privacy": "Public",
      "createdAt": "Feb 02, 2024",
      "id": "2"
    }
];




const pollsSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    setPolls(state, action: PayloadAction<PollProps[]>) {
      return action.payload;
    },
    addPoll(state, action: PayloadAction<PollProps>) {
      state.unshift(action.payload);
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