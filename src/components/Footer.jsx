import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo + Title */}
          <a
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors"
            aria-label="Go to homepage"
          >
            <span className="oz-logo-wrap" aria-hidden="true">
              <span className="oz-logo" />
            </span>

            <span className="font-medium">
              Ozony Elsevif - IT Support Technician
            </span>
          </a>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
