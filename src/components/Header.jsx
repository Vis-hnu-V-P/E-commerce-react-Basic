function Header() {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-extrabold font-serif text-brown-700 tracking-wide">
          E-Store
        </h1>
        <ul className="flex gap-6 items-center">
          <li>
            <a
              href="#hero"
              className="text-brown-700 hover:text-brown-900 transition-all duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-brown-700 hover:text-brown-900 transition-all duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="text-brown-700 hover:text-brown-900 transition-all duration-300"
            >
              Products
            </a>
          </li>
        </ul>
        <div>
          <a
            href="#contact"
            className="px-6 py-2 bg-brown-700 text-white rounded-lg shadow-md hover:bg-brown-900 transition-all duration-300"
          >
           Contact Us
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
