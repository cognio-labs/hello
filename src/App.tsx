import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, LinkedinIcon, GithubIcon, TwitterIcon } from 'lucide-react';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const lightGradient = "from-blue-100 to-purple-200";
  const darkGradient = "from-gray-800 to-black";

  const containerClasses = `min-h-screen flex flex-col transition-all duration-500 ${isDarkMode ? darkGradient : lightGradient}`;
  const textClasses = isDarkMode ? "text-gray-200" : "text-gray-800";
  const subTextClasses = isDarkMode ? "text-gray-400" : "text-gray-600";
  const accentClasses = isDarkMode ? "text-blue-400" : "text-blue-600";
  const cardClasses = isDarkMode ? "bg-gray-800/50 backdrop-blur-md shadow-lg shadow-black/50" : "bg-white/70 backdrop-blur-md shadow-lg shadow-blue-200/50";
  const buttonClasses = isDarkMode ? "bg-blue-600 hover:bg-blue-700 text-white" : "bg-blue-500 hover:bg-blue-600 text-white";
  const linkHoverClasses = isDarkMode ? "hover:text-blue-400" : "hover:text-blue-700";

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const heroVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const socialVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: i * 0.1 },
    }),
  };

  const skills = [
    "Python", "C++", "JavaScript", "SQL", "React.js", "Node.js", "Express.js", "FastAPI", "Django", "REST API",
    "TensorFlow", "PyTorch", "Scikit-learn", "LangChain", "LangGraph", "LangSmith", "HuggingFace", "Transformers", "BERT", "LSTM",
    "Git", "Docker", "Streamlit", "Vercel", "Railway", "Firebase", "CI/CD", "Render",
    "MongoDB", "MySQL", "Qdrant", "Firebase Auth", "Cloudflare R2",
    "RAG", "Prompt Engineering", "DeepResearch", "NLP", "BM25", "RRF", "MCP", "Composio"
  ];

  const experience = [
    {
      title: "AI & BACKEND ENGINEER",
      company: "COGNIO LABS",
      duration: "July 2025 - Present",
      description: [
        "Independently architected, developed, and deployed end-to-end production backends and AI-driven systems.",
        "Engineered backend infrastructures (FastAPI + Python) and integrated AI modules using LangChain, LangGraph, and MCP, resulting in reduced system latency and infrastructure costs.",
        "Designed, implemented, and deployed a full backend pipeline and AI engine for a webpage design generation platform, improving design accuracy and reducing creation/editing time."
      ]
    },
    {
      title: "SOFTWARE DEVELOPMENT INTERN",
      company: "HASHEDBIT INNOVATION",
      duration: "June 2024 - Sept 2024",
      description: [
        "Engineered responsive web applications using HTML, CSS, JavaScript, and React.js.",
        "Optimized back-end workflows by redesigning CRUD APIs with Node.js and Express.js, improving SQL query efficiency and reducing server response time.",
        "Integrated advanced features such as downloadable production-ready code and one-click Vercel deployment."
      ]
    }
  ];

  const projects = [
    {
      name: "Druidix – Agentic AI Platform",
      description: "Solely developed a custom GPT creation system integrating hybrid RAG, DeepResearch, Composio, Image generation, and multi-level web search. Improved contextual retrieval precision by 45%. Currently developing a modular Agent-to-Agent (A2A) communication system for custom GPTs.",
      tech: ["Python", "FastAPI", "LangChain", "LangGraph", "LangSmith", "Composio", "MCP", "Qdrant Db", "Vercel", "Railway", "e2b Sandbox", "BM25", "RRF", "OpenAI Embedding", "Replicate"]
    },
    {
      name: "AI-powered Webpage Design Generation Platform",
      description: "Designed, implemented, and deployed a full backend pipeline and AI engine for webpage design generation. Improved design accuracy by 40% and reduced creation/editing time by 30%.",
      tech: ["Python", "FastAPI", "LangChain", "OpenAI API"]
    },
    {
      name: "No-Code AI Agent Builder with automation",
      description: "Built a no-code platform enabling users to create and automate AI agents without coding. Integrated memory, RAG, and LLM tools.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth", "LangChain", "HuggingFace", "CRON", "Groq", "OpenAI"]
    },
    {
      name: "Search Engine with LangChain Streamlit",
      description: "Developed a conversational search engine powered by LangChain Agents, integrating real-time sources like Wikipedia, DuckDuckGo, and ArXiv. Deployed a live chat interface with memory and LLaMA-3 LLM integration.",
      tech: ["LangChain", "Streamlit", "OpenAI API", "Groq", "Python"]
    }
  ];

  const codingAchievements = [
    "Leetcode Knight Badge (Rating: 1869, 400+ DSA problems solved)",
    "LeetCode Weekly Contest 386: Global Rank 1432",
    "CodeChef 3-Star Rating (Max Rating: 1680)",
    "CodeChef Starter 103: Global Rank 271 (among 25k+ participants)"
  ];

  return (
    <div className={containerClasses}>
      <header className={`p-6 flex justify-between items-center sticky top-0 z-50 ${isDarkMode ? 'bg-black/30' : 'bg-white/30'} backdrop-blur-lg`}>
        <motion.h1
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className={`text-3xl font-bold ${accentClasses}`}
        >
          Ashish Maurya
        </motion.h1>
        <button
          onClick={toggleDarkMode}
          className={`p-2 rounded-full focus:outline-none transition-colors duration-300 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 18v1M4.21 7.03l1.42 1.42m14.11 14.11l1.42-1.42M7 12H3m18 0h-4M7.03 19.79l1.42-1.42M19.79 4.21l-1.42 1.42M12 12a9 9 0 100-18 9 9 0 000 18z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </header>

      <main className="flex-grow container mx-auto px-4 py-16">
        <section id="hero" className="text-center py-20">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h2 className={`text-5xl font-extrabold ${textClasses}`}>
              Ashish Maurya
            </h2>
            <p className={`text-2xl ${accentClasses} font-semibold`}>
              AI & Backend Engineer | Full-Stack Developer
            </p>
            <p className={`text-lg ${subTextClasses} max-w-2xl mx-auto`}>
              Architecting and deploying end-to-end AI-driven systems and robust backend infrastructures. Passionate about building scalable solutions with a focus on performance and innovation.
            </p>
            <div className="flex justify-center space-x-4 mt-8">
              {[
                { icon: Github, link: "https://github.com/your-github", label: "GitHub" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/your-linkedin/", label: "LinkedIn" },
                { icon: Mail, link: "mailto:your.email@example.com", label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                  className={`p-3 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors duration-300 ${linkHoverClasses}`}
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="skills" className="py-16">
          <motion.h3
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className={`text-4xl font-bold text-center mb-12 ${accentClasses}`}
          >
            Skills
          </motion.h3>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={{
              visible: { transition: { staggerChildren: 0.05 } }
            }}
            initial="hidden"
            animate="visible"
          >
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                variants={cardVariants}
                className={`px-4 py-2 rounded-lg text-center text-sm font-medium ${isDarkMode ? 'bg-gray-700/50 text-gray-300' : 'bg-blue-100/50 text-blue-800'}`}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </section>

        <section id="experience" className="py-16">
          <motion.h3
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className={`text-4xl font-bold text-center mb-12 ${accentClasses}`}
          >
            Experience
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${cardClasses}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <h4 className={`text-2xl font-bold mb-2 ${textClasses}`}>{exp.title}</h4>
                <p className={`text-lg font-semibold mb-4 ${accentClasses}`}>{exp.company}</p>
                <p className={`text-sm mb-6 ${subTextClasses}`}>{exp.duration}</p>
                <ul className="list-disc list-inside space-y-2">
                  {exp.description.map((point, pointIndex) => (
                    <li key={pointIndex} className={`text-base ${subTextClasses}`}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-16">
          <motion.h3
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className={`text-4xl font-bold text-center mb-12 ${accentClasses}`}
          >
            Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${cardClasses}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
              >
                <h4 className={`text-2xl font-bold mb-3 ${textClasses}`}>{project.name}</h4>
                <p className={`text-base mb-5 ${subTextClasses}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-gray-700/70 text-gray-300' : 'bg-blue-100/70 text-blue-800'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="achievements" className="py-16">
          <motion.h3
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            className={`text-4xl font-bold text-center mb-12 ${accentClasses}`}
          >
            Coding Achievements
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            initial="hidden"
            animate="visible"
          >
            {codingAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl flex items-center space-x-4 ${cardClasses}`}
                variants={cardVariants}
              >
                <div className={`p-3 rounded-full ${isDarkMode ? 'bg-blue-600/30' : 'bg-blue-100/70'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${accentClasses}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className={`text-lg ${subTextClasses}`}>{achievement}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </main>

      <footer className={`p-6 text-center ${subTextClasses} text-sm`}>
        <p>&copy; {new Date().getFullYear()} Ashish Maurya. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;