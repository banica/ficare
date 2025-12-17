import { AlertCircle, CheckCircle, Info, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const notifications = [
  { 
    id: 1, 
    type: 'alert', 
    title: 'High Stress Level Detected', 
    message: 'Your cortisol levels are elevated. Consider taking a break.',
    time: '10 min ago',
    sentToMedic: true
  },
  { 
    id: 2, 
    type: 'success', 
    title: 'Sleep Goal Achieved', 
    message: 'You completed 8 hours of quality sleep last night.',
    time: '2 hours ago',
    sentToMedic: false
  },
  { 
    id: 3, 
    type: 'info', 
    title: 'Nutrition Reminder', 
    message: 'You haven\'t logged your lunch yet. Stay on track!',
    time: '4 hours ago',
    sentToMedic: false
  },
  { 
    id: 4, 
    type: 'pending', 
    title: 'Weekly Report Ready', 
    message: 'Your health summary has been sent to Dr. Alexandru Burtic.',
    time: '1 day ago',
    sentToMedic: true
  },
];

const iconMap = {
  alert: { icon: AlertCircle, color: 'text-destructive bg-destructive/10' },
  success: { icon: CheckCircle, color: 'text-success bg-success/10' },
  info: { icon: Info, color: 'text-info bg-info/10' },
  pending: { icon: Clock, color: 'text-warning bg-warning/10' },
};

export function NotificationFeed() {
  return (
    <div className="bg-card rounded-xl p-5 shadow-card animate-slide-in">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">Recent Notifications</h3>
          <p className="text-sm text-muted-foreground">Alerts & updates</p>
        </div>
        <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
          View All
        </Button>
      </div>
      
      <div className="space-y-3">
        {notifications.map((notification) => {
          const { icon: Icon, color } = iconMap[notification.type as keyof typeof iconMap];
          return (
            <div 
              key={notification.id}
              className="flex gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer"
            >
              <div className={cn("w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0", color)}>
                <Icon className="w-4 h-4" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-medium text-foreground">{notification.title}</p>
                  {notification.sentToMedic && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full flex-shrink-0">
                      Sent to Medic
                    </span>
                  )}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">{notification.message}</p>
                <p className="text-xs text-muted-foreground/70 mt-1">{notification.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
