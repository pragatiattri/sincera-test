import React, { Component } from 'react';
import './App.css';
import LoginComponent from './LoginComponent';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {login: false};
  }

 
  componentDidMount() {
      if (window && window != undefined){
          if (window.localStorage.getItem("login")) {
              this.setState({login:true})                
          } else {
              this.setState({login:false})                
          }
      }
  }


  render() {
      const login = this.state.login || false;
      console.log("Login val", login);
      return (  
          <div className="flex-cnt">
              {
                  !(login) ?
                  <LoginComponent doLogin={this.doLogin}/>
                  :<h2>Welcome to home</h2>
              }
          </div>
      );
  }

}

export default App;
