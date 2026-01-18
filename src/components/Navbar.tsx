import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Globe, Mail, Linkedin, Facebook, Instagram, Twitter, Link } from "lucide-react";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "./ui/sheet";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  const contactInfo = {
    email: "info@websisters.com.cy",
  };

  const navLinks = [
    { href: "#services", label: t("nav.services") },
    { href: "/portfolio", label: t("nav.portfolio") },
    { href: "#about", label: t("nav.about") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsOpen(false);
  };

  const currentLanguage = i18n.language === "gr" ? "ΕΛ" : "EN";

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
          <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Globe size={16} />
                  {currentLanguage}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange("en")}
                  className={i18n.language === "en" ? "bg-accent" : ""}
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={() => handleLanguageChange("gr")}
                  className={i18n.language === "gr" ? "bg-accent" : ""}
                >
                  Ελληνικά
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button variant="hero" size="lg">
              {t("nav.getInTouch")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetContent side="right" className="w-[300px] sm:w-[350px] flex flex-col">
            <SheetHeader>
              <SheetTitle>{t("nav.menu")}</SheetTitle>
            </SheetHeader>

            <div className="flex-1 overflow-y-auto py-6 space-y-6">
              {/* Navigation Links */}
              <nav className="space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block text-muted-foreground hover:text-foreground transition-colors font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              {/* Divider */}
              <div className="border-t border-border/50" />

              {/* Contact Information */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">{t("nav.contact")}</h3>
                <div className="space-y-2">
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Mail size={18} />
                    <span className="text-sm break-all">{contactInfo.email}</span>
                  </a>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border/50" />

              {/* Social Links */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">{t("nav.followUs")} | {t("portfolio.comingSoon")}</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <button
                        key={social.label}
                        onClick={(e) => e.preventDefault()}
                        className="p-2 rounded-lg bg-muted hover:bg-muted transition-colors cursor-not-allowed opacity-60"
                        aria-label={social.label}
                        title="Coming Soon"
                      >
                        <IconComponent size={20} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-border/50" />

              {/* Language Selector */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Globe size={18} />
                  {t("nav.language")}
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant={i18n.language === "en" ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      i18n.changeLanguage("en");
                      localStorage.setItem("language", "en");
                      setIsOpen(false);
                    }}
                  >
                    English
                  </Button>
                  <Button
                    variant={i18n.language === "gr" ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      i18n.changeLanguage("gr");
                      localStorage.setItem("language", "gr");
                      setIsOpen(false);
                    }}
                  >
                    Ελληνικά
                  </Button>
                </div>
              </div>
            </div>

            {/* CTA Button */}
                <a href="#contact" onClick={() => setIsOpen(false)}>
            <Button variant="hero" size="lg" className="w-full">
              {t("nav.getInTouch")}
            </Button>
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </motion.nav>
  );
};

export default Navbar;
