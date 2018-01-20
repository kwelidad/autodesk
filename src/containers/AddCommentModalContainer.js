import React from 'react'
import PropTypes from 'prop-types'
import styles from './AddCommentModalContainer.css'
class AddCommentModalContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {comment:''}
  }

  commentChanged = ({target})=> {
    this.setState({comment: target.value});
  }
  render (){
    return(<div className='mask'>
      <div className='modal'>
          <h3>Add Comment</h3>
          <textarea value={this.state.comment} onChange={this.commentChanged} autoFocus />
          <div className='buttonsRow'>
            <button onClick={()=>{this.props.addComment(this.state.comment)}} disabled={!this.state.comment.length}>Save</button>
            <button onClick={this.props.closeModal} className='cancel'>Cancel</button>
          </div>
      </div>
    </div>)
  }
}
AddCommentModalContainer.PropTypes = {
  closeModal: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired
}

export default AddCommentModalContainer
