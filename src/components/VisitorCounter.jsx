import { motion } from "framer-motion";
import { HiOutlineEye } from "react-icons/hi";
import { useVisitorCounter } from "../hooks/useVisitorCounter";

export default function VisitorCounter() {
  const count = useVisitorCounter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="glass hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm dark:text-slate-300 light:text-slate-600"
    >
      <HiOutlineEye className="w-4 h-4 text-indigo-400" />
      <span>
        <span className="font-semibold text-indigo-400">{count.toLocaleString()}</span>{" "}
        visitors
      </span>
    </motion.div>
  );
}
