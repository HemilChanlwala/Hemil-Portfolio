export const personalInfo = {
  name: "Hemil",
  title: "IT Student | Web Developer | Tech Enthusiast",
  email: "hdchanlawla@gmail.com",
  phone: "+91 8160509843",
  location: "surat, Gujarat, India",
  resumeUrl: "/Hemil_CV_Resume.pdf",
  githubUsername: "HemilChanlwala",
  // Use a local image placed in `public/hemil.jpg` for the profile photo.
  // If that file doesn't exist, the app will fall back to a broken image icon.
  profileImage: "/hemil.jpg",
  about: `I'm an Bachelor of Science in Information Technology (B.Sc. IT) with a deep passion for building meaningful digital experiences. From crafting responsive web applications to exploring the depths of cybersecurity and cloud infrastructure, I thrive at the intersection of creativity and technology.`,
  passions: [
    "Web Development",
    "Cybersecurity",
    "ethical hacking",
    "android app development",
  ],
};

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/hemil-chanlawala-12989a275",
  github: "https://github.com/HemilChanlawala",
  instagram: "https://www.instagram.com/hemil.21/",
  email: "mailto:hdchanlawla@gmail.com",
};

export const typingSkills = [
  "React Developer",
  "Cybersecurity Enthusiast",
  "Cloud Explorer",
  "Android Developer",
  // "Open Source Contributor",
];

export const skills = [
  { name: "HTML", icon: "FaHtml5", level: 90, color: "#E34F26" },
  { name: "CSS", icon: "FaCss3Alt", level: 88, color: "#1572B6" },
  { name: "JavaScript", icon: "FaJs", level: 60, color: "#F7DF1E" },
  { name: "Bootstrap", icon: "FaBootstrap", level: 82, color: "#7952B3" },
  { name: "PHP", icon: "FaPhp", level: 75, color: "#777BB4" },
  { name: "MySQL", icon: "SiMysql", level: 78, color: "#4479A1" },
  { name: "Java", icon: "FaJava", level: 70, color: "#007396" },
  { name: "Python", icon: "FaPython", level: 70, color: "#3776AB" },
  { name: "Android", icon: "FaAndroid", level: 0, color: "#3DDC84" },
  { name: "Git & GitHub", icon: "FaGithub", level: 20, color: "#181717" },
  { name: "Linux", icon: "FaLinux", level: 10, color: "#FCC624" },
  { name: "Cybersecurity", icon: "FaShieldAlt", level: 0, color: "#06b6d4" },
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack online store with product catalog, cart management, and secure checkout using PHP and MySQL.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    github: "https://github.com/hemil/ecommerce-platform",
    live: null,
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "React-based productivity app with drag-and-drop boards, real-time updates, and dark mode support.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/hemil/task-manager",
    live: "#",
  },
  {
    id: 3,
    title: "Network Scanner Tool",
    description:
      "Python utility for network discovery, port scanning, and vulnerability assessment for educational purposes.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    technologies: ["Python", "Linux", "Cybersecurity"],
    github: "https://github.com/hemil/network-scanner",
    live: null,
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location-based forecasts, animated UI, and API integration.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    technologies: ["JavaScript", "HTML", "CSS", "API"],
    github: "https://github.com/hemil/weather-dashboard",
    live: "#",
  },
  {
    id: 5,
    title: "Android Notes App",
    description:
      "Native Android application for note-taking with categories, search, and offline storage capabilities.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    technologies: ["Java", "Android", "SQLite"],
    github: "https://github.com/hemil/android-notes",
    live: null,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "Modern responsive portfolio built with React, Tailwind CSS, and Framer Motion featuring glassmorphism design.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/HemilChanlwala/Hemil-Portfolio",
    live: "https://hemilportfolio.vercel.app/",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Google IT Support Professional",
    issuer: "Google / Coursera",
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "2024",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "JavaScript Algorithms & Data Structures",
    issuer: "freeCodeCamp",
    date: "2023",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
    credentialUrl: "#",
  },
  {
    id: 4,
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    date: "2025",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
    credentialUrl: "#",
  },
];

export const education = [
  {
    id: 1,
    degree: "BSc IT (Bachelor of Science in Information Technology)",
    institution: "Shree Ramkrishna Institute of Computer Education and Applied Sciences, Surat",
    period: "2024 — Present",
    description:
      "Focused on software engineering, database systems, computer networks, and cloud computing fundamentals.",
    // gpa: "7 CGPA",
  },
  {
    id: 2,
    degree: "Higher Secondary (commerce)",
    institution: "Citizen's School, surat",
    period: "2022 — 2024",
    description:
      "Completed Higher Secondary Education in the Commerce stream with Accountancy, Business Studies, Economics, and Statistics as core subjects.",
    // gpa: "64%",
  },
  {
    id: 3,
    degree: "Secondary School",
    institution: "Citizen's School, surat",
    period: "2009 — 2022",
    description:
      "",
    // gpa: "58%",
  },
];

export const experience = [
  {
    id: 1,
    role: "Web Development Intern",
    company: "evoDART S Pvt. Ltd.",
    period: "may 2026 — jun 2026",
    description:
      "Developed responsive web pages using HTML, CSS, and JavaScript. Collaborated with the design team to implement UI/UX improvements and optimized website performance.",
    type: "Internship",
  },
  // {
  //   id: 2,
  //   role: "Freelance Web Developer",
  //   company: "Self-Employed",
  //   period: "2023 — Present",
  //   description:
  //     "Built custom websites for local businesses in Himachal Pradesh. Managed full project lifecycle from client consultation to deployment and maintenance.",
  //   type: "Freelance",
  // },
  // {
  //   id: 3,
  //   role: "Open Source Contributor",
  //   company: "GitHub Community",
  //   period: "2023 — Present",
  //   description:
  //     "Contributed to open-source projects focused on web development tools and educational resources. Participated in Hacktoberfest and local developer meetups.",
  //   type: "Personal",
  // },
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
