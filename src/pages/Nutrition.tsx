import { AppLayout } from '@/components/layout/AppLayout';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { Apple, Beef, Wheat, Droplets, Plus, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const macroData = [
  { name: 'Protein', value: 120, goal: 150, color: 'hsl(350, 89%, 60%)' },
  { name: 'Carbs', value: 180, goal: 250, color: 'hsl(38, 92%, 50%)' },
  { name: 'Fats', value: 65, goal: 80, color: 'hsl(142, 71%, 45%)' },
];

const mealLog = [
  { time: '08:00', meal: 'Breakfast', calories: 450, items: 'Oatmeal, Banana, Greek Yogurt' },
  { time: '12:30', meal: 'Lunch', calories: 680, items: 'Grilled Chicken Salad, Quinoa' },
  { time: '15:00', meal: 'Snack', calories: 180, items: 'Apple, Almonds' },
  { time: '19:00', meal: 'Dinner', calories: 537, items: 'Salmon, Brown Rice, Vegetables' },
];

const weeklyCalories = [
  { day: 'Mon', calories: 2100 },
  { day: 'Tue', calories: 1950 },
  { day: 'Wed', calories: 2250 },
  { day: 'Thu', calories: 2050 },
  { day: 'Fri', calories: 1850 },
  { day: 'Sat', calories: 2400 },
  { day: 'Sun', calories: 1847 },
];

export default function Nutrition() {
  const totalCalories = mealLog.reduce((sum, meal) => sum + meal.calories, 0);
  const calorieGoal = 2200;

  return (
    <AppLayout title="Nutrition" subtitle="Track your daily intake">
      <div className="grid grid-cols-12 gap-6">
        {/* Calorie Summary */}
        <div className="col-span-12 lg:col-span-4">
          <div className="bg-card rounded-xl p-6 shadow-card animate-scale-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-foreground">Today's Calories</h3>
              <Button size="sm" className="bg-health-nutrition hover:bg-health-nutrition/90">
                <Plus className="w-4 h-4 mr-1" /> Log Meal
              </Button>
            </div>
            
            <div className="flex items-center justify-center py-6">
              <div className="relative">
                <ResponsiveContainer width={180} height={180}>
                  <PieChart>
                    <Pie
                      data={[
                        { value: totalCalories },
                        { value: Math.max(0, calorieGoal - totalCalories) }
                      ]}
                      innerRadius={60}
                      outerRadius={80}
                      startAngle={90}
                      endAngle={-270}
                      dataKey="value"
                    >
                      <Cell fill="hsl(142, 71%, 45%)" />
                      <Cell fill="hsl(220, 14%, 92%)" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-foreground">{totalCalories}</span>
                  <span className="text-sm text-muted-foreground">of {calorieGoal}</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {calorieGoal - totalCalories > 0 
                  ? `${calorieGoal - totalCalories} kcal remaining`
                  : 'Goal reached!'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Macros */}
        <div className="col-span-12 lg:col-span-8">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <h3 className="font-semibold text-foreground mb-6">Macronutrients</h3>
            <div className="grid grid-cols-3 gap-6">
              {macroData.map((macro) => (
                <div key={macro.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{macro.name}</span>
                    <span className="text-sm text-muted-foreground">{macro.value}g / {macro.goal}g</span>
                  </div>
                  <Progress 
                    value={(macro.value / macro.goal) * 100} 
                    className="h-3"
                    style={{ '--progress-color': macro.color } as React.CSSProperties}
                  />
                  <p className="text-xs text-muted-foreground">
                    {Math.round((macro.value / macro.goal) * 100)}% of daily goal
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="col-span-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <MetricCard title="Protein" value="120" unit="g" icon={Beef} color="heart" change={8} />
          <MetricCard title="Carbs" value="180" unit="g" icon={Wheat} color="steps" change={-3} />
          <MetricCard title="Fiber" value="28" unit="g" icon={Apple} color="nutrition" change={15} />
          <MetricCard title="Water" value="2.1" unit="L" icon={Droplets} color="sleep" change={-5} />
        </div>

        {/* Weekly Chart */}
        <div className="col-span-12 lg:col-span-7">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-semibold text-foreground">Weekly Calorie Intake</h3>
                <p className="text-sm text-muted-foreground">Average: 2,064 kcal/day</p>
              </div>
              <div className="flex items-center gap-2 text-success">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">On Track</span>
              </div>
            </div>
            
            <ResponsiveContainer width="100%" height={240}>
              <BarChart data={weeklyCalories}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
                <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: 'hsl(220, 9%, 46%)', fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'hsl(0, 0%, 100%)', 
                    border: '1px solid hsl(220, 13%, 91%)',
                    borderRadius: '8px'
                  }}
                />
                <Bar dataKey="calories" fill="hsl(142, 71%, 45%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Meal Log */}
        <div className="col-span-12 lg:col-span-5">
          <div className="bg-card rounded-xl p-6 shadow-card animate-slide-in">
            <h3 className="font-semibold text-foreground mb-4">Today's Meals</h3>
            <div className="space-y-3">
              {mealLog.map((meal, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-health-nutrition/10 flex items-center justify-center">
                    <Apple className="w-5 h-5 text-health-nutrition" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground">{meal.meal}</p>
                      <span className="text-sm font-semibold text-foreground">{meal.calories} kcal</span>
                    </div>
                    <p className="text-xs text-muted-foreground truncate">{meal.items}</p>
                    <p className="text-xs text-muted-foreground/70">{meal.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
