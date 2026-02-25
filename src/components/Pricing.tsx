import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, Sparkles, Zap, Crown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    icon: <Zap className="w-5 h-5" />,
    price: { monthly: 14999, yearly: 11999 },
    description: "Perfect for small businesses getting online for the first time.",
    color: "#43e8d8",
    gradient: "from-[#43e8d8]/20 to-[#43e8d8]/5",
    features: [
      "Up to 5 pages",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "Google Analytics",
      "1 month support",
      "Fast hosting setup",
      "SSL certificate",
    ],
    notIncluded: ["E-commerce", "Custom animations", "CMS integration"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Growth",
    icon: <Sparkles className="w-5 h-5" />,
    price: { monthly: 29999, yearly: 23999 },
    description: "For growing businesses ready to scale their online presence.",
    color: "#6c63ff",
    gradient: "from-[#6c63ff]/30 to-[#6c63ff]/5",
    features: [
      "Up to 15 pages",
      "Advanced animations",
      "Blog / News section",
      "Full SEO optimization",
      "Google Analytics + Hotjar",
      "3 months support",
      "Speed optimization",
      "Social media integration",
      "Online booking system",
      "Custom domain setup",
    ],
    notIncluded: ["E-commerce store"],
    cta: "Most Popular Choice",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: <Crown className="w-5 h-5" />,
    price: { monthly: 74999, yearly: 59999 },
    description: "Full-scale digital presence for ambitious businesses.",
    color: "#ff6584",
    gradient: "from-[#ff6584]/20 to-[#ff6584]/5",
    features: [
      "Unlimited pages",
      "E-commerce store",
      "Custom admin panel",
      "Advanced animations",
      "Full SEO + Content strategy",
      "12 months priority support",
      "Performance optimization",
      "Multi-language support",
      "Payment integration",
      "Custom integrations",
      "Dedicated account manager",
      "Monthly reports",
    ],
    notIncluded: [],
    cta: "Let's Talk",
    popular: false,
  },
];

const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Most Starter sites are ready in 48-72 hours. Growth packages take 1-2 weeks, and Enterprise projects typically 3-4 weeks depending on complexity.",
  },
  {
    q: "Do I own my website after it's built?",
    a: "Absolutely. You own 100% of your website, code, and content. We hand over all assets and access credentials on project completion.",
  },
  {
    q: "What if I need changes after launch?",
    a: "All plans include a support period for revisions and bug fixes. After that, we offer affordable maintenance packages or can hand off the codebase to your team.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes! We specialize in redesigns and can migrate your existing content to a modern, performant new site.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      className="glass rounded-2xl border border-white/5 overflow-hidden"
      whileHover={{ borderColor: "rgba(108,99,255,0.2)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left"
      >
        <span className="text-white font-semibold text-sm sm:text-base pr-4">{q}</span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-8 h-8 rounded-lg bg-[#6c63ff]/10 flex items-center justify-center"
        >
          <HelpCircle className="w-4 h-4 text-[#6c63ff]" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="text-[#8888aa] text-sm leading-relaxed px-5 pb-5">{a}</p>
      </motion.div>
    </motion.div>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);
  const titleInView = useInView(titleRef, { once: true });

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#6c63ff]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm font-medium text-[#6c63ff] mb-5 border border-[#6c63ff]/30"
          >
            <Crown className="w-4 h-4" />
            Transparent Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5"
          >
            Simple, Honest{" "}
            <span className="gradient-text">Pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#8888aa] text-lg max-w-xl mx-auto mb-8"
          >
            No hidden fees, no surprises. Pay once, own forever.
          </motion.p>

          {/* Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 glass px-2 py-2 rounded-full border border-white/10"
          >
            <button
              onClick={() => setYearly(false)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300",
                !yearly ? "bg-[#6c63ff] text-white" : "text-[#8888aa]"
              )}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2",
                yearly ? "bg-[#6c63ff] text-white" : "text-[#8888aa]"
              )}
            >
              Yearly
              <span className="text-xs bg-[#34d399]/20 text-[#34d399] px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i + 0.3 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={cn(
                "relative rounded-3xl p-6 sm:p-8 border transition-all duration-300",
                plan.popular
                  ? "border-[#6c63ff]/50 glow"
                  : "glass border-white/5 hover:border-white/10"
              )}
              style={plan.popular ? { background: "rgba(108,99,255,0.08)" } : {}}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-gradient-to-r from-[#6c63ff] to-[#43e8d8] text-white text-xs font-bold whitespace-nowrap">
                  ✦ Most Popular
                </div>
              )}

              {/* Icon + name */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `${plan.color}20`, color: plan.color }}
              >
                {plan.icon}
              </div>
              <h3 className="text-white font-black text-2xl mb-1">{plan.name}</h3>
              <p className="text-[#8888aa] text-sm mb-6 leading-relaxed">{plan.description}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-end gap-2">
                  <span className="text-5xl font-black text-white">
                    ₹{(yearly ? plan.price.yearly : plan.price.monthly).toLocaleString('en-IN')}
                  </span>
                  <span className="text-[#8888aa] mb-2">/project</span>
                </div>
                {yearly && (
                  <span className="text-sm text-[#34d399]">
                    Save ₹{(plan.price.monthly - plan.price.yearly).toLocaleString('en-IN')} this year
                  </span>
                )}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className={cn(
                  "w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 mb-7",
                  plan.popular
                    ? "bg-gradient-to-r from-[#6c63ff] to-[#43e8d8] text-white glow-sm"
                    : "glass border border-white/10 text-white hover:border-[#6c63ff]/40"
                )}
              >
                {plan.cta} →
              </motion.button>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: `${plan.color}20` }}
                    >
                      <Check className="w-3 h-3" style={{ color: plan.color }} />
                    </div>
                    <span className="text-[#ccccdd] text-sm">{f}</span>
                  </div>
                ))}
                {plan.notIncluded.map((f) => (
                  <div key={f} className="flex items-start gap-3 opacity-30">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-white/5">
                      <span className="text-white text-xs">✕</span>
                    </div>
                    <span className="text-[#8888aa] text-sm line-through">{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-white text-center mb-8"
          >
            Frequently Asked Questions
          </motion.h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <FAQItem {...faq} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
