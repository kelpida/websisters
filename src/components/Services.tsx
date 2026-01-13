import { motion } from "framer-motion";
import { Code, Mail, Server, Newspaper, Settings, Palette } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "From WordPress sites to custom web apps with Laravel, React, Next.js & Tailwind. We build what your business needs.",
  },
  {
    icon: Mail,
    title: "Email Signatures",
    description: "Professional, branded email signatures that make every email an opportunity to impress your contacts.",
  },
  {
    icon: Server,
    title: "Hosting & Maintenance",
    description: "Reliable hosting solutions with ongoing maintenance to keep your site secure, fast, and always online.",
  },
  {
    icon: Newspaper,
    title: "Newsletter Design",
    description: "Engaging newsletter templates and campaigns that connect with your audience and drive results.",
  },
  {
    icon: Settings,
    title: "Email Setup",
    description: "Complete email configuration for your business domain, including spam protection and professional setup.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Logo design and brand identity packages that capture your business essence and stand out.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    rotateX: -15,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, hsl(210 100% 55% / 0.2) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            From concept to launch and beyond, we provide everything you need 
            for a successful online presence.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="group relative p-8 bg-background rounded-2xl shadow-soft border border-border/50 overflow-hidden cursor-pointer"
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 0%, hsl(210 100% 55% / 0.1) 0%, transparent 60%)",
                }}
              />
              
              {/* Animated border on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(135deg, hsl(210 100% 55% / 0.2) 0%, transparent 50%, hsl(195 100% 50% / 0.2) 100%)",
                }}
              />

              <motion.div 
                className="relative z-10 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6"
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                }}
                transition={{ duration: 0.5 }}
              >
                <service.icon size={28} className="text-primary-foreground" />
              </motion.div>
              
              <h3 className="relative z-10 font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="relative z-10 text-muted-foreground leading-relaxed group-hover:text-foreground/70 transition-colors duration-300">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <motion.div
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: -10 }}
                whileHover={{ x: 0 }}
              >
                <motion.span
                  className="text-primary"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
