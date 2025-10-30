export const challenges = [
  {
    id: 1,
    title: "Overfitting & Catastrophic Forgetting",
    icon: "🧠",
    color: "from-blue-500 to-cyan-500",
    description:
      "Fine-tuning on specialized frontend data can cause the LLM to perform well for those but poorly for general cases or unrelated components.",
    details: [
      {
        subtitle: "The Problem",
        content:
          "Fine-tuning on specialized frontend data (e.g., UI code, JSX, Tailwind classes) can cause the LLM to perform well for those but poorly for general cases or unrelated components.",
      },
      {
        subtitle: "Real Risk",
        content:
          "There's a real risk of the model 'forgetting' broader context, like accessibility, performance, or new framework updates, if only niche frontend samples are used for training.",
      },
    ],
    examples: [
      "Over-specialized JSX patterns",
      "Loss of accessibility knowledge",
      "Forgetting performance optimization",
      "Missing framework updates",
    ],
    impact: "High",
    severity: "Critical",
  },
  {
    id: 2,
    title: "Bias Amplification & Data Complexity",
    icon: "⚖️",
    color: "from-purple-500 to-pink-500",
    description:
      "LLMs trained just on historical code may learn and exaggerate bad patterns, deprecated libraries, or specific design biases.",
    details: [
      {
        subtitle: "Pattern Problems",
        content:
          "LLMs trained just on historical code or project styles (say, a single company's React+Tailwind stack) may learn and exaggerate bad patterns, deprecated libraries, or specific design biases (e.g., non-responsive layouts, poor color contrast).",
      },
      {
        subtitle: "Data Quality",
        content:
          "Clean, diverse, and well-structured frontend datasets are hard to gather, especially those balancing various frameworks (React, Vue, etc.), CSS-in-JS, and accessibility practices.",
      },
    ],
    examples: [
      "Non-responsive layouts",
      "Poor color contrast",
      "Deprecated library usage",
      "Framework-specific biases",
    ],
    impact: "High",
    severity: "Major",
  },
  {
    id: 3,
    title: "Computational Cost & Deployment Hurdles",
    icon: "💻",
    color: "from-orange-500 to-red-500",
    description:
      "Fine-tuning LLMs with multi-modal UI data is resource-intensive and requires strong GPUs and custom architecture tweaks.",
    details: [
      {
        subtitle: "Resource Demands",
        content:
          "Fine-tuning LLMs with multi-modal UI data (JSX, screenshots, design specs) is resource-intensive—requiring strong GPUs, good labeling, and custom architecture tweaks (e.g., structure-aware attention for UI layout).",
      },
      {
        subtitle: "Deployment Challenges",
        content:
          "Running these custom models on-device, in browser, or via API demands well-optimized conversion pipelines and may face challenges with inference speed, bundle size, and integration into Vite/Tailwind setups.",
      },
    ],
    examples: [
      "GPU requirements",
      "Inference speed issues",
      "Large bundle sizes",
      "Complex integration pipelines",
    ],
    impact: "Very High",
    severity: "Critical",
  },
];
