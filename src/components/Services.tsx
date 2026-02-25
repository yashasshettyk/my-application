import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Palette,
  Zap,
  ShoppingCart,
  BarChart3,
  Shield,
  Smartphone,
  Search,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Custom Web Design",
    description:
      "Pixel-perfect, brand-aligned designs that captivate visitors and reflect your business identity.",
    color: "#6c63ff",
    gradient: "from-[#6c63ff]/20 to-[#6c63ff]/5",
    delay: 0,
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Lightning Performance",
    description:
      "Sub-second load times with Vite & React. 95+ Lighthouse scores guaranteed for every project.",
    color: "#43e8d8",
    gradient: "from-[#43e8d8]/20 to-[#43e8d8]/5",
    delay: 0.1,
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Fully Responsive",
    description:
      "Flawlessly adapts to every screen — mobile, tablet, and desktop. No compromises.",
    color: "#ff6584",
    gradient: "from-[#ff6584]/20 to-[#ff6584]/5",
    delay: 0.2,
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-Commerce Ready",
    description:
      "Seamless online stores with secure payment integrations, inventory, and order management.",
    color: "#fbbf24",
    gradient: "from-[#fbbf24]/20 to-[#fbbf24]/5",
    delay: 0.3,
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "SEO Optimized",
    description:
      "Built with structured data, meta tags, and Core Web Vitals — rank higher from day one.",
    color: "#34d399",
    gradient: "from-[#34d399]/20 to-[#34d399]/5",
    delay: 0.4,
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics & Tracking",
    description:
      "Google Analytics, heat maps, and conversion funnels set up so you always know what's working.",
    color: "#a78bfa",
    gradient: "from-[#a78bfa]/20 to-[#a78bfa]/5",
    delay: 0.5,
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Reliable",
    description:
      "SSL, automated backups, and 99.9% uptime hosting. Your business is always online.",
    color: "#fb923c",
    gradient: "from-[#fb923c]/20 to-[#fb923c]/5",
    delay: 0.6,
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Ongoing Support",
    description:
      "Post-launch maintenance, content updates, and 24/7 support. We're your long-term tech partner.",
    color: "#38bdf8",
    gradient: "from-[#38bdf8]/20 to-[#38bdf8]/5",
    delay: 0.7,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: service.delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl p-6 glass border border-white/5 hover:border-opacity-30 transition-all duration-300 cursor-default overflow-hidden"
      style={{ "--card-color": service.color } as React.CSSProperties}
    >
      {/* Background gradient on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
      />

      {/* Number */}
      <span className="absolute top-4 right-5 text-5xl font-black opacity-5 text-white">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative z-10">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${service.color}20`, color: service.color }}
        >
          {service.icon}
        </div>

        <h3 className="text-white font-bold text-lg mb-3 leading-tight">
          {service.title}
        </h3>
        <p className="text-[#8888aa] text-sm leading-relaxed">{service.description}</p>

        {/* Arrow */}
        <div
          className="mt-5 flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
          style={{ color: service.color }}
        >
          Learn more
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-[#6c63ff]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[#6c63ff] mb-5 border border-[#6c63ff]/30"
          >
            <Zap className="w-4 h-4" />
            What We Offer
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5"
          >
            Everything Your Business{" "}
            <span className="gradient-text">Needs Online</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From design to deployment — we handle every aspect of your web presence
            so you can focus on running your business.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
