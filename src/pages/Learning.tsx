import { AppLayout } from '@/components/layout/AppLayout';
import { 
  GraduationCap, 
  Heart, 
  Apple, 
  Brain, 
  Moon, 
  Shield, 
  Play, 
  CheckCircle, 
  Clock, 
  Award,
  BookOpen,
  Video,
  FileText,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const courses = [
  {
    id: 1,
    title: 'Heart Disease Prevention',
    description: 'Learn about cardiovascular health, risk factors, and lifestyle changes to protect your heart.',
    icon: Heart,
    color: 'text-heart',
    bgColor: 'bg-heart/10',
    progress: 75,
    duration: '2h 30min',
    modules: 8,
    completed: 6,
    category: 'Cardiovascular'
  },
  {
    id: 2,
    title: 'Nutrition Fundamentals',
    description: 'Understanding macronutrients, micronutrients, and building a balanced diet for optimal health.',
    icon: Apple,
    color: 'text-nutrition',
    bgColor: 'bg-nutrition/10',
    progress: 100,
    duration: '3h 15min',
    modules: 10,
    completed: 10,
    category: 'Nutrition'
  },
  {
    id: 3,
    title: 'Stress & Mental Wellness',
    description: 'Techniques for managing stress, anxiety, and maintaining mental health in daily life.',
    icon: Brain,
    color: 'text-stress',
    bgColor: 'bg-stress/10',
    progress: 40,
    duration: '2h 45min',
    modules: 6,
    completed: 2,
    category: 'Mental Health'
  },
  {
    id: 4,
    title: 'Sleep Hygiene Mastery',
    description: 'Optimize your sleep patterns for better recovery, energy, and overall health.',
    icon: Moon,
    color: 'text-sleep',
    bgColor: 'bg-sleep/10',
    progress: 0,
    duration: '1h 45min',
    modules: 5,
    completed: 0,
    category: 'Sleep'
  },
  {
    id: 5,
    title: 'Diabetes Prevention',
    description: 'Understanding blood sugar management, diet modifications, and exercise routines.',
    icon: TrendingUp,
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    progress: 20,
    duration: '2h 00min',
    modules: 7,
    completed: 1,
    category: 'Metabolic Health'
  },
  {
    id: 6,
    title: 'Preventive Screenings Guide',
    description: 'Know when and why to get health screenings at different life stages.',
    icon: Shield,
    color: 'text-info',
    bgColor: 'bg-info/10',
    progress: 60,
    duration: '1h 30min',
    modules: 4,
    completed: 2,
    category: 'Screening'
  },
];

const upcomingWebinars = [
  {
    title: 'Live Q&A: Managing Hypertension',
    doctor: 'Dr. Alexandru Burtic',
    date: 'Dec 20, 2024',
    time: '15:00 CET',
    registered: true
  },
  {
    title: 'Nutrition Myths Debunked',
    doctor: 'Dr. Elena Popescu',
    date: 'Dec 27, 2024',
    time: '14:00 CET',
    registered: false
  },
  {
    title: 'Sleep Disorders Workshop',
    doctor: 'Dr. Andrei Ionescu',
    date: 'Jan 5, 2025',
    time: '16:00 CET',
    registered: false
  },
];

const achievements = [
  { icon: Award, title: 'Nutrition Expert', earned: true },
  { icon: Heart, title: 'Heart Champion', earned: true },
  { icon: BookOpen, title: 'Quick Learner', earned: true },
  { icon: CheckCircle, title: '5 Courses Done', earned: false },
];

export default function Learning() {
  const totalProgress = Math.round(courses.reduce((acc, c) => acc + c.progress, 0) / courses.length);
  const completedCourses = courses.filter(c => c.progress === 100).length;

  return (
    <AppLayout title="Prevention Learning" subtitle="Medical education for better health outcomes">
      <div className="space-y-6">
        {/* Overview Stats */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-card rounded-xl p-5 shadow-card animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{courses.length}</p>
                <p className="text-sm text-muted-foreground">Total Courses</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-card animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{completedCourses}</p>
                <p className="text-sm text-muted-foreground">Completed</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-card animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-info/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-info" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">14h</p>
                <p className="text-sm text-muted-foreground">Learning Time</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-5 shadow-card animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{totalProgress}%</p>
                <p className="text-sm text-muted-foreground">Overall Progress</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Course Library */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-foreground">Prevention Courses</h2>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">All</Button>
                <Button variant="ghost" size="sm">In Progress</Button>
                <Button variant="ghost" size="sm">Completed</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {courses.map((course) => (
                <div 
                  key={course.id}
                  className="bg-card rounded-xl p-5 shadow-card hover:shadow-lg transition-shadow animate-slide-in"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg ${course.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <course.icon className={`w-6 h-6 ${course.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-semibold text-foreground">{course.title}</h3>
                        {course.progress === 100 && (
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{course.description}</p>
                      
                      <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </span>
                        <span>{course.completed}/{course.modules} modules</span>
                      </div>

                      <div className="mt-3">
                        <div className="flex items-center justify-between text-xs mb-1">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-medium text-foreground">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <Button 
                        size="sm" 
                        className="mt-3 w-full"
                        variant={course.progress === 0 ? "default" : course.progress === 100 ? "outline" : "secondary"}
                      >
                        {course.progress === 0 ? 'Start Course' : course.progress === 100 ? 'Review' : 'Continue'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            {/* Upcoming Webinars */}
            <div className="bg-card rounded-xl p-5 shadow-card animate-slide-in">
              <div className="flex items-center gap-2 mb-4">
                <Video className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-foreground">Live Webinars</h3>
              </div>
              <div className="space-y-3">
                {upcomingWebinars.map((webinar, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-secondary/50">
                    <p className="font-medium text-foreground text-sm">{webinar.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{webinar.doctor}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-muted-foreground">{webinar.date} • {webinar.time}</span>
                      {webinar.registered ? (
                        <Badge variant="outline" className="text-success border-success">Registered</Badge>
                      ) : (
                        <Button variant="ghost" size="sm" className="h-6 text-xs">Register</Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-card rounded-xl p-5 shadow-card animate-slide-in">
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-warning" />
                <h3 className="font-semibold text-foreground">Achievements</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, idx) => (
                  <div 
                    key={idx}
                    className={`p-3 rounded-lg text-center ${achievement.earned ? 'bg-warning/10' : 'bg-muted/50 opacity-50'}`}
                  >
                    <achievement.icon className={`w-6 h-6 mx-auto ${achievement.earned ? 'text-warning' : 'text-muted-foreground'}`} />
                    <p className="text-xs font-medium mt-1 text-foreground">{achievement.title}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-card rounded-xl p-5 shadow-card animate-slide-in">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-info" />
                <h3 className="font-semibold text-foreground">Resources</h3>
              </div>
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-sm h-9">
                  📄 Prevention Guidelines PDF
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm h-9">
                  📋 Health Checklist Template
                </Button>
                <Button variant="ghost" className="w-full justify-start text-sm h-9">
                  📚 Recommended Reading List
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
