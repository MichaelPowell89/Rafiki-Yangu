import React from "react";
// import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./views/Home"
import OurWishes from './views/OurWishes';
import About from './views/About';
import WhoWeHelp from './views/WhoWeHelp';
import HowYouHelp from './views/HowYouHelp';
import Contact from './views/Contact';
import Donate from './views/Donate';
//import Login from './views/Login';
//import contentControl from "./views/contentControl";

function App() {
  return (
    <div>
      <div className="app">
			<Router>
				<Navbar />
				{Home}
				<Switch>
					<Route path="/" exact component={Home} />

					{/* //Wishes Page */}
					<Route path="/OurWishes" exact component={OurWishes} />

					{/* Drop Down About us */}
					<Route path="/About" exact component={About} />
					<Route path="/WhoWeHelp" exact component={WhoWeHelp} />
					<Route path="/HowYouHelp" exact component={HowYouHelp} />

					{/* Contact */}
					<Route path="/contact" exact component={Contact} />

					{/* Donate */}
					<Route path="/donate" exact component={Donate} />


					{/* <Route path="/Login" exact component={Login} />
					<Route path="/contentControl" exact component={contentControl} /> */}
				</Switch>
			</Router>
      <Footer />
      </div>
    </div>
  );
}

export default App;
