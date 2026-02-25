import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, Phone, MapPin, ArrowRight } from "lucide-react";

const processSteps = [
  { step: "01", title: "Discovery Call", desc: "We learn about your business, goals, and vision in a free 30-min call." },
  { step: "02", title: "Design & Plan", desc: "We create wireframes and a project plan tailored to your needs." },
  { step: "03", title: "Build & Review", desc: "We build your site and share live previews for your feedback." },
  { step: "04", title: "Launch 🚀", desc: "We deploy, optimize, and hand over your fully-owned website." },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 hero-bg pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-20 p-8 sm:p-12 lg:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(108,99,255,0.2) 0%, rgba(67,232,216,0.1) 50%, rgba(255,101,132,0.15) 100%)",
            border: "1px solid rgba(108,99,255,0.3)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[-50%] left-[-20%] w-[60%] h-[200%] bg-[#6c63ff]/5 rotate-12 rounded-full blur-3xl" />
            <div className="absolute bottom-[-50%] right-[-20%] w-[60%] h-[200%] bg-[#43e8d8]/5 -rotate-12 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="text-5xl mb-6 inline-block"
            >
              🚀
            </motion.div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
              Ready to Grow{" "}
              <span className="gradient-text">Your Business?</span>
            </h2>
            <p className="text-[#8888aa] text-lg max-w-2xl mx-auto mb-8">
              Join 50+ businesses who trusted WebCraft to build their online presence.
              Your first consultation is completely free.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="mailto:hello@webcraft.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white hover:border-[#6c63ff]/40 transition-all text-sm font-medium"
              >
                <Mail className="w-4 h-4 text-[#6c63ff]" />
                hello@webcraft.dev
              </motion.a>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white hover:border-[#43e8d8]/40 transition-all text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#43e8d8]" />
                +91 98765 43210
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Process + info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[#6c63ff] mb-5 border border-[#6c63ff]/30">
                <MessageSquare className="w-4 h-4" />
                How It Works
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-4">
                From Idea to Launch in{" "}
                <span className="gradient-text">4 Simple Steps</span>
              </h3>
              <p className="text-[#8888aa] leading-relaxed">
                Our streamlined process means you get a stunning website without the stress.
              </p>
            </motion.div>

            <div className="space-y-5">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-2xl bg-[#6c63ff]/20 border border-[#6c63ff]/30 flex items-center justify-center text-[#6c63ff] font-black text-sm flex-shrink-0 group-hover:bg-[#6c63ff]/30 transition-colors">
                      {step.step}
                    </div>
                    {i < processSteps.length - 1 && (
                      <div className="w-px h-full mt-2 bg-gradient-to-b from-[#6c63ff]/30 to-transparent" />
                    )}
                  </div>
                  <div className="pb-6">
                    <h4 className="text-white font-bold text-lg mb-1">{step.title}</h4>
                    <p className="text-[#8888aa] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 glass rounded-2xl p-5 border border-[#43e8d8]/20"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#43e8d8] flex-shrink-0" />
                <div>
                  <p className="text-white font-semibold text-sm">We work with clients worldwide</p>
                  <p className="text-[#8888aa] text-xs">Remote-first · All time zones welcome</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-6 sm:p-8 border border-[#6c63ff]/20"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 5, 0] }}
                  transition={{ duration: 0.6 }}
                  className="text-6xl mb-6"
                >
                  🎉
                </motion.div>
                <h3 className="text-2xl font-black text-white mb-3">Message Sent!</h3>
                <p className="text-[#8888aa] leading-relaxed">
                  Thanks for reaching out! We'll get back to you within 24 hours to schedule
                  your free discovery call.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 rounded-xl bg-[#6c63ff]/20 text-[#6c63ff] text-sm font-semibold hover:bg-[#6c63ff]/30 transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-black text-white mb-2">Get a Free Quote</h3>
                <p className="text-[#8888aa] text-sm mb-7">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#8888aa] text-xs font-medium mb-1.5">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#8888aa] text-sm focus:outline-none focus:border-[#6c63ff]/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[#8888aa] text-xs font-medium mb-1.5">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#8888aa] text-sm focus:outline-none focus:border-[#6c63ff]/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#8888aa] text-xs font-medium mb-1.5">Business Name</label>
                    <input
                      type="text"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      placeholder="Your Business Name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#8888aa] text-sm focus:outline-none focus:border-[#6c63ff]/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8888aa] text-xs font-medium mb-1.5">Budget Range</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm({ ...form, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#12121f] border border-white/10 text-white text-sm focus:outline-none focus:border-[#6c63ff]/50 transition-colors"
                    >
                      <option value="">Select a budget</option>
                      <option value="499-999">$499 – $999 (Starter)</option>
                      <option value="999-2499">$999 – $2499 (Growth)</option>
                      <option value="2499+">$2499+ (Enterprise)</option>
                      <option value="custom">Custom / Let's discuss</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#8888aa] text-xs font-medium mb-1.5">Tell us about your project *</label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="What kind of website do you need? Any specific features or pages?"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[#8888aa] text-sm focus:outline-none focus:border-[#6c63ff]/50 transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#6c63ff] to-[#43e8d8] text-white font-bold text-base glow flex items-center justify-center gap-2 disabled:opacity-70 transition-all"
                  >
                    {loading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </motion.button>
                  <p className="text-[#8888aa] text-xs text-center">
                    🔒 Your information is secure and never shared with third parties.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
