import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import portfolioImage from "@/assets/portfolio-everafterlink.png";
import bestpropImage from "@/assets/thebestprop.svg";
import photiouImage from "@/assets/photiou.png";
import atpImage from "@/assets/portfolio-atp.webp";
import cplawyersImage from "@/assets/portfolio-cplawyers.webp";
import pittalisImage from "@/assets/portfolio-pittalis.webp";
import cpkImage from "@/assets/portfolio-cpk.png";
import prothiereasImage from "@/assets/portfolio-prothiereas.webp";
import anastasiouImage from "@/assets/anastasiou-architects.png";
import malactosImage from "@/assets/malactosinsurance.png";
import burrowCapitalImage from "@/assets/burrowcapital.svg";
import partnerLogoImage from "@/assets/2squaredstudio.png";
import SEO from "@/components/SEO";

const categories = ["All", "Websites", "Email Signatures", "Email Solutions"];

const projects = [
  {
    "id": 1,
    "title": "The Ever After Link",
    "category": "Websites",
    "description": "A curated wedding platform connecting couples with trusted vendors across Cyprus. The Ever After Link simplifies wedding planning through elegant design, intuitive navigation, and seamless vendor discovery.",
    "url": "https://theeverafterlink.com/",
    "image": portfolioImage,
    "tags": ["WordPress", "Wedding Platform", "Vendor Directory", "Custom UI", "Responsive Design"],
    "featured": true,
  },
  {
    "id": 2,
    "title": "Malactos Insurance",
    "category": "Websites",
    "description": "A modern corporate website for Malactos Insurance, presenting insurance products and services with clarity and professionalism while focusing on trust, accessibility, and clear communication.",
    "url": "https://staging.malactosinsurance.com/",
    "image": malactosImage,
    "tags": ["Insurance", "Corporate Website", "WordPress", "Business Services", "Responsive Design"],
    "featured": false,
    "comingSoon": true,
    },
  {
    "id": 3,
    "title": "The BestProp",
    "category": "Websites",
    "description": "A high-performance website for a proprietary trading firm offering funded forex trading accounts, clearly communicating evaluation challenges, trading rules, and profit splits.",
    "url": "https://thebestprop.com/",
    "image": bestpropImage,
    "tags": ["Prop Trading", "Forex", "FinTech", "Landing Pages", "Performance UX"],
    "featured": false,
    "comingSoon": false,
    "partner": true,
    "partnerLogo": partnerLogoImage,
    "partnerUrl": "https://2squaredstudio.com/"
  },
  {
    "id": 4,
    "title": "Burrow Capital",
    "category": "Websites",
    "description": "A conversion-focused fintech website for a proprietary trading firm, designed to clearly explain funding programs, trader benefits, and evaluation models with a bold financial identity.",
    "url": "https://burrowcapital.com/",
    "image": burrowCapitalImage,
    "tags": ["FinTech", "Proprietary Trading", "Forex", "Conversion Design", "Custom Website"],
    "featured": false,
    "comingSoon": false,
    "partner": true,
    "partnerLogo": partnerLogoImage,
    "partnerUrl": "https://2squaredstudio.com/"
  },
  {
    "id": 5,
    "title": "Photiou Architects",
    "category": "Websites",
    "description": "A refined architectural portfolio website showcasing decades of experience in residential, commercial, and urban projects, emphasizing sustainability and strong visual storytelling.",
    "url": "https://photiouarchitects.com/",
    "image": photiouImage,
    "tags": ["Architecture", "Portfolio Website", "Sustainable Design", "Visual Storytelling"],
    "featured": false,
    "comingSoon": false
  },
  {
    "id": 6,
    "title": "ATP Properties",
    "category": "Websites",
    "description": "A premium real estate development website highlighting luxury residential and commercial projects in Cyprus, focusing on architectural excellence and investment value.",
    "url": "https://www.atp.properties/",
    "image": atpImage,
    "tags": ["Real Estate", "Property Development", "Luxury Projects", "Architecture", "Cyprus"],
    "featured": false,
    "comingSoon": false
  },
  {
    "id": 7,
    "title": "CP Law Firm",
    "category": "Websites",
    "description": "A professional law firm website presenting legal, corporate, tax, and advisory services with clarity, authority, and a strong corporate identity.",
    "url": "https://cplawyers.com/",
    "image": cplawyersImage,
    "tags": ["Law Firm", "Corporate Law", "Legal Services", "Professional Website", "Cyprus"],
    "featured": false,
    "comingSoon": false
  },
  {
    "id": 8,
    "title": "Pittalis Strawberries",
    "category": "Websites",
    "description": "A custom availability tracking website displaying real-time strawberry fridge locations and stock levels across Limassol, supporting local agriculture through simple and functional UX.",
    "url": "https://pittalisstrawberries.com/",
    "image": pittalisImage,
    "tags": ["Local Business", "Availability System", "Agriculture", "Custom Dashboard", "Cyprus"],
    "featured": false,
    "comingSoon": false
  },
  {
    "id": 9,
    "title": "Christakis Pavlou & Son",
    "category": "Websites",
    "description": "A service-oriented website for an automotive repair and maintenance center, designed to clearly present services and build trust through professional branding.",
    "url": "https://www.autoservicecy.com/",
    "image": cpkImage,
    "tags": ["Automotive Services", "Local Business", "Maintenance", "Service Website"],
    "featured": false,
    "comingSoon": false
  },
  {
    "id": 10,
    "title": "Prothiereas Olive Oil",
    "category": "Websites",
    "description": "An elegant product-focused website showcasing premium Cypriot extra virgin olive oil, emphasizing tradition, sustainability, and brand heritage.",
    "url": "https://prothiereas.com/en/",
    "image": prothiereasImage,
    "tags": ["Agriculture", "Olive Oil", "Product Branding", "E-commerce Ready", "Cyprus"],
    "featured": false,
    "comingSoon": false
  },
  {
    "id": 11,
    "title": "Anastasiou Architects",
    "category": "Websites",
    "description": "A UX/UI design project created in collaboration with design partners, focusing on clean layouts, strong typography, and immersive presentation of architectural work.",
    "url": "https://anastasiou-architects.com/",
    "image": anastasiouImage,
    "tags": ["UX/UI Design", "Architecture Portfolio", "Design System", "Visual Identity"],
    "featured": false,
    "comingSoon": false,
    "partner": false
  },
  {
    "id": 12,
    "title": "Email Signatures",
    "category": "Email Signatures",
    "description": "Custom-designed professional email signatures built for brand consistency, compatibility across email clients, and polished business communication.",
    "url": "#",
    "image": null,
    "tags": ["Email Signatures", "Branding", "Business Identity", "Design Systems"],
    "featured": false,
    "comingSoon": true,
    "partner": true,
    "partnerLogo": partnerLogoImage,
  },
  {
    "id": 13,
    "title": "Email Solutions",
    "category": "Email Solutions",
    "description": "End-to-end business email solutions including setup, migration, and ongoing management, ensuring secure and reliable communication systems.",
    "url": "#",
    "image": null,
    "tags": ["Email Setup", "Email Migration", "Business Infrastructure", "IT Solutions"],
    "featured": false,
    "comingSoon": true
  }
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedTags, setExpandedTags] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title="Portfolio - Our Work & Projects"
        description="Explore our portfolio of web development projects, websites, email solutions, and digital designs created for businesses across Cyprus. See our latest work and success stories."
        keywords="portfolio, web development projects, website designs, email signatures, web design Cyprus, case studies"
        url="https://websisters.cy/portfolio"
        type="website"
      />
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
        <div className="container mx-auto px-2">
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
        <div className="container mx-auto px-2">
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
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
                    href={project.url}
                    target={project.url.startsWith("http") ? "_blank" : undefined}
                    rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block h-full"
                  >
                    <div
                      className={`relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 flex flex-col h-full ${
                        hoveredId === project.id
                          ? "shadow-elevated border-primary/30 scale-[1.02]"
                          : "shadow-soft"
                      }`}
                    >
                      {/* Image Section */}
                      {project.image ? (
                        <div className={`relative overflow-hidden bg-muted/30 flex items-center justify-center ${project.featured ? "h-48 md:h-56" : "h-40"}`}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-105"
                          />
                          {/* Coming Soon Badge */}
                          {project.comingSoon && !project.partner && (
                            <div className="absolute top-3 right-3 px-3 py-1 bg-muted/90 backdrop-blur-sm rounded-full text-xs font-medium text-muted-foreground">
                              Coming Soon
                            </div>
                          )}
                          
                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-3 left-3 px-3 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
                              ✨ Featured
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className={`relative overflow-hidden bg-gradient-to-br from-secondary via-muted to-card ${project.featured ? "h-48 md:h-56" : "h-40"}`}>
                          <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl" />
                            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl" />
                          </div>
                          {/* Coming Soon Badge */}
                          {project.comingSoon && !project.partner && (
                            <div className="absolute top-3 right-3 px-3 py-1 bg-muted/90 backdrop-blur-sm rounded-full text-xs font-medium text-muted-foreground">
                              Coming Soon
                            </div>
                          )}
                          {/* Partner Badge with Logo */}
                          {project.partner && project.partnerLogo && (
                            <div className="absolute top-3 right-3 px-2 py-1.5 bg-accent/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                              <img 
                                src={project.partnerLogo} 
                                alt="Partner" 
                                className="h-5 w-auto object-contain"
                                title="Created in partnership with 2Squared Studio"
                              />
                            </div>
                          )}
                          {/* Featured Badge */}
                          {project.featured && (
                            <div className="absolute top-3 left-3 px-3 py-1 bg-primary rounded-full text-xs font-semibold text-primary-foreground">
                              ✨ Featured
                            </div>
                          )}
                        </div>
                      )}

                      {/* Content Section */}
                      <div className="p-3 md:p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                            {project.category}
                          </span>
                        </div>
                        
                        <h3 className="font-display text-lg md:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground mb-4 flex-1">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {expandedTags === project.id
                            ? project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground"
                                >
                                  {tag}
                                </span>
                              ))
                            : project.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground"
                                >
                                  {tag}
                                </span>
                              ))}
                          {project.tags.length > 3 && expandedTags !== project.id && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setExpandedTags(project.id);
                              }}
                              className="px-2 py-1 rounded text-xs bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors cursor-pointer font-medium"
                            >
                              +{project.tags.length - 3}
                            </button>
                          )}
                          {expandedTags === project.id && project.tags.length > 3 && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setExpandedTags(null);
                              }}
                              className="px-2 py-1 rounded text-xs bg-primary text-primary-foreground hover:bg-primary/80 transition-colors cursor-pointer font-medium"
                            >
                              Show Less
                            </button>
                          )}
                        </div>

                        {/* Link */}
                        {!project.comingSoon && (
                          <div className="d-flex align-items-center flex-wrap justify-between mt-auto">
                          <div className="flex items-center gap-2 text-sm font-medium text-primary">
                            View Project
                            <ExternalLink
                              size={16}
                              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                            />
                          </div>
                          <div>
                            {/* Partner Badge with Logo */}
                          {project.partner && project.partnerLogo && (
                            <Link to={project.partnerUrl} target="_blank" rel="noopener noreferrer">
                            <div className="absolute bottom-3 right-3 px-2 py-1.5 bg-accent/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md">
                              <p className="text-xs font-medium mr-1">UX/UI Partner with</p> <img 
                                src={project.partnerLogo} 
                                alt="Partner" 
                                className="h-5 w-auto object-contain"
                                title="Created in partnership with 2Squared Studio"
                              />
                            </div>
                          </Link>
                          )}
                          </div>
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
    </>
  );
};

export default PortfolioPage;
