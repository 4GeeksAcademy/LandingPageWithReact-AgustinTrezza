import React from "react";
import  Navbar  from "./Navbar";
import MainBanner from "./MainBanner";
import Cards from "./Cards";
import Footer from "./Footer"


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<MainBanner/>
			<Cards/>
			<Footer/>
		</div>
		
	);
};

export default Home;
