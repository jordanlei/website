import React, { Component } from 'react';
import Fade from 'react-reveal';
import "../css/art_welcome.css"
import ArtGallery from './art-gallery';

class ArtTraditional extends Component {
  render() {
    const imageItems = [
        {
            src: require("../images/art/new-york.jpg"),
            caption: <div><h4>New York</h4><br/><p>Oil on Canvas, 2013</p></div>,
            width: 8
        },
        {
            src: require("../images/art/chicago.jpg"),
            caption: <div><h4>Chicago</h4><br/><p>Acrylic on Canvas, 2013</p></div>,
            width: 4
            
        },
        {
            src: require("../images/art/portland2.jpg"),
            caption: <div><h4>Portland</h4><br/><p>Mixed Media, 2017</p></div>,
            width: 6
        },
        {
            src: require("../images/art/sentinel.jpg"),
            caption: <div><h4>Sentinel</h4><br/><p>Oil on Canvas Board, 2014</p></div>,
            width: 6
        },
        {
            src: require("../images/art/the-distance-between-us.jpg"),
            caption: <div><h4>The Distance Between Us</h4><br/><p>Acrylic on Canvas, 2019</p></div>,
            width: 6
        },
        {
            src: require("../images/art/rose.jpg"),
            caption: <div><h4>Rose</h4><br/><p>Colored Pencil, 2015</p></div>,
            width: 6
        },
    ]

    return (
    <div>
    <section id = "art-traditional">
    <div className = "dark-container" style={{minHeight:"100vh"}}>            
        <div className="center-row" style={{paddingBottom:"3%"}}>
            <div className= "art-header">
                <Fade bottom duration={5000}>
                    <h3>
                    TRADITIONAL
                    </h3>
                </Fade>
            </div>
        </div>
    <ArtGallery images={imageItems}/>

    </div>
    </section>
    </div>
    );
  }
}

export default ArtTraditional;
