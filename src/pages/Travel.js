import React from 'react'
import travelImg from '../pictures/travel.jpg'
const Travel = () => {
    return (
        <div className="travel-wrapper">
            <img src={travelImg} alt="Travel" style={{width:'100%', height:'600px'}}/>
            <div className="travel-content">
                <h3>加路旅行-班夫全地形深度游服务项目:</h3>
                <p>私人定制行程 -- 助您玩地尽兴，帮您省钱，避坑</p>
                <p>全地形深度游向导 -- 滑雪，皮划艇，山地骑行等项目任您选</p>
                <p>装备，玩具免费提供 – 平台舟，皮划艇，山地车，登山装备等</p>
                <p>私人旅拍，摄影，摄像 -- 留下您和家人，朋友的动人瞬间</p>
                <p>私人包车服务，免费接送机</p>
            </div>
        </div>
    )
}

export default Travel
