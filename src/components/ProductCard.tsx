import { motion } from 'framer-motion';
import { useCart } from '../store/useCart';
import { Product } from '../types';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const addToCart = useCart((state) => state.addToCart);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 mt-1">₹{product.price}</p>
        <p className="text-sm text-gray-500 mt-2">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};