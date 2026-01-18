import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
 
    {
      name: "C.Pilyugin",
      role: "Managing Partner, CP Law Firm",
      image: null,
      rating: 5,
      text: "Our law firm needed a website that conveyed authority and trust. WebSisters delivered exactly that - a professional, well-structured site that has significantly increased our client inquiries. Outstanding work.",
      project: "CP Law Firm"
    },
    {
      name: "Prothiereas Olive Oil",
      role: "CEO, Prothiereas Olive Oil",
      image: null,
      rating: 5,
      text: "They created a beautiful online presence for our premium olive oil brand. The site perfectly captures our heritage and sustainability values. We've seen great engagement from international customers.",
      project: "Prothiereas Olive Oil"
    },
    {
      name: "Christakis Pavlou",
      role: "Owner, Christakis Pavlou & Son Auto Services",
      image: null,
      rating: 5,
      text: "WebSisters built us a clean, professional website that showcases our automotive services perfectly. Customer feedback has been fantastic, and we've received more service bookings online than ever before.",
      project: "Christakis Pavlou & Son"
    },
    {
      name: "Evros Pittalis",
      role: "Founder, Pittalis Strawberries",
      image: null,
      rating: 5,
      text: "The real-time availability tracking system they developed is exactly what our local business needed. It's user-friendly and our customers love being able to find fresh strawberries instantly. Game-changer!",
      project: "Pittalis Strawberries"
    },
    {
      name: "Aimilia Anastasiou",
      role: "Architect Engineer, Anastasiou Architects",
      image: null,
      rating: 5,
      text: "Working with WebSisters and their design partners was fantastic. They created a website that truly reflects the creative quality of our work. The UI / UX is intuitive and the design is elegant.",
      project: "Anastasiou Architects"
    },
    {
      name: "2Squared Studio",
      role: "Design Partners",
      image: null,
      rating: 5,
      text: "WebSisters is a fantastic partner to collaborate with. Their technical expertise combined with attention to detail makes bringing design visions to life seamless. Together, we've created outstanding digital experiences for our shared clients.",
      project: "Partnership Collaboration"
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(210 100% 55% / 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-48 h-48 rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, hsl(195 100% 50% / 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -30, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Star size={16} fill="currentColor" />
            {t("testimonials.title")}
          </motion.div>
          
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t("testimonials.title")}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {t("testimonials.description")}
          </motion.p>
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative p-8 md:p-12 bg-card rounded-3xl border border-border/50 shadow-soft"
          >
            {/* Quote icon */}
            <motion.div
              className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center"
              initial={{ rotate: -20, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
            >
              <Quote size={24} className="text-primary-foreground" />
            </motion.div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <Star size={20} className="text-primary fill-primary" />
                </motion.div>
              ))}
            </div>

            {/* Quote text */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8"
            >
              "{testimonials[activeIndex].text}"
            </motion.blockquote>

            {/* Author */}
            <div className="flex items-center gap-4">
              <motion.div
                className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl"
                whileHover={{ scale: 1.1 }}
              >
                {testimonials[activeIndex].name.charAt(0)}
              </motion.div>
              <div>
                <h4 className="font-display font-semibold text-foreground">
                  {testimonials[activeIndex].name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonials[activeIndex].role}
                </p>
                <p className="text-primary text-sm font-medium">
                  {testimonials[activeIndex].project}
                </p>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute inset-0 rounded-3xl opacity-50 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at top right, hsl(210 100% 55% / 0.05) 0%, transparent 50%)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3 mb-12">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? "bg-primary w-8" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              {index === activeIndex && (
                <motion.div
                  className="absolute inset-0 rounded-full bg-primary"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Mini testimonial cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8, transition: { type: "spring", stiffness: 400 } }}
              onClick={() => setActiveIndex(index)}
              className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                index === activeIndex
                  ? "bg-primary/10 border-primary/30 shadow-glow"
                  : "bg-card border-border/50 hover:border-primary/20"
              }`}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-primary fill-primary" />
                ))}
              </div>
              
              <p className="text-foreground/80 text-sm line-clamp-3 mb-4">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.project}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-full bg-secondary/50 border border-border/50">
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-foreground">20+</div>
              <div className="text-xs text-muted-foreground">Happy Clients</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-foreground flex items-center gap-1">
                5.0 <Star size={16} className="text-primary fill-primary" />
              </div>
              <div className="text-xs text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <div className="font-display text-2xl font-bold text-foreground">100%</div>
              <div className="text-xs text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
