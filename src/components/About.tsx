import { motion } from "framer-motion";
import { Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every project gets our full dedication and personal touch.",
  },
  {
    icon: Lightbulb,
    title: "Creative Solutions",
    description: "We blend creativity with technical expertise for unique results.",
  },
  {
    icon: Users,
    title: "Personal Connection",
    description: "We work closely with you, understanding your vision and goals.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              The Sisters Behind
              <br />
              <span className="text-gradient-primary">the Screen</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We're two sisters from the beautiful island of Cyprus, united by 
                our love for design and technology. What started as a shared 
                passion has grown into a creative partnership that brings websites 
                and digital experiences to life.
              </p>
              <p>
                Working as a duo gives us a unique advantage: two perspectives, 
                double the creativity, and a natural collaboration that our clients 
                love. We bring the best of both worlds – technical precision and 
                creative flair – to every project we take on.
              </p>
              <p>
                When we're not coding or designing, you'll find us exploring 
                Cyprus's stunning coastlines, sipping coffee at local cafés, 
                and finding inspiration in the Mediterranean lifestyle that 
                shapes our work.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-5 p-6 bg-background rounded-2xl shadow-soft border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                  <value.icon size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
