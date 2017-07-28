import React,{Component} from 'react'
import './signup.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import store from '../../../redux/store'
import Settings from "../../../Settings"
import {connect} from 'react-redux'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
class Signup extends React.Component{
    signup = (e) => {
        e.preventDefault()
        let username = this.usernameInput.value
        let password = this.passwordInput.value
        let data = {
            username, password
        }
        axios.post(`${Settings.host}/user/signup`, data).then( res => {
            console.log(res.data)
            this.props.history.push('/dashboard')
            this.props.dispatch({ type: 'SIGN_IN', username: res.data.username })
            localStorage.setItem('userId', res.data.userId)
        }).catch(err => {
            console.log(err.response.data.msg)
            this.props.dispatch({ type: 'SHOW_ALERT', msg: err.response.data.msg })
        })
    }
    render(){
        return(
            <div className="signup">
                <TitleHeader title="signup" />
                <div className="signup-content">
                    <div className="signup-hero">
                        <h1 className="title">
                            注册
                        </h1>
                        <p className="slogan">
                            呵呵哈哈哈
                        </p>
                    </div>

                        <form onSubmit={this.signup} className="signup-form signup-form-wrap">
                            <div className="signup-text-input">
                                <div className="signup-text-inputs-inner">
                                    <input ref={value=>this.usernameInput=value} type="text" placeholder="用户名"/>
                                    <input ref={value=>this.emailInput=value} type="text" placeholder="email"/>
                                    <input ref={value=>this.passwordInput=value} type="password" placeholder="密码"/>
                                    <input ref={value=>this.passwordInput=value} type="password" placeholder="重输密码"/>
                                </div>
                            </div>
                            <div className="signup-actions">
                                <button type="submit" value="注册" >注册</button>
                            </div>
                        </form>
                    </div>
                    <div className="signup-other-option">
                        <Link to="/login">已有账号？直接登录</Link>
                    </div>
                </div>
        )
    }
}
// const mapStateToProps=(state)=>({
//     currentUser:state.account.currentUser
// })
export default connect(null)(Signup)