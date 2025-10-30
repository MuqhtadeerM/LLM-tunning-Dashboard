import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 glass-effect">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © 2025 LLM Fine-Tuning Insights | Frontend Developer's Perspective
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="text-gray-400 transition-colors duration-300 hover:text-primary"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors duration-300 hover:text-primary"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-400 transition-colors duration-300 hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="pt-6 mt-6 text-center border-t border-white border-opacity-10">
          <p className="text-xs text-gray-500">
            Built with React, Tailwind CSS, and Vite | Powered by Modern Web
            Technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
