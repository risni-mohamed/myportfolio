import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Twitter, Instagram, Facebook, Youtube, MessageCircle, Send} from 'lucide-react';
import profileImage from './images/profile.jpg';
import { Download } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "My Portfolio Website",
      description: "A responsive portfolio Website.",
      tech: ["React", "TailwindCSS"],
      github: "https://github.com/risni-mohamed/myportfolio",
      demo: "https://risnimhdofficial.vercel.app/"
    },
    {
      title: "Car Rental and Booking Website",
      description: "A full-stack Booking the Car solution built with React, Node.js, and Firebase.",
      tech: ["React", "Node.js", "Firebase", "Stripe"],
      github: "https://github.com/risni-mohamed/car-rental",
      demo: "https://www.linkedin.com/posts/mohamadrizni_reactjs-firebase-webdevelopment-activity-7357863314762219520-afwB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFOfHuUB0neWqVKhYXka073X9ViyvKY6DnQ"
    },
    {
      title: "Mobile Shop Management System", 
      description: "A Standalone System with real-time updates.",
      tech: ["C#", "Microsoft SQL", "Entity Framework", "Windows Forms"],
      github: "https://github.com/risni-mohamed/MobileShopManagementSystem",
      demo: "#"
    },
    
  ];

  const skills = [
    "HTML/CSS", "JavaScript", "React", "Node.js",  "C#", "SQL", "PHP",
    "Firebase", "Git", "GitHub", "Visual Studio Code", "Canva", "Figma"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      
<nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-700/50 shadow-lg shadow-black/20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      <div className="relative group">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:from-blue-300 hover:via-purple-400 hover:to-pink-400 transition-all duration-300 cursor-pointer">
          Risni Rafeek
        </div>
        <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
      </div>
      
      <div className="hidden md:flex space-x-1">
        {['Home', 'About', 'Education', 'Projects', 'Contact'].map((item) => (
          <a 
            key={item}
            href={`#${item.toLowerCase()}`} 
            className="relative px-4 py-2 rounded-lg font-medium text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden"
          >
            <span className="relative z-10">{item}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-105"></div>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
          </a>
        ))}
      </div>

      
      <button 
        className="md:hidden relative p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div className="relative">
          {isMenuOpen ? (
            <X size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300 group-hover:rotate-90" />
          ) : (
            <Menu size={24} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
          )}
        </div>
      </button>
    </div>

    {isMenuOpen && (
      <div className="md:hidden py-6 border-t border-gray-700/50 bg-gray-900/95 backdrop-blur-sm">
        <div className="flex flex-col space-y-2">
          {['Home', 'About', 'Education', 'Projects', 'Contact'].map((item, index) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`} 
              className="relative px-4 py-3 rounded-lg font-medium text-gray-300 hover:text-white transition-all duration-300 group overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'slideIn 0.3s ease-out forwards'
              }}
            >
              <span className="relative z-10 flex items-center">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></div>
                {item}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-full group-hover:translate-x-0"></div>
            </a>
          ))}
        </div>
      </div>
    )}
  </div>
</nav>

<style jsx>{`
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`}</style>

{/* Hero Section */}
<section id="home" className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
  
  <div className="relative max-w-6xl mx-auto text-center">
    <div className="mb-8">
      {/*Profile Image */}
      <div className="relative mb-8">
        <div className="w-44 h-44 rounded-full mx-auto overflow-hidden relative group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-gray-900"></div>
          </div>
          <div className="absolute inset-1 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-105 transition-transform duration-500">
            <img 
              src={profileImage} 
              alt="Risni Rafeek" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 blur-md group-hover:blur-lg transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
        </div>
      </div>

      <div className="mb-6">
        <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20">
          <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            👋 Welcome to my portfolio
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
          <span className="inline-block">Hi, I'm</span>{" "}
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
               Risni Rafeek
            </span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform scale-x-0 animate-scale-x"></div>
          </span>
        </h1>
      </div>

      <div className="mb-10 max-w-3xl mx-auto">
        <p className="text-xl sm:text-2xl text-gray-300 mb-4 leading-relaxed">
          Dedicated to crafting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-semibold">user-friendly web experiences</span> while continuously learning and adapting to new technologies.
        </p>
        <div className="flex justify-center items-center space-x-6 text-sm text-gray-400 mt-6">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Available for opportunities</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Based in Sri Lanka</span>
          </div>
        </div>
      </div>

      {/*Action Buttons */}
      <div className="flex justify-center space-x-4 flex-wrap gap-y-4">
        <a 
          href="#projects" 
          className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
        >
          <span className="relative z-10 flex items-center gap-2">
            View My Work
            <div className="w-0 group-hover:w-4 transition-all duration-300 overflow-hidden">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </span>
        </a>
        
       {/* <a 
          href="/files/Risni Rafeek.pdf" 
          download="Risni Rafeek.pdf"
          className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25"
        >
          <span className="relative z-10 flex items-center gap-2">
            <Download size={18} className="group-hover:animate-bounce" />
            Resume
          </span>
        </a>
        */}
        <a 
          href="#contact" 
          className="group relative px-8 py-4 border-2 border-gray-600 hover:border-gray-400 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 bg-gray-800/50 hover:bg-gray-700/50 backdrop-blur-sm"
        >
          <span className="relative z-10 flex items-center gap-2">
            Contact Me
            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300"></div>
          </span>
        </a>
      </div>
    </div>

    {/* Scroll Indicator */}
    {/*<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center">
        <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2 animate-pulse"></div>
      </div>
    </div>*/}
  </div>
</section>

      
{/* About Section */}
<section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800/50 via-gray-900/30 to-gray-800/50 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
    <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-4">
        <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Get to know me
        </span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
    </div>

    <div className="grid lg:grid-cols-2 gap-16 items-start">
      {/*Content Side*/}
      <div className="space-y-8">
        {/*Story Cards */}
        <div className="space-y-6">
          <div className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">My Journey</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm an aspiring software developer currently pursuing my <span className="text-blue-400 font-medium">HND in Information Technology</span>. 
                  I love building projects that combine clean code with intuitive user interfaces.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-2">My Goal</h3>
                <p className="text-gray-300 leading-relaxed">
                  Through internships and collaborative projects, I'm focused on growing my technical 
                  skills while contributing to applications that make a <span className="text-purple-400 font-medium">meaningful impact</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Qualifications */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-3">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h3>
          
          <div className="group relative p-5 bg-gradient-to-br from-green-900/20 to-emerald-900/20 backdrop-blur-sm rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h4 className="text-lg font-semibold text-white">Responsive Web Design</h4>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <p className="text-green-400 font-medium text-sm mb-2">freeCodeCamp</p>
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>Issued May 2025</span>
                  <span>•</span>
                  {/*<span className="font-mono">ID: mohamedrisni-rwd</span>*/}
                </div>
              </div>
              <div className="flex-shrink-0 ml-4">
                <a 
                  href="https://www.freecodecamp.org/certification/MohamedRisni/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 hover:border-green-400/50 rounded-lg text-green-400 hover:text-green-300 text-sm font-medium transition-all duration-300 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  <span>View Credential</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">3</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">2+</div>
            <div className="text-sm text-gray-400">Years Learning</div>
          </div>
          <div className="text-center p-4 bg-gray-800/30 rounded-xl border border-gray-700/30">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">∞</div>
            <div className="text-sm text-gray-400">Passion</div>
          </div>
        </div>
      </div>

      {/* Skills Side */}
      <div className="space-y-8">
        <div className="relative">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Technical Skills
            </span>
            <div className="ml-3 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
          </h3>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideUp 0.6s ease-out forwards'
                }}
              >
                <div className="relative p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 text-center group">
                  {/* Background Gradient on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Skill Text */}
                  <span className="relative z-10 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    {skill}
                  </span>
                  
                  {/* Hover Effect Bar */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Path */}
        {/*<div className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20">
          <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
            Currently Learning
          </h4>
          <div className="flex flex-wrap gap-2">
            {['Python', 'Go', 'MongoDB'].map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 border border-gray-600/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>*/}
      </div>
    </div>
  </div>
</section>

      {/* Education Section */}
<section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 overflow-hidden">
  {/* Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
  </div>

  <div className="relative max-w-6xl mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 mb-4">
        <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          📚 My Academic Journey
        </span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Education
        </span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mx-auto"></div>
    </div>

    {/* Timeline Container */}
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-500 to-pink-500 transform md:-translate-x-0.5"></div>

      <div className="space-y-12">
        {/* Current Education */}
        <div className="relative flex items-center md:justify-center">
          {/* Timeline Dot */}
          <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transform md:-translate-x-2 z-10 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-ping opacity-20"></div>
          </div>

          {/* Content Card */}
          <div className="ml-16 md:ml-0 md:w-1/2 md:pr-8">
            <div className="group relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2">
              {/* Status Badge */}
              <div className="absolute -top-3 left-6">
                <div className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full text-xs font-medium text-white shadow-lg">
                  <span className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    Current
                  </span>
                </div>
              </div>

              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Institution Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                  Higher National Diploma in Information Technology
                </h3>
                
                <div className="flex items-center text-gray-300 mb-3">
                  <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-2 0H3m2-2v2m0-2V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10m-5 3v6m-2-1h4" />
                  </svg>
                  <span className="font-medium">Sri Lanka Institute of Advanced Technological Education</span>
                </div>

                <div className="flex items-center text-gray-400 mb-4">
                  <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>2023 - 2025</span>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Progress</span>
                    <span>~80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full w-4/5 animate-pulse"></div>
                  </div>
                </div>

                {/* Key Subjects */}
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Key Areas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Web Development', 'Database Systems', 'Software Engineering', 'Network Technologies'].map((subject, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700/50 rounded-lg text-xs text-gray-300 border border-gray-600/30">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous Education */}
        <div className="relative flex items-center md:justify-center">
          {/* Timeline Dot */}
          <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transform md:-translate-x-2 z-10">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"></div>
          </div>

          {/* Content Card */}
          <div className="ml-16 md:ml-0 md:w-1/2 md:pl-8 md:self-end">
            <div className="group relative p-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
              {/* Completed Badge */}
              <div className="absolute -top-3 left-6">
                <div className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full text-xs font-medium text-white shadow-lg">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Completed
                  </span>
                </div>
              </div>

              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content */}
              <div className="relative z-10">
                {/* Institution Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                  G.C.E. Advanced Level - Combined Mathematics
                </h3>

                <div className="flex items-center text-gray-300 mb-3">
                  <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-6m-2 0H3m2-2v2m0-2V9a2 2 0 012-2h2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10m-5 3v6m-2-1h4" />
                  </svg>
                  <span className="font-medium">Madeena National School, Siyambalagaskotuwa</span>
                </div>

                <div className="flex items-center text-gray-400 mb-4">
                  <svg className="w-4 h-4 mr-2 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>2021 (2022)</span>
                </div>

                {/* Subjects */}
                <div>
                  <h4 className="text-sm font-medium text-gray-300 mb-2">Stream:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Combined Mathematics', 'Physics', 'Chemistry'].map((subject, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-700/50 rounded-lg text-xs text-gray-300 border border-gray-600/30">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Achievement Summary */}
    <div className="mt-16 text-center">
      <div className="inline-block p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-2xl border border-blue-500/20">
        <h3 className="text-lg font-semibold text-white mb-3">Academic Foundation</h3>
        <p className="text-gray-300 max-w-2xl">
          Strong mathematical and technical background with hands-on experience in modern web technologies, 
          preparing for a successful career in software development.
        </p>
      </div>
    </div>
  </div>
</section>

     {/* Projects Section */}
<section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent)] opacity-70"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1),transparent)] opacity-70"></div>
  
  <div className="max-w-6xl mx-auto relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4">
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-4">
        Featured Projects
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        A collection of my recent work showcasing various technologies and creative solutions
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10"
        >
          {/* Card glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Content */}
          <div className="relative z-10">
            {/* Project number/icon */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                <span className="text-blue-400 font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>

            {/* Project title */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
              {project.title}
            </h3>

            {/* Project description */}
            <p className="text-gray-300 mb-6 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/40 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex space-x-4">
              <a 
                href={project.github} 
                className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group/btn"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-gray-700/50 rounded-lg mr-2 group-hover/btn:bg-blue-500/20 group-hover/btn:scale-110 transition-all duration-300">
                  <Github size={14} />
                </div>
                <span className="text-sm font-medium">Code</span>
              </a>
              <a 
                href={project.demo} 
                className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group/btn"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-gray-700/50 rounded-lg mr-2 group-hover/btn:bg-purple-500/20 group-hover/btn:scale-110 transition-all duration-300">
                  <ExternalLink size={14} />
                </div>
                <span className="text-sm font-medium">Demo</span>
              </a>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      ))}
    </div>

    {/* View More Button */}
    <div className="text-center mt-12">
      <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 text-blue-300 rounded-full hover:from-blue-500/20 hover:to-purple-500/20 hover:border-blue-400/50 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
        <span className="text-sm font-medium">View All Projects</span>
        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>
    </div>
  </div>
</section>

      {/* Contact Section */}
<section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent)] opacity-60"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.15),transparent)] opacity-60"></div>
  
  {/* Animated background particles */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
    <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
    <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-pink-400/30 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
  </div>

  <div className="max-w-4xl mx-auto text-center relative z-10">
    {/* Section Header */}
    <div className="mb-16">
      <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4">
        <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent mb-6">
        Get In Touch
      </h2>
      <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
        I'm always open to discussing new opportunities, interesting projects, and innovative ideas. 
        Let's create something amazing together.
      </p>
    </div>

    <div className="flex flex-col items-center gap-12">
      {/* Main Contact Cards */}
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-3xl">
        <a 
          href="mailto:mohamadrizni42@gmail.com" 
          className="group relative bg-gradient-to-br from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:from-blue-500/20 hover:to-blue-600/20 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Mail size={24} className="text-blue-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">Email Me</h3>
            <p className="text-gray-400 text-sm">Quick response guaranteed</p>
          </div>
        </a>

        <a 
          href="https://linkedin.com/in/mohamadrizni" 
          className="group relative bg-gradient-to-br from-blue-600/10 to-blue-700/10 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-6 hover:from-blue-600/20 hover:to-blue-700/20 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-600/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600/20 to-blue-700/20 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Linkedin size={24} className="text-blue-500" />
            </div>
            <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400 text-sm">Professional network</p>
          </div>
        </a>

        <a 
          href="https://github.com/risni-mohamed" 
          className="group relative bg-gradient-to-br from-gray-700/20 to-gray-800/20 backdrop-blur-sm border border-gray-600/30 rounded-2xl p-6 hover:from-gray-600/20 hover:to-gray-700/20 hover:border-gray-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-gray-600/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600/5 to-gray-700/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-gray-600/20 to-gray-700/20 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Github size={24} className="text-gray-400" />
            </div>
            <h3 className="text-white font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400 text-sm">View my code</p>
          </div>
        </a>
      </div>

      {/* Social Media Grid */}
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h3 className="text-xl font-semibold text-white mb-2">Connect With Me</h3>
          <p className="text-gray-400 text-sm">Follow me on social media for updates and insights</p>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 items-center">
          <a 
            href="https://x.com/rizmrm" 
            className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Twitter size={20} className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300 relative z-10" />
          </a>

          <a 
            href="https://instagram.com/rizni_mrm20020225" 
            className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-pink-400/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-400/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Instagram size={20} className="text-gray-400 group-hover:text-pink-400 transition-colors duration-300 relative z-10" />
          </a>

          <a 
            href="https://facebook.com/mohamad.rizni.750" 
            className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Facebook size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors duration-300 relative z-10" />
          </a>

          <a 
            href="https://wa.me/+94761695940" 
            className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-green-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-green-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <svg size={20} className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.700"/>
            </svg>
          </a>

          <a 
            href="https://t.me/rizni_mrm20020225" 
            className="group relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-cyan-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Send size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300 relative z-10" />
          </a>

        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8 max-w-2xl w-full">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Work Together?</h3>
          <p className="text-gray-300 mb-6">
            Whether you have a project in mind or just want to chat about technology, 
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:mohamadrizni42@gmail.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <Mail size={18} className="mr-2" />
              Send Email
            </a>
            {/*<a 
              href="/files/Risni Rafeek.pdf" 
              download="Risni_Rafeek_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-purple-500/50 text-purple-300 rounded-lg hover:bg-purple-500/10 hover:border-purple-400/70 transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>*/}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Footer */}
<footer className="relative overflow-hidden border-t border-gray-700/50">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent)] opacity-80"></div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(139,92,246,0.05),transparent)] opacity-60"></div>
  
  {/* Animated background elements */}
  <div className="absolute inset-0">
    <div className="absolute top-4 left-1/4 w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"></div>
    <div className="absolute bottom-4 right-1/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
    <div className="absolute top-6 right-1/4 w-0.5 h-0.5 bg-pink-400/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
  </div>

  <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      
      {/* Main Footer Content */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        
        {/* Brand Section */}
        <div className="text-center md:text-left">
          <div className="inline-flex items-center justify-center md:justify-start mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mr-3">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Risni Rafeek
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
            Software Developer passionate about creating innovative solutions and beautiful user experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <nav className="flex flex-col space-y-2">
            <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">Home</a>
            <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">About</a>
            <a href="#education" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">Education</a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm">Contact</a>
          </nav>
        </div>

        {/* Connect Section */}
        <div className="text-center md:text-right">
          <h4 className="text-white font-semibold mb-4">Let's Connect</h4>
          <div className="flex justify-center md:justify-end space-x-3 mb-4">
            <a 
              href="https://linkedin.com/in/mohamadrizni" 
              className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-lg hover:border-blue-400/50 hover:from-blue-500/10 hover:to-blue-600/10 transition-all duration-300 hover:transform hover:scale-110"
            >
              <Linkedin size={14} className="text-gray-400 hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a 
              href="https://github.com/risni-mohamed" 
              className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-lg hover:border-gray-400/50 hover:from-gray-600/10 hover:to-gray-500/10 transition-all duration-300 hover:transform hover:scale-110"
            >
              <Github size={14} className="text-gray-400 hover:text-gray-300 transition-colors duration-300" />
            </a>
            <a 
              href="https://x.com/rizmrm" 
              className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-lg hover:border-blue-400/50 hover:from-blue-500/10 hover:to-blue-600/10 transition-all duration-300 hover:transform hover:scale-110"
            >
              <Twitter size={14} className="text-gray-400 hover:text-blue-400 transition-colors duration-300" />
            </a>
          </div>
          <a 
            href="mailto:mohamadrizni42@gmail.com" 
            className="inline-flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300 text-sm"
          >
            <Mail size={14} className="mr-2" />
            mohamadrizni42@gmail.com
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gradient-to-r from-transparent via-gray-700/50 to-transparent"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Copyright */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} 
          </span>
          <span className="text-white font-medium text-sm">Risni Rafeek</span>
          <span className="text-gray-400 text-sm">All rights reserved.</span>
        </div>

        {/* Status Badge */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full px-3 py-1">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs font-medium">Available for work</span>
          </div>
        </div>

        {/* Built with love */}
        <div className="flex items-center space-x-1 text-gray-400 text-sm">
          <span>Built with</span>
          <svg className="w-4 h-4 text-red-400 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
          <span>and ☕</span>
        </div>
      </div>

      {/* Scroll to top button */}
      <div className="absolute bottom-4 right-4">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500/20"
        >
          <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>

    </div>
  </div>
</footer>

    </div>
  );
}

export default App;