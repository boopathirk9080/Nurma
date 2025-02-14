import { motion } from 'framer-motion';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../store/useCart';
import { products } from '../data/products';
import { ShoppingCart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h1>
          <Link to="/shop" className="text-pink-600 hover:text-pink-700">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  // Use product's images array or fallback to single image if images not available
  const productImages = product.images || [product.image];

  const similarProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % productImages.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Product Images Showcase */}
        <div className="space-y-4">
          <div className="relative group">
            <motion.img
              key={selectedImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              src={productImages[selectedImageIndex]}
              alt={`${product.name} view ${selectedImageIndex + 1}`}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            {productImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-800" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ChevronRight className="h-6 w-6 text-gray-800" />
                </button>
              </>
            )}
          </div>
          {productImages.length > 1 && (
            <div className="flex gap-4 justify-center">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative rounded-lg overflow-hidden ${selectedImageIndex === index ? 'ring-2 ring-pink-600' : ''
                    }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-24 h-24 object-cover"
                  />
                  {selectedImageIndex === index && (
                    <div className="absolute inset-0 bg-white/20" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          {/* <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="text-gray-600 ml-2">(4.8/5)</span>
          </div> */}
          <p className="text-2xl font-semibold text-pink-600 mb-6">
          ₹{product.price.toFixed(2)}
          </p>

          <div className="mb-8">
          <h3 className="font-extrabold mb-2 text-xl underline decoration-[0.5mm]">
  <b>Product Details:</b>
</h3>

            <p className="text-gray-600 mb-0"> <b>Natural Essence :</b> {product.ingredient}</p>
            <p className="text-gray-600 mb-1"><b>Ingredient: </b>{product.description}</p>
            {/* <h3 className="font-semibold mb-2">Ingredient:</h3> */}
           
            <p className="text-gray-600 mb-4"> <b>Maximum Shelf Life :</b> {product.life}</p>
          </div>

          <button
            onClick={() => addToCart(product)}
            className="w-full bg-pink-600 text-white py-3 px-6 rounded-md hover:bg-pink-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>

      {/* Similar Products */}
      {similarProducts.length > 0 && (
        <div className="border-t pt-16">
          <h2 className="text-2xl font-bold mb-8">Similar Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {similarProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}