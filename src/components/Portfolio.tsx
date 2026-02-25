import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Restaurant", "Salon", "Retail", "Professional", "Healthcare"];

const projects = [
  {
    title: "La Maison Rouge",
    category: "Restaurant",
    description: "Elegant French bistro with online reservations, menu showcase, and delivery integration.",
    tags: ["React", "Booking API", "Stripe"],
    color: "#ff6584",
    gradient: "from-[#ff6584] to-[#ff9a6c]",
    emoji: "🍽️",
    stats: { visits: "12K/mo", conversion: "+220%", rating: "4.9★" },
    featured: true,
  },
  {
    title: "Glow Beauty Studio",
    category: "Salon",
    description: "Modern beauty salon with appointment booking, service gallery, and loyalty rewards.",
    tags: ["Next.js", "Calendly", "Tailwind"],
    color: "#a78bfa",
    gradient: "from-[#a78bfa] to-[#6c63ff]",
    emoji: "💅",
    stats: { visits: "8K/mo", conversion: "+185%", rating: "5.0★" },
    featured: false,
  },
  {
    title: "Summit Law Group",
    category: "Professional",
    description: "Professional law firm website with case consultations, practice areas, and attorney profiles.",
    tags: ["React", "CMS", "Animations"],
    color: "#43e8d8",
    gradient: "from-[#43e8d8] to-[#38bdf8]",
    emoji: "⚖️",
    stats: { visits: "5K/mo", conversion: "+310%", rating: "4.8★" },
    featured: false,
  },
  {
    title: "Urban Threads Boutique",
    category: "Retail",
    description: "Fashion e-commerce store with product catalog, lookbooks, and seamless checkout.",
    tags: ["React", "Shopify", "Analytics"],
    color: "#fbbf24",
    gradient: "from-[#fbbf24] to-[#fb923c]",
    emoji: "👗",
    stats: { visits: "20K/mo", conversion: "+160%", rating: "4.9★" },
    featured: true,
  },
  {
    title: "WellCare Clinic",
    category: "Healthcare",
    description: "Patient-friendly medical clinic with appointment booking and service information.",
    tags: ["React", "HIPAA", "Forms"],
    color: "#34d399",
    gradient: "from-[#34d399] to-[#10b981]",
    emoji: "🏥",
    stats: { visits: "7K/mo", conversion: "+240%", rating: "4.7★" },
    featured: false,
  },
  {
    title: "Pixel Perfect Prints",
    category: "Retail",
    description: "Custom print shop with live design preview, product configurator, and order tracking.",
    tags: ["Vue", "Canvas API", "Stripe"],
    color: "#38bdf8",
    gradient: "from-[#38bdf8] to-[#6c63ff]",
    emoji: "🖨️",
    stats: { visits: "9K/mo", conversion: "+195%", rating: "4.8★" },
    featured: false,
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={cn(
        "group relative rounded-3xl overflow-hidden glass border border-white/5 hover:border-white/10 transition-all duration-500 cursor-pointer",
        project.featured ? "lg:col-span-1" : ""
      )}
    >
      {/* Mock browser preview */}
      <div className="relative h-52 overflow-hidden">
        {/* Browser chrome */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-[#1a1a30] flex items-center px-3 gap-1.5 z-10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          <div className="flex-1 mx-3 h-4 rounded-md bg-[#0a0a0f] flex items-center px-2">
            <span className="text-[#8888aa] text-[9px] truncate">www.{project.title.toLowerCase().replace(/\s+/g, "")}.com</span>
          </div>
        </div>

        {/* Preview content */}
        <div
          className={`absolute inset-0 mt-8 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
        />
        <div className="absolute inset-0 mt-8 flex flex-col items-center justify-center gap-3">
          <span className="text-6xl">{project.emoji}</span>
          <div className="text-center px-4">
            <div
              className="text-2xl font-black mb-1"
              style={{ color: project.color }}
            >
              {project.title}
            </div>
            <div className="text-[#8888aa] text-xs">{project.category}</div>
          </div>
        </div>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 mt-8 flex items-center justify-center gap-3"
              style={{ backgroundColor: `${project.color}15` }}
            >
              <motion.button
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold glass border border-white/20"
              >
                <Eye className="w-4 h-4" /> Preview
              </motion.button>
              <motion.button
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-semibold"
                style={{ backgroundColor: project.color }}
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card body */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
            <span
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full mt-1.5 inline-block"
              style={{ backgroundColor: `${project.color}20`, color: project.color }}
            >
              {project.category}
            </span>
          </div>
          <ChevronRight
            className="w-5 h-5 text-[#8888aa] group-hover:translate-x-1 transition-transform"
            style={{ color: hovered ? project.color : undefined }}
          />
        </div>

        <p className="text-[#8888aa] text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Stats */}
        <div className="flex gap-3 mb-4">
          {Object.entries(project.stats).map(([key, val]) => (
            <div key={key} className="flex-1 text-center py-2 rounded-xl bg-white/3">
              <div className="text-white font-bold text-sm">{val}</div>
              <div className="text-[#8888aa] text-[10px] capitalize">{key}</div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded-md glass text-[#8888aa] border border-white/5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 relative">
      <div className="absolute inset-0 hero-bg pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[#43e8d8] mb-5 border border-[#43e8d8]/30"
          >
            <Eye className="w-4 h-4" />
            Our Work
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5"
          >
            Businesses We've{" "}
            <span className="gradient-text">Transformed</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-2xl mx-auto"
          >
            Real businesses, real results. Here's a glimpse of what we've built for our clients.
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                activeCategory === cat
                  ? "bg-[#6c63ff] text-white glow-sm"
                  : "glass text-[#8888aa] hover:text-white border border-white/5 hover:border-[#6c63ff]/30"
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-[#8888aa] mb-4">Want something like this for your business?</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#6c63ff] to-[#43e8d8] text-white font-bold text-lg glow"
          >
            Let's Build Yours →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
