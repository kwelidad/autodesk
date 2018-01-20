import React from 'react'
import PropTypes from 'prop-types'
import styles from "./AutodditLink.css"
import Post from './Post'
import '../../node_modules/font-awesome/css/font-awesome.min.css';

class AutodditLink extends React.Component{

  render(){
    const {link, onUpvote, onCommentClick} = this.props;
    return (<Post post={link} onUpvote={onUpvote} onCommentClick={onCommentClick} isRootNode />)
  }
}

AutodditLink.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    upvotes: PropTypes.number,
    time: PropTypes.number,
    comments: PropTypes.array
  }).isRequired,
  onUpvote: PropTypes.func.isRequired,
  onCommentClick: PropTypes.func.isRequired
}

export default AutodditLink
