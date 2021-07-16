import React from 'react';

const Citizenship = () => {
    return (
        <div className="content-wrapper-service">
            <section >
                <h2>入籍申请</h2>

                <p>要有资格成为加拿大公民，您必须：</p>
                <ol>
                    <li>成为永久居民</li>
                    <li>最近5年中在加拿大居住了3年</li>
                    <li>已报税，在申请日期之前的5年内，在加拿大至少报税3年（如果适用)</li>
                    <li>通过入籍考试</li>
                    <li>证明你的语言能力</li>
                </ol>
                <p>如果满足以下条件，则还有其他要求或不同要求：</p>
                <ol>
                    <li>为未成年人申请入籍（18岁以下)</li>
                    <li>加拿大人在加拿大境外出生的养子申请入籍</li>
                    <li>现任或前任加拿大武装部队成员在快速通道下的程序申请入籍</li>
                    <li>希望获得加拿大国籍的过往加拿大公民（包括现任和前任加拿大武装部队成员）</li>
                </ol>
            </section>
            <hr/>
            
            <section >
                {/*<img src={card} alt="maple-leaf-card"/>*/}
                <div>
                    <h2>更新枫叶卡</h2>
                    <p>以下情况需要更新枫叶卡</p>
                    <ol>
                            <li>枫叶卡已过期或将在9个月内过期</li>
                            <li>枫叶卡丢失、被盗或损坏</li>
                            <li>您在移民到加拿大的180天内还没有收到枫叶卡</li>
                            <li>合法更改姓名</li>
                            <li>更改国籍</li>
                            <li>更改性别</li>
                            <li>更正出生日期</li>
                    </ol>
                </div>
                <p>要保持永久居民身份，您必须在过去五年中至少在加拿大居住730天。
                这730天不需要连续。您在国外的一些时间可能会计入730天的时间。</p>
            </section>
            <hr/>
            <section>
                <h2>延长许可或签证</h2>
                <p>无论是学习、工作还是旅游，在许可或签证到期之前应该进行续签申请，
                以始终保持您的合法身份。您在加拿大身份过期后的停留是非法的；
                没有所需的工作许可，工作是违法的；没有所需的学习许可，学习是违法的。
                但是如果在身份过期之前进行续签申请，则可以在与当前相同的条件下留在加拿大，
                直接移民局作出决定。</p>
                
                <h3>什么时候延长学习许可</h3>
                <p>您的学习许可到期日期是您的学习许可上标明的日期或完成学习之日后的90天到期（以先到期者为准）。</p> 
                <ol>
                    <li>您应至少在许可到期前30天申请延长许可。确保您的护照不会同时过期。</li>
                    <li>您的学习许可不能超过护照的有效期。</li>
                    <li>如果您在许可到期之前提出申请，您可以在与您目前的学习许可相同的条件下留在加拿大，直到移民局做出决定为止。</li>
                    <li>如果您打算在加拿大境外旅行，并且您的学习许可将在您旅行期间到期，则应该申请延长学习许可。</li>
                </ol> 

                <h3>什么时候延长工作许可</h3>
                <p>您应在工作许可到期前延长许可证以保证您的合法身份，
                可以在与当前相同的条件下留在加拿大工作，直接移民局作出决定。</p>    

                <h3>什么时候延长签证</h3>
                <p>当您第一次作为访客来到加拿大时，您将使用以下文件之一来输入：</p>
                <ol>
                    <li>访客签证（也称临时居民签证)</li>
                    <li>电子旅行授权书</li>
                    <li>有效的护照或旅行证件</li>
                    <li>如果您想延长您在加拿大的访客停留时间，您需要申请一个访客记录，访客记录不是签证。</li>
                </ol>
            </section>
            <hr/>
            <section>
                <h3>访客记录</h3>
                <p>是一个让您访问加拿大，让您停留更长时间的文件，
                    包括一个新的到期日期，
                    那是您必须离开加拿大的新日期，
                    您必须在当前状态过期之前申请访问者记录。</p>
            </section>
            <hr/>
            <section>
                <h3>离开并返回加拿大</h3>
                <p>访客记录是一种继续给您在加拿大的访问状态，让您停留更长的时间。
                这并不能保证您可以离开加拿大，然后再进入加拿大。
                如果您计划在加拿大或美国以外的地方旅行，您需要一份有效的入境证件，
                如访客签证或旅游签证，才能返回加拿大。</p>
            </section>
        </div>
    )
}

export default Citizenship
