import React from 'react';
import ICCRC from '../pictures/Ethnic_Campaign_AD_S-Chinese.jpg';

const Introduction = () => {
    return (
        <div style={{backgroundColor:'white'}}>
            <article className="introduction-wrapper">
                <div className='company-introduction-serviceFlow'>
                    <div className='company-information'>
                        <h3 id="company">公司简介</h3>
                        <p>加路移民公司注册名称为Canada Country Road Immigration Inc. 
                        总部位于加拿大阿尔伯塔省卡尔加里。
                        公司向客户提供加拿大签证及移民服务，
                        为客户提供阿尔伯塔省卡尔加里及周边旅游服务。我们的原则是
                        诚实、合作、透明、没有隐形费用、以客户为中心，尽我们最大的努力为客户提供高质量的服务</p>
                    </div>
                    <div className="service-flow">
                        <h3 id="process">服务流程</h3>
                        <ul>
                                <li>第一步: 联系我们，说明您的情况, 比如为什么想来加拿大</li>
                                <li>第二步：安排免费初次咨询，讨论您的移民目标和回答您关于加拿大移民的问题。
                                免费初次咨询包括30分钟咨询（电话或视频或见面）。</li>
                                <li>
                                    第三步：您决定
                                    <ul>
                                        <li>是否雇佣我们成为您的代理，全程为您服务?</li>
                                        <li>是否需要我们为您审核申请材料？</li>
                                        <li>是否需要我们回答关于您的具体情况的问题？</li>
                                        <li>是否由您自己申请？</li>
                                    </ul>
                                </li>
                                <li>第四步： 如果您决定使用我们的服务，同意进入下一个环节，我们会让您提供一些必要的信息，我们根据您的具体情况制定具体的计划，同时根据您的具体情况进行报价。</li>
                                <li>第四步：我们向您提供一份服务合同，给您足够的时间阅读和理解。</li>
                                <li>第五步：签订服务合同。我们将严格遵守《职业道德规范》，为您准备相关材料，代理您提交申请。</li>
                            </ul>
                    </div>
                 </div>
                <div className="authority-agencies">
                    <div className='RCIC-box'>
                            <img src={ICCRC} alt="ICCRC"/>
                        {/*VIDEO/PICTURE（请参照链接）
                        https://www.youtube.com/watch?v=ADQlKvB39bw&feature=youtu.be */}
                    </div>
                    <div className="ICCRC-box" >
                        <h3 id="RCIC">RCIC</h3>
                            <p>加拿大注册移民顾问（Regulated Canadian Immigration Consultant，简称RCIC)
                            受加拿大移民顾问监管委员ICCRC监管。加拿大法律规定，只有在加拿大律师公会、
                            魁北克省公证人协会或加拿大移民顾问监管委员ICCRC注册，
                            才能具备提供移民代理服务。在加拿大境外居住，提供加拿大移民服务的也要遵守加拿大法律。</p>
                            
                            <p>
                            每位加拿大注册移民顾问都必须完成专业课程并顺利毕业取得毕业证书、通过英语或法语语言考试，
                            必须通过无犯罪证明审核才有资格参加ICCRC考试。
                            通过考试后，购买相应的职业保险才能取得加拿大注册移民顾问从业资格。
                            请谨记，在签订任何合同之前，务必在 ICCRC 网上公开登记册上查验移民顾问的执行状态。 
                            签订合同时一定是与RCIC签订的合同。</p>
                        <h3 id="ICCRC">ICCRC</h3>
                        <p>加拿大移民顾问监管委员会（Immigration Consultants of Canada Regulatory Council简称ICCRC）是一个国家级监管机构，负责监督持牌的移民顾问、公民身份顾问和国际留学生顾问，以促进和保障公众利益。
                        受加拿大移民、难民及公民部 (Immigration, Refugees and Citizenship) 联邦部长委任，
                        ICCRC从2011年开始监管移民顾问，之后更于2015年公民身份顾问和国际留学生顾问纳入监管范围。</p>
                    </div>
                
                </div>
            </article> 
        </div>
    )
}

export default Introduction
