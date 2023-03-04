import NavBar from "../navbar/Navbar";
import Hero from "../Hero/Hero";
import HomeProducts from "./products/products";
const Home = () => {
    return ( <div>
        <NavBar/>
        <Hero/>
        <HomeProducts/>
    </div> );
}
 
export default Home;