import { AppLayout } from '@/components/layout/AppLayout';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { HealthScoreRing } from '@/components/dashboard/HealthScoreRing';
import { Moon, Sunrise, Clock, Zap, BedDouble, Activity } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const sleepStages = [
  { time: '23:00', stage: 'Awake', value: 4 },
  { time: '23:30', stage: 'Light', value: 2 },
  { time: '00:00', stage: 'Deep', value: 1 },
  { time: '01:00', stage: 'Deep', value: 1 },
  { time: '02:00', stage: 'REM', value: 3 },
  { time: '03:00', stage: 'Light', value: 2 },
  { time: '04:00', stage: 'Deep', value: 1 },
  { time: '05:00', stage: 'REM', value: 3 },
  { time: '06:00', stage: 'Light', value: 2 },
  { time: '07:00', stage: 'Awake', value: 4 },
];

const weeklyData = [
  { day: 'Mon', duration: 7.5, quality: 78 },
  { day: 'Tue', duration: 8.2, quality: 85 },
  { day: 'Wed', duration: 6.8, quality: 68 },
  { day: 'Thu', duration: 7.8, quality: 82 },
  { day: 'Fri', duration: 7.2, quality: 75 },
  { day: 'Sat', duration: 9.0, quality: 90 },
  { day: 'Sun', duration: 8.2, quality: 87 },
];

const sleepFactors = [
  { label: 'Sleep Efficiency', value: 92, unit: '%', status: 'excellent' },
  { label: 'Time to Fall Asleep', value: 12, unit: 'min', status: 'good' },
  { label: 'Awakenings', value: 2, unit: 'times', status: 'normal' },
  { label: 'Sleep Debt', value: 1.5, unit: 'hrs', status: 'warning' },
];

const stageBreakdown = [
  { stage: 'Deep Sleep', hours: 2.5, percentage: 30, color: 'bg-health-sleep' },
  { stage: 'Light Sleep', hours: 3.2, percentage: 39, color: 'bg-info' },
  { stage: 'REM Sleep', hours: 2.0, percentage: 24, color: 'bg-health-stress' },
  { stage: 'Awake', hours: 0.5, percentage: 7, color: 'bg-muted' },
];

export default function Sleep() {
  return (
    <AppLayout title="Sleep Management" subtitle="Track your sleep patterns">
      <div className="grid grid-cols-12 gap-6">
        {/* Sleep Score */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-card rounded-xl p-6 shadow-card animate-scale-in">
            <h3 className="font-semibold text-foreground mb-2">Sleep Score</h3>
            <p className="text-sm text-muted-foreground mb-4">Last night</p>
            <div className="flex justify-center">
              <HealthScoreRing score={87} label="Very Good" />
            </div>
            <div className="mt-4 pt-4 border-t border-border space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Duration</span>
                <span className="text-foreground font-medium">8h 12m</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Bedtime</span>
                <span className="text-foreground font-medium">11:00 PM</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Wake Time</span>
                <span className="text-foreground font-medium">7:12 AM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard title="Total Sleep" value="8.2" unit="hrs" icon={Moon} color="sleep" change={5} subtitle="Goal: 8 hrs" />
            <MetricCard title="Deep Sleep" value="2.5" unit="hrs" icon={BedDouble} color="stress" change={12} subtitle="30% of total" />
            <MetricCard title="REM Sleep" value="2.0" unit="hrs" icon={Activity} color="heart" change={-3} subtitle="24% of total" />
            <MetricCard title="Sleep Efficiency" value="92" unit="%" icon={Zap} color="nutrition" subtitle="Excellent" />
          </div>
        </div>

        {/* Sleep Stages Chart */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">Sleep Stages</h3>
                <p className="text-sm text-muted-foreground">Last night's sleep cycle</p>
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-health-sleep" />
                  <span className="text-xs text-muted-foreground">Deep</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-info" />
                  <span className="text-xs text-muted-foreground">Light</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-health-stress" />
                  <span className="text-xs text-muted-foreground">REM</span>
                </div>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={sleepStages}>
                <defs>
                  <linearGradient id="sleepGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
                <XAxis dataKey="time" axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 11 }} />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 11 }}
                  domain={[0, 4]}
                  ticks={[1, 2, 3, 4]}
                  tickFormatter={(value) => ['', 'Deep', 'Light', 'REM', 'Awake'][value]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(0, 0%, 100%)', 
                    border: '1px solid hsl(220, 13%, 91%)',
                    borderRadius: '8px'
                  }}
                  formatter={(value: number) => ['Deep', 'Light', 'REM', 'Awake'][value - 1] || 'Unknown'}
                />
                <Area type="stepAfter" dataKey="value" stroke="hsl(221, 83%, 53%)" strokeWidth={2} fill="url(#sleepGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Stage Breakdown */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <h3 className="font-semibold text-foreground mb-4">Stage Breakdown</h3>
            <div className="space-y-4">
              {stageBreakdown.map((stage) => (
                <div key={stage.stage} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{stage.stage}</span>
                    <span className="text-sm text-muted-foreground">{stage.hours}h ({stage.percentage}%)</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${stage.color} transition-all duration-500`}
                      style={{ width: `${stage.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Weekly Sleep */}
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">Weekly Sleep Pattern</h3>
                <p className="text-sm text-muted-foreground">Average: 7.8 hrs/night</p>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} domain={[0, 10]} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(0, 0%, 100%)', 
                    border: '1px solid hsl(220, 13%, 91%)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="duration" fill="hsl(221, 83%, 53%)" radius={[4, 4, 0, 0]} name="Duration (hrs)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Sleep Factors */}
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <h3 className="font-semibold text-foreground mb-4">Sleep Factors</h3>
            <div className="space-y-3">
              {sleepFactors.map((factor) => (
                <div 
                  key={factor.label}
                  className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                >
                  <span className="text-sm text-foreground">{factor.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-foreground">
                      {factor.value} {factor.unit}
                    </span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      factor.status === 'excellent' ? 'bg-success/10 text-success' :
                      factor.status === 'good' ? 'bg-info/10 text-info' :
                      factor.status === 'warning' ? 'bg-warning/10 text-warning' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {factor.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sleep Schedule */}
        <div className="col-span-12">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <h3 className="font-semibold text-foreground mb-4">Optimal Sleep Schedule</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="w-12 h-12 rounded-lg bg-health-sleep/10 flex items-center justify-center">
                  <Moon className="w-6 h-6 text-health-sleep" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Recommended Bedtime</p>
                  <p className="text-lg font-semibold text-foreground">10:30 PM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="w-12 h-12 rounded-lg bg-warning/10 flex items-center justify-center">
                  <Sunrise className="w-6 h-6 text-warning" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Recommended Wake</p>
                  <p className="text-lg font-semibold text-foreground">6:30 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="w-12 h-12 rounded-lg bg-health-nutrition/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-health-nutrition" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Ideal Duration</p>
                  <p className="text-lg font-semibold text-foreground">8 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                <div className="w-12 h-12 rounded-lg bg-health-heart/10 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-health-heart" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Sleep Cycles</p>
                  <p className="text-lg font-semibold text-foreground">5 cycles</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
