import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Trending from "./components/Trending/Trending";
import TopSelling from "./components/TopSelling/TopSelling";
import CustomerReview from "./components/CustomerReview/Review";
import OxygenSection from "./components/OxygenSection/OxygenSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero/>
      <Trending/>
      <TopSelling/>
      <CustomerReview/>
      <OxygenSection/>
      <Footer/>
    </div>
  );
}

export default App;