import React from 'react'

const Footer = () => {
    return (
        <div className="footer-wrapper">
        
            <div className="footer-links-container">
                <h3 className='footer-title'>快速链接</h3>
                <a href="/introduction">公司简介</a>
                <a href="/introduction">服务流程</a>
                <a href="/introduction/#ICCRC">ICCRC</a>
                <a href="/introduction/#RCIC">RCIC</a>
            </div>
          
            <div className="footer-links-container">
                <h3 className='footer-title'>服务项目</h3>
                <a href="/services/temporaryresidence">临时居留</a>
                <a href="/services/permanentresidence">永久居留</a>
                <a href="/services/citizenship">入籍，枫叶卡和续签</a>
                <a href="/services/studyabroad">留学</a>
                <a href="/services/travel">旅游</a>
            </div>
        
            <div className="footer-contact-lists">
                <h3 className='footer-title'>联系我们</h3>
                <li>加拿大电话： +1 587-716-6969</li>
                <li>中国电话：   +86 13401080149 (短信)</li>
                <li>邮箱: <a href="gaoshumei2016@gmail.com">gaoshumei2016@gmail.com</a></li>
            </div>
          
        </div>
    )
}

export default Footer
