import { AppLayout } from '@/components/layout/AppLayout';
import { User, Bell, Shield, Smartphone, Globe, Moon, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Settings() {
  return (
    <AppLayout title="Settings" subtitle="Manage your preferences">
      <div className="max-w-4xl">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="bg-card border border-border mb-6">
            <TabsTrigger value="profile" className="gap-2">
              <User className="w-4 h-4" /> Profile
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="w-4 h-4" /> Notifications
            </TabsTrigger>
            <TabsTrigger value="privacy" className="gap-2">
              <Shield className="w-4 h-4" /> Privacy
            </TabsTrigger>
            <TabsTrigger value="devices" className="gap-2">
              <Smartphone className="w-4 h-4" /> Devices
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <div className="bg-card rounded-xl p-6 shadow-card space-y-6 animate-slide-in">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Sarah" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Chen" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="sarah.chen@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" defaultValue="1990-05-15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="patientId">Patient ID</Label>
                    <Input id="patientId" defaultValue="HW-2024-001" disabled />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Health Goals</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="calorieGoal">Daily Calorie Goal</Label>
                    <Input id="calorieGoal" type="number" defaultValue="2200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="stepGoal">Daily Step Goal</Label>
                    <Input id="stepGoal" type="number" defaultValue="10000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="sleepGoal">Sleep Goal (hours)</Label>
                    <Input id="sleepGoal" type="number" defaultValue="8" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="waterGoal">Water Goal (L)</Label>
                    <Input id="waterGoal" type="number" defaultValue="2.5" step="0.1" />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="notifications">
            <div className="bg-card rounded-xl p-6 shadow-card space-y-6 animate-slide-in">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Alert Preferences</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">High Stress Alerts</p>
                      <p className="text-sm text-muted-foreground">Notify when stress levels are elevated</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Sleep Reminders</p>
                      <p className="text-sm text-muted-foreground">Remind to go to bed at scheduled time</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Meal Logging Reminders</p>
                      <p className="text-sm text-muted-foreground">Remind to log meals</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Goal Achievement</p>
                      <p className="text-sm text-muted-foreground">Celebrate when goals are reached</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Medic Communication</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Auto-send Weekly Reports</p>
                      <p className="text-sm text-muted-foreground">Send health summaries every Sunday</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Critical Alert Forwarding</p>
                      <p className="text-sm text-muted-foreground">Automatically notify medic of critical alerts</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="privacy">
            <div className="bg-card rounded-xl p-6 shadow-card space-y-6 animate-slide-in">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Data Sharing</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Share with Primary Physician</p>
                      <p className="text-sm text-muted-foreground">Dr. Sarah Martinez can access your data</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Emergency Access</p>
                      <p className="text-sm text-muted-foreground">Allow emergency services to access critical data</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Anonymous Research Data</p>
                      <p className="text-sm text-muted-foreground">Contribute anonymized data for research</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Data Management</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    Export My Data
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                    Delete All Data
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="devices">
            <div className="bg-card rounded-xl p-6 shadow-card space-y-6 animate-slide-in">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Device Sync Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Auto-sync</p>
                      <p className="text-sm text-muted-foreground">Automatically sync when devices are nearby</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Background Sync</p>
                      <p className="text-sm text-muted-foreground">Sync data in the background</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Sync over WiFi Only</p>
                      <p className="text-sm text-muted-foreground">Don't use mobile data for sync</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Sync Frequency</h3>
                <div className="grid grid-cols-3 gap-4">
                  <Button variant="outline">Every 5 min</Button>
                  <Button variant="default">Every 15 min</Button>
                  <Button variant="outline">Every 30 min</Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
