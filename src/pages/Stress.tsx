import { AppLayout } from '@/components/layout/AppLayout';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { HealthScoreRing } from '@/components/dashboard/HealthScoreRing';
import { Brain, Heart, Activity, Wind, Smile, Frown, Meh, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const stressData = [
  { time: '06:00', level: 25, hrv: 68 },
  { time: '09:00', level: 45, hrv: 55 },
  { time: '12:00', level: 60, hrv: 48 },
  { time: '15:00', level: 55, hrv: 52 },
  { time: '18:00', level: 35, hrv: 62 },
  { time: '21:00', level: 20, hrv: 70 },
];

const wellnessFactors = [
  { factor: 'Sleep Quality', value: 85 },
  { factor: 'Physical Activity', value: 72 },
  { factor: 'Social Connection', value: 65 },
  { factor: 'Work Balance', value: 58 },
  { factor: 'Mindfulness', value: 78 },
  { factor: 'Nutrition', value: 80 },
];

const activities = [
  { name: 'Guided Meditation', duration: '10 min', type: 'Relaxation', icon: Brain },
  { name: 'Deep Breathing', duration: '5 min', type: 'Quick Relief', icon: Wind },
  { name: 'Body Scan', duration: '15 min', type: 'Awareness', icon: Activity },
];

const moodLog = [
  { time: '08:00', mood: 'happy', note: 'Good morning routine' },
  { time: '12:00', mood: 'neutral', note: 'Busy with meetings' },
  { time: '16:00', mood: 'stressed', note: 'Deadline pressure' },
  { time: '20:00', mood: 'happy', note: 'Evening walk helped' },
];

const moodIcons = {
  happy: { icon: Smile, color: 'text-success' },
  neutral: { icon: Meh, color: 'text-warning' },
  stressed: { icon: Frown, color: 'text-destructive' },
};

export default function Stress() {
  return (
    <AppLayout title="Stress Management" subtitle="Monitor and manage your mental wellness">
      <div className="grid grid-cols-12 gap-6">
        {/* Current Stress Level */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-card rounded-xl p-6 shadow-card animate-scale-in">
            <h3 className="font-semibold text-foreground mb-2">Current Stress Level</h3>
            <p className="text-sm text-muted-foreground mb-4">Real-time from IoT sensors</p>
            <div className="flex justify-center">
              <HealthScoreRing score={28} maxScore={100} label="Low" />
            </div>
            <div className="mt-4 pt-4 border-t border-border space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Cortisol Level</span>
                <span className="text-success font-medium">Normal</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Heart Rate Variability</span>
                <span className="text-foreground font-medium">65 ms</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard title="Avg HRV" value="58" unit="ms" icon={Heart} color="heart" change={12} subtitle="Last 7 days" />
            <MetricCard title="Recovery Score" value="82" unit="%" icon={Activity} color="nutrition" change={5} subtitle="Good" />
            <MetricCard title="Breathing Rate" value="14" unit="/min" icon={Wind} color="sleep" subtitle="Normal" />
            <MetricCard title="Mindful Minutes" value="45" unit="min" icon={Brain} color="stress" change={20} subtitle="Today" />
          </div>
        </div>

        {/* Daily Stress Chart */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">Stress & HRV Today</h3>
                <p className="text-sm text-muted-foreground">Inverse relationship indicator</p>
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-health-stress" />
                  <span className="text-xs text-muted-foreground">Stress</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-health-heart" />
                  <span className="text-xs text-muted-foreground">HRV</span>
                </div>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={240}>
              <LineChart data={stressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(0, 0%, 100%)', 
                    border: '1px solid hsl(220, 13%, 91%)',
                    borderRadius: '8px'
                  }}
                />
                <Line type="monotone" dataKey="level" stroke="hsl(262, 83%, 58%)" strokeWidth={2} dot={{ fill: 'hsl(262, 83%, 58%)', strokeWidth: 0, r: 4 }} name="Stress Level" />
                <Line type="monotone" dataKey="hrv" stroke="hsl(350, 89%, 60%)" strokeWidth={2} dot={{ fill: 'hsl(350, 89%, 60%)', strokeWidth: 0, r: 4 }} name="HRV (ms)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Wellness Radar */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <h3 className="font-semibold text-foreground mb-4">Wellness Factors</h3>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={wellnessFactors}>
                <PolarGrid stroke="hsl(220, 13%, 91%)" />
                <PolarAngleAxis dataKey="factor" tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 10 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar name="Score" dataKey="value" stroke="hsl(262, 83%, 58%)" fill="hsl(262, 83%, 58%)" fillOpacity={0.3} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stress Relief Activities */}
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <h3 className="font-semibold text-foreground mb-4">Recommended Activities</h3>
            <div className="space-y-3">
              {activities.map((activity, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-health-stress/10 flex items-center justify-center">
                    <activity.icon className="w-6 h-6 text-health-stress" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{activity.name}</p>
                    <p className="text-xs text-muted-foreground">{activity.type} • {activity.duration}</p>
                  </div>
                  <Button size="sm" variant="outline" className="gap-1">
                    <Play className="w-3 h-3" /> Start
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mood Log */}
        <div className="col-span-12 lg:col-span-6">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Today's Mood Log</h3>
              <Button size="sm" variant="outline">Log Mood</Button>
            </div>
            <div className="space-y-3">
              {moodLog.map((entry, index) => {
                const { icon: MoodIcon, color } = moodIcons[entry.mood as keyof typeof moodIcons];
                return (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <MoodIcon className={`w-6 h-6 ${color}`} />
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{entry.note}</p>
                      <p className="text-xs text-muted-foreground">{entry.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
