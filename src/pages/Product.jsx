import product1 from '../assets/product1.jpg';
import product2 from '../assets/product2.jpg';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-semibold text-center text-gray-900 mb-16">
          Explore Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {/* Product 1 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={product1}
              alt="Product 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Product 1</h3>
              <p className="text-lg font-light text-gray-600 mb-4">$29.99</p>
              <button className="px-5 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-300">
                View Details
              </button>
            </div>
          </div>
          {/* Product 2 */}
          <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <img
              src={product2}
              alt="Product 2"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Product 2</h3>
              <p className="text-lg font-light text-gray-600 mb-4">$49.99</p>
              <button className="px-5 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-all duration-300">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
