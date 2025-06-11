"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, Mail, Phone, MapPin, Github, Linkedin, ArrowLeft } from "lucide-react"
import * as Popover from '@radix-ui/react-popover'

type Theme = 'pink' | 'dark' | 'light'

export default function CVPage() {
  const [isDownloading, setIsDownloading] = useState(false)
  const [theme, setTheme] = useState<Theme>('pink')
  const [selectedPdfVersion, setSelectedPdfVersion] = useState("design")

  useEffect(() => {
    // Remove all theme classes
    document.documentElement.classList.remove('dark', 'light')
    // Add the selected theme class
    if (theme !== 'pink') {
      document.documentElement.classList.add(theme)
    }
  }, [theme])

  const handleDownload = () => {
    setIsDownloading(true)
    // Trigger print dialog for PDF generation
    window.print()
    setTimeout(() => setIsDownloading(false), 1000)
  }

  const handleBack = () => {
    window.close()
    // Fallback if window.close() doesn't work
    window.history.back()
  }

  // 1. Create an array of work experiences (with all the relevant data for each entry)
  const workExperiences = [
    {
      logo: "/nokia-logo.png",
      alt: "Nokia logo",
      title: "Deep Packet Inspection QA (Co-op)",
      company: "Nokia",
      companyClass: "text-[var(--mauve)] font-medium print:text-sm",
      location: "Kanata, Ontario, Canada · Hybrid",
      period: "May 2025 - Aug 2025",
      bullets: [
        "Performed traffic analysis using Linux CLI to validate application signatures and ensure precise classification",
        "Diagnosed misclassified traffic and filed critical DTS reports, improving detection accuracy",
        "Led full stack of Nokia's internal order tracking tool, proposing and delivering high-impact system improvements",
      ],
    },
    {
      logo: "/nokia-logo.png",
      alt: "Nokia logo",
      title: "Deep Packet Inspection QA (Co-op)",
      company: "Nokia",
      companyClass: "text-[var(--mauve)] font-medium print:text-sm",
      location: "Kanata, Ontario, Canada · Hybrid",
      period: "Sep 2024 - Dec 2024",
      bullets: [
        "Investigated routing anomalies via TShark and Linux CLI, supporting advanced network diagnostics",
        "Automated TCP sequence/ack misalignment fixes using Scapy, streamlining QA workflows",
        "Maintained backend and frontend of Nokia's internal order tracking system, improving usability and stability",
      ],
    },
    {
      logo: "/searidge-logo.jpg",
      alt: "Searidge logo",
      title: "Software Developer (Co-op)",
      company: "Searidge Technologies",
      companyClass: "text-[var(--mauve)] font-medium print:text-sm",
      location: "Ottawa, Ontario, Canada · Hybrid",
      period: "Jan 2024 - Apr 2024",
      bullets: [
        "Engineered backend services for real-time video streaming using Node.js and GStreamer (H.264 to WebRTC)",
        "Designed and implemented a complex Gantt chart in React and D3—now deployed at Hong Kong and JFK Airports for live operations management",
      ],
    },
    {
      logo: "/outstem_logo.png",
      alt: "Outstem logo",
      title: "Full Stack Engineer (Co-op)",
      company: "Outstem",
      companyClass: "text-[var(--mauve)] font-medium print:text-sm",
      location: "Ottawa, ON · Remote",
      period: "May 2023 - Aug 2023",
      bullets: [
        "Developed pixel-perfect Angular components from design mockups, enhancing UX consistency",
        "Extended backend APIs and modified SQL schemas for bug resolution and feature delivery",
        "Delivered accurate English–French translations to support full product localization",
      ],
    },
  ]

  const getThemeButtonClass = (buttonTheme: Theme) => {
    const baseClass = "w-6 h-6 rounded-full cursor-pointer transition-all duration-200"
    const activeClass = "ring-2 ring-offset-2 ring-offset-white"
    
    switch (buttonTheme) {
      case 'pink':
        return `${baseClass} bg-[var(--mauve)] ${theme === 'pink' ? activeClass : ''}`
      case 'dark':
        return `${baseClass} bg-gray-800 ${theme === 'dark' ? activeClass : ''}`
      case 'light':
        return `${baseClass} bg-gray-400 ${theme === 'light' ? activeClass : ''}`
    }
  }

  return (
    <>
      <style jsx global>{`
        :root {
          --mauve: #BF7DA7;
          --mauve-light: #f3e3ef;
          --mauve-dark: #8c4e7a;
        }
        
        .light {
          --mauve: #4b5563;
          --mauve-light: #e5e7eb;
          --mauve-dark: #374151;
        }
      `}</style>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-950 light:bg-gray-100 transition-colors duration-200">
        {/* Print-hidden header with controls */}
        <div className="print:hidden bg-gradient-to-r from-[var(--mauve)] to-[var(--mauve-light)] dark:from-gray-800 dark:to-gray-700 light:from-gray-300 light:to-gray-200 p-4 shadow-lg">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Portfolio
            </button>
            <h1 className="text-xl font-bold text-white">Lina Moussadek - CV</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button onClick={() => setTheme('pink')} className={getThemeButtonClass('pink')} aria-label="Pink theme" />
                <button onClick={() => setTheme('dark')} className={getThemeButtonClass('dark')} aria-label="Dark theme" />
                <button onClick={() => setTheme('light')} className={getThemeButtonClass('light')} aria-label="Light theme" />
              </div>
              <Popover.Root>
                <Popover.Trigger asChild>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--mauve)] text-white rounded-lg hover:bg-[var(--mauve-dark)] transition-colors">
                    <Download size={20} />
                    Download PDF
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content
                    className="z-50 w-56 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-2 shadow-lg animate-in fade-in-0 zoom-in-95"
                    sideOffset={5}
                  >
                    <div className="flex flex-col gap-1">
                      <a
                        href="/Lina-Moussadek-CV.pdf"
                        download
                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        onClick={() => setSelectedPdfVersion("design")}
                      >
                        <Download size={16} />
                        Design Version
                      </a>
                      <a
                        href="/Lina-Moussadek-LatEx.pdf"
                        download
                        className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
                        onClick={() => setSelectedPdfVersion("latex")}
                      >
                        <Download size={16} />
                        LaTeX Version
                      </a>
                    </div>
                    <Popover.Arrow className="fill-white dark:fill-gray-800" />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </div>
          </div>
        </div>

        {/* CV Content */}
        <div className="max-w-5xl mx-auto bg-white dark:bg-gray-900 light:bg-white shadow-2xl print:shadow-none print:max-w-none transition-colors duration-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4 sm:p-6 md:p-8 print:p-4">
            {/* Left Column */}
            <div className="md:col-span-1 flex flex-col h-full justify-between items-center md:items-start border-r-0 md:border-r border-gray-200 dark:border-gray-700 light:border-gray-200 pr-0 md:pr-6 print:border-none">
              {/* Profile Photo */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-[3px] border-[var(--mauve)] dark:border-gray-600 light:border-gray-400 bg-gray-200 dark:bg-gray-700 light:bg-gray-100 mb-4 mx-auto relative overflow-hidden flex items-center justify-center">
                <img src="/cv-img.png" alt="Lina Moussadek" className="w-full h-full object-cover rounded-full" />
              </div>
              {/* Name & Title */}
              <h1 className="text-2xl text-gray-900 dark:text-white light:text-gray-900 text-center w-full mb-1 tracking-wider">
                <span className="font-normal">LINA</span> <span className="font-bold">MOUSSADEK</span>
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300 light:text-gray-600 text-center w-full mb-4">Computer Science student</p>
              {/* Contact Info */}
              <div className="space-y-2 mb-6 w-full">
                <a href="mailto:lmous090@uottawa.ca" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 light:text-gray-700 text-sm hover:text-[var(--mauve)] dark:hover:text-gray-200 light:hover:text-gray-900 transition-colors">
                  <Mail size={16} className="text-[var(--mauve)] dark:text-gray-400 light:text-gray-500" /> lmous090@uottawa.ca
                </a>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 light:text-gray-700 text-sm">
                  <MapPin size={16} className="text-[var(--mauve)] dark:text-gray-400 light:text-gray-500" /> Ottawa, Ontario
                </div>
                <a href="https://github.com/Lina Moussadek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 light:text-gray-700 text-sm hover:text-[var(--mauve)] dark:hover:text-gray-200 light:hover:text-gray-900 transition-colors">
                  <Github size={16} className="text-[var(--mauve)] dark:text-gray-400 light:text-gray-500" /> Lina Moussadek
                </a>
                <a href="https://linkedin.com/in/linamoussadek" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 dark:text-gray-300 light:text-gray-700 text-sm hover:text-[var(--mauve)] dark:hover:text-gray-200 light:hover:text-gray-900 transition-colors">
                  <Linkedin size={16} className="text-[var(--mauve)] dark:text-gray-400 light:text-gray-500" /> @linamoussadek
                </a>
              </div>
              {/* Website Link */}
              <div className="mb-6 w-full">
                <div className="bg-[var(--mauve-light)] dark:bg-gray-800 light:bg-gray-100 border-2 border-[var(--mauve)] dark:border-gray-600 light:border-gray-300 rounded-xl p-4 flex flex-col items-center shadow-md">
                  <span className="text-xs text-gray-700 dark:text-gray-300 light:text-gray-700 mb-1 font-semibold">Want more details?</span>
                  <a href="https://linamoussadek.com" className="text-[var(--mauve)] dark:text-gray-400 light:text-gray-600 text-sm font-bold underline break-all block text-center hover:text-[var(--mauve-dark)] dark:hover:text-gray-300 light:hover:text-gray-800 transition-colors">
                    linamoussadek.dev
                  </a>
                  <span className="text-xs text-gray-500 dark:text-gray-400 light:text-gray-500 mt-1">Visit my website for more info & portfolio</span>
                </div>
              </div>
              {/* Sidebar content evenly spaced */}
              <div className="flex flex-col flex-1 w-full justify-between gap-6">
                {/* About */}
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white light:text-gray-900 mb-2 tracking-[0.2em]">ABOUT</h2>
                  <p className="text-xs text-gray-700 dark:text-gray-300 light:text-gray-700 leading-relaxed text-justify">
                    Born in Casablanca and educated at a French school, I graduate in Dec 2025 and seek full-time roles in Networking, Full Stack, or emerging tech. I've contributed to dev and test teams across startups, mid-sized firms, and large enterprises. I lead with initiative, deliver systems that scale, and bring a strong mix of backend depth and network-layer experience.
                  </p>
                </div>

                {/* Skills */}
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white light:text-gray-900 mb-2 tracking-[0.2em]">SKILLS</h2>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    {[
                      'React', 'Vue', 'JavaScript', 'C++', 'Java', 'Python', 'Wireshark', 'GitHub', 'NodeJS', 'PostgreSQL', 'Angular', 'Docker'
                    ].map(skill => (
                      <div key={skill} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--mauve)] dark:bg-gray-400 light:bg-gray-500 rounded-full flex-shrink-0"></span>
                        <span className="text-xs text-gray-700 dark:text-gray-300 light:text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white light:text-gray-900 mb-2 tracking-[0.2em]">LANGUAGES</h2>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--mauve)] dark:bg-gray-400 light:bg-gray-500 rounded-full flex-shrink-0"></span>
                      <span className="text-xs text-gray-700 dark:text-gray-300 light:text-gray-700">English (fluent)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--mauve)] dark:bg-gray-400 light:bg-gray-500 rounded-full flex-shrink-0"></span>
                      <span className="text-xs text-gray-700 dark:text-gray-300 light:text-gray-700">French (native)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--mauve)] dark:bg-gray-400 light:bg-gray-500 rounded-full flex-shrink-0"></span>
                      <span className="text-xs text-gray-700 dark:text-gray-300 light:text-gray-700">Arabic (native)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[var(--mauve)] dark:bg-gray-400 light:bg-gray-500 rounded-full flex-shrink-0"></span>
                      <span className="text-xs text-gray-700 dark:text-gray-300 light:text-gray-700">Spanish (limited)</span>
                    </div>
                  </div>
                </div>

                {/* Projects */}
                <div className="space-y-2">
                  <h2 className="text-lg font-bold text-gray-900 dark:text-white light:text-gray-900 mb-2 tracking-[0.2em]">PROJECTS</h2>
                  <div className="space-y-2">
                    <div className="text-xs text-gray-700 dark:text-gray-300 light:text-gray-700 text-justify">
                      <span className="font-semibold">Dog App (Winner):</span> A web app for dog adoption and care, built with a public API during Outstem's interview. Winning project led to my job offer.
                    </div>
                    <div className="text-xs text-gray-700 dark:text-gray-300 light:text-gray-700 text-justify">
                      <span className="font-semibold">Sparksite (Founder & CEO):</span> Founded a tech platform that uses proprietary AI to reverse-engineer business logos, identify businesses without websites, and auto-generate professional sites with a single click. Enables users to earn commissions by reselling these AI-built websites.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="md:col-span-2 md:pl-0 flex flex-col gap-8">
              {/* Education */}
              <section>
                <h2 className="text-xl font-bold text-[var(--mauve)] dark:text-gray-400 light:text-gray-600 mb-6 tracking-[0.2em]">EDUCATION</h2>
                <div className="relative">
                  {/* Full-height vertical bar */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-[var(--mauve-light)] dark:bg-gray-700 light:bg-gray-200" style={{ height: '100%', left: '16px', zIndex: 0 }} />
                  <div className="space-y-4 print:space-y-2">
                    <div className="flex flex-row items-start w-full mb-8 last:mb-0 relative z-10">
                      {/* Timeline dot */}
                      <div className="flex flex-col items-center mr-2" style={{ width: '32px', minHeight: '64px' }}>
                        <span className="w-4 h-4 rounded-full bg-[var(--mauve)] dark:bg-gray-600 light:bg-gray-400 border-2 border-white dark:border-gray-800 light:border-gray-100 z-10 mt-4" />
                      </div>
                      {/* Education content */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-2">
                          <img src="/uottawa-logo.png" alt="uOttawa logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                          <div className="flex-1">
                            <h3 className="text-lg print:text-base font-semibold text-gray-900 dark:text-white light:text-gray-900">Bachelor of Computer Science</h3>
                            <p className="text-[var(--mauve)] dark:text-gray-400 light:text-gray-600 font-medium print:text-sm">University of Ottawa</p>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-500 dark:text-gray-400 light:text-gray-500 text-sm print:text-xs w-full mb-1">
                              <span className="text-left">Ottawa, Ontario, Canada</span>
                              <span className="text-right">Expected Dec 2025</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm print:text-xs text-gray-700 dark:text-gray-300 light:text-gray-700 text-justify">
                            <strong>Achievements:</strong> Dean's List Merit (Winter 2025), Francophonie Scholarship Recipient
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Work Experience */}
              <section>
                <h2 className="text-xl font-bold text-[var(--mauve)] dark:text-gray-400 light:text-gray-600 mb-6 tracking-[0.2em]">WORK EXPERIENCE</h2>
                <div className="relative">
                  {/* Full-height vertical bar */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 bg-[var(--mauve-light)] dark:bg-gray-700 light:bg-gray-200" style={{ height: '100%', left: '16px', zIndex: 0 }} />
                  {workExperiences.map((exp, index) => (
                    <div className="flex flex-row items-start w-full mb-12 last:mb-0 relative z-10" key={index}>
                      {/* Timeline dot */}
                      <div className="flex flex-col items-center mr-2" style={{ width: '32px', minHeight: '64px' }}>
                        <span className="w-4 h-4 rounded-full bg-[var(--mauve)] dark:bg-gray-600 light:bg-gray-400 border-2 border-white dark:border-gray-800 light:border-gray-100 z-10 mt-4" />
                      </div>
                      {/* Experience content */}
                      <div className="flex-1 w-full">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-2">
                          <img src={exp.logo} alt={exp.alt} className="w-16 h-16 sm:w-20 sm:h-20 object-contain" />
                          <div className="w-full">
                            <h3 className="text-lg print:text-base font-semibold text-gray-900 dark:text-white light:text-gray-900">{exp.title}</h3>
                            <p className={`${exp.companyClass} dark:text-gray-400 light:text-gray-600`}>{exp.company}</p>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-gray-500 dark:text-gray-400 light:text-gray-500 text-sm print:text-xs w-full mb-1">
                              <span className="text-left">{exp.location}</span>
                              <span className="text-right sm:ml-auto">{exp.period}</span>
                            </div>
                          </div>
                        </div>
                        <ul className="list-disc text-gray-700 dark:text-gray-300 light:text-gray-700 text-sm print:text-xs space-y-1 ml-4 mt-2 text-justify">
                          {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
