
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              Hi, I'm Tahira Mehta, a passionate Computer Science student at NIT Jalandhar (2023–2027) 
              with a mission to create inclusive digital experiences that truly matter.
            </p>
            <p>
              Currently sharpening my skills as an intern at Vault of Codes, I bring a unique blend of 
              technical expertise and design thinking to every project. As a UI/UX Designer at Google 
              Developer Student Clubs and Team Lead at IOTA, I've learned that the best solutions come 
              from understanding real human needs.
            </p>
            <p>
              My focus is on accessibility-first design and development, creating solutions that empower 
              everyone—especially those who are often overlooked by traditional tech approaches.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="glass-effect rounded-3xl p-8 text-center transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="text-6xl mb-4 relative z-10">👩‍💻</div>
              <h3 className="text-xl font-semibold text-blue-400 mb-2 relative z-10">Passionate Creator</h3>
              <p className="text-slate-300 relative z-10">Building inclusive digital experiences for everyone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
