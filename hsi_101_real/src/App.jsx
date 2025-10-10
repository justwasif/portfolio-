import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap');

        * {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        .animate-float {
          animation: float 20s infinite ease-in-out;
        }

        .animate-float-reverse {
          animation: float 15s infinite ease-in-out reverse;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-200"
      >
        <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-full -top-64 -right-64 animate-float" />
        <div className="absolute w-[300px] h-[300px] bg-gradient-to-br from-blue-500/5 to-transparent rounded-full -bottom-32 -left-32 animate-float-reverse" />

        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 tracking-tight">
            Mohammed Wasif Ansari
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-gray-700 mb-6">
            Designing Structures | Building Code
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed px-4">
            A B.Arch student at IIT Roorkee exploring the intersection of architectural design and decentralized technology.
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-10 py-4 bg-blue-600 text-white rounded-full font-semibold transition-all hover:bg-blue-700 hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
              View My Work 👇
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 bg-transparent text-blue-600 border-2 border-blue-600 rounded-full font-semibold transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1"
            >
              Get in Touch ✉️
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-24 bg-gray-50 fade-in ${isVisible.about ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            About Me
            <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-blue-600" />
          </h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a Bachelor of Architecture student at the Indian Institute of Technology, Roorkee, with a deep passion for design and technology. My journey is focused on exploring the powerful intersection of architecture, web development, and blockchain.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I enjoy building innovative projects that combine creativity with practical, code-driven solutions, and I am constantly learning new tools and frameworks. My goal is to contribute to impactful projects while pushing the boundaries of what's possible at the crossroads of design and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className={`py-24 bg-white fade-in ${isVisible.skills ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            My Tech Stack & Tools
            <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-blue-600" />
          </h2>
          <div className="grid md:grid-cols-3 gap-12 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Web & Blockchain</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'Solidity', 'ether.js', 'HTML', 'Tailwind CSS', 'Rust'].map((tech) => (
                  <span
                    key={tech}
                    className="px-6 py-3 bg-gray-50 rounded-full text-gray-700 transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Programming Languages</h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'C++ (Basic)'].map((tech) => (
                  <span
                    key={tech}
                    className="px-6 py-3 bg-gray-50 rounded-full text-gray-700 transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Design & Architecture</h3>
              <div className="flex flex-wrap gap-3">
                {['AutoCAD', 'Android Studio', 'Figma'].map((tech) => (
                  <span
                    key={tech}
                    className="px-6 py-3 bg-gray-50 rounded-full text-gray-700 transition-all hover:bg-blue-600 hover:text-white hover:-translate-y-1 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 bg-gray-50 fade-in ${isVisible.projects ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 relative inline-block left-1/2 -translate-x-1/2">
            Projects & Achievements
            <span className="absolute bottom-[-10px] left-0 w-16 h-1 bg-blue-600" />
          </h2>
          <div className="grid gap-8 mt-12">
            {/* EthOnline */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-blue-600">
              <img
                src="https://miro.medium.com/v2/1*fHerDrCZy-D9W787CboY8Q.png"
                alt="EthOnline"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">EthOnline Qualifier</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Selected to participate in a competitive global hackathon focused on the Ethereum ecosystem. This experience involved rapid prototyping and collaboration, sharpening my skills in smart contract development and decentralized application architecture.
              </p>
              <div className="mb-6">
                <strong className="text-gray-900 block mb-2">Technologies:</strong>
                <span className="text-gray-600">Solidity, ether.js, JavaScript</span>
              </div>
            </div>

            {/* School of Solana */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-blue-600">
              <img
                src="https://raw.githubusercontent.com/Ackee-Blockchain/school-of-solana/master/.banner/banner.png"
                alt="School of Solana"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">School of Solana Graduate</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Completed an intensive program covering the fundamentals of the Solana blockchain. Developed a foundational understanding of building high-performance, scalable dApps using Rust and the Solana framework.
              </p>
              <div className="mb-6">
                <strong className="text-gray-900 block mb-2">Technologies:</strong>
                <span className="text-gray-600">Rust, Solana</span>
              </div>
            </div>

            {/* Portfolio Project */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-blue-600">
              <h3 className="text-3xl font-semibold mb-4 text-gray-900">Portfolio Web Application</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A dynamic and responsive React-based portfolio showcasing my work and skills. This project demonstrates my ability to create modern user interfaces with clean design principles and smooth user experience.
              </p>
              <div className="mb-6">
                <strong className="text-gray-900 block mb-2">Technologies:</strong>
                <span className="text-gray-600">React, JavaScript, HTML, CSS</span>
              </div>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/justwasif/portfolio-.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold transition-all hover:bg-blue-700 hover:-translate-y-1"
                >
                  🔗 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 bg-white text-center fade-in ${isVisible.contact ? 'visible' : ''}`}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Let's Create Something Together.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious team.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:wasifpro100@gmail.com"
              className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-full text-gray-700 transition-all hover:text-blue-600 hover:-translate-y-1 hover:bg-gray-100"
            >
              <span>✉️</span> wasifpro100@gmail.com
            </a>

            <a
              href="https://github.com/justwasif"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-full text-gray-700 transition-all hover:text-blue-600 hover:-translate-y-1 hover:bg-gray-100"
            >
              <span>💻</span> GitHub
            </a>

            <a
              href="https://x.com/wasif_genz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-full text-gray-700 transition-all hover:text-blue-600 hover:-translate-y-1 hover:bg-gray-100"
            >
              <span>🐦</span> X (Twitter)
            </a>

            <a
              href="https://www.instagram.com/slaysid6/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-full text-gray-700 transition-all hover:text-blue-600 hover:-translate-y-1 hover:bg-gray-100"
            >
              <span>📸</span> Instagram
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; 2025 Mohammed Wasif Ansari. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
