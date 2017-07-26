import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import {  Icon, Button } from 'antd';
import {slide as Menu} from 'react-burger-menu'
import '../../../sidebar.css'
class Sidebar extends Component{
    state={
        isOpen:false,
    }
    closeBmMenu=()=>{
        this.setState({
            isOpen:false
        })
    }
    showSettings (event) {
        event.preventDefault()
    }

    render () {
        return (
            <div>
                <Menu className="bm-overlay" isOpen={this.state.isOpen}>
                    <div className="bm-user-info">
                        <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt=""/>
                        <div className="bm-user-auth">
                            <Link to='' className="bm-user-left">inari</Link>
                            <Link to='' className="bm-user-right">退出</Link>
                        </div>
                    </div>
                    <div className="bm-link-list" >
                        <Link onClick={this.closeBmMenu} to="/">Home</Link>
                        <Link onClick={this.closeBmMenu} to="/signup">注册</Link>
                        <Link onClick={this.closeBmMenu} to="/cart">购物车</Link>
                        <Link onClick={this.closeBmMenu} to="/dishes">猜你喜欢</Link>
                    </div>
                    <div className="bm-link-list">
                        <button className="bm-close-button" onClick={this.closeBmMenu}>关闭</button>
                    </div>
                </Menu>
            </div>
        );
    }
}
export default Sidebar