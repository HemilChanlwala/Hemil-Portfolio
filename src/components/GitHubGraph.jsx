import { GitHubCalendar } from "react-github-calendar";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";
import { useTheme } from "../context/ThemeContext";

export default function GitHubGraph() {
  const { theme } = useTheme();

  const themeProps =
    theme === "dark"
      ? {
        dark: [
          "#1e293b",
          "#312e81",
          "#4338ca",
          "#6366f1",
          "#818cf8",
        ],
      }
      : {
        light: [
          "#e2e8f0",
          "#c7d2fe",
          "#a5b4fc",
          "#818cf8",
          "#6366f1",
        ],
      };

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="GitHub Activity"
          subtitle="My open source contributions and coding activity"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6 md:p-10 overflow-x-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <FaGithub className="w-6 h-6 text-indigo-400" />
            <a
              href={`https://github.com/${personalInfo.githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold dark:text-white light:text-slate-800 hover:text-indigo-400 transition-colors"
            >
              @{personalInfo.githubUsername}
            </a>
          </div>

          <div className="flex justify-center">
            <GitHubCalendar
              username={personalInfo.githubUsername}
              colorScheme={theme}
              theme={themeProps}
              fontSize={12}
              blockSize={12}
              blockMargin={4}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
