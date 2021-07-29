import React from 'react';
import Gao from '../pictures/shumei.jpg';
import Yang from '../pictures/yang.jpg'

const Aboutus = () => {
    return (
        <div>
            <br/>
            <br/>
            <div className="personal-introduction">
                <div className="picture-card">
                    <img src={Gao} alt="Gao's selfie" className="selfie"/>
                    <div className="picture-card-text">
                        <h2>高蜀梅</h2>
                        <p><strong>注册移民顾问</strong></p>
                        <p><a href="https://iccrc-crcic.ca/"  target="_blank" rel="noreferrer">Verify Status with ICCRC</a></p>
                    </div>
                </div>
               
                <article className="self-introduction">
                   
                    <p><strong>移民顾问编号 R706646</strong></p>
                    <ul className="degree-lists">
                        <li>加拿大卑诗大学（UBC）移民证书课程-移民法,移民政策和移民流程</li>
                        <li>瑞典梅拉达伦大学社会科学硕士学位（国际市场营销)</li>
                        <li>瑞典达拉那大学文学硕士学位（比较文学)</li>
                        <li>贵州民族大学文学学士学位（英语）</li>     
                    </ul>
                    <p>我在2016年以国际留学生的身份来到加拿大，从学习工作到获得永久居民身份，透彻得分析和研究了加拿大移民政策和流程，并于2021年成功获得了加拿大注册移民顾问的身份。我中英文流利，拥有专业的写作和研究背景，因此在您申请签证或者留学的过程中，我可以为您更加高效地完成所需要的文书写作和文件资料准备工作。</p>
                    <p>目前本人在做移民顾问的同时， 还在卡尔加里从事特殊教育行业。我在业余时间喜欢运动、烹饪、旅游和户外活动。</p>
                </article>

            </div>
            <br/>
            <br/>
            <hr/>
            <div className="personal-introduction">
                <div className="picture-card">
                        <img src={Yang} alt="Yang's selfie" className="yang-selfie"/>
                        <div className="picture-card-text yang-text">
                            <h2>杨世辉 </h2>
                            <p><strong>旅游顾问</strong></p>
                        </div>
                    </div>
                <article className="self-introduction yang">
                    <p>北京人，10年老HR，曾任外资制造企业人力资源主管。现定居卡尔加里。热爱旅行，摄影和所有户外运动。
                    游历20➕国家，10年➕户外经验。熟悉落基山四季阴晴雨雪，不论是经典路线，网红景点，还是鲜为人知的宝藏景观，为您量身定制并灵活选择最佳旅行线路。
                    滑雪，登山，徒步，露营，越野骑行，皮划艇任您挑选，尽享落基山脉户外运动天堂的独特魅力。
                    省时省心，省钱避坑，当地人般独一无二地完美落基山之旅只需一步。
                    欢迎热爱大自然和户外运动的你➕微信联系我。</p>
                </article>
            
            </div>
        </div>
    )
}

export default Aboutus
