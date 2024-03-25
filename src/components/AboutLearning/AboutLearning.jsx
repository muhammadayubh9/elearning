import React, { useState } from 'react'
import { about_learing } from '../../lib/MemberShipDatas'

function AboutLearning() {
    const [cnt, setCnt] = useState(0)
    return (
        <div className="abouts_hover">{
            about_learing.map((item, index) => (
                index == cnt ? 
                <div className="about">
                    <div className="first">
                        <span></span>
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <i className="bi bi-chevron-up"></i>
                    </div>
                    <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod temporLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempos Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor</h5>
                </div>: 
                <div className="about" onClick={()=>setCnt(index)}>
                    <div className="first">
                        <span></span>
                        <h4>Lorem ipsum dolor sit amet</h4>
                        <i className="bi bi-chevron-down"></i>
                    </div>
                </div>

            ))
        }
        </div>
    )
}

export default AboutLearning