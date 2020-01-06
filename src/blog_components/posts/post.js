import React, { Component } from 'react';
import Post_how_to_engage_with_art from './post_how_to_engage_with_art';
import Post_brotherhood from './post_brotherhood';
import postdata from './post-data';

class Post extends Component {
  render() {
    const {params} = this.props.match
    var id = params.id;
    var post = <div>Post Not Found</div>
    console.log(postdata)
    console.log(id)
    console.log(Object.keys(postdata))
    if (id in postdata){
        post = postdata[id].class;
    }
    return (
      <div style={{position: "relative", overflowX: "hidden"}}>
        {post}
      </div>
    );
  }
}

export default Post;
