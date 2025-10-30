import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ChallengeSection from "./components/ChallengeSection";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

function App() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <ChallengeSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
