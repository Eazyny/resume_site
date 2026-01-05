import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DecodedText from '@/components/ui/decode-text';

const RESUME_URL = '/ozony-elsevif-resume.pdf';

const Hero = () => {
  const handleDownloadResume = () => {
    const a = document.createElement('a');
    a.href = RESUME_URL;
    a.download = 'ozony-elsevif-resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-blue-400 font-semibold mb-2">
                Based in NYC | IT Support (Entry-Level)
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                Ozony Elsevif
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                IT Support Technician | Help Desk
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                IT Support Technician with a passion for customer service and problem-solving.
                Currently completing the Google IT Support Certificate. Strong in troubleshooting,
                Windows fundamentals, networking basics (DNS/TCP/IP), and customer support. I write
                clear documentation and enjoy solving problems end-to-end.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-base"
              >
                <Download className="w-5 h-5 mr-2" />
                <DecodedText speed={12}>Download Resume</DecodedText>
              </Button>

              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-6 text-base"
              >
                <Mail className="w-5 h-5 mr-2" />
                <DecodedText speed={12}>Contact Me</DecodedText>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* glow blob behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl" />

              {/* ✅ THIS wrapper is what actually clips & rounds */}
              <div className="relative z-10 w-full h-full overflow-hidden rounded-2xl">
                <img
                  src="/ozony-elsevif.webp"
                  alt="Ozony Elsevif"
                  className="w-full h-full object-cover object-[20%_20%] -scale-x-100"
                  decoding="async"
                  fetchpriority="high"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
