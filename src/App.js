import './App.css';
import React,{Component} from 'react';
import { render } from 'react-dom';
import NavBar from './Navbar';
import Info from './Info';
import Apple from './Apple';
import Android from './Android';
import Facebook from './Facebook';
import Twitter from './Twitter';
import './Navbar.css';

class App extends Component {
  render(){
    return (
      <div className="Main">
          <div className="panel">
            <NavBar/> 
            <button id="upgrade">Upgrade</button>
          </div>

          <div className="profile">
            <div className="profilepic"></div>
            <div className="name"><input type="text" placeholder="John Doe" value=""></input></div>
            <div className="number"><input type="text" placeholder="+91 1234567890" value=""></input></div>
            <div className="plan">
              <div className="price">Movies Basic Plan for ₹499/mo.</div>
              <div className="valid">Valid till:15 Apr 2021</div>
            </div>

            <button type="submit">Upgrade Plan</button>
            <button id="view" type="submit">View Transactions  
              <svg id="varr" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#9798C2"/>
              </svg>
            </button>
            <button id="login" type="submit">Login to Filmmaker Portal 
              <svg id="larr" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#9798C2"/>
              </svg>
            </button>
            <button id="logout" type="submit">Logout 
              <svg id="oarr" width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.99984 0L0.589844 1.41L5.16984 6L0.589844 10.59L1.99984 12L7.99984 6L1.99984 0Z" fill="#9798C2"/>
              </svg>
              </button>
          </div> 

          <div className="content">
            <Info/>
          </div>
          <div className="contact"><input type="text" value="Connect with us"></input></div>
          <div className="install"><input type="text" value="Download app"></input></div>
          <div className="fb"><button id="fbtn"></button><Facebook/></div>
          <div className="tweet"><button id="tbtn"></button><Twitter/></div>
          <div className="ios" ><input type="text"></input><Apple/></div>
          <div className="android"><input type="text"></input><Android/></div>
          <div className="lic">©2020 Movies, LLC. All Rights Reserved. Movies™ is used under license.</div>
      </div>
    );
  }  
}

export default App;
