import React from 'react';
import Gao from '../pictures/shumei.jpeg';
import Yang from '../pictures/yang.jpeg'

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
                        <p><strong>加拿大注册移民顾问</strong></p>
                        <p><a href="https://iccrc-crcic.ca/"  target="_blank" rel="noreferrer">Verify Status with ICCRC</a></p>
                    </div>
                </div>
                <article className="self-introduction">
                   
                    <p>编号R706646,成功完成了加拿大卑诗大学（UBC）
                    移民证书课程-移民法、
                    移民政策和移民流程，并持有贵州民族大学文学学士学位（英语）、
                    瑞典达拉那大学文学硕士学位（比较文学）
                    及瑞典梅拉达伦大学社会科学硕士学位（国际市场营销）。
                    2016年以国际留学生的身份来到加拿大，从学习到工作，
                    从工作到获得永久居民身份，自己查询和研究了很多移民信息，
                    经历了整个移民过程，也经历了很多不确定因素，
                    更能了解客户的需求和体会客户的感受，知道客户需要什么，
                    能为客户提供有效的信息和高质量的服务。
                    中英文流利，透彻分析加拿大移民政策和流程，
                    为客户提供全面详细的方案。拥有写作和研究背景，
                    可以专业高效地完成申请所需要的文书写作和文件资料准备。
                    同时，在卡尔加里从事特殊教育行业，
                    业余时间喜欢运动、烹饪、旅游和户外活动。</p>
                </article>

            </div>
            <br/>
            <br/>
            <hr/>
            <div className="personal-introduction">
            <div className="picture-card">
                    <img src={Yang} alt="Yang's selfie" className="yang-selfie"/>
                    <div className="picture-card-text">
                        <h2>杨世辉 </h2>
                        <p><strong>陪玩儿向导介绍</strong></p>
                    </div>
                </div>
            <article className="self-introduction">
                <p>北京人，研究生学历，曾任职于中美合资发动机厂人力资源主管，
                从事人力资源工作10余年。2016年裸辞，17年赴加拿大留学，工作，全家移民。
                热爱旅行，户外运动，摄影。致力于与同胞分享班夫真正的美，
                在有限的旅行时间里留下最美好的回忆。</p>
            </article>
            
            </div>
        </div>
    )
}

export default Aboutus
