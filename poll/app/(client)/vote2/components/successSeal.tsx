import { motion } from "framer-motion";

export default function SuccessSeal() {
  return (
    <div className="flex justify-center items-center mb-6">
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 20,
        }}
        className="relative size-20 flex items-center justify-center"
      >
        {/* Glow Halo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="absolute inset-0 rounded-full bg-cyan-400/40 blur-3xl"
        />

        {/* Modern Seal */}
        <motion.svg
          initial={{ scale: 0.85 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="relative w-full h-full drop-shadow-2xl"
          viewBox="0 0 24 24"
          fill="none"
        >
          

          <motion.circle
            cx="12"
            cy="12"
            r="11"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 200,
              damping: 16,
            }}
            className="origin-center"
            fill="url(#sealGradient)"
          />

       
          <defs>
            <linearGradient id="sealGradient" x1="0" y1="0" x2="24" y2="24">
              <stop offset="0%" stopColor="#6366f1" /> 
              <stop offset="100%" stopColor="#06b6d4" /> 
            </linearGradient>
          </defs>

          <motion.path
            d="M8 12.5L10.5 15L16 9.5"
            stroke="#4ade80" 
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              delay: 0.4,
              duration: 0.65,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
