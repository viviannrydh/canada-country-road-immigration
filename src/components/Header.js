import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../pictures/company-logo.jpeg';


const Header = () => {
    return (
        <div className="header-wrapper">
            <img src={logo} alt="logo" className="logo-img" />
            <div className="links-wrapper">
                <Link to="/" className='link'>首页</Link>
                <Link to="/services" className='link'>服务项目</Link>
                <Link to="/aboutus" className='link'>关于我们</Link>
                <Link to="/fees" className='link'>费用</Link>
                <Link to="/contact" className='link'>联系我们</Link>
                <Link to="/usepolicy" className='link'>信息使用条款</Link>
            </div>
        </div>
    )
}

export default Header;
