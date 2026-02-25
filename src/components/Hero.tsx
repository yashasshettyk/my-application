import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star, TrendingUp } from "lucide-react";

const floatingCards = [
  {
    icon: <TrendingUp className="w-5 h-5 text-[#43e8d8]" />,
    title: "Revenue +180%",
    sub: "After website launch",
    delay: 0,
    position: "top-[18%] right-[8%]",
    floatClass: "animate-float",
  },
  {
    icon: <Star className="w-5 h-5 text-[#fbbf24]" fill="#fbbf24" />,
    title: "5.0 Rating",
    sub: "50+ Happy Clients",
    delay: 0.4,
    position: "bottom-[22%] left-[6%]",
    floatClass: "animate-float-reverse",
  },
  {
    icon: <Sparkles className="w-5 h-5 text-[#ff6584]" />,
    title: "48hr Delivery",
    sub: "Fast turnaround",
    delay: 0.8,
    position: "top-[55%] right-[5%]",
    floatClass: "animate-float",
  },
];

const techStack = ["React", "TypeScript", "Tailwind", "Node.js", "Vite", "Next.js", "Figma", "Framer"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const handleScroll = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  // Particle canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: { x: number; y: number; r: number; dx: number; dy: number; alpha: number }[] = [];
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    let animId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-bg grid-pattern"
      id="hero"
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#6c63ff]/10 blur-[120px] animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#43e8d8]/8 blur-[100px] animate-pulse-glow pointer-events-none" style={{ animationDelay: "1.5s" }} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[#6c63ff] mb-8 border border-[#6c63ff]/30"
          >
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>Professional Web Design Studio</span>
            <span className="w-2 h-2 rounded-full bg-[#43e8d8] animate-pulse" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-6"
          >
            <span className="text-white block">Your Business</span>
            <span className="shimmer-text block">Deserves a</span>
            <span className="gradient-text block">Stunning Website</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-[#8888aa] max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            We craft blazing-fast, beautifully designed websites that turn visitors into
            customers. From restaurants to law firms — your digital storefront, built to convert.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(108,99,255,0.5)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll("#contact")}
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#6c63ff] to-[#43e8d8] text-white font-bold text-lg glow transition-all duration-300"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleScroll("#portfolio")}
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl glass text-white font-bold text-lg border border-[#6c63ff]/30 hover:border-[#6c63ff]/60 transition-all duration-300"
            >
              <span className="w-10 h-10 rounded-full bg-[#6c63ff]/20 flex items-center justify-center group-hover:bg-[#6c63ff]/30 transition-colors">
                <Play className="w-4 h-4 text-[#6c63ff] ml-0.5" fill="currentColor" />
              </span>
              View Our Work
            </motion.button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mb-16"
          >
            {[
              { value: "50+", label: "Websites Launched" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "48hr", label: "Avg. Turnaround" },
              { value: "3x", label: "Avg. Revenue Boost" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black gradient-text">{stat.value}</div>
                <div className="text-sm text-[#8888aa] mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Tech ticker */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative overflow-hidden"
          >
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0f] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0f] to-transparent z-10" />
            <div className="flex gap-6 animate-ticker w-max">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full glass text-[#8888aa] text-sm font-medium border border-[#6c63ff]/10 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Floating cards */}
      {floatingCards.map((card) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 + card.delay }}
          className={`absolute hidden lg:flex ${card.position} ${card.floatClass}`}
        >
          <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3 border border-[#6c63ff]/20 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-[#6c63ff]/10 flex items-center justify-center">
              {card.icon}
            </div>
            <div>
              <p className="text-white font-bold text-sm leading-tight">{card.title}</p>
              <p className="text-[#8888aa] text-xs">{card.sub}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#8888aa] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[#6c63ff]/40 flex items-start justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#6c63ff]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
