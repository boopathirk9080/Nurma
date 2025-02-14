import { Product } from '../types';
import fid1 from '../assets/FoodProduct/id1/food_id1_1.png';
import fid2 from '../assets/FoodProduct/id1/food_id1_2.webp';
import fid3 from '../assets/FoodProduct/id1/food_id1_3.jpg';

export const products: Product[] = [
  {
    id: 1,
    name: "Sprouted Ragi Powder 500gm",
    price: 80.00,
    description: "sprouted ragi powder ,salt ",
    image: fid1,
    images: [
      fid1,
      fid2,
      fid3
    ],
    category: "Food",
    life:"3 months",
    ingredient:'Premium handpicked finger millet ,sprouted ,no preservative and chemical free'
  },
  
  {
    id: 13,
    name: "Jade Roller",
    price: 28.00,
    description: "Natural jade facial massage tool for lymphatic drainage",
    image: "https://images.unsplash.com/photo-1612454376902-577cd469d008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1612454376902-577cd469d008?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1612454445461-fc12b0475a60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1612454445949-5a75b9d6dd50?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "tools",
    life:"3 months",
    ingredient:'Premium variety of rices are used,no preservative and chemical free'
  },
  {
    id: 14,
    name: "Vitamin C Toner",
    price: 32.00,
    description: "Brightening and balancing facial toner",
    image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    images: [
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608248543831-8c18d8e54c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608248543859-47689824950d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ],
    category: "skincare",
    life:"3 month",
    ingredient:"Premium variety of rices are used,no preservative and chemical free"

  }
  // Add similar structure for other products...
];