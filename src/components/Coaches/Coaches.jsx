import React from "react";
import "./Coaches.css";
import {coachesData} from "../../data/coachesData";

import { motion } from "framer-motion";


function Coaches() {
	return (
		<div>
			<section id="coaches">
				<motion.h2 
				initial={{translateY:5,opacity:0}}
				whileInView={{translateY:0,opacity:1}}
				transition={{duration:.3}}
				className="txt_center">
					MEET OUR <span className="txt_stroke">COACHES</span>{" "}
				</motion.h2>
				<motion.p
				repeat="false"
				initial={{translateY:5,opacity:0}}
				whileInView={{translateY:0,opacity:1}}
				transition={{duration:.5}}
				className="txt_center">
					<span>P.S:</span> Believe it or not we have the best coaches in the
					whole of Africa
				</motion.p>
				<div className="coaches_wrapper">
				{
					coachesData.map((e,id)=>{
						return(
						<motion.div className="coach_container"						
						initial={{opacity:0,translateX:-200}}
						 animate={{opacity:1,translateX:0}}
						 transition={{duration:.5,delay:id*.05}}
						 whileHover={{translateY:-10}}
						key={id}>
						<div className="coach_image_container">
							<img src={e.Image} alt="" loading="lazy" />
						</div>

						<motion.div className="coach_name_wrapper"
						initial={{opacity:0,translateY:50}}
						 whileInView={{opacity:1,translateY:0}}
						 transition={{duration:.2,delay:id*.2}}
						 key={id + 2}>
							<h3 className="coach_name">{e.name}</h3>
							<p>{e.work}</p>
							<p>{e.experience}</p>
						</motion.div>
					</motion.div>
						)
					})
				}
				</div>
                    <div className="coach_testimonials ">
						<div className="coach_testimonial">
							<span>900+</span>
							<div>
								<span>STUDENTS <br /> WORLDWIDE</span>
							</div>
						</div>
                        <div className="coach_testimonial">
							<span>240+</span>
							<div>
								<span>GYM <br /> CENTERS</span>
							</div>
						</div>

                       
				 </div>
                
			</section>
		</div>
	);
}

export default Coaches;
