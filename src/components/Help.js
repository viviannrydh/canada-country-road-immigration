import React from 'react'

const Help = () => {
    return (
        <div>
            <button>Help</button>
             <form className="contact-form">
                <input value="您也可以填写信息，联系我们" className="form-title"></input>
                <input type="text" placeholder="姓名:"/>
                <input type="text" placeholder="邮件:"/>
                <textarea name="" id="" cols="30" rows="10" placeholder="留言："></textarea>
                <button className="submit-button">发送</button>
            </form>
        </div>
    )
}

export default Help
