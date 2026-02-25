import { motion } from "framer-motion";
import { Zap, Twitter, Instagram, Linkedin, Github, ArrowUpRight, Heart } from "lucide-react";

const footerLinks = {
  Services: [
    "Web Design",
    "E-Commerce",
    "SEO Optimization",
    "Performance Audit",
    "Redesign",
    "Maintenance",
  ],
  Company: [
    "About Us",
    "Portfolio",
    "Blog",
    "Careers",
    "Press Kit",
  ],
  Legal: [
    "Privacy Policy",
    "Terms of Service",
    "Cookie Policy",
    "Refund Policy",
  ],
};

const socials = [
  { icon: <Twitter className="w-4 h-4" />, label: "Twitter", href: "#" },
  { icon: <Instagram className="w-4 h-4" />, label: "Instagram", href: "#" },
  { icon: <Linkedin className="w-4 h-4" />, label: "LinkedIn", href: "#" },
  { icon: <Github className="w-4 h-4" />, label: "GitHub", href: "#" },
];

export default function Footer() {
  const handleScroll = (id: string) => {
    document.querySelector(`#${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/5 overflow-hidden">
      {/* BG glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#6c63ff]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-5"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6c63ff] to-[#43e8d8] flex items-center justify-center glow-sm">
                <Zap className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-2xl font-black gradient-text">web.kraft</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#8888aa] text-sm leading-relaxed mb-6 max-w-xs"
            >
              We build stunning, high-performance websites for businesses that want to dominate
              their market online. Fast. Beautiful. Affordable.
            </motion.p>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-3"
            >
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-xl glass border border-white/5 flex items-center justify-center text-[#8888aa] hover:text-[#6c63ff] hover:border-[#6c63ff]/30 transition-all duration-200"
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <p className="text-white text-sm font-semibold mb-2">Get web tips in your inbox</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#8888aa] text-sm focus:outline-none focus:border-[#6c63ff]/50 transition-colors min-w-0"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2.5 rounded-xl bg-[#6c63ff] text-white text-sm font-semibold hover:bg-[#7c73ff] transition-colors flex-shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.2 }}
            >
              <h4 className="text-white font-bold text-sm mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[#8888aa] text-sm hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#6c63ff]/30 to-transparent" />

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4"
        >
          <p className="text-[#8888aa] text-xs flex items-center gap-1.5">
            © 2026 web.kraft. Made with{" "}
            <Heart className="w-3.5 h-3.5 text-[#ff6584]" fill="#ff6584" />
            {" "}for ambitious businesses.
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleScroll("hero")}
              className="text-[#8888aa] text-xs hover:text-white transition-colors"
            >
              Back to top ↑
            </button>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse" />
              <span className="text-[#34d399] text-xs font-medium">All systems operational</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
