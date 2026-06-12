import { motion } from "framer-motion";
import { HiOutlineAcademicCap, HiOutlineCode, HiOutlineShieldCheck } from "react-icons/hi";
import { personalInfo } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

const passionIcons = {
  "Web Development": HiOutlineCode,
  Cybersecurity: HiOutlineShieldCheck,
  Networking: HiOutlineAcademicCap,
  "Cloud Computing": HiOutlineAcademicCap,
};

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Get to know the person behind the code"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl" />
              <p className="text-base md:text-lg leading-relaxed dark:text-slate-300 light:text-slate-600 mb-6">
                {personalInfo.about}
              </p>
              <p className="text-base md:text-lg leading-relaxed dark:text-slate-300 light:text-slate-600">
                Currently pursuing my degree in{" Shree ramkrishna institute of computer education and applied sciences, surat"} with a specialization in{"Information Technology"}
                <span className="text-indigo-400 font-semibold">
                  Information Technology
                </span>{" "}
                from {personalInfo.location}, I'm constantly learning and
                experimenting with new technologies to stay at the forefront of
                the ever-evolving tech landscape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {personalInfo.passions.map((passion, index) => {
              const Icon = passionIcons[passion] || HiOutlineCode;
              return (
                <motion.div
                  key={passion}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass rounded-xl p-6 text-center cursor-default group"
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-indigo-500/40 group-hover:to-purple-500/40 transition-colors">
                    <Icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-sm md:text-base dark:text-white light:text-slate-800">
                    {passion}
                  </h3>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
