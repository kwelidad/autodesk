import React from 'react'
import MainContainer from './MainContainer'
import LoginContainer from './LoginContainer'
import { HashRouter } from 'react-router-dom'
import styles from './Main.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {username:''}
  }

  setUserName = (username)=> {
    this.setState({username});
  }

  render(){
    return (<div>
      <HashRouter>
        <div>
          {this.state.username? <MainContainer username={this.state.username} />: <LoginContainer setUserName={this.setUserName}/>}

        </div>
      </HashRouter>
      </div>);
    }
}
export default App
