import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import portfolioImage from "@/assets/portfolio-everafter.png";

const categories = ["All", "Websites", "E-Commerce", "Branding", "Email Solutions"];

const projects = [
  {
    id: 1,
    title: "The Ever After Link",
    category: "Websites",
    description: "A stunning wedding planning and vendor connection platform helping couples create their perfect day with ease and elegance.",
    url: "https://theeverafterlink.com/",
    image: portfolioImage,
    tags: ["WordPress", "Custom Design", "Responsive"],
    featured: true,
  },
  {
    id: 2,
    title: "Coastal Living Boutique",
    category: "E-Commerce",
    description: "Mediterranean-inspired home décor online store with seamless checkout experience and inventory management.",
    url: "#",
    image: null,
    tags: ["WooCommerce", "Payment Integration", "SEO"],
    featured: false,
    comingSoon: true,
  },
  {
    id: 3,
    title: "Azure Legal Partners",
    category: "Websites",
    description: "Professional law firm website with client portal, appointment booking, and case management integration.",
    url: "#",
    image: null,
    tags: ["React", "Portal", "Forms"],
    featured: false,
    comingSoon: true,
  },
  {
    id: 4,
    title: "Sunrise Wellness Studio",
    category: "Branding",
    description: "Complete brand identity and website for a holistic wellness center, including booking system.",
    url: "#",
    image: null,
    tags: ["Branding", "UI/UX", "Booking"],
    featured: false,
    comingSoon: true,
  },
  {
    id: 5,
    title: "Corporate Email Suite",
    category: "Email Solutions",
    description: "Professional email setup and migration for a 50+ employee company with custom signatures and templates.",
    url: "#",
    image: null,
    tags: ["Email", "Migration", "Templates"],
    featured: false,
    comingSoon: true,
  },
  {
    id: 6,
    title: "Your Project?",
    category: "Websites",
    description: "Have an exciting project in mind? Let's collaborate and bring your vision to life together.",
    url: "/contact",
    image: null,
    tags: ["Let's Talk", "Custom", "Tailored"],
    featured: false,
    isPlaceholder: true,
  },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>
          <span className="font-display text-lg font-semibold text-foreground">Portfolio</span>
          <div className="w-24" />
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6">
              Our <span className="text-gradient-primary">Creative</span> Work
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Every project tells a story. Explore the digital experiences we've crafted with passion, precision, and a touch of Cyprus sunshine.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border/50 sticky top-[73px] z-40 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-2 flex-wrap"
          >
            <Filter size={18} className="text-muted-foreground mr-2" />
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group relative ${project.featured ? "md:col-span-2 lg:col-span-2" : ""}`}
                >
                  <a
                    href={project.isPlaceholder ? "#contact" : project.url}
                    target={project.url.startsWith("http") ? "_blank" : undefined}
                    rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl border border-border/50 transition-all duration-500 ${
                        hoveredId === project.id
                          ? "shadow-elevated border-primary/30 scale-[1.02]"
                          : "shadow-soft"
                      } ${project.featured ? "h-[400px] md:h-[450px]" : "h-[350px]"}`}
                    >
                      {/* Background */}
                      {project.image ? (
                        <>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                        </>
                      ) : (
                        <div className={`absolute inset-0 ${
                          project.isPlaceholder 
                            ? "bg-gradient-to-br from-primary/20 via-accent/10 to-secondary"
                            : "bg-gradient-to-br from-secondary via-muted to-card"
                        }`}>
                          {/* Decorative elements for placeholder cards */}
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl" />
                          </div>
                        </div>
                      )}

                      {/* Coming Soon Badge */}
                      {project.comingSoon && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-muted/90 backdrop-blur-sm rounded-full text-xs font-medium text-muted-foreground">
                          Coming Soon
                        </div>
                      )}

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
                          ✨ Featured
                        </div>
                      )}

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.image 
                              ? "bg-accent/80 text-accent-foreground" 
                              : "bg-primary/20 text-primary"
                          }`}>
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className={`font-display text-xl md:text-2xl font-bold mb-2 transition-colors ${
                          project.image 
                            ? "text-white group-hover:text-primary-foreground" 
                            : "text-foreground group-hover:text-primary"
                        }`}>
                          {project.title}
                        </h3>
                        
                        <p className={`text-sm md:text-base mb-4 line-clamp-2 ${
                          project.image ? "text-white/80" : "text-muted-foreground"
                        }`}>
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-2 py-1 rounded text-xs ${
                                project.image
                                  ? "bg-white/10 text-white/80"
                                  : "bg-secondary text-secondary-foreground"
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Link */}
                        {!project.comingSoon && (
                          <div className={`flex items-center gap-2 text-sm font-medium ${
                            project.image ? "text-white" : "text-primary"
                          }`}>
                            {project.isPlaceholder ? "Let's Connect" : "View Project"}
                            <ExternalLink
                              size={16}
                              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's create something beautiful together. Your vision, our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/#contact">
                <Button variant="hero" size="xl">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/">
                <Button variant="heroOutline" size="xl">
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
