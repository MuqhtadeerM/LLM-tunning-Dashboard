import React, { useState } from "react";

const ChallengeCard = ({ challenge, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Simple color mapping: low, medium, high → green, yellow, red
  const severityColor = {
    low: "from-green-400 to-emerald-500",
    medium: "from-yellow-400 to-amber-500",
    high: "from-red-400 to-rose-500",
  };

  const colorClass =
    severityColor[challenge.severity.toLowerCase()] ||
    "from-blue-400 to-indigo-500";

  return (
    <div
      className="p-8 transition-all duration-300 border bg-white/5 backdrop-blur-xl rounded-2xl border-white/10 hover:shadow-2xl hover:shadow-primary/20 animate-slide-up"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-4">
          <span className="text-5xl">{challenge.icon}</span>
          <div>
            <h3 className="mb-2 text-2xl font-bold text-white">
              {challenge.title}
            </h3>
            <div className="flex items-center space-x-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${colorClass}`}
              >
                {challenge.severity}
              </span>
              <span className="px-3 py-1 text-xs font-semibold text-gray-300 rounded-full bg-white/10">
                Impact: {challenge.impact}
              </span>
            </div>
          </div>
        </div>
        <span className="text-4xl font-bold text-white/20">
          {String(challenge.id).padStart(2, "0")}
        </span>
      </div>

      {/* Description */}
      <p className="mb-6 leading-relaxed text-gray-300">
        {challenge.description}
      </p>

      {/* Details */}
      <div className="mb-6 space-y-4">
        {challenge.details.map((detail, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-lg bg-white/5 border-white/10"
          >
            <h4 className="mb-2 font-semibold text-primary">
              {detail.subtitle}
            </h4>
            <p className="text-sm text-gray-400">{detail.content}</p>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-between w-full p-4 transition-all duration-300 border rounded-lg bg-white/5 border-white/10 hover:bg-white/10"
      >
        <span className="font-semibold text-white">Common Examples</span>
        <span
          className={`transform transition-transform duration-300 text-white ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          Down Arrow
        </span>
      </button>

      {/* Examples List */}
      {isExpanded && (
        <div className="p-4 mt-4 border rounded-lg bg-white/5 border-white/10 animate-slide-up">
          <ul className="space-y-2">
            {challenge.examples.map((example, idx) => (
              <li
                key={idx}
                className="flex items-center space-x-2 text-gray-300"
              >
                <span
                  className={`w-2 h-2 rounded-full bg-gradient-to-r ${colorClass}`}
                ></span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChallengeCard;
