import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Testimonial from "./components/Testimonial";
import WorkFlow from "./components/WorkFlow";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-10 px-2 ">
        <Hero />
        <Features />
        <WorkFlow />
        <Price />
        <Testimonial/>
      </div>
      <Footer/>
    </div>
  );
}
