import { Button } from "@/components/ui/button";
import { MessageCircle, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from 'react-router-dom';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-primary p-2 rounded-lg">
                <MessageCircle className="w-5 h-5 text-gray-900" />
              </div>
              <span className="text-xl font-bold text-gray-900">BannerGen</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              Sign in
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-gray-900 font-medium">
              Get started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900 justify-start">
                  Sign in
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-gray-900 font-medium justify-start">
                  Get started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
