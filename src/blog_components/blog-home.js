import React, { Component } from 'react';
import BlogWelcome from './blog-welcome';
import BlogMenu from './blog-menu';
import BlogFeatured from './blog-featured';
import BlogPostList from './blog-postlist';
import postdata from './posts/post-data';
import '../css/blog.css';

class BlogHome extends Component {
  render() {
    const posts = Object.values(postdata);
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
