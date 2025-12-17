import { AppLayout } from '@/components/layout/AppLayout';
import { Watch, Activity, Thermometer, Scale, Wifi, WifiOff, Battery, RefreshCw, Settings, Plus, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const devices = [
  { 
    id: 1,
    name: 'Apple Watch Series 9', 
    type: 'Wearable', 
    icon: Watch, 
    connected: true, 
    battery: 85, 
    lastSync: '2 min ago',
    metrics: ['Heart Rate', 'Steps', 'Sleep', 'SpO2'],
    certified: true,
    firmware: 'v10.2.1'
  },
  { 
    id: 2,
    name: 'Polar H10 HR Monitor', 
    type: 'Medical Grade', 
    icon: Activity, 
    connected: true, 
    battery: 92, 
    lastSync: '5 min ago',
    metrics: ['Heart Rate', 'HRV', 'ECG'],
    certified: true,
    firmware: 'v3.1.0'
  },
  { 
    id: 3,
    name: 'Withings Thermo', 
    type: 'Medical', 
    icon: Thermometer, 
    connected: false, 
    battery: 45, 
    lastSync: '1 hour ago',
    metrics: ['Temperature'],
    certified: true,
    firmware: 'v2.0.4'
  },
  { 
    id: 4,
    name: 'Withings Body+', 
    type: 'Wellness', 
    icon: Scale, 
    connected: true, 
    battery: 100, 
    lastSync: '1 day ago',
    metrics: ['Weight', 'BMI', 'Body Fat', 'Muscle Mass'],
    certified: true,
    firmware: 'v4.2.0'
  },
];

const recentReadings = [
  { device: 'Apple Watch', metric: 'Heart Rate', value: '72 bpm', time: '2 min ago', status: 'normal' },
  { device: 'Polar H10', metric: 'HRV', value: '65 ms', time: '5 min ago', status: 'good' },
  { device: 'Withings Body+', metric: 'Weight', value: '68.5 kg', time: '1 day ago', status: 'normal' },
  { device: 'Withings Thermo', metric: 'Temperature', value: '36.8°C', time: '1 hour ago', status: 'normal' },
];

export default function Devices() {
  return (
    <AppLayout title="IoT Devices" subtitle="Manage your connected health devices">
      <div className="grid grid-cols-12 gap-6">
        {/* Summary Stats */}
        <div className="col-span-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-card rounded-xl p-5 shadow-card animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                  <Wifi className="w-5 h-5 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">3</p>
                  <p className="text-sm text-muted-foreground">Connected</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-card animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                  <WifiOff className="w-5 h-5 text-warning" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">1</p>
                  <p className="text-sm text-muted-foreground">Offline</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-card animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">4</p>
                  <p className="text-sm text-muted-foreground">Certified</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-5 shadow-card animate-scale-in">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                  <RefreshCw className="w-5 h-5 text-info" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">127</p>
                  <p className="text-sm text-muted-foreground">Syncs Today</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Device List */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-card rounded-xl shadow-card animate-slide-in">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h3 className="font-semibold text-foreground">Connected Devices</h3>
                <p className="text-sm text-muted-foreground">Certified IoT health monitors</p>
              </div>
              <Button className="gap-2">
                <Plus className="w-4 h-4" /> Add Device
              </Button>
            </div>
            
            <div className="divide-y divide-border">
              {devices.map((device) => (
                <div 
                  key={device.id}
                  className="flex items-center gap-4 p-6 hover:bg-secondary/30 transition-colors"
                >
                  <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center",
                    device.connected ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  )}>
                    <device.icon className="w-7 h-7" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-foreground">{device.name}</p>
                      {device.certified && (
                        <Badge variant="secondary" className="text-xs bg-success/10 text-success border-0">
                          <CheckCircle className="w-3 h-3 mr-1" /> Certified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{device.type} • {device.firmware}</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {device.metrics.map((metric) => (
                        <span key={metric} className="text-xs bg-secondary px-2 py-0.5 rounded">
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-right space-y-1">
                    <div className="flex items-center gap-2 justify-end">
                      {device.connected ? (
                        <span className="flex items-center gap-1 text-sm text-success">
                          <Wifi className="w-4 h-4" /> Connected
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <WifiOff className="w-4 h-4" /> Offline
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 justify-end">
                      <Battery className={cn(
                        "w-4 h-4",
                        device.battery > 50 ? "text-success" : device.battery > 20 ? "text-warning" : "text-destructive"
                      )} />
                      <span className="text-sm text-muted-foreground">{device.battery}%</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Synced {device.lastSync}</p>
                  </div>
                  
                  <Button variant="ghost" size="icon">
                    <Settings className="w-4 h-4 text-muted-foreground" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Readings */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <h3 className="font-semibold text-foreground mb-4">Recent Readings</h3>
            <div className="space-y-3">
              {recentReadings.map((reading, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                >
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{reading.metric}</p>
                    <p className="text-xs text-muted-foreground">{reading.device}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{reading.value}</p>
                    <p className="text-xs text-muted-foreground">{reading.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Data Sharing */}
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in mt-6">
            <h3 className="font-semibold text-foreground mb-4">Data Sharing</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Dr. Martinez</p>
                  <p className="text-xs text-muted-foreground">Primary Physician</p>
                </div>
                <Badge className="bg-success/10 text-success border-0">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">City Hospital</p>
                  <p className="text-xs text-muted-foreground">Emergency Access</p>
                </div>
                <Badge className="bg-info/10 text-info border-0">Limited</Badge>
              </div>
              <Button variant="outline" className="w-full mt-2">
                Manage Sharing Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
