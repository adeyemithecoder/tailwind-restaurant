import Team from "./Team";
import Testimonial from "./Testimonial";
import Footer from "./Footer";
import Home from "./Home";
import Menu from "./Menu";
import Navbar from "./Navbar";
import About from "./About";

function App() {
  return (
    <div
      className=' text-base min-h-screen 
     bg-skin-white text-skin-white-light overflow-x-hidden '
    >
      <Navbar />
      <Home />
      <About />
      <Menu />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
