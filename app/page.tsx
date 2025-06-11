"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Download, ExternalLink, Github, Menu, X, Send } from "lucide-react"

// Add type annotations for curriculumData
type CurriculumItem = {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string | string[];
  logo: string;
  achievements: string[];
};

type CurriculumData = {
  education: CurriculumItem[];
  work: CurriculumItem[];
};

// Add type annotations for skills
type Skill = {
  name: string;
  icon: string;
};

type Skills = {
  frontend: Skill[];
  backend: Skill[];
  tools: Skill[];
};

export default function Portfolio() {
  const [typewriterText, setTypewriterText] = useState("")
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [showCursor, setShowCursor] = useState(true)

  const typewriterOptions = [
    "create websites",
    "maintain IT products",
    "manage databases",
    "fix coding problems",
    "design user interfaces",
    "optimize performance",
    "build mobile apps",
    "automate workflows",
  ]

  useEffect(() => {
    const currentService = typewriterOptions[currentServiceIndex]

    if (isTyping) {
      if (typewriterText.length < currentService.length) {
        const timeout = setTimeout(() => {
          setTypewriterText(currentService.slice(0, typewriterText.length + 1))
        }, 50)
        return () => clearTimeout(timeout)
      } else {
        // Pause before deleting - much shorter
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 300)
        return () => clearTimeout(timeout)
      }
    } else {
      if (typewriterText.length > 0) {
        const timeout = setTimeout(() => {
          setTypewriterText(typewriterText.slice(0, -1))
        }, 30)
        return () => clearTimeout(timeout)
      } else {
        // Move to next service and font
        setCurrentServiceIndex((prev) => (prev + 1) % typewriterOptions.length)
        setIsTyping(true)
      }
    }
  }, [typewriterText, currentServiceIndex, isTyping, typewriterOptions])

  // Cursor blinking effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSkillCategory, setActiveSkillCategory] = useState("all")
  const [activeProjectFilter, setActiveProjectFilter] = useState("all")
  const [activeCurriculumTab, setActiveCurriculumTab] = useState<keyof CurriculumData>("education")

  const skills: Skills = {
    frontend: [
      { name: "React", icon: "⚛️" },
      { name: "JavaScript", icon: "🟨" },
      { name: "TypeScript", icon: "🔷" },
      { name: "HTML5", icon: "🧡" },
      { name: "CSS3", icon: "🎨" },
      { name: "Vue.js", icon: "💚" },
    ],
    backend: [
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "MongoDB", icon: "🍃" },
    ],
    tools: [
      { name: "Git", icon: "📝" },
      { name: "Docker", icon: "🐳" },
      { name: "AWS", icon: "☁️" },
      { name: "Figma", icon: "🎯" },
    ],
  }

  const projects = [
    {
      id: 1,
      title: "Dog App (Winner)",
      description: "A web app for dog adoption and care, built with a public API during Outstem's interview. Winning project led to my job offer.",
      image: "/trophy.png",
      category: "app",
      technologies: ["React Native", "Expo", "Firebase"],
      github: "https://github.com/linamoussadek/dog-app",
      demo: "#",
    },
    {
      id: 2,
      title: "Sparksite",
      description: "Sparksite (Founder & CEO): Founded a tech platform that uses proprietary AI to reverse-engineer business logos, identify businesses without websites, and auto-generate professional sites with a single click. Enables users to earn commissions by reselling these AI-built websites.",
      image: "/sparksite-logo.png",
      category: "web",
      technologies: ["Next.js", "Tailwind", "TypeScript"],
      github: "https://github.com/linamoussadek/sparksite",
      demo: "#",
    },
    {
      id: 4,
      title: "Blender Room (3D)",
      description: "A 3D interactive room built in Blender and integrated on the web.",
      image: "/blender-room.png",
      category: "design",
      technologies: ["Blender", "Three.js"],
      github: "https://github.com/linamoussadek/blender-room",
      demo: "#",
    },
    {
      id: 5,
      title: "This Website",
      description: "My personal portfolio, built with Next.js, Tailwind, and Radix UI.",
      image: "/home-img.png",
      category: "web",
      technologies: ["Next.js", "Tailwind", "Radix UI"],
      github: "https://github.com/linamoussadek/my-own-website",
      demo: "#",
    },
    {
      id: 6,
      title: "Coded CV",
      description: "An interactive CV with theme toggling and PDF export functionality.",
      image: "/img/img_3.png",
      category: "web",
      technologies: ["JavaScript", "CSS3", "HTML5"],
      github: "https://github.com/linamoussadek/Coding-my-CV",
      demo: "https://linamoussadek.github.io/Coding-my-CV/",
    },
  ]

  const curriculumData: CurriculumData = {
    education: [
      {
        id: 1,
        title: "BSc in Computer Science (Co-op)",
        institution: "University of Ottawa",
        period: "2021 - Dec 2025 (expected)",
        description: [
          "4th year Computer Science student at uOttawa."
        ],
        logo: "/uottawa-logo.png",
        achievements: [
          "Dean's List Merit (Winter 2025)",
          "Francophonie Scholarship",
          "Graduating Dec 2025, seeking full-time roles for Jan 2026"
        ],
      },
      {
        id: 0,
        title: "Baccalauréat général, Mathematics & Biology",
        institution: "Lycée Lyautey au Maroc",
        period: "Sep 2019 - Jun 2021",
        description: "",
        logo: "/lycee-lyautey-logo.png",
        achievements: [
          "Highest Distinction (mention Très Bien)",
          "Top grade average in French, History, Philosophy"
        ],
      },
    ],
    work: [
      {
        id: 1,
        title: "Deep Packet Inspection QA (Co-op)",
        institution: "Nokia",
        period: "May 2025 - Aug 2025",
        description: "• Network analysis using TShark via Linux CLI identifying routing anomalies\n• Automate TCP Seq/Ack misalignment fixes using Scapy\n• Maintained and improved full stack of Nokia's internal Order Tracking System",
        logo: "/nokia-logo.png",
        achievements: [],
      },
      {
        id: 2,
        title: "Deep Packet Inspection QA (Co-op)",
        institution: "Nokia",
        period: "Sep 2024 - Dec 2024",
        description: "• Network analysis using TShark via Linux CLI identifying routing anomalies\n• Automate TCP Seq/Ack misalignment fixes using Scapy\n• Maintained and improved full stack of Nokia's internal Order Tracking System",
        logo: "/nokia-logo.png",
        achievements: [],
      },
      {
        id: 3,
        title: "Software Developer (Co-op)",
        institution: "Searidge Technologies",
        period: "Jan 2024 - Apr 2024",
        description: "• Developed backend for real-time streaming platform using Node.js\n• Managed H.264 to WebRTC conversion using a GStreamer pipeline\n• Developed a complex, dynamic Gantt chart using React and D3, achieving pixel-perfect accuracy from the initial mockup\n• Impact: Gantt Chart currently used in Hong Kong airport operations",
        logo: "/searidge-logo.jpg",
        achievements: [],
      },
      {
        id: 4,
        title: "Full Stack Engineer (Co-op)",
        institution: "Outstem",
        period: "May 2023 - Aug 2023",
        description: "• Translated UI mockups into pixel-perfect Angular web pages\n• Handled server-side endpoints & SQL database changes for troubleshooting\n• Provided accurate English-to-French translations for the website's French version",
        logo: "/outstem_logo.png",
        achievements: [],
      },
    ],
  }

  // Update the filteredSkills and filteredProjects to use the correct types
  const filteredSkills: Skill[] =
    activeSkillCategory === "all" ? Object.values(skills).flat() : skills[activeSkillCategory as keyof Skills] || []

  const filteredProjects =
    activeProjectFilter === "all" ? projects : projects.filter((project) => project.category === activeProjectFilter)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "my-curriculum", "personal-projects", "room", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  // --- Chatbot State and Logic ---
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { role: 'system', content: "You are a helpful assistant for Lina Moussadek's portfolio website. You can answer questions about Lina's skills, experience, projects, and help visitors understand her work better. Keep responses concise and professional." },
    { role: 'assistant', content: "Hi! I'm Lina's AI assistant. How can I help you today?" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleChatbot = () => setIsChatbotOpen((open) => !open);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const newMessages = [...chatMessages, { role: 'user', content: chatInput }];
    setChatMessages(newMessages);
    setChatInput("");
    setIsLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages.slice(-6) })
      });
      const data = await res.json();
      setChatMessages([...newMessages, { role: 'assistant', content: data.result }]);
    } catch {
      setChatMessages([...newMessages, { role: 'assistant', content: "Sorry, something went wrong. Please try again." }]);
    }
    setIsLoading(false);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[var(--mauve)] to-[var(--mauve-dark)] bg-clip-text text-transparent"
            >
              Lina Moussadek
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-6 xl:space-x-8">
              {["home", "about", "skills", "my-curriculum", "personal-projects", "room", "certifications", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize transition-colors text-sm xl:text-base ${
                      activeSection === section
                        ? "text-[var(--mauve)] font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:text-[var(--mauve)]"
                    }`}
                  >
                    {section}
                  </button>
                ),
              )}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? "☀️" : "🌙"}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
            >
              <div className="px-4 py-2 space-y-2 max-h-96 overflow-y-auto">
                {["home", "about", "skills", "my-curriculum", "personal-projects", "room", "certifications", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block w-full text-left px-3 py-2 capitalize text-gray-700 dark:text-gray-300 hover:text-[var(--mauve)] hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors"
                    >
                      {section}
                    </button>
                  ),
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--pink-light)] to-white dark:from-gray-900 dark:to-gray-800 px-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6">
                Hi, I'm{" "}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-[var(--mauve)]"
                >
                  Lina
                </motion.span>
                <motion.span
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{ duration: 1.5, repeat: 1, repeatDelay: 1 }}
                  className="inline-block ml-2 origin-bottom-right"
                >
                  👋
                </motion.span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Frontend Developer & UI/UX Designer passionate about creating beautiful, functional web experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("portfolio")}
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[var(--mauve)] text-white rounded-full font-medium hover:bg-[var(--mauve-dark)] transition-colors shadow-lg"
                >
                  View My Work
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/cv"
                  target="_blank"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[var(--mauve)] text-[var(--mauve)] rounded-full font-medium hover:bg-[var(--mauve)] hover:text-white transition-colors flex items-center justify-center gap-2"
                  rel="noreferrer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  View CV
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/pdf/Lina-Moussadek-CV.pdf"
                  download
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-400 text-gray-600 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download CV
                </motion.a>
              </div>
            </motion.div>

            {/* Hero Section Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-first lg:order-last -mt-8"
            >
              <div className="relative w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] lg:w-[32rem] lg:h-[32rem] mx-auto">
                <img
                  src="home-img.png"
                  alt="Lina Moussadek"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              My journey and passion for development
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I was born in Casablanca, Morocco, where I attended a French school. Fond of interior design, I always
                wanted to become an architect. It's only in high school that I started leaning towards a more
                challenging, and fast-paced career.
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Computer Science formed the best combination between my artistic aspirations and my new career
                perspective. As of now, I aim at specializing in front-end development, creating beautiful and
                functional user experiences.
              </p>

              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {[
                  { icon: "🏆", title: "Experience", value: "2+ Years" },
                  { icon: "🌍", title: "Languages", value: "3+ Spoken" },
                  { icon: "💻", title: "Projects", value: "5+ Completed" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-3 sm:p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                  >
                    <div className="text-xl sm:text-2xl mb-2">{stat.icon}</div>
                    <div className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">{stat.title}</div>
                    <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-first lg:order-last"
            >
              <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
                <div className="absolute inset-0 bg-[var(--mauve)] rounded-2xl transform rotate-6"></div>
                <img
                  src="/about-me.jpg"
                  alt="About Lina"
                  className="relative w-full h-80 sm:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Quote Section */}
      <section className="py-16 sm:py-24 bg-[var(--pink-light)] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-96 h-96 bg-[var(--mauve)] opacity-10 rounded-full blur-3xl absolute -top-32 -left-32"></div>
          <div className="w-80 h-80 bg-[var(--mauve-dark)] opacity-10 rounded-full blur-2xl absolute bottom-0 right-0"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white mb-8 flex flex-col items-center justify-center">
              <span className="block text-4xl sm:text-5xl font-bold tracking-wide mb-0">
                <span className="text-gray-900 dark:text-white">I can </span>
                <span className="inline text-[var(--mauve)] font-bold">{typewriterText}{typewriterText.length === typewriterOptions[currentServiceIndex].length ? <span className="text-[var(--mauve)] font-bold">.</span> : null}{typewriterText.length === typewriterOptions[currentServiceIndex].length ? <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity ml-1`}>|</span> : <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity ml-1`}>|</span>}</span>
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mt-6">
              From concept to deployment, I bring ideas to life with modern technologies and creative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section - More Concise */}
      <section id="skills" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">My technical expertise</p>
          </motion.div>

          {/* Skill Categories */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {["all", "frontend", "backend", "tools"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveSkillCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
                  activeSkillCategory === category
                    ? "bg-[var(--mauve)] text-white shadow-lg"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Auto-scrolling Skills Container */}
          <div className="relative overflow-hidden">
            <div className="skills-track">
              <motion.div 
                layout 
                className="flex gap-4 sm:gap-6 px-4"
              >
                <AnimatePresence>
                  {filteredSkills.map((skill: Skill, index: number) => (
                    <motion.div
                      key={skill.name}
                      layout
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex-shrink-0 w-48 sm:w-56 bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-center">{skill.icon}</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-center text-sm sm:text-base">
                        {skill.name}
                      </h3>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
              {/* Duplicate set for seamless scrolling */}
              <motion.div 
                layout 
                className="flex gap-4 sm:gap-6 px-4"
              >
                <AnimatePresence>
                  {filteredSkills.map((skill: Skill, index: number) => (
                    <motion.div
                      key={`${skill.name}-duplicate`}
                      layout
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="flex-shrink-0 w-48 sm:w-56 bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="text-2xl sm:text-3xl mb-2 sm:mb-3 text-center">{skill.icon}</div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-center text-sm sm:text-base">
                        {skill.name}
                      </h3>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
            
            {/* Gradient Overlays for Scroll Indication */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Chatbot Terminal Section */}
      <section id="chatbot" className="py-20 sm:py-28 bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">Ask Lina's AI Assistant</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">Interact with Lina's portfolio chatbot in a Mac-style terminal.</p>
          </div>
          <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-hidden relative">
            {/* Terminal Header */}
            <div className="flex items-center px-6 py-3 bg-gray-100/80 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2 shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2 shadow-sm"></span>
              <span className="w-3 h-3 rounded-full bg-green-500 mr-4 shadow-sm"></span>
              <span className="font-mono text-base text-gray-500 dark:text-gray-300">Lina's AI Terminal</span>
            </div>
            {/* Terminal Body */}
            <div className="h-[34rem] overflow-y-auto px-8 py-6 font-mono text-base space-y-4 bg-white dark:bg-gray-900 transition-colors" id="chatbot-terminal-body">
              {chatMessages.filter(m => m.role !== 'system').map((msg, i) => (
                <div key={i} className={msg.role === 'assistant' ? 'text-[var(--mauve)]' : 'text-gray-900 dark:text-white'}>
                  <span className="block whitespace-pre-line">{msg.content}</span>
                </div>
              ))}
              {isLoading && <div className="text-[var(--mauve)] animate-pulse">LinaBot is typing...</div>}
            </div>
            {/* Terminal Input */}
            <form onSubmit={handleChatSubmit} className="flex items-center gap-3 px-8 py-5 bg-gray-100/80 dark:bg-gray-800/80 border-t border-gray-200 dark:border-gray-700">
              <input
                type="text"
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 rounded-full px-6 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--mauve)] placeholder-gray-400 dark:placeholder-gray-500"
                placeholder="Type your question..."
                disabled={isLoading}
                autoFocus
              />
              <button
                type="submit"
                className="bg-[var(--mauve)] text-white px-7 py-3 rounded-full font-semibold hover:bg-[var(--mauve-dark)] transition-colors disabled:opacity-50 text-base"
                disabled={isLoading || !chatInput.trim()}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="personal-projects" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Personal Projects
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Recent projects and work I'm proud of</p>
          </motion.div>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {["all", "web", "design", "app"].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveProjectFilter(filter)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
                  activeProjectFilter === filter
                    ? "bg-[var(--mauve)] text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="relative group">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                        <a
                          href={project.github}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <Github size={20} />
                        </a>
                        <a
                          href={project.demo}
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="my-curriculum" className="py-16 sm:py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Curriculum
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Education and professional experience timeline
            </p>
          </motion.div>

          {/* Curriculum Toggle */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
              {["education", "work"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveCurriculumTab(tab as keyof CurriculumData)}
                  className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium transition-all text-sm sm:text-base ${
                    activeCurriculumTab === tab
                      ? "bg-[var(--mauve)] text-white shadow-lg"
                      : "text-gray-700 dark:text-gray-300 hover:text-[var(--mauve)]"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[var(--mauve)] rounded-full hidden sm:block"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCurriculumTab}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="space-y-8 sm:space-y-12"
              >
                {curriculumData[activeCurriculumTab as keyof CurriculumData].map((item: CurriculumItem, index: number) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`relative flex items-center ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[var(--mauve)] rounded-full border-4 border-white dark:border-gray-900 z-10 hidden sm:block"></div>

                    {/* Content Card */}
                    <div
                      className={`w-full sm:w-6/12 ${index % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"}`}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="bg-gray-50 dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
                      >
                        {/* Logo Placeholder */}
                        <div className="flex items-center gap-4 mb-4">
                          {item.logo ? (
                            <img src={item.logo} alt={`${item.institution} logo`} className="w-12 h-12 sm:w-16 sm:h-16 object-contain" />
                          ) : (
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[var(--mauve)] rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-lg">
                              {item.institution.charAt(0)}
                            </div>
                          )}
                          <div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                              {item.title}
                            </h3>
                            <p className="text-[var(--mauve)] font-medium text-sm sm:text-base">{item.institution}</p>
                          </div>
                        </div>

                        <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-3">{item.period}</div>
                        {typeof item.description === 'string' ? (
                          <div className="mb-4 space-y-2">
                            {item.description.split('\n').map((line, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <span className="w-2 h-2 mt-2 bg-[var(--mauve)] rounded-full flex-shrink-0 inline-block"></span>
                                <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{line.replace(/^•\s*/, "")}</span>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                        )}

                        {/* Achievements */}
                        <div className="space-y-2">
                          {item.achievements.map((achievement: string, idx: number) => (
                            <div key={idx} className="flex items-center gap-2">
                              <span className="w-2 h-2 bg-[var(--mauve)] rounded-full flex-shrink-0 inline-block"></span>
                              <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* My Room in 3D Section */}
      <section id="room" className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              My Room in 3D
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Explore my workspace in an interactive 3D environment
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video flex items-center justify-center min-h-[300px] sm:min-h-[500px] p-4">
              <div className="text-center">
                <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[var(--mauve)] rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl">🏠</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  3D Room Coming Soon
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-md mx-auto mb-6 sm:mb-8">
                  This space will feature an interactive 3D model of my workspace where you can explore my setup, see my
                  equipment, and get a feel for my creative environment.
                </p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  <div className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    🖥️ Workstation
                  </div>
                  <div className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    📚 Library
                  </div>
                  <div className="px-3 sm:px-4 py-1 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    🎨 Creative Space
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Updated */}
      <section
        id="contact"
        className="py-16 sm:py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
              Looking for a young, dedicated developer for your projects? I'm here.
            </p>
          </motion.div>

          <div className="relative flex justify-center items-end min-h-[32rem]">
            {/* Pink Rectangle Background */}
            <div className="absolute inset-0 bg-pink-100 rounded-2xl w-full h-full z-0 px-8 sm:px-12 lg:px-16 pt-12 contact-pink-bg" />
            {/* Contact Image - absolutely positioned bottom left */}
            <img
              src="/contact-picture.png"
              alt="Lina Moussadek - Professional"
              className="absolute left-20 bottom-0 w-[18rem] h-[24rem] sm:w-[24rem] sm:h-[32rem] object-contain z-50"
            />
            {/* Contact Form - on the right, above the pink rectangle */}
            <div className="relative z-20 ml-auto bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-xl shadow-lg w-full max-w-xl flex flex-col justify-center mr-8 lg:mr-16 my-8">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-8">
                Let's Start a Project
              </h3>
              <form onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const data = {
                  name: formData.get('name'),
                  email: formData.get('email'),
                  message: formData.get('message'),
                };

                try {
                  const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  });

                  if (response.ok) {
                    alert('Message sent successfully!');
                    e.currentTarget.reset();
                  } else {
                    throw new Error('Failed to send message');
                  }
                } catch (error) {
                  alert('Failed to send message. Please try again.');
                }
              }} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-[var(--mauve)] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-[var(--mauve)] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-[var(--mauve)] focus:border-transparent"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[var(--mauve)] text-white py-3 px-6 rounded-lg font-medium hover:bg-[var(--mauve-dark)] transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 glass bg-[var(--mauve-light)]/80 border-t border-[var(--mauve)] shadow-lg text-[var(--mauve-darker)] dark:bg-[#1a1020]/80 dark:text-[var(--mauve-light)] dark:border-[var(--mauve-darker)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[var(--mauve-darker)] dark:text-[var(--mauve-light)] text-sm sm:text-base font-medium drop-shadow-sm">
              © 2024 Lina Moussadek. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChatbot}
          className="bg-gray-900 text-white rounded-full shadow-lg p-4 flex items-center justify-center hover:bg-[var(--mauve)] transition-colors focus:outline-none"
          aria-label={isChatbotOpen ? "Close Chatbot" : "Open Chatbot"}
        >
          {isChatbotOpen ? (
            <span className="text-xl">×</span>
          ) : (
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect width="24" height="24" rx="12" fill="#fff"/><path d="M7 8h10M7 12h10M7 16h6" stroke="#BF7DA7" strokeWidth="2" strokeLinecap="round"/></svg>
          )}
        </button>
      </div>
    </div>
  )
}
