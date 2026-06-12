import { motion } from "framer-motion";
import { HiOutlineBriefcase } from "react-icons/hi";
import { experience } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const typeColors = {
  Internship: "from-blue-500/20 to-cyan-500/20 text-cyan-400 border-cyan-500/20",
  Freelance: "from-purple-500/20 to-pink-500/20 text-purple-400 border-purple-500/20",
  Personal: "from-indigo-500/20 to-violet-500/20 text-indigo-400 border-indigo-500/20",
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Internships, freelance work, and personal projects"
        />

        <div className="space-y-8">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ x: 8 }}
              className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full" />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-500/20 group-hover:bg-indigo-500/30 transition-colors">
                    <HiOutlineBriefcase className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="section-title text-xl font-bold dark:text-white light:text-slate-800">
                      {item.role}
                    </h3>
                    <p className="text-indigo-400 font-medium">{item.company}</p>
                  </div>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-2">
                  <span className="text-sm dark:text-slate-400 light:text-slate-600">
                    {item.period}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs rounded-full border bg-gradient-to-r ${typeColors[item.type]}`}
                  >
                    {item.type}
                  </span>
                </div>
              </div>

              <p className="dark:text-slate-300 light:text-slate-600 leading-relaxed pl-0 sm:pl-16">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
