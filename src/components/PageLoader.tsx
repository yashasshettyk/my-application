import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  angle: (i / 24) * 360,
  distance: 80 + Math.random() * 120,
  size: 3 + Math.random() * 5,
  color: i % 3 === 0 ? "#6c63ff" : i % 3 === 1 ? "#43e8d8" : "#ff6584",
  delay: Math.random() * 0.1,
}));

export default function PageLoader() {
  const [phase, setPhase] = useState<"slam" | "shake" | "burst" | "exit" | "done">("slam");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("shake"), 300);
    const t2 = setTimeout(() => setPhase("burst"), 700);
    const t3 = setTimeout(() => setPhase("exit"), 1100);
    const t4 = setTimeout(() => setPhase("done"), 1500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0f] overflow-hidden"
          animate={phase === "exit" ? { opacity: 0, scale: 1.04 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Pulsing bg rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border border-[#6c63ff]/20"
              style={{ width: ring * 160, height: ring * 160 }}
              animate={
                phase === "burst"
                  ? { scale: [1, 2.5], opacity: [0.6, 0] }
                  : { scale: [0.95, 1.05], opacity: [0.2, 0.5] }
              }
              transition={
                phase === "burst"
                  ? { duration: 0.5, delay: ring * 0.07, ease: "easeOut" }
                  : { duration: 0.8, repeat: Infinity, repeatType: "reverse", delay: ring * 0.15 }
              }
            />
          ))}

          {/* Shockwave on burst */}
          {phase === "burst" && (
            <motion.div
              className="absolute rounded-full"
              style={{ background: "radial-gradient(circle, rgba(108,99,255,0.35) 0%, transparent 70%)" }}
              initial={{ width: 100, height: 100, opacity: 1 }}
              animate={{ width: 700, height: 700, opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            />
          )}

          {/* Particles burst */}
          <AnimatePresence>
            {(phase === "burst" || phase === "exit") &&
              PARTICLES.map((p) => {
                const rad = (p.angle * Math.PI) / 180;
                const tx = Math.cos(rad) * p.distance;
                const ty = Math.sin(rad) * p.distance;
                return (
                  <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{ width: p.size, height: p.size, backgroundColor: p.color }}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{ x: tx, y: ty, opacity: 0, scale: 0 }}
                    transition={{ duration: 0.6, delay: p.delay, ease: "easeOut" }}
                  />
                );
              })}
          </AnimatePresence>

          {/* Logo — slams in then shakes */}
          <motion.div
            className="relative z-10 flex flex-col items-center gap-4"
            /* SLAM: drop from top with overshoot */
            initial={{ y: -120, scale: 0.4, opacity: 0, rotate: -8 }}
            animate={
              phase === "slam"
                ? { y: 0, scale: 1, opacity: 1, rotate: 0 }
                : phase === "shake"
                ? {
                    y: 0,
                    scale: [1, 1.08, 0.96, 1.06, 0.98, 1.03, 1],
                    opacity: 1,
                    rotate: [0, -6, 6, -4, 4, -2, 2, 0],
                    x: [0, -8, 8, -6, 6, -3, 3, 0],
                  }
                : phase === "burst"
                ? { y: 0, scale: 1.15, opacity: 1, rotate: 0, x: 0 }
                : { y: 0, scale: 1, opacity: 1, rotate: 0, x: 0 }
            }
            transition={
              phase === "slam"
                ? { type: "spring", stiffness: 600, damping: 18, duration: 0.3 }
                : phase === "shake"
                ? { duration: 0.4, ease: "easeInOut" }
                : { duration: 0.15 }
            }
          >
            {/* Icon */}
            <motion.div
              className="w-24 h-24 rounded-3xl flex items-center justify-center relative"
              style={{
                background: "linear-gradient(135deg, #6c63ff 0%, #43e8d8 100%)",
                boxShadow:
                  phase === "shake" || phase === "burst"
                    ? "0 0 60px rgba(108,99,255,0.9), 0 0 120px rgba(67,232,216,0.5)"
                    : "0 0 30px rgba(108,99,255,0.4)",
              }}
              animate={
                phase === "shake"
                  ? { boxShadow: ["0 0 30px rgba(108,99,255,0.4)", "0 0 80px rgba(108,99,255,1)", "0 0 50px rgba(67,232,216,0.8)", "0 0 80px rgba(255,101,132,0.8)", "0 0 50px rgba(108,99,255,0.6)"] }
                  : {}
              }
              transition={{ duration: 0.4 }}
            >
              <svg width="52" height="76" viewBox="0 0 52 76" fill="none">
                <motion.polygon
                  points="34,0 10,36 24,36 18,76 42,30 28,30"
                  fill="white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.1 }}
                  style={{ transformOrigin: "26px 38px" }}
                />
              </svg>

              {/* Corner sparks on shake */}
              {phase === "shake" &&
                ["-top-2 -right-2", "-top-2 -left-2", "-bottom-2 -right-2", "-bottom-2 -left-2"].map((pos, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${pos} w-3 h-3 rounded-full`}
                    style={{ backgroundColor: i % 2 === 0 ? "#43e8d8" : "#ff6584" }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: [0, 1.5, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 0.35, delay: i * 0.05, ease: "easeOut" }}
                  />
                ))}
            </motion.div>

            {/* Brand text — slaps in after icon */}
            <motion.div className="text-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.3 }}>
              <motion.span
                className="text-3xl font-black tracking-tight"
                style={{ background: "linear-gradient(90deg,#fff 0%,#8b83ff 50%,#43e8d8 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                animate={phase === "shake" ? { scale: [1, 1.06, 0.97, 1.04, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                WebCraft
              </motion.span>
              <motion.div
                className="flex items-center justify-center gap-1.5 mt-1"
                animate={phase === "shake" ? { opacity: [1, 0.4, 1, 0.6, 1] } : {}}
                transition={{ duration: 0.4 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#6c63ff]"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Ground impact shadow */}
          <motion.div
            className="absolute rounded-full bg-[#6c63ff]/20 blur-xl"
            style={{ width: 120, height: 20, top: "calc(50% + 70px)" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              phase === "slam"
                ? { scaleX: 1, opacity: 0.8 }
                : phase === "shake"
                ? { scaleX: [1, 1.4, 0.8, 1.3, 1], opacity: [0.8, 1, 0.6, 1, 0.8] }
                : { scaleX: 1, opacity: 0 }
            }
            transition={phase === "slam" ? { type: "spring", stiffness: 500, damping: 20 } : { duration: 0.4 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
