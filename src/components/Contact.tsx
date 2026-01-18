import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
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
            {t("contact.subtitle")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("contact.description")}
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
              {t("contact.title")}
            </h3>
            
            {/* Contact Info Grid */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.email")}</p>
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
                  <p className="text-sm text-muted-foreground">{t("contact.location")}</p>
                  <p className="text-foreground font-medium">
                    Cyprus 🇨🇾
                  </p>
                </div>
              </div>
              
              {/* <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.phone")}</p>
                  <a 
                    href="tel:#" 
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    #
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.phone")}</p>
                  <a 
                    href="tel:#" 
                    className="text-foreground font-medium hover:text-primary transition-colors"
                  >
                    #
                  </a>
                </div>
              </div> */}
            </div>

            {/* Social Media Links */}
            <div className="border-t border-border/50 pt-6">
              <p className="text-sm text-muted-foreground text-center mb-4">{t("contact.followUs")} | Coming Soon</p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={(e) => e.preventDefault()}
                  className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-muted transition-all duration-300 text-muted-foreground cursor-not-allowed opacity-60" 
                  title="Coming Soon"
                >
                  <Instagram size={22} />
                </button>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-muted transition-all duration-300 text-muted-foreground cursor-not-allowed opacity-60" 
                  title="Coming Soon"
                >
                  <Facebook size={22} />
                </button>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="w-12 h-12 rounded-xl bg-card border border-border/50 flex items-center justify-center hover:bg-muted transition-all duration-300 text-muted-foreground cursor-not-allowed opacity-60" 
                  title="Coming Soon"
                >
                  <Linkedin size={22} />
                </button>
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
              {t("contact.responseTime")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
