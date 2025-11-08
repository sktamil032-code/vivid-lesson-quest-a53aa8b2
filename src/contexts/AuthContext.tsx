import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const storedUsers = localStorage.getItem('users');
    if (!storedUsers) {
      return { success: false, error: 'No account found. Please sign up first!' };
    }

    const users: User[] = JSON.parse(storedUsers);
    const user = users.find(u => u.email === email);
    
    if (!user) {
      return { success: false, error: 'Email not found. Please check your email or sign up.' };
    }

    if (user.password !== password) {
      return { success: false, error: 'Incorrect password. Please try again.' };
    }

    setUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    return { success: true };
  };

  const signup = async (name: string, email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    const storedUsers = localStorage.getItem('users');
    const users: User[] = storedUsers ? JSON.parse(storedUsers) : [];
    
    if (users.find(u => u.email === email)) {
      return { success: false, error: 'Email already registered. Please login instead.' };
    }

    const userData: User = { name, email, password };
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('currentUser', JSON.stringify(userData));
    setUser(userData);
    return { success: true };
  };

  const logout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
