import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

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
          className="max-w-xl mx-auto"
        >
          <div className="p-8 bg-gradient-hero rounded-2xl border border-border/50 text-center">
            <h3 className="font-display text-2xl font-bold text-foreground mb-8">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <Mail size={20} className="text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Email us at</p>
                  <a 
                    href="mailto:info@websisters.com.cy" 
                    className="text-foreground font-medium hover:text-primary transition-colors text-lg"
                  >
                    info@websisters.com.cy
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                  <MapPin size={20} className="text-primary-foreground" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">Based in</p>
                  <p className="text-foreground font-medium text-lg">
                    Cyprus 🇨🇾
                  </p>
                </div>
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
