import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';


class CarouselComponent extends Component {
    constructor(props){
        super(props); 
        this.items = this.props.items; 
        console.log(this.items)
    }
    render() {
    var carouselItems = []
    for (var i= 0; i< this.items.length; i++)
    {
        carouselItems.push(
        <Carousel.Item>
        <img
            className="d-block"
            src={this.items[i].src}
            alt={this.items[i].altText}
            style={{height: "70vh", width: "auto", margin:"0 auto", backgroundSize: "contain"}}
        />
        <Carousel.Caption style={{width: "20vw", margin:"0 auto", 
        backgroundColor: "rgba(0, 0, 0, 0.8)"}}>
        <div style={{padding: "5px"}}>
            <h4>{this.items[i].header}</h4>
            <p>{this.items[i].caption}</p>
        </div>
        </Carousel.Caption>
        </Carousel.Item>
        
        )
    }
    console.log(carouselItems)
    
    return (
    <Carousel interval={1500}>
        {carouselItems}
    </Carousel>
    );
  }
}

export default CarouselComponent;
