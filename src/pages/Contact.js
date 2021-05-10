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
                    <span>加拿大电话： +1 587-716-6969</span>
                    <br/>
                    <span>中国电话：   +86 13401080149 (仅接收短信)</span>
                    <br/>
                    <span>邮箱: <a href="canadacountryroadimmigration@gmail.com">canadacountryroadimmigration@gmail.com</a></span>
                    <br/>
                    <span>微信:  </span>
                    <br/>
                    <img src={QR} alt="QR" className="QR"/>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
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
               </form>
            </section>
        </div>
        
    )
}

export default Contact;
