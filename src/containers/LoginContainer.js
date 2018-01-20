import React from 'react'
import PropTypes from 'prop-types'
import styles from './LoginContainer.css'

class LoginContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {username:''}
  }
  usernameChanged = ({target})=> {
    this.setState({username:target.value});
  }

  login = ()=> {
    if(this.state.username.trim()){
      this.props.setUserName(this.state.username);
    }
  }

  handleKeyDown = (event) => {
  if(event.keyCode === 13){
    this.login();
  }
}

  render(){
    return (
      <div className='formWrapper'>
        <div className='formContainer'>
          <h2>please enter your username </h2>
          <div className='loginForm'>
            <input type="text" value={this.state.username} onChange={this.usernameChanged} autoFocus onKeyDown={this.handleKeyDown} />
            <button onClick={this.login} disabled={!this.state.username.length}>Login</button>
          </div>
        </div>
      </div>);
  }
}
LoginContainer.PropTypes = {
  setUserName: PropTypes.func.isRequired
}

export default LoginContainer
