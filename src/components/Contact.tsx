import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MessageSquare, Phone, MapPin, ArrowRight } from "lucide-react";

const MY_EMAIL = "yashasshettyk@gmail.com";
const MY_PHONE = "916238816702"; // WhatsApp format: country code + number

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
  const [sendVia, setSendVia] = useState<"whatsapp" | "email">("whatsapp");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);

    const budgetLabel = form.budget || "Not specified";
    const messageText =
      `Hi! I'd like a free quote for my website.%0A%0A` +
      `*Name:* ${encodeURIComponent(form.name)}%0A` +
      `*Email:* ${encodeURIComponent(form.email)}%0A` +
      `*Business:* ${encodeURIComponent(form.business || "Not provided")}%0A` +
      `*Budget:* ${encodeURIComponent(budgetLabel)}%0A` +
      `*Project Details:* ${encodeURIComponent(form.message)}`;

    if (sendVia === "whatsapp") {
      window.open(`https://wa.me/${MY_PHONE}?text=${messageText}`, "_blank");
    } else {
      const subject = encodeURIComponent(`Website Quote Request – ${form.business || form.name}`);
      const body =
        `Hi WebCraft,%0A%0A` +
        `I'd like to get a free quote for my website.%0A%0A` +
        `Name: ${encodeURIComponent(form.name)}%0A` +
        `Email: ${encodeURIComponent(form.email)}%0A` +
        `Business: ${encodeURIComponent(form.business || "Not provided")}%0A` +
        `Budget: ${encodeURIComponent(budgetLabel)}%0A%0A` +
        `Project Details:%0A${encodeURIComponent(form.message)}`;
      window.open(`mailto:${MY_EMAIL}?subject=${subject}&body=${body}`, "_blank");
    }

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
                href={`mailto:${MY_EMAIL}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white hover:border-[#6c63ff]/40 transition-all text-sm font-medium"
              >
                <Mail className="w-4 h-4 text-[#6c63ff]" />
                {MY_EMAIL}
              </motion.a>
              <motion.a
                href={`https://wa.me/${MY_PHONE}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-white hover:border-[#43e8d8]/40 transition-all text-sm font-medium"
              >
                <Phone className="w-4 h-4 text-[#43e8d8]" />
                +91 62388 16702
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
                      <option value="Under ₹15,000 (Starter)">Under ₹15,000 – Starter</option>
                      <option value="₹15,000 – ₹30,000 (Growth)">₹15,000 – ₹30,000 – Growth</option>
                      <option value="₹30,000 – ₹75,000 (Enterprise)">₹30,000 – ₹75,000 – Enterprise</option>
                      <option value="₹75,000+ (Custom)">₹75,000+ – Custom / Enterprise+</option>
                      <option value="Not sure yet – Let's discuss">Not sure yet – Let's discuss</option>
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

                  {/* Send via toggle */}
                  <div>
                    <label className="block text-[#8888aa] text-xs font-medium mb-2">Send inquiry via</label>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setSendVia("whatsapp")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                          sendVia === "whatsapp"
                            ? "bg-[#25D366]/15 border-[#25D366]/50 text-[#25D366]"
                            : "glass border-white/10 text-[#8888aa] hover:text-white"
                        }`}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        WhatsApp
                      </button>
                      <button
                        type="button"
                        onClick={() => setSendVia("email")}
                        className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold border transition-all duration-200 ${
                          sendVia === "email"
                            ? "bg-[#6c63ff]/15 border-[#6c63ff]/50 text-[#6c63ff]"
                            : "glass border-white/10 text-[#8888aa] hover:text-white"
                        }`}
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </button>
                    </div>
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
                        Opening {sendVia === "whatsapp" ? "WhatsApp" : "Email"}...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {sendVia === "whatsapp" ? "Send via WhatsApp" : "Send via Email"}
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
