import React,{Component} from 'react'
import store from "../../../redux/store"
import axios from 'axios'
class Signup extends React.Component{
    signup=(e)=>{
        e.preventDefault()
        let username=this.usernameInput.value
        let password=this.passwordInput.value
        console.log()
        let data={username,password}
        axios.post('http://192.168.0.122:3008/user/signup', data).then(res => {
            console.log(res.data)
            if(res.data.username){
                console.log(res.data.userId)
                store.dispatch({type:'AUTH_USER',user:res.data.username})
                localStorage.setItem('userId',res.data.userId)
                this.signupForm.reset() //清空表单
                this.props.history.push('/')
            }
        }).catch(err=>{console.log(err.response)})
    }

    render(){
        return(
            <div className="bd">
                <h1>注册</h1>
                <form onSubmit={this.signup}>
                    <div><input ref={value=>this.usernameInput=value} type="text" placeholder="用户名"/>用户名</div>
                    <div><input ref={value=>this.passwordInput=value} type="password" placeholder="密码"/>密码</div>
                    <div> <input type="password" placeholder="再输入一次"/>再输入一次密码</div>
                    <button type="submit">提交</button>
                </form>
            </div>

        )
    }
}
export default Signup