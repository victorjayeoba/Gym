import React from "react";
import { Navbar } from "../Navbar";
import { useEffect } from "react";
import {useScroll,useTransform, motion} from "framer-motion"
import "./Hero.css";
import { Link } from "react-scroll";
function Hero() {
	const transition = {type:"spring", duration:2}
	const {scrollYProgress} = useScroll();
	const x = useTransform(scrollYProgress,[1,0],[0, 1000]);
	useEffect(()=>{
		console.log(scrollYProgress)
	},[scrollYProgress]);
	return (
		<div>
			<Navbar/>
			<section id="home" className="header flex flex-column">
				
				<div className="header_content_wrapper" >
					<div className="big_font  middle_text txt-center">
						<motion.div 
						transition={transition} 
						initial={{opacity:0,y: 100}}
						 animate={{y: 0,opacity:1,transition:{
							duration:2
						 }}}
						 exit={{x:0}}
						className="main_text_wrapper">
							<motion.span>BUILD YOUR </motion.span>
							<span className="txt_stroke">BODY</span>
						</motion.div>
						<motion.div 
						
						initial={{opacity:0,y: 100}}
						 animate={{y: 0,
							opacity:1,
							transition:{
								delay:.5,
								duration:1.5
						 }}}
						 exit={{x:0}}
						className="main_text_wrapper">
							<span>BUILD YOUR </span>
							<span className="txt_stroke">STRENGTH</span>
						</motion.div>
					</div>
				
					<div className="flex btn_wrapper">
						<motion.li
						initial={{opacity:0,x: -50}}
						animate={{x: 0,
						   opacity:1,
						   transition:{
							   delay:1,
							   duration:1.5
						}}}
						exit={{x:0}}
						 className=" hero_btn btn">
							<Link
							to="contact"
							spy={true}
							smooth={true}
							>GET STARTED</Link>
							</motion.li>
						<motion.li
						
						initial={{opacity:0,x: -50}}
						 animate={{x: 0,
							opacity:1,
							transition:{
								delay:1,
								duration:1.5
						 }}}
						 exit={{x:0}}
						className=" btn">
							<Link
							to="coaches"
							spy={true}
							smooth={true}
							>LEARN MORE</Link>
						</motion.li>
					</div>
				</div>
				<motion.div style={{translateX:x }} className="animated_bg_text flex">
						<div><span>STAY</span><span className="txt_stroke" > FIT... </span>   </div>    <div><span>STAY</span>
						<span  className="txt_stroke"  > HEALTHY...</span>
					</div>
					</motion.div>  
			</section>
		</div>
	);
}

export default Hero;
