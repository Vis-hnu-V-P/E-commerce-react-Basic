  import customer1 from '../assets/customer1.jpg';    

  const Testimonials = () => {
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <img src={customer1} alt="Customer 1" className="w-24 h-24 object-cover rounded-full mx-auto" />
              <p className="mt-4">&quot;Will definitely shop again!&quot;</p>
              <h4 className="mt-2">- Jane Smith</h4>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Testimonials;
