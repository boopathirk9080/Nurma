import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    text: "I've been using Nurma's products for 6 months now, and my skin has never looked better. The Radiance Serum is a game-changer!",
    rating: 5
  },
  {
    id: 2,
    name: "Emily Chen",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    text: "The quality of these products is exceptional. I love that they're all natural and gentle on my sensitive skin.",
    rating: 5
  },
  {
    id: 3,
    name: "Maria Garcia",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    text: "The Night Repair Cream has completely transformed my skincare routine. I wake up with glowing skin every morning.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Customer Stories</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover what our customers have to say about their Nurma experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: testimonial.id * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600">{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};