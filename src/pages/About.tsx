import { motion } from 'framer-motion';
import { Heart, Leaf, Shield } from 'lucide-react';

export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Nurma</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We believe in the power of natural beauty and create products that enhance your natural radiance
          while being kind to your skin and the environment.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 mb-16">
        <div className="text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="h-8 w-8 text-pink-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Natural Ingredients</h3>
          <p className="text-gray-600">
            We use only the finest natural ingredients, carefully selected for their purity and effectiveness.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-pink-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Cruelty Free</h3>
          <p className="text-gray-600">
            All our products are cruelty-free and never tested on animals.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="h-8 w-8 text-pink-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
          <p className="text-gray-600">
            Each product is crafted with care and attention to detail.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Our Story"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2024, Nurma was born from a passion for natural beauty and a desire to create
            products that work in harmony with your skin. Our journey began with a simple belief:
            that everyone deserves to feel confident in their own skin.
          </p>
          <p className="text-gray-600">
            Today, we continue to innovate and create products that not only enhance your natural
            beauty but also contribute to your overall well-being. Every Nurma product is a promise
            of quality, purity, and effectiveness.
          </p>
        </div>
      </div>
    </motion.div>
  );
};