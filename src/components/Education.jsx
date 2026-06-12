import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { education } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Education"
          subtitle="My academic journey in technology"
        />

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 md:-translate-x-1/2" />

          {education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative flex items-center mb-12 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />

              <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 dark:border-slate-900 light:border-white md:-translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-indigo-500 rounded-full animate-ping opacity-20" />
              </div>

              <div className="ml-16 md:ml-0 md:w-1/2 md:px-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-indigo-500/20">
                      <HiOutlineAcademicCap className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div>
                      <span className="text-sm text-indigo-400 font-medium">
                        {item.period}
                      </span>
                      <h3 className="font-bold dark:text-white light:text-slate-800">
                        {item.degree}
                      </h3>
                      <p className="text-sm dark:text-slate-400 light:text-slate-600">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm dark:text-slate-300 light:text-slate-600 mb-2">
                    {item.description}
                  </p>
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.gpa}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
