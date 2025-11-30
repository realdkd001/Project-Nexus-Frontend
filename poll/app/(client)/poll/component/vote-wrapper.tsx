"use client"
import { FiCheckCircle } from "react-icons/fi";
import { FiShare2 } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PollProps } from "@/interface";
import axios from "axios";


function VoteWrapper({ data }: {data: PollProps}) {
   const [selected, setSelected] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);

  const handleVote = async () => {
    if (!selected) return;
    const poll = await axios.get(`http://localhost:4000/polls/${data.id}`);
    let updateVote = poll.data.votes ? Number(poll.data.votes[selected]) + 1 : 1;
    if (isNaN(updateVote)) updateVote = 1;
    await axios.patch(`http://localhost:4000/polls/${data.id}`, {
        votes: {
            ...poll.data.votes,
          [selected]: updateVote
        }
    });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-gray-50 dark:bg-background-dark">
      <main className="flex  w-full flex-1 justify-center  sm:py-8 sm:px-6 lg:px-8">
        <div className="flex flex-1 w-full   max-w-3xl flex-col gap-6">

          {/* Poll Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col h-full flex-1 overflow-hidden sm:rounded-xl border border-gray-200 bg-white dark:bg-background-dark/80 dark:border-gray-800 shadow-sm"
          >

            {/* Header Image */}
            <div
              className="bg-cover bg-center flex flex-col rounded-b-2xl sm:rounded-none justify-end pt-[66px] sm:pt-[132px]"
              style={{
                backgroundImage:
                  `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0)),
                  url("https://images.unsplash.com/photo-1517816428104-797678c7cf0c?w=1200")`
              }}
            >
              <div className="flex flex-col gap-1 p-6">
                <h1 className="text-white text-2xl md:text-3xl font-bold">
                    {data.title}
                </h1>
                <p className="text-white/90 text-base">
                  Select one option to cast your vote.
                </p>
              </div>
            </div>

            {/* Options */}
            <div className="flex flex-col flex-1 gap-3 p-6">
              {Object.keys(data.votes ?? {}).map((label) => (
                <PollOption
                  key={label}
                  label={label}
                  selected={selected}
                  onSelect={() => setSelected(label)}
                />
              ))}
            </div>

            {/* Buttons */}
            <div className="border-t border-gray-200 dark:border-gray-800 p-6">
              <div className="flex flex-col gap-3 sm:flex-row">

                {/* Vote Button */}
                <button
                  onClick={handleVote}
                  disabled={!selected}
                  className={`flex sm:flex-1 items-center justify-center h-11 px-5 rounded-lg font-semibold transition-all duration-150 ${
                    selected
                      ? "bg-primary text-white hover:bg-primary/90"
                      : "bg-primary/40 text-white/50 cursor-not-allowed"
                  }`}
                >
                  Vote
                </button>

                {/* Share Button */}
                <button
                  className="flex items-center justify-center gap-2 h-11 px-5 rounded-lg font-semibold
                  bg-gray-100 text-gray-900 hover:bg-gray-200
                  dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700
                  transition-all duration-150"
                >
                  <FiShare2 className="text-lg" />
                  Share
                </button>

              </div>
            </div>
          </motion.div>

          {/* Toast */}
          <AnimatePresence>
            {showToast && <SuccessToast />}
          </AnimatePresence>

        </div>
      </main>
    </div>
  );
}


function PollOption({
  label,
  selected,
  onSelect,
}: {
  label: string;
  selected: string | null;
  onSelect: () => void;
}) {
  return (
    <motion.label
      whileTap={{ scale: 0.98 }}
      className={`group flex cursor-pointer items-center gap-4 rounded-lg border-2 p-4 transition
      ${
        selected === label
          ? "border-primary"
          : "border-gray-300 dark:border-gray-700"
      }`}
    >
      <input
        type="radio"
        name="poll-framework"
        checked={selected === label}
        onChange={onSelect}
        className="h-5 w-5 appearance-none rounded-full border-2 border-gray-300
        checked:border-primary checked:bg-primary"
      />
      <div className="flex grow flex-col">
        <p className="text-gray-900 dark:text-gray-200 font-medium">{label}</p>
      </div>
    </motion.label>
  );
}


function SuccessToast() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ duration: 0.35 }}
      className="fixed bottom-8 right-8 flex items-center gap-3 bg-green-600 p-4 rounded-lg text-white shadow-lg"
    >
      <FiCheckCircle className="text-2xl" />
      <p className="text-sm font-medium">Your vote has been cast successfully!</p>
    </motion.div>)
}




export default VoteWrapper