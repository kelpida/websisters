import { motion } from "framer-motion";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Abstract logo mark - elegant W shape */}
      <svg 
        width="42" 
        height="36" 
        viewBox="0 0 42 36" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-primary"
      >
        <path 
          d="M2 4L11 32L21 12L31 32L40 4" 
          stroke="url(#logoGradient)" 
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <defs>
          <linearGradient id="logoGradient" x1="2" y1="4" x2="40" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(220 75% 50%)" />
            <stop offset="1" stopColor="hsl(200 85% 45%)" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="font-display text-xl font-normal text-foreground tracking-tight">
          WebSisters
        </span>
        <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">
          Cyprus
        </span>
      </div>
    </motion.div>
  );
};

export default Logo;
