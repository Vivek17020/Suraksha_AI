
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-background py-6">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="relative h-7 w-7 overflow-hidden rounded-full bg-gradient-to-br from-suraksha-500 to-suraksha-700">
                <div className="absolute inset-1 rounded-full bg-white flex items-center justify-center text-suraksha-700 font-bold text-xs">S</div>
              </div>
              <span className="font-bold text-lg">Suraksha AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your AI-powered insurance companion
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Products</h3>
            <Link to="/products/health" className="text-sm text-muted-foreground hover:underline">Health Insurance</Link>
            <Link to="/products/life" className="text-sm text-muted-foreground hover:underline">Life Insurance</Link>
            <Link to="/products/motor" className="text-sm text-muted-foreground hover:underline">Motor Insurance</Link>
            <Link to="/products/home" className="text-sm text-muted-foreground hover:underline">Home Insurance</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <Link to="/resources/blog" className="text-sm text-muted-foreground hover:underline">Blog</Link>
            <Link to="/resources/guides" className="text-sm text-muted-foreground hover:underline">Guides</Link>
            <Link to="/resources/calculator" className="text-sm text-muted-foreground hover:underline">Premium Calculator</Link>
            <Link to="/resources/faqs" className="text-sm text-muted-foreground hover:underline">FAQs</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Company</h3>
            <Link to="/about" className="text-sm text-muted-foreground hover:underline">About Us</Link>
            <Link to="/careers" className="text-sm text-muted-foreground hover:underline">Careers</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:underline">Contact</Link>
            <Link to="/partner" className="text-sm text-muted-foreground hover:underline">Partner with Us</Link>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Legal</h3>
            <Link to="/privacy" className="text-sm text-muted-foreground hover:underline">Privacy Policy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:underline">Terms of Service</Link>
            <Link to="/cookies" className="text-sm text-muted-foreground hover:underline">Cookie Policy</Link>
            <Link to="/licenses" className="text-sm text-muted-foreground hover:underline">Licenses</Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Suraksha AI. All rights reserved. IRDAI Registration No: XXXXXX
          </p>
          <div className="flex gap-4">
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
