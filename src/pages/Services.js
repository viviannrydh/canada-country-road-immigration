import React from 'react';
import {Link} from 'react-router-dom';
import studying from '../pictures/study.jpg';
import mapleleaf from '../pictures/maple-leaf-card.jpg';
import travelling from '../pictures/travelling front.jpg';
import permanent from '../pictures/permanent.jpg';
import studyAbroad from '../pictures/Study-in-Canada.jpeg';
const Services = () => {
    return (
        <div>
             <section className="cards-section">
                <div className="card">
                    <img src={studying} className="card-img" alt="..." />
                    <div className="card-body">
                        <span className="card-title"><strong>临时居留</strong></span>
                        <p className="card-text">在这里您可以查询到学习许可，工作许可等相关信息</p>
                        <Link to="/services/temporaryresidence"><button className="moreBtn detail-btn">查看更多</button></Link>
                    </div>
                </div>
                <div className="card">
                    <img src={permanent} className="card-img" alt="..." />
                    <div className="card-body">
                        <span className="card-title"><strong>永久居留</strong></span>
                        <p className="card-text">在这里您可以查询到关于永久居留的相关信息</p>
                        <br/>
                        <Link to="/services/permanentresidence"><button className="moreBtn detail-btn permanent-btn" >查看更多</button></Link>
                    </div>
                </div>
                <div className="card">
                    <img src={mapleleaf} className="card-img" alt="..." />
                    <div className="card-body">
                        <span className="card-title"><strong>入籍，枫叶卡和续签</strong></span>
                        <p className="card-text">在这里您可以查询到入籍，枫叶卡和续签等相关信息</p>
                        <Link to="/services/citizenship"><button  className="moreBtn detail-btn">查看更多</button></Link>
                    </div>
                </div>
                <div className="card">
                    <img src={studyAbroad} className="card-img" alt="..." />
                    <div className="card-body">
                        <span className="card-title"><strong>留学</strong></span>
                        <p className="card-text">在这里您可以查询到申请加拿大小学、初中、高中、高等教育院校及语言学校的相关信息</p>
                        <Link to="/services/studyabroad"><button  className="moreBtn detail-btn">查看更多</button></Link>
                    </div>
                </div>
                <div className="card travel-card">
                    <img src={travelling}  className="card-img travel-card-img" alt="..." />
                    <div className="card-body">
                        <span className="card-title"><strong>旅游</strong></span>
                        <p className="card-text">加路旅行-班夫全地形深度游服务项目</p>
                        <br/>
                        <Link to="/services/travel"><button  className="moreBtn detail-btn traval-btn">查看更多</button></Link>
                    </div>
                </div>
                <div className="card extra-service-card">
                    <img src={travelling}  className="card-img" alt="..." />
                    <div className="card-body">
                        <span className="card-title"><strong>其他服务</strong></span>
                        <p className="card-text">。。。。。。。。</p>
                        <br/>
                        <Link to="/services/travel"><button  className="moreBtn detail-btn traval-btn">联系我们</button></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
