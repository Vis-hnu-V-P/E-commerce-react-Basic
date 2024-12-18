const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary to-muted">
      <div className="container mx-auto px-6">
        {/* About Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-primary mb-4">Who We Are</h1>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            At <span className="text-accent font-bold">E-Store</span>, we specialize in delivering high-quality, eco-friendly, and trendy products. With years of industry experience, our mission is to enhance your shopping experience with exclusive collections and unbeatable deals. Join our community of happy customers!
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary mb-2">Premium Quality</h3>
            <p className="text-gray-700">
              Every product is carefully crafted using premium materials to ensure durability and customer satisfaction.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary mb-2">Eco-Friendly</h3>
            <p className="text-gray-700">
              Our products are sourced responsibly to minimize environmental impact and promote sustainability.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-bold text-primary mb-2">Affordable Prices</h3>
            <p className="text-gray-700">
              We provide exceptional value by offering premium products at prices that won&apos;t break the bank.
            </p>
          </div>
        </div>

        {/* Call To Action Section */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-extrabold text-accent mb-4">Start Shopping Today!</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Explore our hand-picked collection of exclusive products. Don&apos;t miss out on our limited-time offers and special discounts.
          </p>
          <a
            href="#products"
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
          >
            Browse Products
          </a>
        </div>

        {/* Customer Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-center text-primary mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <p className="italic text-gray-700 mb-4">&quot;Amazing products and fast shipping. I&apos;m a loyal customer now!&quot;</p>
              <h4 className="font-semibold text-accent">- Alex Johnson</h4>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <p className="italic text-gray-700 mb-4">&quot;Eco-friendly and stylish. These products are exactly what I needed.&quot;</p>
              <h4 className="font-semibold text-accent">- Emily Smith</h4>
            </div>
            <div className="p-6 bg-white shadow-md rounded-lg text-center">
              <p className="italic text-gray-700 mb-4">&quot;Great prices and excellent quality. Highly recommended!&quot;</p>
              <h4 className="font-semibold text-accent">- David Brown</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
