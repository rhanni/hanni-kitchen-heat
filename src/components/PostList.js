import React from 'react';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: Array(5).fill('hello'),
    };
  }
  render() {
    return 'this is here';
  }
}

class Post extends React.Component {}

function addPost(props) {
  return <button></button>;
}

export default PostList;
