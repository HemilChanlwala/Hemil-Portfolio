import { motion } from "framer-motion";
import { HiOutlineExternalLink, HiOutlineBadgeCheck } from "react-icons/hi";
import { certifications } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Certifications"
          subtitle="Professional credentials and achievements"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass rounded-2xl overflow-hidden group"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3">
                  <HiOutlineBadgeCheck className="w-8 h-8 text-indigo-400 drop-shadow-lg" />
                </div>
              </div>

              <div className="p-5">
                <span className="text-xs text-indigo-400 font-medium">{cert.date}</span>
                <h3 className="font-bold mt-1 mb-1 dark:text-white light:text-slate-800 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm dark:text-slate-400 light:text-slate-600 mb-4">
                  {cert.issuer}
                </p>
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
                >
                  View Certificate
                  <HiOutlineExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
