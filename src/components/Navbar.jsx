import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
export const Navbar = () => {
	const width = window.innerWidth <= 786 ? true : false;

	const [isVisible, setisVisible] = useState(false);

	return (
		<div>
			<nav className="flex">
				<div className="logo_wrapper">
					<span>FIT</span>
					<span className="txt_stroke logo_custom">LAB</span>
				</div>
					
				{width && !isVisible ? (
					<div
						style={{
							width: "1.5em",
							height: "1.5em",
       
           
						}}
						className="animated_menu_bar"
						onClick={() => setisVisible(true)}
					>
              <div onClick={() => setisVisible(true)}></div>
              <div  onClick={() => setisVisible(true)}></div>
              <div  onClick={() => setisVisible(true)}></div>
          </div>
				) : (
					<div className="nav_links ">
						<ul
							className="flex "
						>
							<li onClick={() => setisVisible(false)}>
							<Link
								to="home"
								spy={true}
								smooth={true}
								onClick={() => setisVisible(!isVisible)}
							>HOME</Link></li>
							<li> <Link
							to="coaches"
							spy={true}
							smooth={true}
							onClick={() => setisVisible(!isVisible)}
							>OUR COACHES</Link> </li>
							<li onClick={() => setisVisible(!isVisible)}> <Link
							to="gallery"
							spy={true}
							smooth={true}
							>GALLERY</Link>  </li>
							<li onClick={() => setisVisible(!isVisible)}> <Link
							to="testimonials"
							spy={true}
							smooth={true}
							onClick={() => setisVisible(!isVisible)}
							>TESTIMONIALS</Link> </li>
							<li onClick={() => setisVisible(!isVisible)}> <Link
							to="contact"
							spy={true}
							smooth={true}
							onClick={() => setisVisible(!isVisible)}
							>CONTACT US</Link>  </li>
						</ul>
					</div>
				)}
			</nav>
		</div>
	);
};
