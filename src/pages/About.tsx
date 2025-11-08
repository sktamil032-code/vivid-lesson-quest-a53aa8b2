import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              About CodeLearn
            </h1>
            <p className="text-muted-foreground text-lg">
              Empowering the next generation of developers through accessible, high-quality programming education
            </p>
          </div>

          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-muted-foreground leading-relaxed">
              CodeLearn was founded with a simple mission: make programming education accessible, engaging, and effective for everyone. We believe that anyone can learn to code with the right guidance and resources.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our platform offers carefully crafted courses in Java, C++, C, and Python, designed to take you from beginner to confident programmer. Each course includes hands-on projects, clear explanations, and practical examples that prepare you for real-world development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="border-2 hover:shadow-hover transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize programming education and empower individuals to build the future through code.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-hover transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where quality programming education is accessible to everyone, regardless of background.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-hover transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-secondary w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Focused</h3>
                <p className="text-muted-foreground">
                  We're building a supportive community of learners who help each other grow and succeed.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-hover transition-shadow">
              <CardContent className="p-6">
                <div className="bg-gradient-success w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Passion Driven</h3>
                <p className="text-muted-foreground">
                  Created by developers who love teaching and are dedicated to student success.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-hero text-white border-0">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
              <p className="text-white/90 text-lg mb-6">
                Start your coding journey today and become part of a thriving community of developers
              </p>
              <div className="flex flex-wrap gap-8 justify-center text-left">
                <div>
                  <div className="text-4xl font-bold mb-1">10,000+</div>
                  <div className="text-white/80">Active Students</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">4</div>
                  <div className="text-white/80">Programming Languages</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-1">12</div>
                  <div className="text-white/80">Total Lessons</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
