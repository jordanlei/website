import React, { Component } from 'react';
import Fade from 'react-reveal';
import "../css/art_welcome.css"
import ArtGallery from './art-gallery';

class ArtRealism extends Component {
  render() {
    const imageItems = [
        {
            src: require("../public/static/art/thwaites.jpg"),
            caption: <div><h4>Brenton Thwaites</h4><br/><p>Digital, 2017</p></div>,
            source: "http://cdn04.cdn.justjaredjr.com/wp-content/uploads/headlines/2017/02/thwaites-daman2.jpg",
            width: 6
        },
        {
            src: require("../public/static/art/aladdin.jpg"),
            caption: <div><h4>Aladdin</h4><br/><p>Digital, 2019</p></div>,
            source: "https://pmchollywoodlife.files.wordpress.com/2019/05/aladdine28099-why-mena-massoud-didne28099t-run-around-shirtless-in-live-action-movie-ftr.jpg?w=620",
            width: 6
            
        },
        {
            src: require("../public/static/art/chris-evans.jpg"),
            caption: <div><h4>Chris Evans</h4><br/><p>Digital, 2017</p></div>,
            source: "http://esq.h-cdn.co/assets/17/11/2048x1152/hd-aspect-1489514996-esq040117chrisevans002.jpg",
            width: 4
        },
        {
            src: require("../public/static/art/noahcentineo.jpg"),
            caption: <div><h4>Noah Centineo</h4><br/><p>Digital, 2019</p></div>,
            source: "https://meninvogue.tumblr.com/post/179570287647/noah-centineo-photographed-by-taylor-miller-for",
            width: 4
        },
        {
            src: require("../public/static/art/man-digital2.jpg"),
            caption: <div><h4>Sean O'Pry</h4><br/><p>Digital, 2017</p></div>,
            source: "http://ftape.com/media/wp-content/uploads/2013/04/Sean-Opry_James-Houston_01.jpg",
            width: 4
        },
        {
            src: require("../public/static/art/woman-digital.jpg"),
            caption: <div><h4>Girl</h4><br/><p>Digital, 2019</p></div>,
            source: "https://static.pexels.com/photos/295821/pexels-photo-295821.jpeg" ,
            width: 4
        },
        {
            src: require("../public/static/art/landscape-digital.jpg"),
            caption: <div><h4>Winter Landscape</h4><br/><p>Digital, 2019</p></div>,
            source: "https://static.pexels.com/photos/164022/pexels-photo-164022.jpeg",
            width: 8
        },
    ]

    return (
    <div>
    <section id = "art-realism">
    <div className = "dark-container" style={{minHeight:"100vh"}}>            
        <div className="center-row" style={{paddingBottom:"3%"}}>
            <div className= "art-header">
                <Fade bottom duration={5000}>
                    <h3>
                    REALISM
                    </h3>
                </Fade>
            </div>
        </div>
        <div style={{paddingLeft: "15%", paddingRight: "15%"}}>
            <p>
                Note that these pieces use reference photos that are not 
                my own. No copyright infringement is intended; all pieces
                are used for non-commerical, educational use. The sources
                are linked along with each piece.
            </p>
        </div>
    <ArtGallery images={imageItems}/>

    </div>
    </section>
    </div>
    );
  }
}

export default ArtRealism;
