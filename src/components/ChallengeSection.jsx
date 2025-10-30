import React from "react";
import ChallengeCard from "./ChallengeCard";
import { challenges } from "../data/challenges";

const ChallengeSection = () => {
  return (
    <section id="challenges" className="container px-4 py-16 mx-auto">
      {/* Header */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
          Key Challenges
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400">
          Understanding the major obstacles in fine-tuning LLMs for frontend
          development workflows
        </p>
      </div>

      {/* Challenge Cards Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {challenges.map((challenge, index) => (
          <ChallengeCard
            key={challenge.id}
            challenge={challenge}
            index={index}
          />
        ))}
      </div>

      {/* Summary Section */}
      <div className="p-8 mt-16 border bg-white/5 backdrop-blur-xl rounded-2xl border-white/10">
        <h3 className="mb-6 text-2xl font-bold text-center text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
          Why This Matters
        </h3>
        <div className="grid gap-8 text-center md:grid-cols-3">
          <div className="p-6 border bg-white/5 rounded-xl border-white/10">
            <div className="mb-3 text-4xl">Target</div>
            <h4 className="mb-2 text-lg font-semibold text-white">
              Model Quality
            </h4>
            <p className="text-sm text-gray-400">
              Ensuring LLMs produce reliable, high-quality frontend code
            </p>
          </div>

          <div className="p-6 border bg-white/5 rounded-xl border-white/10">
            <div className="mb-3 text-4xl">Lightning</div>
            <h4 className="mb-2 text-lg font-semibold text-white">
              Performance
            </h4>
            <p className="text-sm text-gray-400">
              Balancing model capability with deployment constraints
            </p>
          </div>

          <div className="p-6 border bg-white/5 rounded-xl border-white/10">
            <div className="mb-3 text-4xl">Cycle</div>
            <h4 className="mb-2 text-lg font-semibold text-white">
              Sustainability
            </h4>
            <p className="text-sm text-gray-400">
              Building models that adapt to evolving frameworks
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSection;
