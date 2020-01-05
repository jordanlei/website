import React, { Component } from 'react';
import Fade from 'react-reveal';
import "../css/art_welcome.css"
import ArtGallery from './art-gallery';

class ArtTraditional extends Component {
  render() {
    const imageItems = [
        {
            src: require("../images/art/icarus.jpg"),
            caption: <div><h4>Icarus</h4><br/><p>Digital, 2019</p></div>,
            width: 4
        },
        {
            src: require("../images/art/blue.jpg"),
            caption: <div><h4>Blue</h4><br/><p>Digital, 2019</p></div>,
            width: 4
            
        },
        {
            src: require("../images/art/byte-me.jpg"),
            caption: <div><h4>Byte Me</h4><br/><p>Digital, 2018</p></div>,
            width: 4
        },
        {
            src: require("../images/art/weneedtotalk.jpg"),
            caption: <div><h4>We Need to Talk</h4><br/><p>Digital, 2019</p></div>,
            width: 6
        },
        
        {
            src: require("../images/art/astronaut.jpg"),
            caption: <div><h4>I Just Need Some Space</h4><br/><p>Digital, 2019</p></div>,
            width: 6
        },
        {
            src: require("../images/art/hotpot.jpg"),
            caption: <div><h4>Hot Pot, Warm Company</h4><br/><p>Digital, 2018</p></div>,
            width: 6
        },
        {
            src: require("../images/art/smallband.jpg"),
            caption: <div><h4>A Small Band of Misfits</h4><br/><p>Digital, 2018</p></div>,
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
                    DIGITAL
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
