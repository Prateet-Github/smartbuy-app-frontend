import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Home/Footer";
import Hero2 from "../components/Home/Hero2";
const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero></Hero>
      <Hero2></Hero2>

      <Footer></Footer>
    </div>
  );
};
Home;

export default Home;
