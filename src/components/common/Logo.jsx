export const LogoMark = ({ className = "" }) => (
  <svg
    viewBox="0 0 40 40"
    className={className}
    style={{ filter: "drop-shadow(0 2px 8px rgba(0, 212, 255, 0.35))" }}
  >
    <defs>
      <linearGradient id="logoMarkGrad" x1="2" y1="2" x2="38" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#00d4ff" />
        <stop offset="100%" stopColor="#7c3aed" />
      </linearGradient>
    </defs>
    <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="11" fill="#0b1224" />
    <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="11" fill="url(#logoMarkGrad)" opacity="0.14" />
    <rect x="1.25" y="1.25" width="37.5" height="37.5" rx="11" fill="none" stroke="url(#logoMarkGrad)" strokeWidth="1.5" />
    <g stroke="url(#logoMarkGrad)" strokeWidth="1" strokeLinecap="round" opacity="0.6">
      <path d="M6.5 30.5 H11" />
      <path d="M29 9.5 H33.5" />
    </g>
    <circle cx="6.5" cy="30.5" r="1.3" fill="#00d4ff" />
    <circle cx="33.5" cy="9.5" r="1.3" fill="#7c3aed" />
    <text
      x="20"
      y="27"
      textAnchor="middle"
      fontFamily="CentraNo2, sans-serif"
      fontWeight="800"
      fontSize="16.5"
      letterSpacing="0.4"
      fill="url(#logoMarkGrad)"
    >
      AK
    </text>
  </svg>
);

export const Logo = ({ className = "", markClassName = "w-9 h-9 sm:w-11 sm:h-11", showText = true, align = "left" }) => (
  <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
    <LogoMark className={`shrink-0 ${markClassName}`} />
    {showText && (
      <div className={`flex flex-col leading-tight ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
        <span
          className="text-xs sm:text-sm font-bold tracking-wide text-slate-900 dark:text-white whitespace-nowrap"
          style={{ fontFamily: "CentraNo2, sans-serif" }}
        >
          ASHAN KAUSHANKA
        </span>
        <span className="text-[8px] sm:text-[9px] font-medium tracking-[0.18em] text-accent/80 whitespace-nowrap">
          SITE RELIABILITY ENGINEER
        </span>
      </div>
    )}
  </div>
);
