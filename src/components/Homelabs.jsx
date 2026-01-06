import React from 'react';
import { motion } from 'framer-motion';
import { Server, HardDrive, Shield, Wifi, Terminal, Share2 } from 'lucide-react';

const Homelabs = () => {
  const labs = [
    {
      icon: Share2,
      title: 'Windows File Sharing (SMB) + Permissions',
      stack: ['Windows 10/11', 'SMB', 'NTFS Permissions'],
      description:
        'Set up shared folders, tested access with different accounts, and troubleshot credential / mapped drive issues after password changes.',
      takeaways: [
        'Sharing vs NTFS permissions (effective access)',
        'Credential Manager + re-auth flows',
        'Common “access denied” troubleshooting steps',
      ],
    },
    {
      icon: Terminal,
      title: 'Ubuntu VM + SSH / SCP Workflow',
      stack: ['Ubuntu', 'SSH', 'SCP', 'CLI'],
      description:
        'Installed and maintained an Ubuntu VM, practiced core terminal navigation, file ops, and remote file transfer workflows.',
      takeaways: [
        'Basic Linux filesystem + permissions',
        'Secure remote access basics (SSH)',
        'File transfer methods and when to use them',
      ],
    },
    {
      icon: Wifi,
      title: 'Home Wi-Fi Tuning & Troubleshooting',
      stack: ['Wi-Fi', 'Channels', 'Band Steering'],
      description:
        'Diagnosed inconsistent Wi-Fi performance across rooms, experimented with channel selection and band settings, and compared wired vs wireless baselines.',
      takeaways: [
        'Signal/coverage vs congestion tradeoffs',
        'Channel width impacts (80 vs 160 MHz)',
        'How to isolate client vs router vs environment',
      ],
    },
    {
      icon: Server,
      title: 'Basic Networking Lab: Subnets & Segmentation',
      stack: ['TCP/IP', 'DNS', 'DHCP', 'Subnets'],
      description:
        'Practiced subnet concepts and mapped out small-office style network segmentation plans (guest vs internal vs IoT).',
      takeaways: [
        'Subnetting basics and address planning',
        'Where VLANs typically live (router/switch/AP)',
        'How segmentation improves security and reliability',
      ],
    },
    {
      icon: HardDrive,
      title: 'OS Deployment Concepts (Imaging / Cloning)',
      stack: ['Windows', 'Imaging', 'Deployment'],
      description:
        'Studied deployment methods and when to use cloning/imaging vs upgrades vs clean installs in enterprise environments.',
      takeaways: [
        'When cloning works vs fails (drivers/hardware)',
        'Why standard images + automation matter',
        'Rollback mindset and validation steps',
      ],
    },
    {
      icon: Shield,
      title: 'Security Hygiene: MFA, Updates, and Phishing Basics',
      stack: ['MFA', 'Patch Hygiene', 'Account Security'],
      description:
        'Applied practical security habits and learned how security choices impact access and authentication workflows.',
      takeaways: [
        'MFA best practices and recovery planning',
        'Patch/update importance for endpoints',
        'Phishing patterns + user education',
      ],
    },
  ];

  return (
    <section id="homelabs" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Homelabs
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Hands-on projects I’ve built to practice real-world IT support workflows: troubleshooting,
            networking fundamentals, and system administration basics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {labs.map((lab, index) => {
            const Icon = lab.icon;

            return (
              <motion.div
                key={lab.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white leading-tight">
                    {lab.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {lab.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-slate-800/80 text-gray-300 rounded-full text-sm border border-slate-700/50"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {lab.description}
                </p>

                <div className="pt-4 border-t border-slate-700/50">
                  <p className="text-xs font-semibold text-gray-300 mb-2">
                    Key takeaways
                  </p>
                  <ul className="text-gray-400 text-sm space-y-1 list-disc pl-5">
                    {lab.takeaways.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Homelabs;
