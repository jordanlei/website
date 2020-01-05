import React, { Component } from 'react';
import Post_how_to_engage_with_art from './post_how_to_engage_with_art';
import Post_brotherhood from './post_brotherhood';

const postdata = {
    "on-brotherhood": {
      title: "On Brotherhood",
      subtitle: "What Over a Decade of Brotherhood has Taught Me", 
      author: "Jordan Lei",
      date: "12.22.19",
      image: require('../../public/static/blog/posts/brotherhood-thumbnail.svg'),
      tags: ["Thoughts"],
      link: "/#/p/on-brotherhood", 
      class: <Post_brotherhood/>
    },
    "how-to-engage-with-art": {
      title: "How to Engage with Art",
      subtitle: "A Guide Made for and by an Amateur", 
      author: "Jordan Lei",
      date: "12.22.19",
      image: require('../../public/static/blog/posts/how-to-engage-with-art-thumbnail.svg'),
      tags: ["Thoughts"],
      link: "/#/p/how-to-engage-with-art",
      class: <Post_how_to_engage_with_art/>
    },
}

export default postdata;