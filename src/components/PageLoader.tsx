import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [phase, setPhase] = useState<"bolt" | "flash" | "done">("bolt");

  useEffect(() => {
    // Phase 1: show lightning bolt build-up (0 → 900ms)
    const flash = setTimeout(() => setPhase("flash"), 900);
    // Phase 2: white flash (900 → 1150ms)
    const done = setTimeout(() => setPhase("done"), 1150);
    return () => {
      clearTimeout(flash);
      clearTimeout(done);
    };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f] overflow-hidden"
        >
          {/* Grid pattern bg */}
          <div className="absolute inset-0 grid-pattern opacity-40" />

          {/* Radial glow that pulses before flash */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(108,99,255,0.25) 0%, transparent 70%)",
            }}
            animate={
              phase === "bolt"
                ? { scale: [0.6, 1.1, 0.9, 1.2], opacity: [0, 0.8, 0.6, 1] }
                : { scale: 4, opacity: 0 }
            }
            transition={
              phase === "bolt"
                ? { duration: 0.9, ease: "easeOut" }
                : { duration: 0.25, ease: "easeIn" }
            }
          />

          {/* Lightning bolt SVG — draws itself via stroke-dashoffset */}
          <motion.div
            className="relative z-10"
            animate={
              phase === "flash"
                ? { scale: 1.6, opacity: 0 }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.2, ease: "easeIn" }}
          >
            <svg
              width="80"
              height="120"
              viewBox="0 0 80 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Glow shadow bolt */}
              <motion.polygon
                points="52,0 18,58 38,58 28,120 62,48 42,48"
                fill="rgba(108,99,255,0.25)"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.3, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                style={{ transformOrigin: "40px 60px" }}
              />
              {/* Main bolt — fills with gradient */}
              <motion.polygon
                points="52,0 18,58 38,58 28,120 62,48 42,48"
                fill="url(#boltGrad)"
                initial={{ clipPath: "inset(100% 0 0 0)" }}
                animate={{ clipPath: "inset(0% 0 0 0)" }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              />
              {/* Spark lines */}
              {[
                { x1: 62, y1: 30, x2: 78, y2: 22 },
                { x1: 18, y1: 58, x2: 2,  y2: 50 },
                { x1: 66, y1: 58, x2: 78, y2: 62 },
                { x1: 28, y1: 90, x2: 14, y2: 98 },
                { x1: 54, y1: 10, x2: 62, y2: 0  },
              ].map((line, i) => (
                <motion.line
                  key={i}
                  x1={line.x1} y1={line.y1}
                  x2={line.x2} y2={line.y2}
                  stroke="url(#sparkGrad)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: [0, 1, 0.6] }}
                  transition={{ duration: 0.3, delay: 0.55 + i * 0.06, ease: "easeOut" }}
                />
              ))}
              <defs>
                <linearGradient id="boltGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="40%" stopColor="#8b83ff" />
                  <stop offset="100%" stopColor="#43e8d8" />
                </linearGradient>
                <linearGradient id="sparkGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="100%" stopColor="#43e8d8" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>

          {/* Brand name fades in below bolt */}
          <motion.div
            className="absolute bottom-[calc(50%-120px)] flex flex-col items-center gap-1"
            initial={{ opacity: 0, y: 10 }}
            animate={
              phase === "flash"
                ? { opacity: 0, y: -10 }
                : { opacity: 1, y: 0 }
            }
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <span className="text-2xl font-black tracking-tight gradient-text">
              WebCraft
            </span>
            <span className="text-[#8888aa] text-xs tracking-[0.25em] uppercase">
              Loading...
            </span>
          </motion.div>

          {/* White flash overlay */}
          <AnimatePresence>
            {phase === "flash" && (
              <motion.div
                key="flash"
                className="absolute inset-0 bg-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
