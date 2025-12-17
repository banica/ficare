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
                    <Input id="firstName" defaultValue="Marian" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Banica" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="marian.banica@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" defaultValue="+40 722 123 456" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" type="date" defaultValue="1990-05-15" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="patientId">Patient ID</Label>
                    <Input id="patientId" defaultValue="FC-2024-001" disabled />
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
              {/* GDPR Banner */}
              <div className="p-4 rounded-lg bg-info/10 border border-info/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-info mt-0.5" />
                  <div>
                    <p className="font-medium text-foreground">GDPR Compliant Data Protection</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your health data is processed in accordance with EU General Data Protection Regulation (GDPR). 
                      You have the right to access, rectify, erase, and port your personal data.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-4">Consent Management</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Share with Primary Physician</p>
                      <p className="text-sm text-muted-foreground">Dr. Alexandru Burtic can access your health data</p>
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
                      <p className="text-sm text-muted-foreground">Contribute anonymized data for medical research (Art. 89 GDPR)</p>
                    </div>
                    <Switch />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div>
                      <p className="font-medium text-foreground">Marketing Communications</p>
                      <p className="text-sm text-muted-foreground">Receive health tips and product updates</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Your GDPR Rights</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-start gap-2">
                    <Globe className="w-4 h-4" />
                    Request Data Access
                  </Button>
                  <Button variant="outline" className="justify-start gap-2">
                    <User className="w-4 h-4" />
                    Rectify My Data
                  </Button>
                  <Button variant="outline" className="justify-start gap-2">
                    Export My Data (Portability)
                  </Button>
                  <Button variant="outline" className="justify-start gap-2">
                    Processing Restriction
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Data Retention & Deletion</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Your data is retained for the duration specified in our privacy policy. You can request complete erasure at any time.
                </p>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    View Data Retention Policy
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive">
                    Request Data Erasure (Right to be Forgotten)
                  </Button>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Consent History</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>• Initial consent given: January 15, 2024</p>
                  <p>• Last consent update: December 10, 2024</p>
                  <p>• Data Processing Agreement: Active</p>
                </div>
                <Button variant="link" className="p-0 mt-2 h-auto text-primary">
                  Download Full Consent Log
                </Button>
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
