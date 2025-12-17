import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: 'Mon', nutrition: 85, stress: 45, sleep: 78 },
  { day: 'Tue', nutrition: 78, stress: 52, sleep: 82 },
  { day: 'Wed', nutrition: 92, stress: 38, sleep: 75 },
  { day: 'Thu', nutrition: 88, stress: 48, sleep: 88 },
  { day: 'Fri', nutrition: 75, stress: 62, sleep: 72 },
  { day: 'Sat', nutrition: 95, stress: 35, sleep: 90 },
  { day: 'Sun', nutrition: 82, stress: 42, sleep: 85 },
];

export function ActivityChart() {
  return (
    <div className="bg-card rounded-xl p-5 shadow-card animate-slide-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-foreground">Weekly Overview</h3>
          <p className="text-sm text-muted-foreground">Health metrics trend</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-health-nutrition" />
            <span className="text-xs text-muted-foreground">Nutrition</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-health-stress" />
            <span className="text-xs text-muted-foreground">Stress</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-health-sleep" />
            <span className="text-xs text-muted-foreground">Sleep</span>
          </div>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 5 }}>
          <defs>
            <linearGradient id="nutritionGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="stressGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(262, 83%, 58%)" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="sleepGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="hsl(221, 83%, 53%)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }}
            domain={[0, 100]}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'hsl(0, 0%, 100%)', 
              border: '1px solid hsl(220, 13%, 91%)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="nutrition" 
            stroke="hsl(142, 71%, 45%)" 
            strokeWidth={2}
            fill="url(#nutritionGradient)" 
          />
          <Area 
            type="monotone" 
            dataKey="stress" 
            stroke="hsl(262, 83%, 58%)" 
            strokeWidth={2}
            fill="url(#stressGradient)" 
          />
          <Area 
            type="monotone" 
            dataKey="sleep" 
            stroke="hsl(221, 83%, 53%)" 
            strokeWidth={2}
            fill="url(#sleepGradient)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
