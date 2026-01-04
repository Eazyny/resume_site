import React from 'react';
import { Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Code2 className="w-5 h-5 text-blue-400" />
            <span className="font-medium">Ozony Elsevif - IT Support Technician</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
          
          <p className="text-gray-500 text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;