import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowLeft, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import portfolioImage from "@/assets/portfolio-everafterlink.png";
import SEO from "@/components/SEO";

const categories = ["All", "Websites", "Email Signatures", "Email Solutions"];

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
  title: "The BestProp",
  category: "Websites",
  description: "A proprietary trading firm offering funded trading accounts for forex and other financial markets. Traders can complete evaluation challenges to access capital, with competitive profit splits and payout options designed to support performance-based growth.",
  url: "https://thebestprop.com/",
  image: null,
  tags: ["Forex Trading", "Prop Trading", "Funded Accounts", "Profit Split"],
  featured: false,
  comingSoon: true,
},
{
  id: 3,
  title: "Photiou Architects",
  category: "Websites",
  description: "An established architectural and design practice based in Limassol, Cyprus, offering comprehensive services from concept design to project delivery. With decades of experience in commercial, residential, hospitality and urban projects, the firm focuses on thoughtful, sustainable, and context-sensitive architecture tailored to client needs.",
  url: "https://photiouarchitects.com/",
  image: null,
  tags: ["Architecture", "Design", "Sustainability", "Project Management"],
  featured: false,
  comingSoon: false,
},
{
  id: 4,
  title: "ATP Properties",
  category: "Websites",
  description: "ATP Properties is a boutique real estate development company in Limassol, Cyprus, specializing in luxury residential and commercial projects. The firm focuses on unique architectural design, high-quality materials, advanced security, and comprehensive amenities, delivering bespoke properties that balance sophistication, sustainability, and value for investors and homeowners alike.",  
  url: "https://www.atp.properties/",
  image: null,
  tags: ["Real Estate Development", "Luxury Properties", "Cyprus", "Architecture"],
  featured: false,
  comingSoon: false,
},
{
  id: 5,
  title: "CP Law Firm",
  category: "Websites",
  description: "CP Law Firm (C. Pilyugin & Co LLC) is a multidisciplinary law firm based in Limassol, Cyprus offering comprehensive legal, corporate, tax, and advisory services. The firm supports clients with corporate and commercial law, property transactions, immigration and citizenship matters, intellectual property, employment and family law, and international tax planning, delivering tailored solutions for both individuals and businesses.",  
  url: "https://cplawyers.com/",
  image: null,
  tags: ["Law Firm", "Legal Services", "Corporate Law", "Tax & Advisory"],
  featured: false,
  comingSoon: false,
},
  {
  id: 6,
  title: "Pittalis Strawberries",
  category: "Websites",
  description: "Pittalis Strawberries is a local Cypriot service that tracks and displays real-time availability of fresh strawberry fridges across Limassol and surrounding areas, helping customers find and access quality strawberries easily. The site lists locations and current stock levels at various pickup points, supporting local produce consumption with up-to-date availability information.",
  url: "https://pittalisstrawberries.com/",
  image: null,
  tags: ["Agriculture", "Local Produce", "Strawberries", "Availability Dashboard"],
  featured: false,
  comingSoon: false,
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
    </>
  );
};

export default PortfolioPage;
