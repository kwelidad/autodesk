
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addPost } from '../actions'
import {initialPostValues} from '../constants/common'
import {Redirect } from 'react-router-dom'

class AddItemContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {title:'', img: '', link:''};
  }
  onCancel = ()=> {
  this.setState({fireRedirect: true})

  }
  handleSubmit = (event)=> {
    const post = Object.assign({}, {...this.state}, {...initialPostValues}, {time: new Date(), publisher: this.props.username});
    this.props.addPost(post);
    event.preventDefault();
    this.setState({fireRedirect: true})
  }

  onTitleChange = ({target})=> {
    this.setState({title:target.value});
  }

  onImgChange = ({target})=> {
    this.setState({img:target.value});
  }

  onLinkChange = ({target})=> {
    this.setState({link:target.value});
  }

  render(){
    const { fireRedirect } = this.state
    return(
      <div className='formWrapper'>
        <div className='formContainer'>
          <h4>Add a new Autoddit item</h4>
          <form onSubmit={this.handleSubmit}>
            <div className='field'>
              <label htmlFor='link'>Link:</label>
              <input type='text' value={this.state.link} id='link' name='link' onChange={this.onLinkChange} />
            </div>
            <div className='field'>
              <label htmlFor='title'>Title:</label>
              <input type='text' value={this.state.title} id='title' name='title' onChange={this.onTitleChange} />
            </div>
            <div className='field'>
              <label htmlFor='img'>Image Url:</label>
              <input type='text' value={this.state.img} id='img' name='img'  onChange={this.onImgChange} />
            </div>
            <div className='buttonsRow'>
              <input type="submit" value="Save" />
              <button onClick={this.onCancel} className='cancel'>Cancel</button>
            </div>
          </form>
      {fireRedirect && (
         <Redirect to="/" />
       )}
       </div>
    </div>)
  }
}


AddItemContainer.propTypes = {
  username: PropTypes.string.isRequired,
  addPost: PropTypes.func.isRequired
}

export default connect(
  null,
  { addPost }
)(AddItemContainer)
