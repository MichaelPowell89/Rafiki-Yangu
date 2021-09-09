import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
					<Route path="/Rafiki-Yangu" exact component={Home} />
					<Route path="/Rafiki-Yangu/Our Wishes" exact component={Wishes} />
					<Route path="/Rafiki-Yangu/about" exact component={About} />
					<Route path="/Rafiki-Yangu/WhoWeHelp" exact component={WhoWeHelp} />
					<Route path="/Rafiki-Yangu/HowYouHelp" exact component={HowYouHelp} />
					<Route path="/Rafiki-Yangu/contact" exact component={Contact} />
					<Route path="/Rafiki-Yangu/Donate" exact component={Donate} />
					<Route path="/Rafiki-Yangu/Login" exact component={Login} />
					<Route path="/Rafiki-Yangu/contentControl" exact component={contentControl} />
				</Switch>
			</Router>
		</div>
	);
}

export default routerTest;
