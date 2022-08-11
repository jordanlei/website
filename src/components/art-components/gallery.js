import React, { Component } from 'react';
import {Button, Row, Col} from 'reactstrap';
import Fade from 'react-reveal';
import ArtGallery from './art-gallery';

class Gallery extends Component {
    constructor (props) {
      super(props);
      const itemdata = [
        {
            src: "../art/cerebellum.JPG",
            title: "Balance",
            subtitle: "Oil",
            year: 2022,
            tags: ["neuroxart"],
            caption: <div><h4>Balance</h4><br/><p>Oil, 2022</p></div>,
            width: 6
        },
        {
            src: "../art/ganglion.JPG",
            title: "Foresight",
            subtitle: "Oil",
            year: 2022,
            tags: ["neuroxart"],
            caption: <div><h4>Foresight</h4><br/><p>Oil, 2022</p></div>,
            width: 6
            
        },
        {
            src: "../art/pyramidalcell.JPG",
            title: "Contemplation",
            subtitle: "Oil",
            year: 2022,
            tags: ["neuroxart"],
            caption: <div><h4>Contemplation</h4><br/><p>Oil, 2022</p></div>,
            width: 6
        },
        {
            src: "../art/spinalcord.JPG",
            title: "Healing",
            subtitle: "Oil",
            year: 2022,
            tags: ["neuroxart"],
            caption: <div><h4>Healing</h4><br/><p>Oil, 2022</p></div>,
            width: 6
        },
        
        {
            src: "../art/hippocampus.JPG",
            title: "Memory",
            subtitle: "Oil",
            year: 2022,
            tags: ["neuroxart"],
            caption: <div><h4>Memory</h4><br/><p>Oil, 2022</p></div>,
            width: 6
        },

        {
            src: "../art/icarus.jpg",
            title: "Icarus",
            subtitle: "Digital",
            year: 2019,
            tags: ["digital"],
            caption: <div><h4>Icarus</h4><br/><p>Digital, 2019</p></div>,
            width: 6
        },
        {
            src: "../art/blue.jpg",
            title: "Blue",
            subtitle: "Digital",
            year: 2019,
            tags: ["digital"],
            caption: <div><h4>Blue</h4><br/><p>Digital, 2019</p></div>,
            width: 6
            
        },
        {
            src: "../art/byte-me.jpg",
            title: "Byte Me",
            subtitle: "Digital",
            year: 2018,
            tags: ["digital"],
            caption: <div><h4>Byte Me</h4><br/><p>Digital, 2018</p></div>,
            width: 6
        },
        {
            src: "../art/weneedtotalk.jpg",
            title: "We Need to Talk",
            subtitle: "Digital",
            year: 2019,
            tags: ["digital"],
            caption: <div><h4>We Need to Talk</h4><br/><p>Digital, 2019</p></div>,
            width: 6
        },
        
        {
            src: "../art/astronaut.jpg",
            title: "I Need Some Space",
            subtitle: "Digital",
            year: 2019,
            tags: ["digital"],
            caption: <div><h4>I Just Need Some Space</h4><br/><p>Digital, 2019</p></div>,
            width: 6
        },
        {
            src: "../art/hotpot.jpg",
            title: "Hot Pot, Warm Company",
            subtitle: "Digital",
            year: 2018,
            tags: ["digital"],
            caption: <div><h4>Hot Pot, Warm Company</h4><br/><p>Digital, 2018</p></div>,
            width: 6
        },
        {
            src: "../art/smallband.jpg",
            title: "Small Band of Misfits",
            subtitle: "Digital",
            year: 2018,
            tags: ["digital"],
            caption: <div><h4>A Small Band of Misfits</h4><br/><p>Digital, 2018</p></div>,
            width: 6
        },

        {
            src: "../art/thwaites.jpg",
            title: "Brenton Thwaites", 
            subtitle: "Digital",
            year: 2017,
            tags: ["realism"],
            source: "http://cdn04.cdn.justjaredjr.com/wp-content/uploads/headlines/2017/02/thwaites-daman2.jpg",
            width: 6
        },
        {
            src: "../art/aladdin.jpg",
            title: "Aladdin", 
            subtitle: "Digital",
            year: 2019,
            tags: ["realism"],
            source: "https://pmchollywoodlife.files.wordpress.com/2019/05/aladdine28099-why-mena-massoud-didne28099t-run-around-shirtless-in-live-action-movie-ftr.jpg?w=620",
            width: 6
            
        },
        {
            src: "../art/chris-evans.jpg",
            title: "Chris Evans", 
            subtitle: "Digital",
            year: 2017,
            tags: ["realism"],
            source: "http://esq.h-cdn.co/assets/17/11/2048x1152/hd-aspect-1489514996-esq040117chrisevans002.jpg",
            width: 4
        },
        {
            src: "../art/noahcentineo.jpg",
            title: "Noah Centineo", 
            subtitle: "Digital",
            year: 2019,
            tags: ["realism"],
            source: "https://meninvogue.tumblr.com/post/179570287647/noah-centineo-photographed-by-taylor-miller-for",
            width: 4
        },
        {
            src: "../art/man-digital2.jpg",
            title: "Sean O'Pry", 
            subtitle: "Digital",
            year: 2017,
            tags: ["realism"],
            source: "http://ftape.com/media/wp-content/uploads/2013/04/Sean-Opry_James-Houston_01.jpg",
            width: 4
        },
        {
            src: "../art/woman-digital.jpg",
            title: "Woman", 
            subtitle: "Digital",
            year: 2019,
            tags: ["realism"],
            source: "https://static.pexels.com/photos/295821/pexels-photo-295821.jpeg",
            width: 4
        },
        {
            src: "../art/landscape-digital.jpg",
            title: "Winter Landscape", 
            subtitle: "Digital",
            year: 2019,
            tags: ["realism"],
            source: "https://static.pexels.com/photos/164022/pexels-photo-164022.jpeg",
            width: 8
        },

        {
            src: "../art/new-york.jpg",
            title: "New York",
            subtitle: "Oil on Canvas",
            year: 2013,
            tags: ["traditional"],
            width: 8
        },

        {
            src: "../art/chicago.jpg",
            title: "Chicago",
            subtitle: "Acrylic on Canvas",
            year: 2013,
            tags: ["traditional"],
            width: 4
        },

        {
            src: "../art/portland2.jpg",
            title: "Portland",
            subtitle: "Mixed Media",
            year: 2017,
            tags: ["traditional"],
            width: 6
        },
        {
            src: "../art/sentinel.jpg",
            title: "Portland",
            subtitle: "Oil on Canvas Board",
            year: 2014,
            tags: ["traditional"],
            width: 6
        }
    ]
      this.state = {
        items: itemdata, 
        itemdata: itemdata,
      };
  
      this.showDigital = this.showDigital.bind(this);
      this.showRealism = this.showRealism.bind(this);
      this.showNeuroArt = this.showNeuroArt.bind(this);
      this.showTraditional = this.showTraditional.bind(this);
      this.reset = this.reset.bind(this);
    }
  
