import heroImage from '../assets/hero-image.jpg'; // Adjust the path depending on your folder structure
const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }} // Correct template literal syntax
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-widest drop-shadow-lg">
          Welcome to <span className="text-green-400">E-Store</span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl font-light max-w-4xl drop-shadow-md">
          Discover premium quality products crafted to elevate your lifestyle. Shop the exclusive collection today!
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="#products"
            className="px-6 py-3 bg-green-500 text-white font-medium rounded-full shadow-lg hover:bg-green-600 transition-transform transform hover:scale-105 duration-300"
          >
            Shop Now
          </a>
          <a
            href="#about"
            className="px-6 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-green-700 transition-transform transform hover:scale-105 duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-green-400 opacity-30 rounded-full blur-2xl animate-bounce"></div>
    </section>
  );
};

export default HeroSection;
