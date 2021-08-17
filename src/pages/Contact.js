import React from 'react';
import googlemap from '../pictures/googlemap.png';
import QR from '../pictures/QR.jpeg'

const Contact = () => {

    const handleSubmit=(e)=>{
        e.preventDefault();
        alert('恭喜！您的提问已成功提交，我们会在第一时间跟您取得联系。谢谢您');
    }

    return (
        <div>
            <section className="contact-detail">
                {/*<img src={googlemap} alt="google-map" className="google-map"/>*/}
                <div className="contact-detail-text">
                
                    <h2 style={{color:'rgb(204, 4, 4)'}}>Canada Country Road Immigration Inc.</h2>
                    <img src={googlemap} alt="google-map" className="google-map"/>
                    <br/>
                    <span><strong>加拿大电话：</strong> +1 587-716-6969</span>
                    <br/>
                    <span><strong>中国电话:</strong> +86 13401080149 (短信)</span>
                    <br/>
                    <span><strong>邮箱:</strong> <a href="gaoshumei2016@gmail.com">gaoshumei2016@gmail.com</a></span>
                    <br/>
                   
                </div>
                <div className="contact-QR">
                    <img src={QR} alt="QR" className="QR"/>
                    <div className="contact-info-QR">
                        <span><strong>微信:</strong> CNGZGSM   </span>
                        <br/>
                        <span><strong>公众号:</strong> 我在枫叶国 </span>
                        <br/>
                        <span><strong>小红书:</strong> 班夫路书/RED ID: 1042407420 </span>
                        <br/> 
                    </div>
                </div>
                {/*<form className="contact-form" onSubmit={handleSubmit}>
                            <div className="contact-header">
                                <h2>联系我们</h2>
                            </div>
                            <div className="input-item">
                                <p>姓名: </p>
                                <input type="text" name="userName" />
                            </div>
                            <div className="input-item">
                                <p>您所在的城市: </p>
                                <input type="text" name="userCity" />
                            </div>
                            <div className="input-item">
                                <p>您的电话: </p>
                                <input type="text" name="userTel" />
                            </div>
                            <div className="input-item">
                                <p>您的邮箱: </p>
                                <input type="text" name="userEmail" />
                            </div>
                            <div className="input-area">
                                <p>需要帮助的问题: </p>
                                <textarea type="text" name="userMessage" />
                            </div>
                            <button className='submit-button' type="submit">提交</button>
               </form>*/}
            </section>
        </div>
        
    )
}

export default Contact;
