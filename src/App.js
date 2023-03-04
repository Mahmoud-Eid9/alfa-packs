import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/Navbar';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/gmp" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
