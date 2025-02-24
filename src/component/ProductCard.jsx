import React from 'react';
import { Plus } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mt-1 h-12 overflow-hidden">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product)}
            disabled={isInCart}
            className={`px-4 py-2 rounded-md flex items-center gap-2 ${
              isInCart
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            <Plus className="h-4 w-4" />
            {isInCart ? 'Added' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;