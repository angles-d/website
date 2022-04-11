import {BrowserRouter, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Projects from "./Projects";
import About from "./About";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path = "/" component={Home}/>
      <Route exact path = "/projects" component={Projects}/>
      <Route exact path = "/about" component={About}/>

      <div className = "nav">
        <img src = {logo} className = "logo" alt = "Logo Image"/>
        <div className = "nav-bar">
          <Link to = "/" className = "home">Home</Link>
          <Link to = "/projects" className = "projects">Projects</Link>
          <Link to = "/about" className = "about">About Me</Link>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
