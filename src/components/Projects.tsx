
import React from 'react';

const Projects = () => {
  const projects = [
     {
    title: 'SafeSphere',
    tech: 'MERN Stack • WebSockets • Google Maps API',
    description: [
      'Real-time personal safety web app using MERN stack and WebSockets, reducing emergency response time by 30% via auto-alert triggers and location sharing.',
      'Integrated Google Maps API for displaying 10+ nearby help centers and Twilio API to send alerts to 3 emergency contacts instantly via SMS.',
      'Developed a responsive React frontend with Tailwind CSS, including a live tracking map, panic trigger, and real-time alert interface across 3+ device types.'
    ]
  },
  {
    title: 'RisingAbility',
    tech: 'Flask • Tailwind CSS • SQLite',
    description: [
      'Empowerment platform for disabled people created as a Flask web platform integrating 3 key modules—self-awareness logs, community-driven tutorials, and gamified quests—to empower 100+ disabled users.',
      'Developed 5 modules backend with 7 database models for emotion tracking, skill uploads, and XP-based quest logging. Tracked progress and rewarded users with 10+ unique badges, improving retention by 35%.',
      'Implemented a responsive frontend using Tailwind CSS and Alpine.js, supporting mobile and desktop layouts.'
    ]
  },
  {
    title: 'Wordly',
    tech: 'JavaScript • Tailwind CSS',
    description: [
      '5-letter word puzzle game clone developed with 6-attempt logic, real-time feedback, and a curated pool of 2,315 solution words and 12,972 accepted guesses.',
      'Designed a responsive end UI with Tailwind CSS, static pre-guess tiles, and smooth flip animations, supporting mobile and desktop layouts.',
      'Integrated local storage for state saving and deployed to GitHub Pages, reaching 100+ daily users post-launch with <200ms average interaction latency.'
    ]
  }
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-4 hover:shadow-2xl hover:shadow-blue-500/10 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <h3 className="text-xl font-semibold text-blue-400 mb-3 relative z-10">{project.title}</h3>
              <p className="text-purple-400 text-sm mb-4 font-medium relative z-10">{project.tech}</p>
              <p className="text-slate-300 leading-relaxed relative z-10">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
