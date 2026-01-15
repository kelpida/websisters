import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import portfolioImage from "@/assets/portfolio-everafterlink.png";
import { useRef } from "react";

const projects = [
  {
    title: "The Ever After Link",
    category: "Wedding Planning Platform",
    description: "A beautiful wedding planning and vendor connection platform helping couples create their perfect day.",
    url: "https://theeverafterlink.com/",
    image: portfolioImage,
    featured: true,
  },
  {
    title: "Coming Soon",
    category: "E-Commerce",
    description: "More exciting projects in our portfolio. Get in touch to see our complete body of work.",
    url: "#contact",
    image: null,
    featured: false,
  },
  {
    title: "Your Project?",
    category: "Let's Create Together",
    description: "Have an idea for your next digital project? We'd love to bring it to life with you.",
    url: "#contact",
    image: null,
    featured: false,
  },
];

const Portfolio = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Parallax background elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-20"
        style={{
          y,
          background: "radial-gradient(circle, hsl(210 100% 55% / 0.3) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-48 h-48 rounded-full opacity-15"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [50, -150]),
          background: "radial-gradient(circle, hsl(195 100% 50% / 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            <Sparkles size={16} />
            {t("portfolio.featuredWork")}
          </motion.div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t("portfolio.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("portfolio.description")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Project with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="lg:row-span-2"
            style={{ transformPerspective: 1000 }}
          >
            <motion.a
              href={projects[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="relative h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden bg-card border border-border/50 shadow-soft group-hover:shadow-glow transition-all duration-500 flex flex-col">
                {/* Image Section */}
                <div className="relative overflow-hidden bg-muted/30 flex items-center justify-center h-56 lg:h-72">
                  <motion.img 
                    src={portfolioImage} 
                    alt="The Ever After Link project" 
                    className="w-full h-full object-contain p-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Featured Badge */}
                  <motion.span 
                    className="absolute top-4 right-4 px-3 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨ Featured
                  </motion.span>
                </div>
                
                {/* Content Section */}
                <div className="p-6 lg:p-8 flex flex-col flex-1">
                  <motion.div 
                    className="flex items-center gap-2 mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                      {projects[0].category}
                    </span>
                  </motion.div>
                  
                  <motion.h3 
                    className="font-display text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    {projects[0].title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground mb-4 flex-1"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  >
                    {projects[0].description}
                  </motion.p>
                  
                  <motion.div 
                    className="flex items-center gap-2 text-primary font-medium"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    Visit Website
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink size={16} />
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* Other Projects */}
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
            >
              <motion.a
                href={project.url}
                className="group block"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden bg-card border border-border/50 shadow-soft group-hover:shadow-glow group-hover:border-primary/30 transition-all duration-500">
                  {/* Animated gradient background */}
                  <motion.div 
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(135deg, hsl(var(--secondary)) 0%, hsl(var(--muted)) 50%, hsl(var(--secondary)) 100%)",
                      backgroundSize: "200% 200%",
                    }}
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Floating particles */}
                  <motion.div
                    className="absolute w-2 h-2 rounded-full bg-primary/30"
                    style={{ top: "20%", left: "20%" }}
                    animate={{
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute w-3 h-3 rounded-full bg-accent/20"
                    style={{ top: "40%", right: "30%" }}
                    animate={{
                      y: [10, -10, 10],
                      x: [5, -5, 5],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <span className="text-muted-foreground text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/portfolio">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="heroOutline" size="lg" className="group">
                See All Projects
                <motion.span
                  className="inline-block"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
