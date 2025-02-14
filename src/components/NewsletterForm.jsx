import { useState } from 'react';
import { Send } from 'lucide-react';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('subscribed');
    setEmail('');
  };

  return (
    <div className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Beautiful, Stay Updated</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive offers, beauty tips, and new product announcements.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-2 rounded-md hover:bg-pink-700 transition-colors flex items-center gap-2"
            >
              Subscribe
              <Send className="h-4 w-4" />
            </button>
          </div>
          {status === 'subscribed' && (
            <p className="text-green-600 mt-2">Thank you for subscribing!</p>
          )}
        </form>
      </div>
    </div>
  );
};