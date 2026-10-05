import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'compact' | 'light' | 'large';
  showTagline?: boolean;
  theme?: 'dark' | 'light';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'default',
  showTagline = true,
  theme = 'light',
}) => {
  const isCompact = variant === 'compact';
  const isLarge = variant === 'large';
  const isDarkBg = theme === 'dark';

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Brand Icon: Architectural roof symbol with centered security door */}
      <div className="relative flex-shrink-0">
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            isCompact ? 'w-8 h-8' : isLarge ? 'w-12 h-12' : 'w-10 h-10'
          } drop-shadow-[0_2px_10px_rgba(212,175,55,0.35)] transition-transform duration-300 group-hover:scale-105`}
        >
          {/* Outer Protective Roof / Gable in Rich Gold */}
          <path
            d="M24 4L4 19H8V42H40V19H44L24 4Z"
            fill={isDarkBg ? "#121316" : "#1A1B20"}
            stroke="url(#goldGradient)"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Inner Architectural Roof Line */}
          <path
            d="M24 8L9 20H13V39H35V20H39L24 8Z"
            fill={isDarkBg ? "#18191E" : "#24262E"}
            opacity="0.95"
          />
          {/* Security Door Silhouette in Solid Gold with Vertical Grooves */}
          <rect
            x="18"
            y="21"
            width="12"
            height="18"
            rx="1.5"
            fill="url(#goldGradient)"
          />
          {/* Door panel groove lines */}
          <line x1="22" y1="23" x2="22" y2="37" stroke="#121316" strokeWidth="0.9" />
          <line x1="26" y1="23" x2="26" y2="37" stroke="#121316" strokeWidth="0.9" />
          {/* Door Handle in subtle red/gold accent */}
          <circle cx="20.5" cy="30" r="1.1" fill="#DC2626" />
          <circle cx="20.5" cy="30" r="0.6" fill="#FEF08A" />

          {/* Gradients */}
          <defs>
            <linearGradient id="goldGradient" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FDE047" />
              <stop offset="0.4" stopColor="#E5B83B" />
              <stop offset="0.8" stopColor="#D4AF37" />
              <stop offset="1" stopColor="#B38728" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline tracking-tight">
          <span
            className={`font-extrabold text-lg tracking-wider font-cinzel sm:text-xl ${
              isDarkBg ? 'text-white' : 'text-zinc-900'
            }`}
          >
            TOF<span className="text-[#C59A27]">4</span>
          </span>
          <span className="ml-1.5 font-bold tracking-widest text-[#B38728] text-base sm:text-lg">
            DOORS
          </span>
        </div>
        {showTagline && !isCompact && (
          <span
            className={`text-[9px] uppercase tracking-[0.22em] font-semibold mt-0.5 ${
              isDarkBg ? 'text-amber-200/90' : 'text-amber-800/90'
            }`}
          >
            Strong doors, Safe homes.
          </span>
        )}
      </div>
    </div>
  );
};
