import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Create Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Reach out and let's discuss 
            how we can bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-8 bg-gradient-hero rounded-2xl border border-border/50">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8 text-center">
              Get in Touch
            </h3>
            
            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:info@websisters.com.cy" 
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    info@websisters.com.cy
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">
                    Cyprus 🇨🇾
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+35799123456" 
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    +357 99 123 456
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+35796123456" 
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    +357 96 123 456
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="border-t border-border/50 pt-6">
              <p className="text-sm text-muted-foreground text-center mb-4">Follow us</p>
              <div className="flex justify-center gap-4">
                <a 
                  href="https://instagram.com/websisters" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground"
                >
                  <Instagram size={22} />
                </a>
                <a 
                  href="https://facebook.com/websisters" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground"
                >
                  <Facebook size={22} />
                </a>
                <a 
                  href="https://linkedin.com/company/websisters" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-muted-foreground"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 p-6 bg-card rounded-2xl border border-border/50 shadow-soft text-center"
          >
            <p className="text-muted-foreground">
              We typically respond within 24-48 hours. Looking forward to hearing from you!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
