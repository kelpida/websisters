import { motion } from "framer-motion";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <motion.div 
      className={`flex items-center gap-2.5 ${className}`}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* A & E monogram logo */}
      <svg 
        width="44" 
        height="44" 
        viewBox="0 0 44 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect 
          x="2" 
          y="2" 
          width="40" 
          height="40" 
          rx="10" 
          fill="url(#logoBg)"
        />
        {/* Letter A */}
        <path 
          d="M12 32L18 12L24 32M14 26H22" 
          stroke="white" 
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Letter E */}
        <path 
          d="M28 12H36M28 22H34M28 32H36M28 12V32" 
          stroke="white" 
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient id="logoBg" x1="2" y1="2" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="hsl(220 75% 50%)" />
            <stop offset="1" stopColor="hsl(200 85% 45%)" />
          </linearGradient>
        </defs>
      </svg>
      <span className="font-display text-xl text-foreground tracking-tight">
        WebSisters
      </span>
    </motion.div>
  );
};

export default Logo;
