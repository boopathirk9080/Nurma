import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../store/useCart';

export const Contact = () => {
  const { items } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    includeCart: false
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      // Prepare cart items if included
      const cartDetails = formData.includeCart
        ? `\n\nOrder Details:\n${items
          .map(
            (item) =>
              `- ${item.name} (Quantity: ${item.quantity}) - ₹${(
                item.price * item.quantity
              ).toFixed(2)}`
          )
          .join('\n')}\n\nTotal: ₹${items
            .reduce((sum, item) => sum + item.price * item.quantity, 0)
            .toFixed(2)}`
        : '';

      const subject = `Message from ${formData.name} via Nurma Beauty`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
${cartDetails}`;

      window.location.href = `mailto:boopathi7476@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      setFormData({ name: '', email: '', message: '', includeCart: false });
      setSubmitted(true);
      setShowAlert(true);
      setTimeout(() => {
        setSubmitted(false);
        setShowAlert(false);
      }, 5000);
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setSending(false);
    }
  };

  const handleWhatsAppClick = () => {
    const cartItems = items.map(
      item => `- ${item.name} (${item.quantity}x) - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const message = `Hi, I'm interested in the following products:\n\n${cartItems}\n\nTotal: $${total.toFixed(2)}`;

    window.open(
      `https://wa.me/919080787009?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-desert-50 relative">
      {/* Centered Alert */}
      {showAlert && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-24 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="bg-primary-500 text-white px-6 py-3 rounded-lg shadow-xl">
            Message sent successfully! We'll get back to you soon.
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-desert-900">Connect With Us</h1>
          <p className="text-xl text-desert-700 max-w-3xl mx-auto">
            Experience the essence of ancient Egyptian beauty. Reach out to us for personalized beauty advice and discover the secrets of timeless radiance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-8 rounded-lg shadow-xl mb-8 border border-desert-200">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-desert-900">Visit Our Sanctuary</h3>
                  <p className="text-desert-700">123 Nile Valley, Ancient Beauty District, 12345</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-desert-900">Call Us</h3>
                  <p className="text-desert-700">+91 90807 87009</p>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-desert-900">Email Us</h3>
                  <a
                    href="mailto:boopathi7476@gmail.com"
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    boopathi7476@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-primary-100 p-3 rounded-full">
                  <MessageCircle className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-desert-900">WhatsApp</h3>
                  <button
                    onClick={handleWhatsAppClick}
                    className="text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    Chat with us on WhatsApp
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <a
                href="mailto:boopathi7476@gmail.com"
                className="bg-primary-500 text-white py-3 px-6 rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <Mail className="h-5 w-5" />
                Email Us
              </a>
              <button
                onClick={handleWhatsAppClick}
                className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </button>
            </div>

            {/* Egyptian Beauty Quote */}
            <div className="bg-desert-100 p-6 rounded-lg border border-desert-200">
              <p className="text-desert-800 italic">
                "Beauty flows like the Nile, nurturing and eternal. Let us guide you on your journey to timeless radiance."
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl border border-desert-200">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-desert-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  style={{ padding: "5px", padding: "5px", borderWidth: "2px" }}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md  border-desert-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-desert-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{ padding: "5px", padding: "5px", borderWidth: "2px" }}
                  className="mt-1 block w-full rounded-md border-desert-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-desert-900">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  style={{ padding: "5px", padding: "5px", borderWidth: "2px" }}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-desert-300 shadow-sm focus:border-primary-500 focus:ring focus:ring-primary-200 transition-colors"
                  required
                ></textarea>
              </div>

              {items.length > 0 && (
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="includeCart"
                    checked={formData.includeCart}
                    onChange={(e) => setFormData({ ...formData, includeCart: e.target.checked })}
                    className="rounded border-desert-300 text-primary-500 focus:ring-primary-500"
                  />
                  <label htmlFor="includeCart" className="text-sm text-desert-700 flex items-center gap-2">
                    <ShoppingBag className="h-4 w-4" />
                    Include cart items in message
                  </label>
                </div>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full bg-primary-500 text-white py-3 px-4 rounded-md hover:bg-primary-600 transition-colors flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
              >
                {sending ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};