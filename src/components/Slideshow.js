import React from 'react';
import 'react-slideshow-image/dist/styles.css';
import slide_1 from '../images/slide_1.jpg';
import slide_2 from '../images/slide_2.jpg';
import slide_3 from '../images/slide_3.jpg';
import slide_4 from '../images/slide_4.jpg';
import slide_5 from '../images/slide_5.jpg';
import slide_6 from '../images/slide_6.jpg';
import slide_7 from '../images/slide_7.jpg';
import { Wave } from 'react-animated-text';

const Slideshow = () => {
  return (
    <div className="slide-show">
      <img src={slide_1} style={{width:"100%"}} alt="slide_1"/>
      <img src={slide_2} style={{width:"100%"}} alt="slide_2"/>
      <img src={slide_3} style={{width:"100%"}} alt="slide_3"/>
      <img src={slide_4} style={{width:"100%"}} alt="slide_4"/>
      <img src={slide_5} style={{width:"100%"}} alt="slide_5"/>
      <img src={slide_6} style={{width:"100%"}} alt="slide_6"/>
      <img src={slide_7} style={{width:"100%"}} alt="slide_7"/>
      <section>
          <Wave
            text="我们的原则是诚实、合作、透明、没有隐形费用、以客户为中心，
            尽我们最大的努力为客户提供高质量的服务。" 
            effectChange={1.2}  
            effect="verticalFadeIn"
            effectDirection="left" 
            iterations={0.5}
          />
      </section>
</div>
  )
}

export default Slideshow;