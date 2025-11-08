import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useCart } from '@/contexts/CartContext';
import { NavLink } from './NavLink';
import { Menu, X, Utensils, User, LogOut, ShoppingCart } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Badge } from './ui/badge';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <div className="bg-gradient-primary p-2 rounded-lg">
              <Utensils className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="bg-gradient-hero bg-clip-text text-transparent">MADRAS DINE FINE</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/menu">Menu</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center gap-4">
            {user && (
              <Button asChild variant="outline" className="relative">
                <Link to="/cart">
                  <ShoppingCart className="h-4 w-4" />
                  {totalItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-accent">
                      {totalItems}
                    </Badge>
                  )}
                </Link>
              </Button>
            )}
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <User className="h-4 w-4" />
                    {user.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem disabled>
                    <User className="mr-2 h-4 w-4" />
                    {user.email}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout} className="text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button asChild variant="ghost">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild className="bg-gradient-primary hover:shadow-hover">
                  <Link to="/signup">Sign Up</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-4 pt-2 pb-4 space-y-3">
          <NavLink to="/" mobile onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink to="/menu" mobile onClick={() => setIsOpen(false)}>Menu</NavLink>
          <NavLink to="/about" mobile onClick={() => setIsOpen(false)}>About</NavLink>
          <NavLink to="/contact" mobile onClick={() => setIsOpen(false)}>Contact</NavLink>
          
          {user && (
            <NavLink to="/cart" mobile onClick={() => setIsOpen(false)}>
              Cart {totalItems > 0 && `(${totalItems})`}
            </NavLink>
          )}
          
          {user ? (
            <>
              <div className="pt-3 border-t border-border">
                <p className="text-sm text-muted-foreground px-4 py-2">
                  Signed in as <span className="font-medium text-foreground">{user.name}</span>
                </p>
              </div>
              <Button 
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                variant="ghost" 
                className="w-full justify-start text-destructive hover:text-destructive"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <div className="pt-3 border-t border-border space-y-2">
              <Button asChild variant="ghost" className="w-full" onClick={() => setIsOpen(false)}>
                <Link to="/login">Login</Link>
              </Button>
              <Button asChild className="w-full bg-gradient-primary" onClick={() => setIsOpen(false)}>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};
