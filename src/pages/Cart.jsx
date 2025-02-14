import { motion } from 'framer-motion';
import { useCart } from '../store/useCart';
import { CartItem } from '../components/CartItem';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, MessageCircle } from 'lucide-react';

export const Cart = () => {
  const { items } = useCart();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    const cartItems = items.map(
      item => `- ${item.name} (${item.quantity}x) - ₹${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');
    
    const message = `Hello! I would like to place an order for:\n\n${cartItems}\n\nTotal: ₹${total.toFixed(2)}\n\nPlease help me complete my purchase.`;
    
    window.open(
      `https://wa.me/919080787009?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-desert-400" />
          <h2 className="mt-2 text-lg font-medium text-desert-900">Your cart is empty</h2>
          <p className="mt-1 text-sm text-desert-500">Start shopping to add items to your cart</p>
          <div className="mt-6">
            <Link
              to="/shop"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-desert-900">Shopping Cart ({items.length} items)</h1>
        <Link to="/shop" className="text-primary-600 hover:text-primary-700 flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </Link>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-xl border border-desert-200 h-fit">
          <h2 className="text-lg font-medium text-desert-900 mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-desert-800">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-desert-800">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="border-t border-desert-200 pt-2 mt-2">
              <div className="flex justify-between font-medium text-desert-900">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Options */}
          <div className="mt-6 space-y-3">
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-green-500 text-white py-3 px-4 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="h-5 w-5" />
              Checkout via WhatsApp
            </button>

            <Link
              to="/contact"
              className="w-full bg-primary-500 text-white py-3 px-4 rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              Contact Us for Support
            </Link>
          </div>

          {/* Additional Information */}
          <div className="mt-6 p-4 bg-desert-50 rounded-md border border-desert-200">
            <p className="text-sm text-desert-700 text-center">
              Click "Checkout via WhatsApp" to complete your order through our direct messaging service.
              Our team will assist you with payment and delivery details.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};