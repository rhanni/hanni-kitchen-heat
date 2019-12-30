import React from 'react';

class PostList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: Array(5).fill('hello1'),
    };
  }

  renderPost(i) {
    return <Post value={this.state.posts[i]} />;
  }

  render() {
    return (
      <div>
        <div>this is here</div>
        <div>{this.state.posts[1]}</div>
      </div>
    );
  }
}

function Post(props) {
  return <li>{props.value}</li>;
}

export default PostList;
