import React, { Component } from 'react';
import Layout from "../components/layout.js";
import "../css/style.css"
import "../css/mobile.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from "../components/art-components/gallery";
import ArtMenu from "../components/art-components/art-menu";
import {Parallax, ParallaxProvider} from "react-scroll-parallax";


class Index extends Component {
    render() {
      return (
        <Layout>
            <ArtMenu/>
            <Gallery/>
        </Layout>
      );
    }
  }

  export default Index;