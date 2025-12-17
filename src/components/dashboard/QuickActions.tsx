import { Plus, FileText, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const actions = [
  { icon: Plus, label: 'Log Meal', color: 'bg-health-nutrition text-white hover:bg-health-nutrition/90' },
  { icon: FileText, label: 'Health Report', color: 'bg-health-sleep text-white hover:bg-health-sleep/90' },
  { icon: Phone, label: 'Contact Medic', color: 'bg-health-heart text-white hover:bg-health-heart/90' },
  { icon: Calendar, label: 'Schedule', color: 'bg-health-steps text-white hover:bg-health-steps/90' },
];

export function QuickActions() {
  return (
    <div className="bg-card rounded-xl p-5 shadow-card animate-slide-in">
      <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 gap-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            className={`h-auto py-4 flex flex-col gap-2 ${action.color}`}
          >
            <action.icon className="w-5 h-5" />
            <span className="text-xs font-medium">{action.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
