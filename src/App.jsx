import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
// import Testimonials from './components/Testimonials';
import About from './pages/About';
import Products from './pages/Product';
import Contact from './pages/Contact';
function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <Features />
        <Products />
        {/* <Testimonials /> */}
         <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
