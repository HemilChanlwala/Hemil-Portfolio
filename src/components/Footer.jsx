import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { socialLinks, personalInfo } from "../data/portfolioData";

export default function Footer() {
  const year = new Date().getFullYear();

  const socials = [
    { icon: FaGithub, href: socialLinks.github, label: "GitHub" },
    { icon: FaLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: FaInstagram, href: socialLinks.instagram, label: "Instagram" },
    { icon: HiOutlineMail, href: socialLinks.email, label: "Email" },
  ];

  return (
    <footer className="py-12 px-4 border-t dark:border-white/10 light:border-indigo-100">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center gap-4 mb-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              aria-label={social.label}
              className="glass p-3 rounded-full hover:text-indigo-400 hover:scale-110 transition-all duration-200"
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="dark:text-slate-400 light:text-slate-600 text-sm flex items-center justify-center gap-1 flex-wrap">
          © {year} {personalInfo.name}. Built with
          <FaHeart className="w-3 h-3 text-red-400 inline" />
          using React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
