import { useParams, Link } from 'react-router-dom';
import { courses } from '@/data/courses';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowLeft, CheckCircle, PlayCircle } from 'lucide-react';

const CourseDetail = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const colorClasses = {
    primary: 'bg-gradient-primary',
    accent: 'bg-gradient-accent',
    secondary: 'bg-gradient-secondary',
    success: 'bg-gradient-success',
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className={`${colorClasses[course.color as keyof typeof colorClasses]} py-16 md:py-24 text-white`}>
        <div className="container mx-auto px-4">
          <Link to="/courses" className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Courses
          </Link>

          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-6xl md:text-7xl">{course.emoji}</span>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{course.name}</h1>
                <p className="text-lg text-white/90">{course.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4">About This Course</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-6">Course Lessons</h2>
              <div className="space-y-4">
                {course.lessons.map((lesson, index) => (
                  <Card key={lesson.id} className="overflow-hidden hover:shadow-hover transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex items-start gap-4">
                        <div className={`${colorClasses[course.color as keyof typeof colorClasses]} rounded-lg p-3 shrink-0`}>
                          {index === 0 ? (
                            <PlayCircle className="h-6 w-6 text-white" />
                          ) : (
                            <CheckCircle className="h-6 w-6 text-white" />
                          )}
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{lesson.title}</CardTitle>
                          <CardDescription className="text-base">{lesson.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            <Card className={`${colorClasses[course.color as keyof typeof colorClasses]} text-white border-0`}>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-2">Ready to Start Learning?</h3>
                <p className="text-white/90 mb-6">Sign up now and begin your {course.name} journey!</p>
                <Link to="/signup">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Enroll Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
