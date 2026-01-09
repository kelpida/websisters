import { motion } from "framer-motion";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Abstract logo mark - two intertwined shapes representing sisters */}
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 40 40" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <circle 
          cx="14" 
          cy="20" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="2.5"
          fill="none"
        />
        <circle 
          cx="26" 
          cy="20" 
          r="10" 
          stroke="hsl(var(--accent))" 
          strokeWidth="2.5"
          fill="none"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold text-foreground tracking-tight">
          SisterCode
        </span>
        <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
          Cyprus
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
