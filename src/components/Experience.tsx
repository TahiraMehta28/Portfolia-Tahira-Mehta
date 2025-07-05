
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: 'UI/UX Designer',
      company: 'Google Developer Student Clubs',
      period: '2024 - Present',
      description: 'Lead design initiatives for student community projects, creating user-centered designs and conducting usability research.',
      skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping']
    },
    {
      role: 'Team Lead',
      company: 'IOTA',
      period: '2023 - Present',
      description: 'Leading a team of developers and designers to create innovative solutions for real-world problems.',
      skills: ['Team Leadership', 'Project Management', 'Strategic Planning']
    },
    {
      role: 'Intern',
      company: 'Vault of Codes',
      period: '2025',
      description: 'Developed full-stack web applications and collaborated with senior developers on client projects.',
      skills: ['React.js', 'Node.js', 'Database Design', 'API Development']
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 gradient-text">
          Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:transform hover:-translate-y-2 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 relative z-10">
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-1">{exp.role}</h3>
                  <p className="text-lg text-slate-300 mb-2">{exp.company}</p>
                </div>
                <span className="text-purple-400 font-medium text-sm bg-purple-500/10 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed relative z-10">{exp.description}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {exp.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
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
  );
};

export default Experience;
