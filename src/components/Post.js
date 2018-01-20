import React from 'react'
import PropTypes from 'prop-types'
import CommentsList from './CommentsList';
import dateFormat from 'dateformat';
import styles from "./AutodditLink.css";

class Post extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isCommentExpanded: false
    }
  }

  upvoteClicked = (value) => {
    this.props.onUpvote(this.props.post.id, value);
  }

  toggleComments = ()=>{
    this.setState({
      isCommentExpanded: !this.state.isCommentExpanded
    })
  }

  onCommentClicked = ()=> {
    this.setState({isCommentExpanded: true});
    this.props.onCommentClick(this.props.post.id)
  }

  getPostTitle = () => {
    const {title, link} = this.props.post;
    if(link && (link.indexOf('http://') === 0||link.indexOf('https://') === 0)){
      return <a href={link} target='_blank'>{title|| link}</a>
    } else if(title.indexOf('http://') === 0||title.indexOf('https://') === 0){
      return <a href={title} target='_blank'>{title}</a>
    }
    return title;
  }

  render(){
    const {isRootNode=false} = this.props;
    const {img, upvotes = 0, comments = [], time, myVote =0, publisher} = this.props.post;
    return (<li className={'post-item '+(isRootNode?'autoddit':'margined')}>
      {isRootNode?<h3>{this.getPostTitle()}</h3>:<h4>{this.getPostTitle()}</h4>}
      <div className='mainItem'>
        <div className='upvotes'>
          <i className={"fa fa-arrow-up "+(myVote > 0? 'selected': '')} aria-hidden="true" onClick={()=>this.upvoteClicked( 1)}></i>
          <span>{upvotes+myVote}</span>
          <i className={"fa fa-arrow-down "+(myVote < 0? 'selected': '')} aria-hidden="true" onClick={()=>this.upvoteClicked( -1)}></i>
        </div>
        {img? <img src={img} alt='could not load'/>: null}
        <div>Submitted on {dateFormat(time, "mmm dd, yyyy HH:MM")} by <strong>{publisher}</strong>
        </div>
      </div>
      <div className='upvotes'>
            </div>
      <div className='commentsRow'>
        <div className='comments padded-right' onClick={this.toggleComments}>
          {comments.length} comment{comments.length === 1? '':'s'}
        </div>
        <a onClick={this.onCommentClicked}>Add Comment</a>
      </div>
      {this.state.isCommentExpanded? <CommentsList comments={comments} onUpvote={this.props.onUpvote} onCommentClick={this.props.onCommentClick}/>: null}
    </li>);
  }
}

Post.propTypes = {
  post:  PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    img: PropTypes.string,
    upvotes: PropTypes.number,
    time: PropTypes.number,
    comments: PropTypes.array
  }).isRequired,
  onUpvote: PropTypes.func.isRequired,
  onCommentClick: PropTypes.func.isRequired
}


export default Post;
