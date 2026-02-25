import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Owner",
    business: "Glow Beauty Studio",
    emoji: "💅",
    rating: 5,
    text: "WebCraft transformed our salon's online presence completely. Bookings tripled within the first month! The website is stunning, loads instantly, and our clients constantly compliment how easy it is to book appointments. Worth every penny.",
    color: "#a78bfa",
  },
  {
    name: "Marco Rossi",
    role: "Head Chef & Co-owner",
    business: "La Maison Rouge",
    emoji: "🍽️",
    rating: 5,
    text: "I was skeptical about investing in a website, but the ROI has been incredible. We went from zero online orders to 40% of our revenue coming through the site. The team understood our brand perfectly and delivered beyond expectations.",
    color: "#ff6584",
  },
  {
    name: "Jennifer Walsh",
    role: "Managing Partner",
    business: "Summit Law Group",
    emoji: "⚖️",
    rating: 5,
    text: "As a law firm, credibility is everything. WebCraft delivered a site that exudes professionalism and trust. Consultation requests doubled in 6 weeks. Our competitors are still using websites from 2015 — we feel miles ahead.",
    color: "#43e8d8",
  },
  {
    name: "Aisha Patel",
    role: "Founder",
    business: "Urban Threads Boutique",
    emoji: "👗",
    rating: 5,
    text: "From the initial call to launch, the process was seamless. They nailed our aesthetic without us having to explain it ten times. Sales from the website now account for 60% of our total revenue. Absolutely game-changing.",
    color: "#fbbf24",
  },
  {
    name: "Dr. Rohan Mehta",
    role: "Medical Director",
    business: "WellCare Clinic",
    emoji: "🏥",
    rating: 5,
    text: "Patient acquisition through our website has increased by 240%. The appointment booking system is intuitive and we've had zero technical issues since launch. Professional, responsive, and genuinely invested in our success.",
    color: "#34d399",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} className="w-4 h-4 text-[#fbbf24]" fill="#fbbf24" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  const next = () => setActive((p) => (p + 1) % testimonials.length);
  const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[active];

  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[#fbbf24] mb-5 border border-[#fbbf24]/30"
          >
            <Star className="w-4 h-4" fill="currentColor" />
            Client Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5"
          >
            Don't Take Our{" "}
            <span className="gradient-text">Word For It</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-xl mx-auto"
          >
            Real results from real business owners who trusted us with their digital presence.
          </motion.p>
        </div>

        {/* Main featured testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.97 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative glass rounded-3xl p-8 sm:p-12 border border-white/5"
              style={{ borderColor: `${current.color}20` }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-3xl opacity-5"
                style={{ background: `radial-gradient(ellipse at center, ${current.color}, transparent 70%)` }}
              />

              {/* Quote icon */}
              <Quote
                className="absolute top-8 right-8 w-16 h-16 opacity-10"
                style={{ color: current.color }}
              />

              <div className="relative z-10">
                <StarRating rating={current.rating} />
                <p className="text-white text-lg sm:text-xl leading-relaxed mt-6 mb-8 font-light">
                  "{current.text}"
                </p>

                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0"
                    style={{ backgroundColor: `${current.color}20` }}
                  >
                    {current.emoji}
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">{current.name}</div>
                    <div className="text-[#8888aa] text-sm">
                      {current.role} · {current.business}
                    </div>
                  </div>
                  <div
                    className="ml-auto px-4 py-2 rounded-xl text-sm font-semibold"
                    style={{ backgroundColor: `${current.color}15`, color: current.color }}
                  >
                    Verified Client
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prev}
              className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-[#8888aa] hover:text-white hover:border-[#6c63ff]/40 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === active ? "28px" : "8px",
                    height: "8px",
                    backgroundColor: i === active ? testimonials[i].color : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={next}
              className="w-12 h-12 rounded-xl glass border border-white/10 flex items-center justify-center text-[#8888aa] hover:text-white hover:border-[#6c63ff]/40 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {testimonials.map((t, i) => (
            <motion.button
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => setActive(i)}
              className={`rounded-2xl p-4 text-left transition-all duration-300 border ${
                active === i
                  ? "border-opacity-50 glow-sm"
                  : "glass border-white/5 hover:border-white/10"
              }`}
              style={active === i ? { borderColor: t.color, backgroundColor: `${t.color}10` } : {}}
            >
              <div className="text-2xl mb-2">{t.emoji}</div>
              <div className="text-white font-semibold text-sm truncate">{t.name}</div>
              <div className="text-[#8888aa] text-xs truncate">{t.business}</div>
              <div className="flex gap-0.5 mt-2">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3 h-3 text-[#fbbf24]" fill="#fbbf24" />
                ))}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
