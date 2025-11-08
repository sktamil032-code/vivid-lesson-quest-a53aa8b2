import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Course } from '@/data/courses';

interface CourseCardProps {
  course: Course;
}

const colorClasses = {
  primary: 'bg-gradient-primary hover:shadow-[0_8px_32px_-4px_hsl(200_95%_45%/0.25)]',
  accent: 'bg-gradient-accent hover:shadow-[0_8px_32px_-4px_hsl(5_85%_65%/0.25)]',
  secondary: 'bg-gradient-secondary hover:shadow-[0_8px_32px_-4px_hsl(45_100%_60%/0.25)]',
  success: 'bg-gradient-success hover:shadow-[0_8px_32px_-4px_hsl(140_70%_50%/0.25)]',
};

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link to={`/course/${course.id}`}>
      <Card 
        className={`group overflow-hidden border-0 ${colorClasses[course.color as keyof typeof colorClasses]} text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-soft`}
      >
        <CardHeader className="relative pb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-5xl">{course.emoji}</span>
          </div>
          <CardTitle className="text-2xl font-bold text-white mb-2">
            {course.name}
          </CardTitle>
          <CardDescription className="text-white/90 text-base">
            {course.description}
          </CardDescription>
          
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight className="h-6 w-6 text-white" />
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
};
