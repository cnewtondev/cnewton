import React, { Component } from 'react';
import logoRocks from '../imgs/logoRocks.png'
import './style/home.css'
import gsap from 'gsap';
import { Tween } from 'react-gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



class Home extends React.Component {
    
    render() { 
        return (
            <div class="hero">
            <Tween
            from={{
                opacity: 0,
                backgroundPosition: '1300px 0',
                scrollTrigger: {
                trigger: '.hero-title',
                start: 'center 10%',
                end: '+=100 10%',
                scrub: 'true',
                markers: true,
                },
            }}
            to={{
                y: '80vh',
                opacity: 1,
                backgroundPosition: '1300px 0',
                scrollTrigger: {
                trigger: '.hero-title',
                start: 'center 10%',
                end: '+=100 10%',
                scrub: 'true',
                markers: true,
                },
            }}
            >
            <div class="hero-title">Colton Newton</div>
            </Tween>

            <Tween
            to={{
                opacity: 0,
                backgroundPosition: '1300px 0',
                scrollTrigger: {
                trigger: '.hero-title',
                start: 'center 10%',
                end: '+=100 10%',
                scrub: 'true',
                markers: true,
                },
            }}
            >
            <div class="hero-cta">Scroll Down To Discover</div>
            </Tween>
            </div>
        );
    }
}
 
export default Home;