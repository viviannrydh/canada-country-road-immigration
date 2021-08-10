import React from 'react';
import Slideshow from '../components/Slideshow';
import {Link} from 'react-router-dom'
import Services from './Services';
import RCIC from '../pictures/RCIC.jpg'


const Home = () => {
    return (
        <>
            <Slideshow />
            <article className="content-section">
                    <div className="company-introduction">
                        <span><strong>公司简介</strong></span>
                        <hr/>
                        <p>加路移民公司注册名称为Canada Country Road Immigration Inc. 
                        总部位于加拿大阿尔伯塔省卡尔加里。</p>
                        <a href="/introduction/#company"><button className='moreBtn'>查看更多</button></a>
                    </div>
                    <div className="ICCRC">
                        <span><strong>ICCRC</strong></span>
                        <hr/>
                        <p>加拿大移民顾问监管委员会（Immigration Consultants of Canada Regulatory Council简称ICCRC）</p>
                        <Link to="./introduction"><button className='moreBtn'>查看更多</button></Link>
                    </div>
                <div className="RCIC">
                    <span><strong>RCIC</strong></span>
                    <hr/>
                    <p>加拿大注册移民顾问（Regulated Canadian Immigration Consultant，简称RCIC)</p>
                    <Link to="./introduction"><button className='moreBtn rcic-moreBtn'>查看更多</button></Link>
                </div>
                <div className="process">
                    <span><strong>服务流程</strong></span>
                    <hr/>
                    <ul className='process-lists'>
                        <p>第一步: 联系我们，说明您的情况, 比如您来加拿大的目的</p>
                        <a href="/introduction/#process"><button className='moreBtn process-btn'>查看更多</button></a>
                    </ul>
                </div>
            </article>
            <Services />
            <hr/>
            <div className="RCIC-section">
                <a href="https://iccrc-crcic.ca/"  target="_blank" rel="noreferrer"><img src={RCIC} alt="RCIC" className="RCIC-homeImg"/></a>
            </div>
          
        </>
    )
}

export default Home
