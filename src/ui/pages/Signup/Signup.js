import React,{Component} from 'react'
import './signup.css'
import {Link} from 'react-router-dom'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
class Signup extends React.Component{
    render(){
        return(
            <div className="signup">
                <TitleHeader title="signup" />
                <div className="signup-content">
                    <div className="signup-hero">
                        <h1 className="title">
                            登录
                        </h1>
                        <p className="slogan">
                            呵呵哈哈哈
                        </p>
                    </div>

                        <form className="signup-form signup-form-wrap">
                            <div className="signup-text-input">
                                <div className="signup-text-inputs-inner">
                                    <input type="text" placeholder="用户名"/>
                                    <input type="text" placeholder="email"/>
                                    <input type="password" placeholder="密码"/>
                                    <input type="password" placeholder="重输密码"/>
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
export default Signup