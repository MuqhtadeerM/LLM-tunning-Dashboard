import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Circle 1 - Top Left */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-white/10 to-pink-300/10 blur-3xl animate-[float_6s_ease-in-out_infinite]"></div>

      {/* Circle 2 - Bottom Right (delayed) */}
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-white/10 to-pink-300/10 blur-3xl animate-[float_6s_ease-in-out_infinite]"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Circle 3 - Center (delayed more) */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-br from-white/10 to-pink-300/10 blur-3xl animate-[float_6s_ease-in-out_infinite]"
        style={{ animationDelay: "4s" }}
      ></div>
    </div>
  );
};

export default AnimatedBackground;
