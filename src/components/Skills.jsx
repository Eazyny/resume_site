import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Network, Wrench, Shield, Terminal, Headphones } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Monitor,
      title: 'Desktop Support',
      skills: ['Windows 10/11', 'Hardware Troubleshooting', 'Software Installs', 'Printer Support', 'Basic macOS'],
    },
    {
      icon: Network,
      title: 'Networking Fundamentals',
      skills: ['TCP/IP', 'DNS', 'DHCP', 'Subnets (Basics)', 'Wi-Fi Troubleshooting'],
    },
    {
      icon: Terminal,
      title: 'Tools I Use',
      skills: [
        'Microsoft 365 (Outlook/Teams)',
        'Google Workspace',
        'Remote Desktop',
        'Command Line',
        'PowerShell',
        'Ticketing Systems',
        'VS Code',
        'VPN Basics',
      ],
    },
    {
      icon: Shield,
      title: 'Security Basics',
      skills: ['MFA', 'Password Hygiene', 'Phishing Awareness', 'Device Updates', 'Least Privilege (Basics)'],
    },
    {
      icon: Wrench,
      title: 'Troubleshooting Workflow',
      skills: ['Issue Triage', 'Root Cause Thinking', 'Reproduce & Isolate', 'Escalation', 'Post-fix Verification'],
    },
    {
      icon: Headphones,
      title: 'Customer Support',
      skills: ['Clear Communication', 'Empathy Under Pressure', 'User Training', 'Status Updates', 'Follow-ups'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical IT support skills focused on troubleshooting, networking fundamentals, and customer service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-800/80 text-gray-300 rounded-full text-sm border border-slate-700/50 hover:border-blue-500/50 hover:text-blue-400 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