    showDigital(){
      this.setState({items: this.state.itemdata.filter(p => p.tags.includes("digital"))})
    }

    showNeuroArt(){
        this.setState({items: this.state.itemdata.filter(p => p.tags.includes("neuroxart"))})
    }

    showRealism(){
        this.setState({items: this.state.itemdata.filter(p => p.tags.includes("realism"))})
    }

    showTraditional(){
      this.setState({items: this.state.itemdata.filter(p => p.tags.includes("traditional"))})
    }
  
    reset(){
      this.setState({items: this.state.itemdata})
    }
  
    render() {
        console.log(this.state.items)

        var images =
        this.state.items.map((i) => {
            var source = ""; 
            if (i.source)
            {
                source= <Col><a className="info" href= {i.source} target="_blank">source</a></Col>
            }
            return (
            <Col md={i.width}>
                <div style= {{
                    backgroundImage: "url("+i.src+")", 
                    backgroundSize: "cover", 
                    backgroundPosition: "center",
                    height: "50vh",
                    marginTop: "15px",
                    marginBottom: "15px",
                    }}>
                    <div className="hovereffect">
                        <div className="overlay">  
                            <h4>{i.title}</h4>
                            <p>
                            {i.subtitle}, {i.year}
                            </p>
                            <div className="infodiv">
                            <Row>
                            <Col><a className="info" href={i.src} target="_blank">view</a></Col>
                            {source}
                            </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
            )
        });


        return (
        <div>
        <section id = "art-portfolio">
        <div className = "dark section" style={{minHeight:"100vh"}}>            
            <div className="center-row" style={{paddingBottom:"3%"}}>
                <div>
                    <Fade bottom duration={5000}>
                        <h1 className = "art-header">
                        PORTFOLIO v2
                        </h1>
                    </Fade>

                    <Button size="lg" color="link" active onClick={() => this.reset()}>All</Button>
                    <Button size="lg" color="link" active onClick={() => this.showDigital()}>Digital</Button>
                    <Button size="lg" color="link" active onClick={() => this.showNeuroArt()}>Neuro&times;Art</Button>
                    <Button size="lg" color="link" active onClick={() => this.showRealism()}>Realism</Button>
                    <Button size="lg" color="link" active onClick={() => this.showTraditional()}>Traditional</Button>

                </div>
            </div>
            <Row>
            {images}
            </Row>
    
        </div>
        </section>
        </div>
        );
    }
  }

export default Gallery;
