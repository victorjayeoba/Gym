import React from 'react'
import "./Testimonials.css"
import { testimonials } from "../../data/testimonials";
import { useState } from 'react';
import { motion } from 'framer-motion';

function Testimonials() {
    const[id , setId] =useState(0);
    const transition ={type:"spring",damp:500,duration:3}
  return (
    <div>
        <section id="testimonials">
            <h2 className='txt_center'><span>TESTIMO</span><span className='txt_stroke' >NIALS</span> </h2>
            <p  className='txt_center'>What our past and current sudents and trainees say about us.</p>
            <div className="testimonials_wrapper ">
            {
             
                    <motion.div

                    initial={{translateY:50,opacity:0}}
          whileInView={{translateY:0,opacity:1}}
          transition={{duration:.5}}
                     className="quote_wrapper flex" >
                        <div className="quote_container">
                        <motion.blockquote
                        key={id}
                        initial={{opacity:0,x:-100}}
                        animate={{opacity:1,x:0}}
                        transition={{...transition,duration:2}}
                        >
                        {testimonials[id]?.feedback}
                        </motion.blockquote>
                        <motion.cite
                               key={id + 1}
                               initial={{opacity:0,x:20}}
                               animate={{opacity:1,x:0}}
                               transition={{...transition,duration:.8}}>
                                ~ {testimonials[id]?.client_name_location}
                               
                               </motion.cite>
                        </div>
                        <div className="client_image_wrapper">
                        <motion.div
                           key={id}
                           initial={{opacity:0,x:100}}
                           animate={{opacity:1,x:0}}
                           transition={{...transition,duration:2}}
                        className="client_image_container">
                            <motion.img 
                            src={testimonials[id]?.src} loading='lazy' alt="" />
                        </motion.div>
                        </div>
                       
                    </motion.div>
     
            }
             <div className="controls">
                            <div className='control' id="control_1"   onClick={(e)=>{id> 0?setId((id)=> id -1):setId(testimonials.length-1)}}></div> 
                            <div className='control' id="control_2"  onClick={(e)=>{id < testimonials.length-1?setId((id)=> id +1):setId(0)}} ></div> 
                        </div>
                
            </div>
        </section>
    </div>
  )
}

export default Testimonials