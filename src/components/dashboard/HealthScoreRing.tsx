import { cn } from '@/lib/utils';

interface HealthScoreRingProps {
  score: number;
  maxScore?: number;
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

const sizeMap = {
  sm: { container: 'w-24 h-24', ring: 80, stroke: 6, text: 'text-xl' },
  md: { container: 'w-36 h-36', ring: 120, stroke: 8, text: 'text-3xl' },
  lg: { container: 'w-48 h-48', ring: 160, stroke: 10, text: 'text-4xl' },
};

export function HealthScoreRing({ score, maxScore = 100, size = 'md', label }: HealthScoreRingProps) {
  const { container, ring, stroke, text } = sizeMap[size];
  const radius = (ring - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / maxScore) * 100;
  const offset = circumference - (progress / 100) * circumference;

  const getScoreColor = () => {
    if (score >= 80) return 'stroke-success';
    if (score >= 60) return 'stroke-warning';
    return 'stroke-destructive';
  };

  return (
    <div className={cn("relative flex items-center justify-center", container)}>
      <svg className="transform -rotate-90" width={ring} height={ring}>
        {/* Background ring */}
        <circle
          cx={ring / 2}
          cy={ring / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-secondary"
        />
        {/* Progress ring */}
        <circle
          cx={ring / 2}
          cy={ring / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className={cn("transition-all duration-1000 ease-out", getScoreColor())}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={cn("font-bold text-foreground", text)}>{score}</span>
        {label && <span className="text-xs text-muted-foreground mt-1">{label}</span>}
      </div>
    </div>
  );
}
