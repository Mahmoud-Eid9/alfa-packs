import './App.css';
import NavBar from './components/navbar/Navbar';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/home';
import Article from './components/Article/Article';
import Contactus from './components/Contactus/Contactus';
import ProductsCups from './components/Products/Cups/ProductsCups';
import ProductsContainers from './components/Products/Containers/ProductsContainers';
import FoodSafePackaging from './components/FoodSafePackaging/FoodSafePackaging';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import parse from 'html-react-parser'

function App() {
  const { t, i18n } = useTranslation();
  const quality = [
    { title: parse(t("navbar.quality.gmp")), link: "/quality/gmp" },
    { title: t("navbar.quality.iso9001"), link: "/quality/iso9001" }
  ]
  const foodSafe = [
    { title: t("navbar.foodsafe.ghs"), link: "/foodsafe/ghs" },
    { title: t("navbar.foodsafe.haccp"), link: "/foodsafe/haccp" },
    { title: t("navbar.foodsafe.iso22000"), link: "/foodsafe/iso22000" }
  ]
  const covers = [
    { title: parse(t("navbar.products.cups")), link: "/products/cups" },
    { title: parse(t("navbar.products.containers")), link: "/products/containers" },
    { title: parse(t("navbar.products.covers")), link: "/products/covers" }
  ]
  useEffect(() => {
    if (i18n.language === "ar") {
      document.body.style.textAlign = "right";
      document.body.style.fontFamily = "Noto Sans Arabic, sans-serif";
    } else {
      document.body.style.textAlign = "left";
    }
  }, [i18n.language])
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/quality/gmp" exact render={(props) => <Article article="gmp.md" sideBarData={quality} title={parse(t("qualitytitles.gmp"))} />} />
        <Route path="/quality/iso9001" exact render={(props) => <Article article="iso9001.md" sideBarData={quality} title={parse(t("qualitytitles.iso9001"))} />} />
        <Route path="/quality" render={(props) => <Article article="quality.md" sideBarData={quality} title={parse(t("navbar.quality.title"))} />} />
        <Route path="/food-safe-packaging" exact render={(props) => <Article article="foodsafepackaging.md" sideBarData={foodSafe} title={parse(t("navbar.foodsafe.title"))} />} />
        <Route path="/foodsafe/ghs" exact render={(props) => <Article article="ghp.md" sideBarData={foodSafe} title={parse(t("qualitytitles.ghp"))} />} />
        <Route path="/foodsafe/haccp" exact render={(props) => <Article article="haccp.md" sideBarData={foodSafe} title={parse(t("qualitytitles.haccp"))} />} />
        <Route path="/foodsafe/iso22000" exact render={(props) => <Article article="iso22000.md" sideBarData={foodSafe} title={parse(t("qualitytitles.iso22000"))} />} />
        <Route path="/contact" exact component={Contactus} />
        <Route path="/products" exact render={(props) => <ProductsCups product="Cups.json" title={parse(t("products.cups"))} />} />
        <Route path="/products/cups" exact render={(props) => <ProductsCups product="Cups.json" title={parse(t("products.cups"))} />} />
        <Route path="/products/containers" exact render={(props) => <ProductsContainers product="Containers.json" title={parse(t("products.containers"))} />} />
        <Route path="/products/covers" exact render={(props) => <Article article="covers.md" sideBarData={covers} title={parse(t("products.covers"))} />} />
        {/* <Route path="/products/covers" exact render={(props) => <Products product="Covers.json" title={parse(t("products.covers"))} />} /> */}
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
