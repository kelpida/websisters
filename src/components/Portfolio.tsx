import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import portfolioImage from "@/assets/portfolio-everafter.jpg";

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
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Projects we've brought to life with passion and precision.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:row-span-2"
          >
            <a
              href={projects[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block h-full"
            >
              <div className="relative h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden bg-gradient-hero border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300">
                <img src={portfolioImage} alt="The Ever After Link project" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-2 text-primary-foreground text-sm font-medium mb-2">
                    <span className="px-3 py-1 bg-primary/80 rounded-full">
                      {projects[0].category}
                    </span>
                    <span className="px-3 py-1 bg-accent/80 rounded-full">
                      Featured
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary-foreground mb-2 group-hover:text-primary transition-colors">
                    {projects[0].title}
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    {projects[0].description}
                  </p>
                  <div className="flex items-center gap-2 text-primary-foreground font-medium">
                    Visit Website
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </a>
          </motion.div>

          {/* Other Projects */}
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
            >
              <a
                href={project.url}
                className="group block"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-muted-foreground text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {project.description}
                    </p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="heroOutline" size="lg">
            See All Projects
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
