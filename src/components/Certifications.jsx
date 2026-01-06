import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, FileText, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certifications = () => {
  const certifications = [
    {
      title: 'Technical Support Fundamentals',
      issuer: 'Google',
      date: 'November 2025',
      credentialId: 'GOOG-IT-001',
      description:
        'Mastered the fundamentals of IT support, including troubleshooting, customer service, networking, operating systems, and security protocols.',
      pdfName: 'TechnicalSupportFundamentalCert.pdf',
      verificationUrl: 'https://www.coursera.org/verify/EYCM6K2LYK10',
    },
    {
      title: 'The Bits and Bytes of Computer Networking',
      issuer: 'Google',
      date: 'December 2025',
      credentialId: 'GOOG-IT-003',
      description:
        'Deep dive into computer networking, including TCP/IP protocols, DNS, DHCP, and troubleshooting network connectivity issues.',
      pdfName: 'TheBitsandBytesCert.pdf',
      verificationUrl: 'https://www.coursera.org/verify/GXACQZY45CW7',
    },
    {
      title: 'Operating Systems and You: Becoming a Power User',
      issuer: 'Google',
      date: 'January 2026',
      credentialId: 'GOOG-IT-002',
      description:
        'Gained advanced knowledge of Windows and Linux operating systems, covering user management, software configuration, and file systems.',
      pdfName: 'OperatingSystemsandYou.pdf',
      verificationUrl: 'https://www.coursera.org/verify/9QNIGDEBM1MT',
    },
    {
      title: 'System Administration and IT Infrastructure Services',
      issuer: 'Google',
      date: 'January 2026',
      credentialId: 'GOOG-IT-004',
      description:
        'Learned core system administration tasks, infrastructure services, and best practices for managing users, services, and enterprise environments.',
      pdfName: 'SystemAdministrator.pdf',
      // If you have a Coursera verify link, drop it here. Otherwise, keep it to your cert PDF.
      verificationUrl: 'https://www.coursera.org/verify/IBZO8E1TFB3U',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional Certificates
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Google IT Support Professional Specialization
          </p>
        </motion.div>

        {/* ✅ Updated grid so 4 items looks clean */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.credentialId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:shadow-blue-500/10 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                  <Award className="w-8 h-8 text-blue-400" />
                </div>
                <div className="flex items-center gap-1 text-xs font-medium text-green-400 bg-green-400/10 px-2 py-1 rounded-full border border-green-400/20">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-blue-400 text-sm font-medium mb-3">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {cert.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-700/50 space-y-4">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Issued: {cert.date}</span>

                  <a
                    href={cert.verificationUrl}
                    target={cert.verificationUrl.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
                  >
                    Credential Verification
                  </a>
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-slate-600 text-gray-300 hover:text-white hover:bg-slate-700 hover:border-slate-500 transition-all duration-200"
                >
                  <a href={`/${cert.pdfName}`} download>
                    <FileText className="w-4 h-4 mr-2 text-blue-400" />
                    Download PDF
                    <Download className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
