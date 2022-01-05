import React, { Component } from 'react';
import './style/portfolio.css'
import gsap from "gsap"
import fakeCarsOne from '../imgs/fakeCarsOne.jpeg'
import fakeCarsTwo from '../imgs/fakeCarsTwo.jpeg'
import smallBusinessOne from '../imgs/smallBusinessOne.jpeg'
import smallBusinessTwo from '../imgs/smallBusinessTwo.jpeg'
import selfOne from '../imgs/selfOne.png'
import selfTwo from '../imgs/selfTwo.png'


class Portfolio extends React.Component {

    componentDidMount=()=>{
        gsap.to(".outlineText", {
			scrollTrigger:{
				trigger: ".outline-text", 
				start: "top bottom", 
				end: "bottom top", 
				scrub: 1
			},
			x: '20vmin'
		})

		gsap.to(".image", {
			scrollTrigger:{
				trigger: ".image",
				start: "top bottom", 
				end: "bottom top", 
				scrub: 1,
				markers: true
			},
			x: -250,

		})
        //Second
        gsap.to(".outlineTextTwo", {
			scrollTrigger:{
				trigger: ".outline-text", 
				start: "top bottom", 
				end: "bottom top", 
				scrub: 1
			},
			x: '-20vmin'
		})

		gsap.to(".imageTwo", {
			scrollTrigger:{
				trigger: ".image",
				start: "top bottom", 
				end: "bottom top", 
				scrub: 1,
				markers: true
			},
			x: 250,

		})
    }

    render() { 
        return (
        <section class="port">
            <div class="pDiv">
                <h2 class="outlineText">SELECTIVE FOCUS</h2>
                <img class="image" src={fakeCarsOne}/>
            </div>
            <br/>
            <div class="pDiv">
                <h2 class="outlineTextTwo">SELECTIVE FOCUS</h2>
                <img class="imageTwo" src={fakeCarsTwo}/>
            </div>
            <br/>
            <div class="pDiv">
                <h2 class="outlineText">SELECTIVE FOCUS</h2>
                <img class="image" src={smallBusinessOne}/>
            </div>
            <br/>
            <div class="pDiv">
                <h2 class="outlineTextTwo">SELECTIVE FOCUS</h2>
                <img class="imageTwo" src={smallBusinessTwo}/>
            </div>
            <br/>
            <div class="pDiv">
                <h2 class="outlineText">SELECTIVE FOCUS</h2>
                <img class="image" src={selfOne}/>
            </div>
            <div class="pDiv">
                <h2 class="outlineTextTwo">SELECTIVE FOCUS</h2>
                <img class="imageTwo" src={selfTwo}/>
            </div>
        </section>
        );
    }
}
 
export default Portfolio;