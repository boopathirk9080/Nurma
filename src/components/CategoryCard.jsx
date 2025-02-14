import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const CategoryCard = ({ category }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative group overflow-hidden rounded-lg shadow-lg"
    >
      <Link to={`/category/${category.id}`}>
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
          <p className="text-white/80 mb-4"> {category.description}</p>
          <div className="flex items-center text-white gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span>Shop Now</span>
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};