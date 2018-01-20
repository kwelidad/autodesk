import React from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

class CommentsList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isCommentsExpanded: props.isCommentExpanded
    }
  }

  render(){
    const {onUpvote, onCommentClick} = this.props;
    return <ul>
      {this.props.comments.map((post)=>{ return <Post key={post.id} post={post} onUpvote={onUpvote} onCommentClick={onCommentClick} />})}
    </ul>
  }

}

CommentsList.propTypes = {
  comments: PropTypes.array.isRequired,
  onUpvote: PropTypes.func.isRequired,
  onCommentClick: PropTypes.func.isRequired
}
export default CommentsList;
