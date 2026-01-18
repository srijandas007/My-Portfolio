// src/components/Portfolio.jsx
import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Menu, X, Code2, Award, Briefcase, User, FolderKanban, Layers, Twitter, AtSign, Send, TwitterIcon, LucideTwitter } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const projects = [
    {
      title: "AES-RSA Based Secure Chatting System",
      description: "A secure messaging application implementing hybrid encryption using AES and RSA algorithms for end-to-end encrypted communication",
      tags: ["Python", "Cryptography", "AES", "RSA", "Security"],
      link: "https://github.com/srijandas007/aes-rsa-chatting-system",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Pharmacy Demand & Expiry Forecasting System",
      description: "Machine learning system to predict pharmacy product demand and expiry dates, optimizing inventory management and reducing waste",
      tags: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Forecasting"],
      link: "https://github.com/srijandas007/pharmacy-forecasting-system",
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  const skills = [
    { category: "Languages", items: ["Python", "HTML", "CSS", "JavaScript"], color: "from-orange-500 to-red-500" },
    { category: "Frameworks & Libraries", items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "PyTorch", "TensorFlow", "React", "Node.js", "Express", "Flask", "Tailwind CSS"], color: "from-red-500 to-orange-500" },
    { category: "Databases", items: ["MySQL", "MongoDB", "Oracle SQL"], color: "from-orange-500 to-red-500" },
    { category: "Tools", items: ["Git", "Github", "Replit", "Anaconda","Power BI"], color: "from-orange-500 to-red-500" }
  ];

  const certifications = [
    { name: "Coming Soon", issuer: "Building Skills & Earning Certifications", year: "2025", color: "from-amber-400 to-amber-500" }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Subtle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent flex items-center gap-2">
              <Layers className="text-teal-400" size={24} />
              Srijan's Portfolio
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-teal-400 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-teal-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-slate-300 hover:bg-teal-500/10"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center">
            <div className="mb-6 inline-block">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-teal-500 to-blue-500 p-1 mx-auto overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Srijan Das" 
                  className="w-full h-full rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl font-bold text-teal-400" style={{display: 'none'}}>
                  SD
                </div>
              </div>
            </div>
            <h1 className="text-5xl sm:text-7xl font-bold text-white mb-4">
              Hi, I'm <span className="text-teal-400">Srijan Das</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-300 mb-8">
              ML Developer | Data Science Enthusiast | Gamer
            </p>
            <div className="flex justify-center gap-4 mb-8">
              <a 
                href="https://github.com/srijandas007" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-all"
                style={{
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 0 rgba(20, 184, 166, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(20, 184, 166, 0.6)';
                  e.currentTarget.style.transform = 'scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(20, 184, 166, 0)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/srijandas007" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-all"
                style={{
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 0 rgba(20, 184, 166, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(20, 184, 166, 0.6)';
                  e.currentTarget.style.transform = 'scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(20, 184, 166, 0)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://x.com/srijandas302" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-all"
                style={{
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 0 rgba(20, 184, 166, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(20, 184, 166, 0.6)';
                  e.currentTarget.style.transform = 'scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(20, 184, 166, 0)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="mailto:srijandas302@gmail.com" 
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:text-teal-400 hover:bg-slate-700 transition-all"
                style={{
                  transition: 'all 0.3s ease',
                  boxShadow: '0 0 0 rgba(20, 184, 166, 0)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(20, 184, 166, 0.6)';
                  e.currentTarget.style.transform = 'scale(1.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 0 rgba(20, 184, 166, 0)';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <AtSign size={24} />
              </a>
            </div>
            <a 
              href="/resume.pdf" 
              download="Srijan_Das_Resume.pdf"
              className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2"
              style={{
                transition: 'all 0.3s ease',
                boxShadow: '0 0 0 rgba(20, 184, 166, 0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(20, 184, 166, 0.8)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(20, 184, 166, 0)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <User className="text-blue-400" size={36} />
            <h2 className="text-5xl font-bold text-blue-400">About Me</h2>
          </div>
          <div className="max-w-3xl mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-colors">
            <p className="text-lg text-slate-400 leading-relaxed mb-4">
              I'm Srijan Das, a Machine Learning Developer and Data Science enthusiast who loves turning data into models that solve real problems. I enjoy the full workflow - collecting and cleaning data, experimenting with algorithms, and deploying projects that people can actually use.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-4">
              Outside tech, I'm a gamer, football freak and sports fanatic who believes curiosity, competition, and constant learning keep life exciting.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              Always exploring, always building - one model, one game, and one challenge at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Code2 className="text-orange-500" size={36} />
            <h2 className="text-5xl font-bold text-orange-500">Skills</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-colors h-full flex flex-col">
                <div className={`inline-block bg-gradient-to-r ${skillGroup.color} px-4 py-1 rounded-lg text-white font-semibold mb-4 text-sm w-fit`}>
                  {skillGroup.category}
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Briefcase className="text-cyan-400" size={36} />
            <h2 className="text-5xl font-bold text-cyan-400">Experience</h2>
          </div>
          <div className="space-y-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex-shrink-0 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">Machine Learning Project Developer</h3>
                    <span className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-500 px-3 py-1 rounded-full text-white text-sm font-medium">Jan 2025 - Present</span>
                  </div>
                  <p className="text-cyan-300 font-medium mb-2">Self-Initiated</p>
                  <p className="text-slate-300">Designed and implemented ML models for demand forecasting and classification. Built a Streamlit-based dashboard to deploy real-time predictions. Integrated EDA, data cleaning and feature engineering workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-12">
            <FolderKanban className="text-purple-400" size={36} />
            <h2 className="text-5xl font-bold text-center text-purple-400">Featured Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-700/50 text-slate-300 rounded-lg text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-purple-400 hover:text-purple-300 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Award className="text-amber-400" size={36} />
            <h2 className="text-5xl font-bold text-amber-400">Certifications</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl text-center border border-slate-700 hover:border-amber-500/50 transition-colors">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center`}>
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cert.name}</h3>
                <p className="text-slate-400 mb-1">{cert.issuer}</p>
                <p className="text-amber-400 font-medium text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Mail className="text-pink-400" size={40} />
            <h2 className="text-5xl font-bold text-pink-400">Get In Touch</h2>
          </div>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:srijandas302@gmail.com"
              className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center gap-2"
              style={{
                transition: 'all 0.3s ease',
                boxShadow: '0 0 0 rgba(236, 72, 153, 0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(236, 72, 153, 0.8)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(236, 72, 153, 0)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Send size={20} />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/srijandas007"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-lg font-medium inline-flex items-center justify-center gap-2 border border-slate-700"
              style={{
                transition: 'all 0.3s ease',
                boxShadow: '0 0 0 rgba(148, 163, 184, 0)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(148, 163, 184, 0.6)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 0 rgba(148, 163, 184, 0)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-800/50 backdrop-blur-sm text-white py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-slate-400">© 2025 Srijan Das. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}