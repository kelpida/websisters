import { motion, AnimatePresence } from "framer-motion";
import { Code, Mail, Server, Newspaper, Settings, Palette, X, ExternalLink, CheckCircle, Handshake } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

interface Partner {
  name: string;
  logo: string;
}

interface Service {
  icon: typeof Code;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  samples: { title: string; type: string; url: string }[];
  isPartnerService?: boolean;
  partners?: Partner[];
}

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "From WordPress sites to custom web apps with Laravel, React, Next.js & Tailwind. We build what your business needs.",
    fullDescription: "We craft stunning, high-performance websites and web applications tailored to your unique business needs. Whether you need a simple landing page or a complex e-commerce platform, we've got you covered.",
    features: [
      "Custom WordPress themes & plugins",
      "React & Next.js applications",
      "Laravel backend development",
      "E-commerce solutions (WooCommerce, Shopify)",
      "Progressive Web Apps (PWA)",
      "API integrations"
    ],
    samples: [
      { title: "The Ever After Link", type: "Wedding Platform", url: "https://theeverafterlink.com" },
      { title: "E-Commerce Store", type: "Online Shop", url: "#" },
    ]
  },
  {
    icon: Mail,
    title: "Email Signatures",
    description: "Professional, branded email signatures that make every email an opportunity to impress your contacts.",
    fullDescription: "Transform every email into a branding opportunity with our professionally designed email signatures. We create pixel-perfect signatures that work across all email clients and devices.",
    features: [
      "Responsive design for all devices",
      "Compatible with Gmail, Outlook, Apple Mail",
      "Social media integration",
      "Call-to-action buttons",
      "Multiple signature variations",
      "Easy installation guide included"
    ],
    samples: [
      { title: "Corporate Signature", type: "Professional", url: "#" },
      { title: "Creative Signature", type: "Modern Design", url: "#" },
    ]
  },
  {
    icon: Server,
    title: "Hosting & Maintenance",
    description: "Reliable hosting solutions with ongoing maintenance to keep your site secure, fast, and always online.",
    fullDescription: "Rest easy knowing your website is in safe hands. We provide premium hosting with 99.9% uptime, regular backups, security monitoring, and proactive maintenance to keep your site running smoothly.",
    features: [
      "99.9% uptime guarantee",
      "Daily automated backups",
      "SSL certificate management",
      "Security monitoring & updates",
      "Performance optimization",
      "24/7 technical support"
    ],
    samples: [
      { title: "Managed WordPress", type: "Hosting Plan", url: "#" },
      { title: "VPS Solutions", type: "Enterprise", url: "#" },
    ]
  },
  {
    icon: Newspaper,
    title: "Newsletter Design",
    description: "Engaging newsletter templates and campaigns that connect with your audience and drive results.",
    fullDescription: "Captivate your subscribers with beautifully designed newsletters that drive engagement and conversions. We create templates that reflect your brand and compel readers to take action.",
    features: [
      "Custom template design",
      "Mobile-responsive layouts",
      "A/B testing optimization",
      "Mailchimp & SendGrid integration",
      "Analytics & tracking setup",
      "Automated campaign setup"
    ],
    samples: [
      { title: "Monthly Digest", type: "Newsletter Template", url: "#" },
      { title: "Product Launch", type: "Campaign Design", url: "#" },
    ]
  },
  {
    icon: Settings,
    title: "Email Setup",
    description: "Complete email configuration for your business domain, including spam protection and professional setup.",
    fullDescription: "Get professional business email that builds trust and credibility. We handle the complete setup including DNS configuration, spam protection, and email client configuration across all your devices.",
    features: [
      "Custom domain email (you@yourbusiness.com)",
      "Google Workspace / Microsoft 365 setup",
      "SPF, DKIM, DMARC configuration",
      "Spam & phishing protection",
      "Email forwarding & aliases",
      "Multi-device configuration"
    ],
    samples: [
      { title: "Google Workspace", type: "Business Email", url: "#" },
      { title: "Microsoft 365", type: "Enterprise Solution", url: "#" },
    ]
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description: "Logo design and brand identity packages through our trusted creative partners who share our standards.",
    fullDescription: "While we focus on web development and digital solutions, we work closely with trusted creative partners to deliver exceptional brand identities. This collaboration ensures you get specialized expertise while we manage the entire process seamlessly.",
    features: [
      "Custom logo design",
      "Color palette & typography",
      "Brand style guidelines",
      "Business card design",
      "Social media assets",
      "Brand collateral templates"
    ],
    samples: [
      { title: "Startup Branding", type: "Complete Package", url: "#" },
      { title: "Logo Redesign", type: "Brand Refresh", url: "#" },
    ],
    isPartnerService: true,
    partners: [
      { name: "Partner 1", logo: "/partner-logo-1.png" },
      { name: "Partner 2", logo: "/partner-logo-2.png" },
    ]
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
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

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
              onClick={() => setSelectedService(service)}
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

              {/* Click indicator */}
              <motion.div
                className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-primary text-sm font-medium"
              >
                Learn more
                <motion.span
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

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-border">
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <motion.div 
                    className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <selectedService.icon size={32} className="text-primary-foreground" />
                  </motion.div>
                  <div>
                    <DialogTitle className="font-display text-2xl font-bold text-foreground">
                      {selectedService.title}
                    </DialogTitle>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                {/* Description */}
                <motion.p 
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {selectedService.fullDescription}
                </motion.p>

                {/* Features */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                    What's Included
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedService.features.map((feature, i) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.05 }}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle size={16} className="text-primary shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Partner Service Notice */}
                {selectedService.isPartnerService && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="p-4 bg-primary/5 rounded-xl border border-primary/20"
                  >
                    <div className="flex items-start gap-3">
                      <Handshake size={20} className="text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-foreground/80">
                          This service is delivered through our trusted creative partners who share our commitment to quality and excellence.
                        </p>
                        {selectedService.partners && selectedService.partners.length > 0 && (
                          <div className="mt-4">
                            <p className="text-xs text-muted-foreground mb-3">Our Partners</p>
                            <div className="flex gap-4 items-center">
                              {selectedService.partners.map((partner) => (
                                <div 
                                  key={partner.name}
                                  className="h-10 px-4 bg-background rounded-lg border border-border/50 flex items-center justify-center"
                                >
                                  <img 
                                    src={partner.logo} 
                                    alt={partner.name}
                                    className="h-6 w-auto object-contain"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none';
                                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                  />
                                  <span className="hidden text-sm text-muted-foreground">{partner.name}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Sample Work */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-display text-lg font-semibold text-foreground mb-4">
                    Sample Work
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedService.samples.map((sample, i) => (
                      <motion.a
                        key={sample.title}
                        href={sample.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.03, y: -4 }}
                        className="group p-4 bg-secondary/50 rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-glow transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {sample.title}
                            </h5>
                            <p className="text-sm text-muted-foreground">{sample.type}</p>
                          </div>
                          <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4 border-t border-border"
                >
                  <a href="#contact">
                    <Button 
                      variant="hero" 
                      className="w-full"
                      onClick={() => setSelectedService(null)}
                    >
                      Get Started with {selectedService.title}
                    </Button>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
