import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import { StaticImage } from 'gatsby-plugin-image'
import {Link, withPrefix} from "gatsby"
import {Parallax, ParallaxProvider, ParallaxBanner, ParallaxBannerLayer} from "react-scroll-parallax";


class Art extends Component {
  render(){
  var center = 0
  var height = window.innerHeight;
  var width = window.innerWidth;
  console.log()
  return (
    <section id = "art">    
    <div className = "dark" style={{overflow: "hidden", height: "100vh", backgroundColor: "black"}}>  
        <ParallaxBanner style={{ aspectRatio: width + '/' + height, position: "relative"}}>
          <ParallaxBannerLayer image={"../art/art-header-1.png"} translateY={[center + "px", center + "px"]}/>
          <ParallaxBannerLayer image={"../art/art-header-2.png"} translateY={[center + 50 + "px", center - 50 + "px"]}/>
          <ParallaxBannerLayer image={"../art/art-header-3.png"} translateY={[center + 100  + "px", center - 100  + "px"]}/>
          <ParallaxBannerLayer image={"../art/art-header-4.png"} translateY={[center + 150  + "px", center - 150  + "px"]}/>
        <ParallaxBannerLayer>
        <div style={{height: "30vh", 
        position: "relative",
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))"
        }}/>

        <div
        className = "art-title"
        style={{ 
        marginTop: "40vh",
        paddingTop: "10vh",
        height: "30vh",
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 1))"}}>
        <Fade><h1>ART</h1></Fade>
        <h4>
          <span className="stdbutton">
            <Link to= {"/art/"}>
            VIEW PORTFOLIO
            <StaticImage src="../images/next.png" style={{marginLeft: "12px", marginTop: "-1px", height: "30px", width: "30px"}} alt = ""/>
            </Link>
          </span>
        </h4>
      </div>
    
        </ParallaxBannerLayer>
      </ParallaxBanner>

      

    </div>

      
    </section>
  )
  }
}

export default Art