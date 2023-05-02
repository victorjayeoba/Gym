import React from "react";
import { useEffect, useState } from "react";
import "./Gallery.css";
import blur from "../../assets/images/gym_center/fit_woman_2.png";
import { motion, transform } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import { images } from "../../data/galleryData";
function Gallery() {
	useEffect(() => {
		console.log(images[0].image);
	}, []);
	const [active, setActive] = useState(0);
	const [click, setClick] = useState(false);
	return (
		<div>
			<section id="gallery">
				{click && 
					<div className="main_overlay" onClick={(e)=>e.target.className!=="control"? setClick(false):setClick(true)} title="Click anywhere to close this overlay"   >
						  <div
              style={{
                position:"fixed",
                right:"30px",
                top:"30px"
              }}
               className="close_overlay">
                <div
                style={{
                  display:"block",
                  width:"25px",
                  height:"2px",
                  backgroundColor:"white",
                 
                  transform:"rotate(45deg)",
                }}
                ></div>
                  <div
                style={{
                  display:"block",
                  width:"25px",
                  height:"2px",
                  backgroundColor:"white",
                 
                   transform:"rotate(-45deg)",
                }}
                ></div>
              </div>
            <div className="image_container" >
							<img src={images[active].image}   alt="" />
						</div>
            <div className="controls">
               <div className='control' id="control_1"   onClick={(e)=>{active> 0?setActive((active)=> active -1):setActive(images.length-1)}}></div> 
               <div className='control' id="control_2"  onClick={(e)=>{active < images.length-1?setActive((active)=> active +1):setActive(0)}} ></div> 
               </div>
					</div>
				}
				<motion.h2
					initial={{ translateY: 5, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
				>
					OUR <span className="txt_stroke">GALLERY</span>
				</motion.h2>
				<motion.p
					initial={{ translateY: 5, opacity: 0 }}
					whileInView={{ translateY: 0, opacity: 1 }}
					transition={{ duration: 0.5 }}
					className="gallery_about"
				>
					Have a look at some of our gym centers , students and why you should
					choose us.
				</motion.p>
				<div className="gallery_wrapper">
					{images.map((image, id) => {
						return (
							<motion.div
								initial={{ opacity: 0, translateX: -50 }}
								animate={{ opacity: 1, translateX: 0 }}
								transition={{ duration: 0.5, delay: id * 0.5 }}
								key={id}
                id={id}
								className="image_container"
                onClick={(e) => {
                  setActive(id);
                   setClick(true);
                 }}
							>
								<LazyLoadImage
									className="img"
									key={id }
									effect="blur"
									placeholderSrc={blur}
									width="100%"
									style={{ display: "block" }}
									src={image?.image}
									alt=""
                  id={id}
                  
								/>
                <div className="image_description_overlay">
                  <span className="image_description" >{image.description}</span>
                </div>
							</motion.div>
						);
					})}
				</div>
			</section>
		</div>
	);
}

export default Gallery;
