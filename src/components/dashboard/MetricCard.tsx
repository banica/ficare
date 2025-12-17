import { LucideIcon, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  value: string | number;
  unit?: string;
  change?: number;
  icon: LucideIcon;
  color: 'primary' | 'nutrition' | 'stress' | 'sleep' | 'heart' | 'steps';
  subtitle?: string;
}

const colorMap = {
  primary: 'bg-primary/10 text-primary',
  nutrition: 'bg-health-nutrition/10 text-health-nutrition',
  stress: 'bg-health-stress/10 text-health-stress',
  sleep: 'bg-health-sleep/10 text-health-sleep',
  heart: 'bg-health-heart/10 text-health-heart',
  steps: 'bg-health-steps/10 text-health-steps',
};

export function MetricCard({ title, value, unit, change, icon: Icon, color, subtitle }: MetricCardProps) {
  const getTrendIcon = () => {
    if (!change) return <Minus className="w-3 h-3" />;
    return change > 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />;
  };

  const getTrendColor = () => {
    if (!change) return 'text-muted-foreground';
    return change > 0 ? 'text-success' : 'text-destructive';
  };

  return (
    <div className="bg-card rounded-xl p-5 shadow-card hover:shadow-elevated transition-shadow duration-200 animate-scale-in">
      <div className="flex items-start justify-between mb-4">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", colorMap[color])}>
          <Icon className="w-5 h-5" />
        </div>
        {change !== undefined && (
          <div className={cn("flex items-center gap-1 text-sm font-medium", getTrendColor())}>
            {getTrendIcon()}
            <span>{Math.abs(change)}%</span>
          </div>
        )}
      </div>
      
      <div className="space-y-1">
        <p className="text-sm text-muted-foreground">{title}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-2xl font-semibold text-foreground">{value}</span>
          {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
        </div>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  );
}
