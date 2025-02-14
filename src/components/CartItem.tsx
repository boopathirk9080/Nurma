import { Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../store/useCart';
import { CartItem as CartItemType } from '../types';

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 py-4 border-b">
      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-gray-600">₹{item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
          className="p-1 hover:text-pink-600"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 hover:text-pink-600"
        >
          <Plus className="h-4 w-4" />
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="p-1 text-red-500 hover:text-red-600 ml-2"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};