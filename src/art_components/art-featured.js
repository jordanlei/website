import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Fade from 'react-reveal';
import "../css/art_welcome.css"
import CarouselComponent from './carousel';

class ArtFeatured extends Component {
  render() {
    const carouselItems = [
        {
            src: require("../images/art/sentinel.jpg"),
            header: 'Sentinel',
            caption: <p>Oil on Canvas Board, 2014<br/>Best of Show, Oregon Federal Junior Duck Stamp Competition</p>
        },
        {
            src: require("../images/art/freefall-bkg.jpg"),
            header: 'Freefall',
            caption: <p>Digital, 2017<br/>
            Falling | 
            Isn’t nearly as bad as | 
            The aftertaste</p>
        },
        {
          src: require("../images/art/blue.jpg"),
          header: 'Blue',
          caption: <p>
              Digital, 2018<br/>
              For some it is a brief downpour | 
              For others it is a monsoon | 
              Who are we to deny the sky | 
              Of her right | 
              To nourish the earth</p>
        }, 
        {
            src: require("../images/art/icarus.jpg"),
            header: 'Icarus',
            caption: <p>
                Digital, 2018<br/>
                Spare me your platitudes | 
                Of trees falling in forests | 
                And tell me this | 
                What was louder | 
                The sound of Icarus | 
                As he fell from heaven | 
                Or the slience | 
                Immediately thereafter?
            </p>
          }
    ];

    return (
    <div>
    <div style={{height: "50vh"}}></div>
    <section id = "art-featured">
    <div className = "dark-container" style={{height:"100vh"}}>            
        <div className="center-row" style={{paddingBottom:"3%"}}>
        <div className= "art-header">
        <Fade bottom duration={5000}>
        <h3>
          FEATURED 
        </h3>
        </Fade>
        </div>
        </div>
    <CarouselComponent items={carouselItems}/>

    </div>
    </section>
    </div>

    
    );
  }
}

export default ArtFeatured;
