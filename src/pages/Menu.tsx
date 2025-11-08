import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';
import { menuItems } from '@/data/menu';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { addToCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  useState(() => {
    setTimeout(() => setIsOpen(true), 100);
  });

  const handleAddToCart = (item: typeof menuItems[0]) => {
    if (!user) {
      toast.error('Please login to add items to cart');
      navigate('/login');
      return;
    }
    addToCart(item);
    toast.success(`Added ${item.name} to cart!`);
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Our Menu
          </h1>
          <p className="text-xl text-muted-foreground">
            Authentic South Indian Flavors 🌶️
          </p>
        </div>

        <div 
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
            isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            transformOrigin: 'center',
            transform: isOpen ? 'perspective(1000px) rotateY(0deg)' : 'perspective(1000px) rotateY(-90deg)',
          }}
        >
          {menuItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="overflow-hidden hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
              style={{ 
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4 text-4xl bg-card/90 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                  {item.emoji}
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {item.name}
                </CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">
                  ${item.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-gradient-primary hover:shadow-hover"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
