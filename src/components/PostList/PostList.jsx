import React from 'react';
import PostItem from '../PostItem/PostItem';
 import "./PostList.css"

class PostList extends React.Component{
    constructor(props) {
        super(props);
        this.state={}
    }
    

    render() {
        return(
            <div className="post-list"> <div className="space"></div> {
                 this.props.posts.map((post, index) => {
                 return <PostItem
                 title = {post.title}
                 body = {post.body}
                 key = { index }
                    />
                 })
            }
            </div>
        );
    }
}

export default PostList;