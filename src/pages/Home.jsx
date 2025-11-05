import Navbar from "../components/Home/Navbar";
import Hero from "../components/Home/Hero";
import Footer from "../components/Home/Footer";
const Home = () => {
  return (
   <div className="min-h-screen bg-black text-white">
  <Navbar />
  <Hero></Hero>
  <Footer></Footer>
</div>
  );
};
Home;

export default Home;
