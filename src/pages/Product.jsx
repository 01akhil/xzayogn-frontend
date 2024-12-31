import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; // For accessing dynamic URL params
import fore_cleanup from "../assets/fore_cleanup.png";
import SearchBar from "../components/SearchBar";
import { Bookmark, ChevronDown, Link, Twitter } from "lucide-react";

const Product = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null); // Store product data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch product data from the backend when the component mounts
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        console.log(`${id}`)
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/product/${id}`); // Make API request
        const data = await response.json();
        if (response.ok) {
          setProduct(data); // Update state with fetched data
        } else {
          setError(data.message); // Handle errors
        }
      } catch (error) {
        setError("An error occurred while fetching the product data.");
      } finally {
        setLoading(false); // Set loading to false after the request completes
      }
    };

    fetchProductData();
  }, [id]);

  const handleClick = () => {
    console.log("button clicked");
    window.open(product?.link, "_blank", "noopener,noreferrer");
  };

  const navigate=useNavigate()

  const handleHome = () => {
    navigate('/'); // Redirect to home
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div
      className="w-full bg-cover bg-center overflow-x-hidden flex justify-center min-h-screen"
      style={{ backgroundImage: `url(${fore_cleanup})` }}
    >
      <div className="w-full max-w-7xl px-4">
        <div className="absolute top-4 left-4 z-10 lg:flex ">
          <button
            onClick={handleHome}
            className="text-white font-semibold text-sm sm:text-lg  hover:text-[#00aaff] transition-all duration-300"
          >
            Home
          </button>
        </div>

        <SearchBar />

        <div className="mt-6 border-t-2 border-gray-50">
          <div className="w-full">
            <div className="w-full flex flex-wrap sm:flex-nowrap justify-between items-center gap-6 sm:gap-8">
              <div className="flex items-center gap-4">
                <img
                  className="w-16 h-16"
                  src={product.logo}
                  alt="Product Logo"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white mt-3 md:mt-0 lg:mt-0 xl:mt-0">
                    {product.productName || "Product Title Not Available"}
                  </h3>
                  <p className="text-gray-50">
                    {product.tagline || "No tagline available"}
                  </p>
                  <div className="flex items-center gap-2 text-yellow-500">
                    {Array.from({ length: product.noOfStars }, (_, index) => (
                      <span key={index}>⭐</span>
                    ))}
                  </div>
                  <div className="flex gap-3 text-[#d8e5e5c9] text-sm">
                    <p>{product.noOfReviews} reviews</p>
                    <p>{product.noOfFollowers} followers</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-center justify-center">
                <button className="flex items-center gap-2 p-1 w-[25vw] h-[5vh] md:w-[10vw] md:h-[4vh] lg:w-[10vw] lg:h-[7vh] xl:w-[6vw] xl:h-[7vh]  text-gray-50">
                  <Bookmark />
                  Save
                </button>
                <button className="text-black bg-[#ffffff] border-2 border-gray-50 p-1 w-[27vw] h-[5vh] md:w-[12vw] md:h-[4vh] lg:w-[12vw] lg:h-[5vh] xl:w-[8vw] xl:h-[7vh]  rounded-md text-sm font-semibold">
                  Follow
                </button>
                <button
                  onClick={handleClick}
                  className="bg-[#ff6055] p-1 w-[27vw] h-[5vh] md:w-[12vw] md:h-[4vh] lg:w-[12vw] lg:h-[5vh] xl:w-[8vw] xl:h-[7vh] rounded-md text-white text-sm font-semibold"
                >
                  Visit Website
                </button>
              </div>
            </div>

            <div className="mt-4 pb-2 border-b text-white">
              <ul className="flex gap-10">
                <li>Overview</li>
                <li>Launches</li>
                <li>Reviews</li>
                <li>Team</li>
                <li className="hidden md:block lg:block xl:block">Awards</li>
                <li className="gap-1 items-center cursor-pointer hidden md:flex lg:flex xl:flex">
                  More <ChevronDown />
                </li>
              </ul>
            </div>

            <div className="mt-10 flex flex-col lg:flex-row xl:flex-row md:flex-row gap-6">
              <div className="w-full sm:w-7/12 flex flex-col gap-4">
                <h1 className="text-white font-semibold text-lg sm:text-2xl">
                  What is {product.productName || "Product"}?
                </h1>
                <p className="text-gray-50 text-sm sm:text-base">
                  {product.description || "Description not available."}
                </p>

                <div className="flex gap-2 text-gray-50 text-sm flex-wrap">
                  {product.tags && product.tags.length > 0 ? (
                    product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="border-2 border-gray-50 rounded-lg p-1"
                      >
                        {tag}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-50">No tags available</span>
                  )}
                </div>

                <div className="flex gap-4 overflow-x-auto">
                  {product.images && product.images.length > 0 ? (
                    product.images.map((image, index) => (
                      <img key={index} className="rounded-md w-full sm:w-64 h-auto" src={image} alt="" />
                    ))
                  ) : (
                    <span className="text-gray-50">No images available</span>
                  )}
                </div>

                <div className="">
                  <h1 className="text-2xl font-semibold text-gray-50">Recent Launches</h1>
                  <div className="flex justify-between items-center mt-4 p-2">
                    <div className="w-[100vw] flex flex-col ">{/* Add launch details here */}</div>
                  </div>
                </div>

                <button className="bg-[#ff6154] text-white p-1  md:h-[5vh]  lg:h-[7vh]  xl:h-[7vh] xl:w-[10vw] rounded-md">
                  Leave a review
                </button>
              </div>

              <div className="w-full sm:w-5/12 flex flex-col gap-6">
                <div className="border border-gray-50 rounded-md p-6 ">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">Product status</h3>
                    <p className="text-gray-50 text-sm">Claimed</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">Links</h3>
                    <p className="text-gray-50 text-sm flex gap-2">
                      <Link className="w-[3vh]" />
                      {product.link || "No link available"}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">Social</h3>
                    <Twitter className="text-white" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold text-white">Makers</h3>
                    {product.alternativeProducts && product.alternativeProducts.length > 0 ? (
                      <div>
                        <img
                          className="w-9 h-9 rounded-full"
                          src={product.makerLogo}
                          alt="Maker logo"
                        />
                      </div>
                    ) : (
                      <p className="text-gray-50">No makers available</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
