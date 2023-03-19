import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/Navbar';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/home';
import Article from './components/Article/Article';
import Contactus from './components/Contactus/Contactus';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/gmp" exact render={(props) => <Article article="hello.md" title="Quality -> Gmp" />} />
        <Route path="/haccp" exact render={(props) => <Article article="haccp.md" title="Quality -> HACCP" />} />
        <Route path="/ghp" exact render={(props) => <Article article="hello.md" />} />
        <Route path="/contact" exact component={Contactus} />
        <Route path="*" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
