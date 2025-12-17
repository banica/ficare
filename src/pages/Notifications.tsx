import { AppLayout } from '@/components/layout/AppLayout';
import { AlertCircle, CheckCircle, Info, Clock, Bell, Send, Filter, Trash2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

const notifications = [
  { 
    id: 1, 
    type: 'alert', 
    title: 'High Stress Level Detected', 
    message: 'Your cortisol levels have been elevated for the past 2 hours. Consider taking a break and practicing deep breathing exercises.',
    time: '10 min ago',
    sentToMedic: true,
    medicName: 'Dr. Martinez',
    read: false
  },
  { 
    id: 2, 
    type: 'success', 
    title: 'Sleep Goal Achieved', 
    message: 'Congratulations! You completed 8 hours of quality sleep last night. Your sleep efficiency was 92%.',
    time: '2 hours ago',
    sentToMedic: false,
    read: false
  },
  { 
    id: 3, 
    type: 'info', 
    title: 'Nutrition Reminder', 
    message: 'You haven\'t logged your lunch yet. Maintaining accurate food logs helps track your nutritional goals.',
    time: '4 hours ago',
    sentToMedic: false,
    read: true
  },
  { 
    id: 4, 
    type: 'pending', 
    title: 'Weekly Report Sent', 
    message: 'Your comprehensive health summary for the week has been automatically sent to Dr. Martinez for review.',
    time: '1 day ago',
    sentToMedic: true,
    medicName: 'Dr. Martinez',
    read: true
  },
  { 
    id: 5, 
    type: 'alert', 
    title: 'Irregular Heart Rate', 
    message: 'Your heart rate monitor detected an irregular pattern at 3:45 PM. This has been flagged for medical review.',
    time: '2 days ago',
    sentToMedic: true,
    medicName: 'Dr. Martinez',
    read: true
  },
  { 
    id: 6, 
    type: 'success', 
    title: 'Step Goal Reached', 
    message: 'You\'ve completed 10,000 steps today! Keep up the great work on staying active.',
    time: '2 days ago',
    sentToMedic: false,
    read: true
  },
];

const medicHistory = [
  { date: 'Dec 15, 2024', type: 'Weekly Report', status: 'Reviewed', response: 'Looking good! Keep it up.' },
  { date: 'Dec 14, 2024', type: 'Alert', status: 'Acknowledged', response: 'Will discuss at next appointment.' },
  { date: 'Dec 10, 2024', type: 'Weekly Report', status: 'Reviewed', response: 'Blood pressure slightly elevated.' },
  { date: 'Dec 8, 2024', type: 'Alert', status: 'Acknowledged', response: 'Stress levels noted. Recommending meditation.' },
];

const iconMap = {
  alert: { icon: AlertCircle, color: 'text-destructive bg-destructive/10' },
  success: { icon: CheckCircle, color: 'text-success bg-success/10' },
  info: { icon: Info, color: 'text-info bg-info/10' },
  pending: { icon: Clock, color: 'text-warning bg-warning/10' },
};

export default function Notifications() {
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <AppLayout title="Notifications" subtitle="Alerts and medic communications">
      <div className="grid grid-cols-12 gap-6">
        {/* Stats */}
        <div className="col-span-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card rounded-xl p-5 shadow-card animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                  <Bell className="w-5 h-5 text-info" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{unreadCount}</p>
                  <p className="text-sm text-muted-foreground">Unread</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-card animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">2</p>
                  <p className="text-sm text-muted-foreground">Alerts</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-card animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4</p>
                  <p className="text-sm text-muted-foreground">Sent to Medic</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-card animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">12</p>
                  <p className="text-sm text-muted-foreground">This Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-card rounded-xl shadow-card animate-slide-in">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex items-center justify-between p-4 border-b border-border">
                <TabsList className="bg-secondary">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="alerts">Alerts</TabsTrigger>
                  <TabsTrigger value="medic">Medic</TabsTrigger>
                </TabsList>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm">
                    <Filter className="w-4 h-4 mr-1" /> Filter
                  </Button>
                  <Button variant="ghost" size="sm">
                    Mark All Read
                  </Button>
                </div>
              </div>
              
              <TabsContent value="all" className="m-0">
                <div className="divide-y divide-border">
                  {notifications.map((notification) => {
                    const { icon: Icon, color } = iconMap[notification.type as keyof typeof iconMap];
                    return (
                      <div 
                        key={notification.id}
                        className={cn(
                          "flex gap-4 p-4 hover:bg-secondary/30 transition-colors cursor-pointer",
                          !notification.read && "bg-primary/5"
                        )}
                      >
                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0", color)}>
                          <Icon className="w-5 h-5" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="flex items-center gap-2">
                              <p className={cn(
                                "font-medium text-foreground",
                                !notification.read && "font-semibold"
                              )}>
                                {notification.title}
                              </p>
                              {!notification.read && (
                                <span className="w-2 h-2 bg-primary rounded-full" />
                              )}
                            </div>
                            <span className="text-xs text-muted-foreground flex-shrink-0">{notification.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2">{notification.message}</p>
                          {notification.sentToMedic && (
                            <div className="flex items-center gap-2 mt-2">
                              <Badge variant="secondary" className="text-xs bg-primary/10 text-primary border-0">
                                <Send className="w-3 h-3 mr-1" /> Sent to {notification.medicName}
                              </Badge>
                            </div>
                          )}
                        </div>
                        
                        <Button variant="ghost" size="icon" className="flex-shrink-0">
                          <Trash2 className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              
              <TabsContent value="alerts" className="m-0">
                <div className="divide-y divide-border">
                  {notifications.filter(n => n.type === 'alert').map((notification) => {
                    const { icon: Icon, color } = iconMap[notification.type as keyof typeof iconMap];
                    return (
                      <div 
                        key={notification.id}
                        className="flex gap-4 p-4 hover:bg-secondary/30 transition-colors cursor-pointer"
                      >
                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0", color)}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{notification.title}</p>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
              
              <TabsContent value="medic" className="m-0">
                <div className="divide-y divide-border">
                  {notifications.filter(n => n.sentToMedic).map((notification) => {
                    const { icon: Icon, color } = iconMap[notification.type as keyof typeof iconMap];
                    return (
                      <div 
                        key={notification.id}
                        className="flex gap-4 p-4 hover:bg-secondary/30 transition-colors cursor-pointer"
                      >
                        <div className={cn("w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0", color)}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{notification.title}</p>
                          <p className="text-sm text-muted-foreground">{notification.message}</p>
                          <Badge className="mt-2 bg-primary/10 text-primary border-0">
                            Sent to {notification.medicName}
                          </Badge>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Medic Communication */}
        <div className="col-span-12 lg:col-span-4 space-y-6">
          {/* Primary Medic */}
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <h3 className="font-semibold text-foreground mb-4">Your Medical Team</h3>
            <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Dr. Sarah Martinez</p>
                <p className="text-sm text-muted-foreground">Primary Physician</p>
              </div>
              <div className="w-3 h-3 bg-success rounded-full" title="Online" />
            </div>
            <Button className="w-full mt-4">Send Message</Button>
          </div>

          {/* Communication History */}
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <h3 className="font-semibold text-foreground mb-4">Communication History</h3>
            <div className="space-y-3">
              {medicHistory.map((item, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-lg bg-secondary/50 space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{item.type}</span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <Badge className={cn(
                    "text-xs",
                    item.status === 'Reviewed' ? "bg-success/10 text-success" : "bg-info/10 text-info"
                  )}>
                    {item.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground italic">"{item.response}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Auto-notifications */}
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <h3 className="font-semibold text-foreground mb-4">Auto-Notification Rules</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <span className="text-sm text-foreground">High Stress Alert</span>
                <Badge className="bg-success/10 text-success border-0">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <span className="text-sm text-foreground">Irregular Heart Rate</span>
                <Badge className="bg-success/10 text-success border-0">Active</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <span className="text-sm text-foreground">Weekly Reports</span>
                <Badge className="bg-success/10 text-success border-0">Active</Badge>
              </div>
              <Button variant="outline" className="w-full mt-2">Manage Rules</Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
