import Footer from "./_components/Footer";
import Header from "./_components/Header";
import HomeProducts from "./_components/HomeProducts";
import Slider from "./_components/Slider";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <HomeProducts />
      <Footer/>
    </div>
  );
}
