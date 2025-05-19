
import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="flex items-center gap-6">
      <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
        Home
      </Link>
      <Link to="/products" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Products
      </Link>
      <Link to="/ai-advisor" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        AI Advisor
      </Link>
      <Link to="/claims" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Claims
      </Link>
      <Link to="/resources" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
        Resources
      </Link>
    </nav>
  );
};
