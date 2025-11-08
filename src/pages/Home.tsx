import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ChefHat, Clock, ShieldCheck, Star } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-hero opacity-10"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent animate-fade-in">
            MADRAS DINE FINE
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Authentic South Indian Cuisine 🌶️
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the vibrant flavors of South India delivered right to your door. 
            From crispy dosas to fragrant biryanis, taste tradition in every bite.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary hover:shadow-hover text-lg px-8">
              <Link to="/menu">
                View Menu 🍛
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/signup">
                Sign Up Free
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-hero bg-clip-text text-transparent">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ChefHat className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle>Authentic Recipes</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Traditional South Indian recipes passed down through generations
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-gradient-accent w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle>Quick Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Hot, fresh food delivered to your door in 30 minutes or less
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-gradient-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="h-8 w-8 text-secondary-foreground" />
                </div>
                <CardTitle>Quality Guaranteed</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Fresh ingredients and hygienic preparation standards
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="bg-gradient-success w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-success-foreground" />
                </div>
                <CardTitle>Top Rated</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Loved by thousands of customers with 5-star reviews
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Dishes Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Popular Dishes
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Try our most loved South Indian delicacies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-6xl mb-4">🥞</div>
              <h3 className="font-semibold text-lg">Masala Dosa</h3>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🍛</div>
              <h3 className="font-semibold text-lg">Sambar Rice</h3>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🍚</div>
              <h3 className="font-semibold text-lg">Veg Biryani</h3>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">☕</div>
              <h3 className="font-semibold text-lg">Filter Coffee</h3>
            </div>
          </div>
          <Button asChild size="lg" className="bg-gradient-accent hover:shadow-hover">
            <Link to="/menu">
              See Full Menu
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Ready to Order?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join thousands of happy customers enjoying authentic South Indian food
          </p>
          <Button asChild size="lg" className="bg-card text-foreground hover:bg-card/90 text-lg px-8">
            <Link to="/signup">
              Get Started Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
