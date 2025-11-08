import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Users, Award, ChefHat } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div 
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&h=400&fit=crop)',
        }}
      >
        <div className="text-center text-white z-10">
          <h1 className="text-6xl font-bold mb-4">
            About MADRAS DINE FINE
          </h1>
          <p className="text-2xl">
            Our passion: vibrant South Indian flavours online
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl px-4 py-16">
        <Card className="mb-8 shadow-hover">
          <CardContent className="pt-6">
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Welcome to MADRAS DINE FINE, where we bring the authentic taste of South India straight 
              to your table. Our journey began with a simple mission: to share the rich culinary heritage 
              of Madras (Chennai) and South India with food lovers everywhere.
            </p>
            <p className="text-lg leading-relaxed text-foreground mb-6">
              Every dish we serve is prepared with love, using traditional recipes that have been passed 
              down through generations. From the crispy perfection of our masala dosas to the aromatic 
              richness of our biryanis, each bite tells a story of culture, tradition, and passion.
            </p>
            <p className="text-lg leading-relaxed text-foreground">
              We believe that great food brings people together. Whether you're craving comfort food or 
              looking to explore new flavors, MADRAS DINE FINE is here to deliver an unforgettable 
              dining experience, one order at a time.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="shadow-hover hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <div className="bg-gradient-primary w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                <ChefHat className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle>Expert Chefs</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Our experienced chefs bring authentic South Indian cooking techniques and family 
                recipes to every dish we prepare.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-hover hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <div className="bg-gradient-accent w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                <Heart className="h-6 w-6 text-accent-foreground" />
              </div>
              <CardTitle>Made with Love</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Every dish is prepared with care and attention to detail, ensuring the perfect 
                balance of flavors in every bite.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-hover hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <div className="bg-gradient-secondary w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                <Award className="h-6 w-6 text-secondary-foreground" />
              </div>
              <CardTitle>Quality Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We source only the freshest, highest-quality ingredients to create dishes that 
                are both delicious and nutritious.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="shadow-hover hover:-translate-y-1 transition-all duration-300">
            <CardHeader>
              <div className="bg-gradient-success w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                <Users className="h-6 w-6 text-success-foreground" />
              </div>
              <CardTitle>Community Focused</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                We're proud to serve our community and bring people together through the universal 
                language of great food.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">Experience South India on Your Plate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">
              Join us on this flavorful journey and discover why MADRAS DINE FINE has become 
              the go-to destination for authentic South Indian cuisine. Order now and taste 
              the difference tradition makes!
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
