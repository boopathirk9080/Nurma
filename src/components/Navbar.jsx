import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../store/useCart';
import logo from '../assets/img/logonurmaa.png'
export const Navbar = () => {
  const items = useCart((state) => state.items);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-slate-50 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-pink-600">
              <img src={logo} alt="" style={{height:'50px'}} /> 
            </Link>
          </div>

          {/* Mobile Cart Icon */}
          <div className="md:hidden flex items-center gap-4">
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-600" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-pink-600">
              Home
            </Link>
            <Link to="/shop" className="text-gray-600 hover:text-pink-600">
              Shop
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-pink-600">
              About
            </Link>
            <Link to="/testimonials" className="text-gray-600 hover:text-pink-600">
              Testimonials
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-pink-600">
              Contact
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingBag className="h-6 w-6 text-gray-600 hover:text-pink-600" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-600 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 text-gray-600 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-600 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              className="block px-3 py-2 text-gray-600 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-600 hover:text-pink-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};