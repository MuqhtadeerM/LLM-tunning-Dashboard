import React from "react";

const Hero = () => {
  return (
    <section className="container px-4 py-20 mx-auto text-center animate-slide-up">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
          The 3 Biggest Challenges in Fine-Tuning LLMs
        </h1>

        {/* Subtitle */}
        <p className="mb-4 text-xl text-gray-300 md:text-2xl">
          A Frontend Developer's Perspective in 2025
        </p>

        {/* Description */}
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-400">
          Exploring the critical obstacles developers face when fine-tuning
          Large Language Models for frontend development.
        </p>

        {/* Simple Tech Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 text-xs font-medium text-gray-400 border rounded-full bg-white/5 backdrop-blur-sm border-white/10">
          <span>React</span>
          <span className="text-gray-500">•</span>
          <span>Tailwind</span>
          <span className="text-gray-500">•</span>
          <span>Vite</span>
          <span className="text-gray-500">•</span>
          <span>2025</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
