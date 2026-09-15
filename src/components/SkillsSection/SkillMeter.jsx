import { useId } from "react";
import { Box, Typography } from "@mui/material";

const SIZE = 72;
const STROKE = 6;
const RADIUS = (SIZE - STROKE) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const SkillMeter = ({ value = 0 }) => {
  const gradientId = useId();
  const offset = CIRCUMFERENCE * (1 - Math.min(Math.max(value, 0), 100) / 100);

  return (
    <Box className="relative flex items-center justify-center" sx={{ width: SIZE, height: SIZE }}>
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="-rotate-90">
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          className="stroke-slate-200 dark:stroke-white/10"
        />
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          strokeWidth={STROKE}
          strokeLinecap="round"
          stroke={`url(#${gradientId})`}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#AA367C" />
            <stop offset="100%" stopColor="#4A2FBD" />
          </linearGradient>
        </defs>
      </svg>
      <Typography
        variant="caption"
        className="absolute font-bold text-slate-900 dark:text-white"
        sx={{ fontFamily: "CentraNo2, sans-serif", fontSize: "0.8125rem" }}
      >
        {value}%
      </Typography>
    </Box>
  );
};
