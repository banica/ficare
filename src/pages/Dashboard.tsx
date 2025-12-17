import { AppLayout } from '@/components/layout/AppLayout';
import { MetricCard } from '@/components/dashboard/MetricCard';
import { HealthScoreRing } from '@/components/dashboard/HealthScoreRing';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { DeviceStatus } from '@/components/dashboard/DeviceStatus';
import { NotificationFeed } from '@/components/dashboard/NotificationFeed';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { Apple, Brain, Moon, Heart, Footprints, Droplets } from 'lucide-react';

export default function Dashboard() {
  return (
    <AppLayout title="Health Dashboard" subtitle="Welcome back, Sarah">
      <div className="grid grid-cols-12 gap-6">
        {/* Health Score */}
        <div className="col-span-12 lg:col-span-3">
          <div className="bg-card rounded-xl p-6 shadow-card animate-scale-in">
            <h3 className="font-semibold text-foreground mb-2">Overall Health Score</h3>
            <p className="text-sm text-muted-foreground mb-4">Based on all metrics</p>
            <div className="flex justify-center">
              <HealthScoreRing score={87} label="Excellent" />
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Last updated</span>
                <span className="text-foreground font-medium">2 min ago</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Metrics Grid */}
        <div className="col-span-12 lg:col-span-9">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <MetricCard
              title="Calories Today"
              value="1,847"
              unit="kcal"
              change={12}
              icon={Apple}
              color="nutrition"
              subtitle="Goal: 2,200 kcal"
            />
            <MetricCard
              title="Stress Level"
              value="Low"
              change={-8}
              icon={Brain}
              color="stress"
              subtitle="HRV: 65ms"
            />
            <MetricCard
              title="Sleep Quality"
              value="8.2"
              unit="hrs"
              change={5}
              icon={Moon}
              color="sleep"
              subtitle="Deep: 2.5 hrs"
            />
            <MetricCard
              title="Heart Rate"
              value="72"
              unit="bpm"
              icon={Heart}
              color="heart"
              subtitle="Resting avg"
            />
            <MetricCard
              title="Steps Today"
              value="8,432"
              change={23}
              icon={Footprints}
              color="steps"
              subtitle="Goal: 10,000"
            />
            <MetricCard
              title="Hydration"
              value="2.1"
              unit="L"
              change={-5}
              icon={Droplets}
              color="primary"
              subtitle="Goal: 2.5 L"
            />
          </div>
        </div>
        
        {/* Activity Chart */}
        <div className="col-span-12 lg:col-span-8">
          <ActivityChart />
        </div>
        
        {/* Quick Actions */}
        <div className="col-span-12 lg:col-span-4">
          <QuickActions />
        </div>
        
        {/* Device Status */}
        <div className="col-span-12 lg:col-span-6">
          <DeviceStatus />
        </div>
        
        {/* Notifications */}
        <div className="col-span-12 lg:col-span-6">
          <NotificationFeed />
        </div>
      </div>
    </AppLayout>
  );
}
