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
                        <h3 className="card-title">临时居留</h3>
                        <p className="card-text">在这里您可以查询到学生许可，工作许可等相关信息</p>
                        <Link to="/services/temporaryresidence"><button className="moreBtn detail-btn">查看更多</button></Link>
                    </div>
                </div>
                <div className="card">
                    <img src={permanent} className="card-img" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">永久居留</h3>
                        <p className="card-text">在这里您可以查询到关于永久居留的相关信息</p>
                        <br/>
                        <Link to="/services/permanentresidence"><button className="moreBtn detail-btn" >查看更多</button></Link>
                    </div>
                </div>
                <div className="card">
                    <img src={mapleleaf} className="card-img" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">入籍，枫叶卡和续签</h3>
                        <p className="card-text">在这里您可以查询到入籍，枫叶卡和续签等相关信息</p>
                        <Link to="/services/citizenship"><button  className="moreBtn detail-btn">查看更多</button></Link>
                    </div>
                </div>
                <div className="card">
                    <img src={studyAbroad} className="card-img" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">留学</h3>
                        <p className="card-text">在这里您可以查询到申请加拿大小学、初中、高中、高等教育院校及语言学校的相关信息</p>
                        <Link to="/services/studyabroad"><button  className="moreBtn detail-btn">查看更多</button></Link>
                    </div>
                </div>
                <div className="card">
                    <img src={travelling}  className="card-img" alt="..." />
                    <div className="card-body">
                        <h3 className="card-title">旅游</h3>
                        <p className="card-text">加路旅行-班夫全地形深度游服务项目</p>
                        <br/>
                        <Link to="/services/travel"><button  className="moreBtn detail-btn">查看更多</button></Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services
