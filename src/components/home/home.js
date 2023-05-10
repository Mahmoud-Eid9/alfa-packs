import Hero from "./Hero/Hero";
import HomeProducts from "./products/products";
import Footer from "../Footer/Footer";
import HomeContactus from "./Contactus/HomeContactus";
import QualityHome from "./Quality/Quality";

const Home = () => {
    return ( <div>
        <Hero/>
        <HomeProducts/>
        <QualityHome/>
        <HomeContactus/>
        <Footer/>
    </div> );
}
 
export default Home;