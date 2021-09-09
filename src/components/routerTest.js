import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Navbar";
import Home from "../views/Home"
import About from '../views/About';
import WhoWeHelp from '../views/WhoWeHelp';
import HowYouHelp from '../views/HowYouHelp';
import Contact from '../views/Contact';
import Wishes from '../views/OurWishes';
import Donate from '../views/Donate';
import Login from '../views/Login';
import Login from '../views/contentControl';

function routerTest() {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/Our Wishes" exact component={Wishes} />
					<Route path="/rafiki-yangu/about" exact component={About} />
					<Route path="/WhoWeHelp" exact component={WhoWeHelp} />
					<Route path="/HowYouHelp" exact component={HowYouHelp} />
					<Route path="/contact" exact component={Contact} />
					<Route path="/Donate" exact component={Donate} />
					<Route path="/Login" exact component={Login} />
					<Route path="/contentControl" exact component={contentControl} />
				</Switch>
			</Router>
		</div>
	);
}

export default routerTest;
