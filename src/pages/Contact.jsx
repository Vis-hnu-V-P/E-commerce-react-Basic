const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto max-w-2xl text-center px-6">
        <h1 className="text-4xl font-extrabold text-black mb-8">Contact Us</h1>
        <p className="text-lg text-black mb-12">
          We’d love to hear from you. Feel free to reach out with any questions or feedback.
        </p>
        <form className="bg-white shadow-xl rounded-lg px-8 py-10 space-y-6">
          <div className="mb-4">
            <label
              className="block text-black text-sm font-medium mb-2"
              htmlFor="name"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-medium mb-2"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-medium mb-2"
              htmlFor="message"
            >
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
