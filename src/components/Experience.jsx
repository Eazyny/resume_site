import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Community Manager',
      company: 'Troverse / Web3 Projects',
      period: '2021 - Present',
      description:
        'Primary point of contact for community questions and technical issues, providing clear step-by-step support across multiple channels. Create documentation that reduces repeat questions and improves self-service.',
      achievements: [
        'Supported users with troubleshooting and product guidance across Discord/Telegram/X, keeping responses clear and structured',
        'Created and maintained FAQs, announcements, and how-to posts to reduce repeat issues and improve onboarding',
        'Triaged issues, captured key details, and escalated when needed—then followed through to confirm resolution',
        'Kept stakeholders informed with clean updates and summaries during time-sensitive situations'
      ]
    },
    {
      title: 'Environmental Services Manager',
      company: 'NYC Health + Hospitals (New York, NY)',
      period: '2015 - 2022',
      description:
        'Led large-scale hospital operations in a fast-paced environment with time-sensitive workflows. Managed teams, scheduling, inspections, and rapid-response execution while coordinating with clinical and operations stakeholders.',
      achievements: [
        'Led an environmental services team of 267 members, handling scheduling, task assignment, and performance feedback',
        'Ensured cleanliness, safety, and infection-control standards through regular inspections and follow-up',
        'Coordinated rapid-response support for priority areas (ER, OR, discharges), helping improve room turnaround times',
        'Communicated with clinical/ops stakeholders to resolve urgent issues with a calm, structured approach'
      ]
    },
    {
      title: 'Front Desk Manager',
      company: 'Howard Johnson (New York, NY)',
      period: '2005 - 2016',
      description:
        'Managed front desk operations in a high-volume, customer-facing environment with constant schedule changes and time-sensitive issues. Built simple, repeatable processes and trained staff to resolve problems fast and consistently.',
      achievements: [
        'Resolved customer issues quickly and professionally, knowing when to escalate and how to de-escalate',
        'Managed scheduling, shift coverage, and daily coordination to keep operations running smoothly',
        'Created basic procedures and staff training for common scenarios to improve consistency and reduce repeat problems'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Work Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience in high-pressure environments with a strong focus on troubleshooting, communication, documentation, and follow-through
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Spacer for alignment */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Content card */}
                <div className="md:w-1/2 bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg shrink-0">
                      <Briefcase className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-blue-400 font-semibold mb-2">
                        {exp.company}
                      </p>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-4">{exp.description}</p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 shrink-0"></div>
                        <p className="text-gray-300 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
