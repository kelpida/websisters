import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useRef, useEffect, useState } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const rotateX = useTransform(smoothY, [-300, 300], [5, -5]);
  const rotateY = useTransform(smoothX, [-300, 300], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  // Animated counter for stats
  const [counts, setCounts] = useState({ years: 0, projects: 0, satisfaction: 0 });
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ years: 5, projects: 50, satisfaction: 100 });
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const floatingOrbs = [
    { size: 300, x: "20%", y: "20%", delay: 0 },
    { size: 400, x: "70%", y: "60%", delay: 2 },
    { size: 200, x: "80%", y: "15%", delay: 4 },
    { size: 150, x: "10%", y: "70%", delay: 1 },
  ];

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Animated background orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: i % 2 === 0 
              ? "radial-gradient(circle, hsl(210 100% 55% / 0.15) 0%, transparent 70%)"
              : "radial-gradient(circle, hsl(195 100% 50% / 0.12) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay,
          }}
        />
      ))}

      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(210 100% 55%) 1px, transparent 1px),
            linear-gradient(90deg, hsl(210 100% 55%) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          style={{ rotateX, rotateY, transformPerspective: 1000 }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm text-secondary-foreground text-sm font-medium mb-8 border border-primary/20 animate-shimmer"
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles size={16} className="text-primary" />
            </motion.div>
            Your Web, Our Expertise
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight"
          >
            We Build Beautiful
            <br />
            <motion.span 
              className="text-gradient-primary inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Digital Experiences
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Based in sunny Cyprus, we're a sister duo crafting stunning websites, 
            professional email solutions, and complete digital experiences for 
            businesses ready to shine online.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="xl" className="group animate-pulse-glow">
                Start Your Project
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href="#portfolio">
                <Button variant="heroOutline" size="xl">
                  View Our Work
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Tech Stack with staggered reveal */}
          <motion.div
            variants={itemVariants}
            className="mt-14"
          >
            <p className="text-sm text-muted-foreground mb-4">Technologies we work with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["WordPress", "Laravel", "React", "Next.js", "Tailwind CSS", "PHP", "TypeScript"].map((tech, i) => (
                <motion.span 
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    borderColor: "hsl(210 100% 55%)",
                    boxShadow: "0 0 20px hsl(210 100% 55% / 0.3)"
                  }}
                  className="px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full text-sm font-medium text-foreground/80 cursor-default transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Animated Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto"
          >
            {[
              { value: counts.years, suffix: "+", label: "Years Experience" },
              { value: counts.projects, suffix: "+", label: "Projects Delivered" },
              { value: counts.satisfaction, suffix: "%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div 
                  className="font-display text-3xl font-bold text-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 + index * 0.2 }}
                  >
                    {stat.value}{stat.suffix}
                  </motion.span>
                </motion.div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
