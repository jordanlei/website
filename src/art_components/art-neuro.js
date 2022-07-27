import React, { Component } from 'react';
import Fade from 'react-reveal';
import "../css/art_welcome.css"
import ArtGallery from './art-gallery';

class ArtNeuro extends Component {
  render() {
    const imageItems = [
        {
            src: require("../public/static/art/cerebellum.JPG"),
            caption: <div><h4>Balance</h4><br/><p>Oil, 2022</p></div>,
            width: 6
        },
        {
            src: require("../public/static/art/ganglion.JPG"),
            caption: <div><h4>Foresight</h4><br/><p>Oil, 2022</p></div>,
            width: 6
            
        },
        {
            src: require("../public/static/art/pyramidalcell.JPG"),
            caption: <div><h4>Contemplation</h4><br/><p>Oil, 2022</p></div>,
            width: 6
        },
        {
            src: require("../public/static/art/spinalcord.JPG"),
            caption: <div><h4>Healing</h4><br/><p>Oil, 2022</p></div>,
            width: 6
        },
        
        {
            src: require("../public/static/art/hippocampus.JPG"),
            caption: <div><h4>Memory</h4><br/><p>Oil, 2022</p></div>,
            width: 6
        },
    ]

    return (
    <div>
    <section id = "art-neuro">
    <div className = "dark-container" style={{minHeight:"100vh"}}>            
        <div className="center-row" style={{paddingBottom:"3%"}}>
            <div className= "art-header">
                <Fade bottom duration={5000}>
                    <h2>
                    NEURO x ART
                    </h2>
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

export default ArtNeuro;
