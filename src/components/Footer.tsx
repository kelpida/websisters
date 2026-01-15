import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <Logo />
          
          <nav className="flex items-center gap-8">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t("nav.services")}
            </a>
            <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t("nav.portfolio")}
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t("nav.about")}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              {t("nav.contact")}
            </a>
          </nav>

          <p className="text-muted-foreground text-sm">
            © {currentYear} WebSisters. {t("footer.rights")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
