import React,{Component} from 'react'
import logo from './logo.svg'
import {Link} from 'react-router-dom'
import './Home.css'
class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <div className="hero">
                    <img src={logo} alt="logo" className="app-logo" />
                    <h1 className="title">
                        允指
                    </h1>
                    <p className="slogan">
                        享受舌尖艳遇
                    </p>
                </div>
                <div className="actions">
                    <Link to="/signup">注册</Link>
                    <Link to="/login">登录</Link>
                </div>
            </div>
        )
    }
}
export default Home