import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 glass-effect animate-fade-in">
      <div className="container px-4 py-4 mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-3xl">🤖</span>
            <h1 className="text-xl font-bold gradient-text">
              LLM Fine-Tuning 2025
            </h1>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="#challenges"
              className="transition-colors duration-300 hover:text-primary"
            >
              Challenges
            </a>
            <a
              href="#about"
              className="transition-colors duration-300 hover:text-primary"
            >
              About
            </a>
            <button className="px-6 py-2 font-semibold transition-all duration-300 rounded-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50">
              Learn More
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
