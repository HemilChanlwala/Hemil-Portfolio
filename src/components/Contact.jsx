import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { personalInfo, socialLinks } from "../data/portfolioData";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  const contactInfo = [
    { icon: HiOutlineMail, label: "Email", value: personalInfo.email, href: socialLinks.email },
    { icon: HiOutlinePhone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, "")}` },
    { icon: HiOutlineLocationMarker, label: "Location", value: personalInfo.location, href: null },
  ];

  const socials = [
    { icon: FaLinkedin, label: "LinkedIn", href: socialLinks.linkedin, color: "hover:text-blue-400" },
    { icon: FaGithub, label: "GitHub", href: socialLinks.github, color: "hover:text-white" },
    { icon: FaInstagram, label: "Instagram", href: socialLinks.instagram, color: "hover:text-pink-400" },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Contact"
          subtitle="Let's connect and build something amazing together"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4 glass rounded-xl p-5">
                <div className="p-3 rounded-lg bg-indigo-500/20">
                  <item.icon className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <p className="text-sm dark:text-slate-400 light:text-slate-600">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium dark:text-white light:text-slate-800 hover:text-indigo-400 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium dark:text-white light:text-slate-800">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex gap-4 pt-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`glass p-4 rounded-xl transition-all hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl p-8 space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2 dark:text-slate-300 light:text-slate-700">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl dark:bg-slate-800/50 light:bg-white/80 border dark:border-white/10 light:border-indigo-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all dark:text-white light:text-slate-800"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2 dark:text-slate-300 light:text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl dark:bg-slate-800/50 light:bg-white/80 border dark:border-white/10 light:border-indigo-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all dark:text-white light:text-slate-800"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2 dark:text-slate-300 light:text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl dark:bg-slate-800/50 light:bg-white/80 border dark:border-white/10 light:border-indigo-200 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none dark:text-white light:text-slate-800"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-shadow"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
