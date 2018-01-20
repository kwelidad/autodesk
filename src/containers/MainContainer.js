
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import AddItemContainer from './AddItemContainer'
import LinksContainer from './LinksContainer'
import { HashRouter, Route } from 'react-router-dom'
import { upvotePost, addComment } from '../actions'
import {initialPostValues} from '../constants/common'

class MainContainer extends React.Component{
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
    const post = Object.assign({}, {title, img: '', parentId: this.state.selectedPost, time: new Date(), publisher: this.username}, {...initialPostValues});
    this.props.addComment(post)
    this.closeModal();
  }

  render(){
    const {links, upvotePost, username } = this.props;
    return (<HashRouter>
      <div>
      <h2>Hello {username}</h2>
      <Route path='/' exact render={(props)=> {
        return <LinksContainer username={username}  upvotePost={upvotePost} links={links} {...props}/>}} />
      <Route path="/add" render={(props)=>{return <AddItemContainer username={username} />}} />
    </div>
      </HashRouter>)
  }
}

MainContainer.propTypes = {
  username: PropTypes.string
}
const mapStateToProps = state => ({
  links: state.links
})

export default connect(
  mapStateToProps,
  { upvotePost, addComment }
)(MainContainer)
