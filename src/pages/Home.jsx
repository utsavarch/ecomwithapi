import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../hooks/useproducts.js";
import Card from "../components/Card";
import { FaSearch } from "react-icons/fa";

function Home() {
  const [productList] = useProducts();
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isLoggedin, setisLoggedin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setisLoggedin(true);
    }
  }, []);

  const filteredProducts = productList.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearchInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    setSearch(inputValue);
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
        <div className="flex-grow flex items-center justify-center max-w-md">
          <input
            type="search"
            placeholder="Search..."
            value={inputValue}
            onChange={handleSearchInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e5e7eb]"
          />
          <button
            onClick={handleSearchClick}
            className="ml-2 px-4 py-2 bg-[#8e0413] text-white rounded-md hover:bg-[#cb0b0a] focus:outline-none focus:ring-2 focus:ring-[#8e0413]"
          >
            <FaSearch />
          </button>
        </div>

        <div className="flex items-center space-x-4">
          {isLoggedin === false ? (
            <Link to="/login">
              <button className="px-6 py-2 text-white bg-[#8e0413] rounded-md hover:bg-[#cb0b0a] focus:outline-none focus:ring-2 focus:ring-[#8e0413]">
                Login
              </button>
            </Link>
          ) : (
            <>
              <button
                onClick={handleLogout}
                className="px-6 py-2 text-white bg-[#8e0413] rounded-md hover:bg-[#cb0b0a] focus:outline-none focus:ring-2 focus:ring-[#8e0413]"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 bg-gray-100">
        {filteredProducts.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}

export default Home;
