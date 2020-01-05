import React, { Component } from 'react';
import BlogWelcome from './blog-welcome';
import BlogMenu from './blog-menu';
import BlogFeatured from './blog-featured';
import BlogPostList from './blog-postlist';
import '../css/blog.css';

class BlogHome extends Component {
  render() {
    const posts = [
      {
        title: "On Brotherhood",
        subtitle: "What Over a Decade of Brotherhood has Taught Me", 
        author: "Jordan Lei",
        date: "12.22.19",
        image: require('../public/static/blog/posts/brotherhood-thumbnail.svg'),
        tags: ["Thoughts"],
        link: "/p/on-brotherhood"
      },
      {
        title: "How to Engage with Art",
        subtitle: "A Guide Made for and by an Amateur", 
        author: "Jordan Lei",
        date: "12.22.19",
        image: require('../public/static/blog/posts/how-to-engage-with-art-thumbnail.svg'),
        tags: ["Thoughts"],
        link: "/p/how-to-engage-with-art"
      },
    ]
    return (
      <div className="landing-container">
        <BlogMenu/>
        <BlogWelcome/>
        <BlogFeatured post= {posts[0]}/>
        <BlogPostList posts= {posts}/>
      </div>
      
    );
  }
}

export default BlogHome;
