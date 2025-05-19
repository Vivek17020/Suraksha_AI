
import React from 'react';
import { Link } from 'react-router-dom';

export const MobileNav = () => {
  return (
    <nav className="flex flex-col gap-4 mt-8">
      <Link to="/" className="text-base font-medium hover:text-primary">
        Home
      </Link>
      <Link to="/products" className="text-base font-medium text-muted-foreground hover:text-primary">
        Products
      </Link>
      <Link to="/ai-advisor" className="text-base font-medium text-muted-foreground hover:text-primary">
        AI Advisor
      </Link>
      <Link to="/claims" className="text-base font-medium text-muted-foreground hover:text-primary">
        Claims
      </Link>
      <Link to="/resources" className="text-base font-medium text-muted-foreground hover:text-primary">
        Resources
      </Link>
      <div className="h-px w-full bg-border my-4" />
      <Link to="/login" className="text-base font-medium text-muted-foreground hover:text-primary">
        Login
      </Link>
      <Link to="/signup" className="text-base font-medium hover:text-primary">
        Sign Up
      </Link>
    </nav>
  );
};
