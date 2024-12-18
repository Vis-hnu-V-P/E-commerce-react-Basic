import feature1 from '../assets/feature1.jpg';
import feature2 from '../assets/feature2.jpg';

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-center p-6 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src={feature1}
              alt="Feature 1"
              className="w-full h-56 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800">High Quality</h3>
            <p className="text-lg text-gray-600 mt-2">Crafted with the finest materials to ensure durability and performance.</p>
          </div>
          <div className="text-center p-6 bg-white shadow-lg rounded-xl transform transition-all hover:scale-105 hover:shadow-2xl">
            <img
              src={feature2}
              alt="Feature 2"
              className="w-full h-56 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800">Eco-Friendly</h3>
            <p className="text-lg text-gray-600 mt-2">Sustainably sourced and designed with the environment in mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
