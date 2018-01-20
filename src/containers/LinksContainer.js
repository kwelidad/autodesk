
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddCommentModalContainer from './AddCommentModalContainer'
import LinksList from '../components/LinksList'
import { Link } from 'react-router-dom'
import { addPost, upvotePost, addComment } from '../actions'
import {initialPostValues} from '../constants/common'

class LinksContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {isCommentOpen:false}
  }

  closeModal = ()=>{
    this.setState({isCommentOpen: false});
  }

  openModal = (postId)=>{
    this.setState({isCommentOpen: true, selectedPost: postId});
  }

  addComment = (title)=> {
    const post = Object.assign({}, {title, img: '', parentId: this.state.selectedPost, time: new Date(), publisher: this.props.username}, {...initialPostValues});
    this.props.addComment(post)
    this.closeModal();
  }

  render(){
    const {links, upvotePost } = this.props;
    return (
      <div>
        <div className='addNewWrapper'>
          <Link to={'/add'}><button ><i className="fa fa-plus padded-right" aria-hidden="true"></i>Add New Item</button></Link>
        </div>
        <LinksList
          links={links.links} onUpvote={(postId, value)=>{upvotePost(postId, value)}} onCommentClick={this.openModal} className='mainList'/>
          {this.state.isCommentOpen? <AddCommentModalContainer closeModal={this.closeModal} addComment={this.addComment} /> : null}
        </div>);
  }
}

LinksContainer.propTypes = {
  username: PropTypes.string
}
const mapStateToProps = state => ({
  links: state.links
})

export default connect(
  mapStateToProps,
  { addPost, upvotePost, addComment }
)(LinksContainer)
