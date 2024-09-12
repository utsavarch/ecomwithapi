import React from "react";
import { FaTag, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

function Card({ product }) {
  return (
    <div className="max-w-sm rounded-[20px] py-5 overflow-hidden shadow-lg bg-white transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-48 object-contain"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-l mb-2 text-center">{product.title}</div>
        <p className=" text-center text-[#8e0413]">${product.price}</p>

        <div className="flex justify-center m-5">
          <button
            onClick={() => {
              toast.success(`1 ${product.title} added to the cart`);
            }}
            className="px-6 py-2 text-white bg-[#8e0413] rounded-md hover:bg-[#cb0b0a] focus:outline-none focus:ring-2 focus:ring-[#8e0413] transition-colors duration-300"
          >
            Add To Cart
          </button>
        </div>
        <div className="flex justify-between items-center mt-1">
          <div className="flex items-center text-gray-600">
            <FaTag className="mr-2" />
            <span>{product.category}</span>
          </div>
          <div className="flex items-center text-yellow-500">
            <FaStar className="mr-2" />
            <span>{product.rating.rate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
