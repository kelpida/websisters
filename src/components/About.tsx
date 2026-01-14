import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Lightbulb, Users } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

const values = [
  {
    icon: Heart,
    title: "made_with_love_title",
    description: "made_with_love_description",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Lightbulb,
    title: "creative_solutions_title",
    description: "creative_solutions_description",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "personal_connection_title",
    description: "personal_connection_description",
    color: "from-blue-500 to-cyan-500",
  },
];

const About = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Get translated values
  const translatedValues = [
    {
      icon: Heart,
      title: t("about.values.love.title"),
      description: t("about.values.love.description"),
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Lightbulb,
      title: t("about.values.creativity.title"),
      description: t("about.values.creativity.description"),
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Users,
      title: t("about.values.connection.title"),
      description: t("about.values.connection.description"),
      color: "from-blue-500 to-cyan-500",
    },
  ];
  
  const storyParagraphs = t("about.story", { returnObjects: true }) as string[];
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
              {t("about.title")}
              <br />
              <motion.span 
                className="text-gradient-primary inline-block"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {t("about.titleHighlight")}
              </motion.span>
            </motion.h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {storyParagraphs.map((paragraph, i) => (
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
            {translatedValues.map((value, index) => (
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
