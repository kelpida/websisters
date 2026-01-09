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

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to launch and beyond, we provide everything you need 
            for a successful online presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-background rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
