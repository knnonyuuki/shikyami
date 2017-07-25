import React, { Component } from 'react';
import logo from './ui/pages/Home/logo.svg'
import './App.css';
import store from "./redux/store"
import axios from 'axios'
import Login from "./ui/pages/Login/Login"
import Home from './ui/pages/Home/Home'
import Signup from './ui/pages/Signup/Signup'
import Dashboard from './ui/pages/dashboard/Dashboard'
import Sidebar from './ui/shared/Sidebar/Sidebar'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom"
class App extends Component {
    componentDidMount(){

        let userId = localStorage.getItem('userId')
        console.log('=====', localStorage.getItem('userId'))

        console.log(localStorage.getItem('userId'))
        axios.get(`http://192.168.0.122:3008/user/${userId}`)
            .then(res=>{
                console.log('-------',res.data.user.username)
                store.dispatch({type:'AUTH_USER',user: res.data.user.username})}
            )
            .catch(err=>console.log(err.response))
    }
  render() {
    return (
     <div>
         <Router>
             <div>
                 <Route render={({location})=>{return location.pathname !=='/'?(<Sidebar/>):null}}/>

                 <Switch>
                     <Route exact path="/" component={Home}/>
                     <Route path="/signup" component={Signup}/>
                     <Route path="/login" component={Login}/>
                     <Route path="/dashboard" component={Dashboard}/>
                 </Switch>

             </div>
         </Router>
     </div>
    );
  }
}
export default App;
