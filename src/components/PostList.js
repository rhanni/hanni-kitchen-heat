import React from 'react';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: Array(5).fill('hello'),
    };
  }

  renderPost(i) {
    //console.log(this.posts[i]);
    return <Post value={this.props.posts[i]} />;
    //return this.posts[i];
  }

  render() {
    return (
      <div>
        <div>this is here</div>
        <div>{this.renderPost(1)}</div>
      </div>
    );
  }
}

function Post(props) {
  console.log(props.posts);
  return <li>{props.value}</li>;
}

export default PostList;
