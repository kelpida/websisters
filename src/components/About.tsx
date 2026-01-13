import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Lightbulb, Users } from "lucide-react";
import { useRef } from "react";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every project gets our full dedication and personal touch.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "We blend creativity with technical expertise for unique results.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Personal Connection",
    description: "We work closely with you, understanding your vision and goals.",
    color: "from-blue-500 to-cyan-500",
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden" ref={sectionRef}>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-50"
        style={{
          y: backgroundY,
          background: "radial-gradient(ellipse at center, hsl(210 100% 55% / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story with text reveal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
          >
            <motion.h2 
              className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Sisters Behind
              <br />
              <motion.span 
                className="text-gradient-primary inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                the Screen
              </motion.span>
            </motion.h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {[
                "We're two sisters from the beautiful island of Cyprus, united by our love for design and technology. What started as a shared passion has grown into a creative partnership that brings websites and digital experiences to life.",
                "Working as a duo gives us a unique advantage: two perspectives, double the creativity, and a natural collaboration that our clients love. We bring the best of both worlds – technical precision and creative flair – to every project we take on.",
                "When we're not coding or designing, you'll find us exploring Cyprus's stunning coastlines, sipping coffee at local cafés, and finding inspiration in the Mediterranean lifestyle that shapes our work."
              ].map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.15 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Values with 3D cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="group flex gap-5 p-6 bg-background rounded-2xl shadow-soft border border-border/50 cursor-pointer overflow-hidden relative"
                style={{ transformPerspective: 1000 }}
              >
                {/* Hover gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, hsl(210 100% 55% / 0.05) 0%, transparent 100%)`,
                  }}
                />

                {/* Icon with animation */}
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 relative z-10"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <value.icon size={24} className="text-primary-foreground" />
                  </motion.div>
                </motion.div>

                <div className="relative z-10">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>

                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 1px hsl(210 100% 55% / 0.3)",
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
