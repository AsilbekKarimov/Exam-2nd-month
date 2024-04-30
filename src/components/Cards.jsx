import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { MdDiscount } from "react-icons/md";

const truncateDescription = (description, maxLength) =>
  description.length > maxLength
    ? `${description.substring(0, maxLength - 3)}...`
    : description;

const renderStockStatus = (stock) => {
  if (stock > 0) {
    return (
      <p>
        In stock: <b className="stock">{stock}</b>
      </p>
    );
  } else {
    return <p>Out of stock</p>;
  }
};

const ProductCardSkeleton = () => (
  <div className="flex bg-slate-800 justify-between w-[300px] h-[430px] flex-col px-3 rounded-xl pb-3 shadow-lg shadow-slate-400 text-white py-[10px]">
    <div className="skeleton w-[278px] h-[185px] rounded-lg"></div>
    <div className="skeleton h-[19px] w-[80%] mt-2"></div>
    <div className="skeleton h-[15px] w-[90%] mt-2"></div>
    <div className="flex items-center gap-1 text-[15px] mt-2">
      <div className="skeleton h-5 w-5"></div>
      <div className="skeleton h-5 w-[20%]"></div>
    </div>
    <div className="flex justify-between mt-2">
      <div className="skeleton h-[15px] w-[50%]"></div>
      <div className="skeleton h-[15px] w-[20%]"></div>
    </div>
    <div className="flex gap-1 items-center mt-2">
      <div className="skeleton h-5 w-5"></div>
      <div className="skeleton h-5 w-[60%]"></div>
    </div>
    <div className="flex items-center justify-center mt-2">
      <div className="skeleton h-10 w-[60%]"></div>
    </div>
  </div>
);

const Cards = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [productCount, setProductCount] = useState(8);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${productCount}`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [productCount]);

  const LoadMore = () => {
    setProductCount(productCount + 4);
  };

  return (
    <div className="container mx-auto py-[30px]">
      <div className="flex flex-wrap gap-5 justify-center">
        {loading
          ? Array.from({ length: productCount }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))
          : products.map((product, id) => (
              <div
                key={id}
                className="flex bg-slate-800 justify-between w-[300px] h-[430px] flex-col px-3 rounded-xl pb-3 shadow-lg shadow-slate-400 text-white py-[10px]"
              >
                <img
                  src={product.thumbnail}
                  alt=""
                  className="w-[278px] h-[185px] rounded-lg"
                />
                <p className="font-bold text-[19px]">{product.title}</p>
                <p className="text-[15px] text-gray-400">
                  {truncateDescription(product.description, 59)}
                </p>
                <p className="flex items-center gap-1 text-[15px]">
                  Rating: <MdOutlineStar color="#FFA500" size="20" />{" "}
                  {product.rating}
                </p>
                <div className="flex justify-between">
                  <p className="flex items-center text-[15px] gap-1 bg-red-500 rounded-lg px-2 font">
                    <MdDiscount />
                    {product.discountPercentage}%
                  </p>
                  <p className="flex">
                    {renderStockStatus(product.stock)} {}
                  </p>
                </div>
                <h2 className="flex gap-1 items-center">
                  Price:
                  <p className="text-[22px] font-semibold">
                    <sup> $</sup>
                    {product.price}
                    <small>.00</small>
                  </p>
                </h2>
                <button className="text-[17px] font-medium flex items-center justify-center  bg-yellow-500 px-10 py-2 rounded-lg hover:bg-yellow-600 transition-[0.5s] active:scale-95">
                  Buy
                </button>
              </div>
            ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={LoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Cards;
