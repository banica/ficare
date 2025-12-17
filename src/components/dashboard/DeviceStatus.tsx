import { Watch, Activity, Thermometer, Scale, Wifi, WifiOff } from 'lucide-react';
import { cn } from '@/lib/utils';

const devices = [
  { name: 'Smart Watch Pro', type: 'Wearable', icon: Watch, connected: true, battery: 85, lastSync: '2 min ago' },
  { name: 'Heart Rate Monitor', type: 'Medical', icon: Activity, connected: true, battery: 92, lastSync: '5 min ago' },
  { name: 'Body Thermometer', type: 'Medical', icon: Thermometer, connected: false, battery: 45, lastSync: '1 hour ago' },
  { name: 'Smart Scale', type: 'Wellness', icon: Scale, connected: true, battery: 100, lastSync: '1 day ago' },
];

export function DeviceStatus() {
  return (
    <div className="bg-card rounded-xl p-5 shadow-card animate-slide-in">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-semibold text-foreground">Connected Devices</h3>
          <p className="text-sm text-muted-foreground">IoT health monitors</p>
        </div>
        <span className="text-xs text-muted-foreground">
          {devices.filter(d => d.connected).length}/{devices.length} online
        </span>
      </div>
      
      <div className="space-y-3">
        {devices.map((device) => (
          <div 
            key={device.name}
            className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
          >
            <div className={cn(
              "w-10 h-10 rounded-lg flex items-center justify-center",
              device.connected ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
            )}>
              <device.icon className="w-5 h-5" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-foreground truncate">{device.name}</p>
                {device.connected ? (
                  <Wifi className="w-3 h-3 text-success" />
                ) : (
                  <WifiOff className="w-3 h-3 text-muted-foreground" />
                )}
              </div>
              <p className="text-xs text-muted-foreground">{device.type} • {device.lastSync}</p>
            </div>
            
            <div className="text-right">
              <div className="flex items-center gap-1">
                <div className="w-8 h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className={cn(
                      "h-full rounded-full transition-all",
                      device.battery > 50 ? "bg-success" : device.battery > 20 ? "bg-warning" : "bg-destructive"
                    )}
                    style={{ width: `${device.battery}%` }}
                  />
                </div>
                <span className="text-xs text-muted-foreground">{device.battery}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
