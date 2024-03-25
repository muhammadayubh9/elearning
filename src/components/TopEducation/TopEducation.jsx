import React from 'react'
import './TopEducation.scss'

function TopEducation(data) {
    
    return (

        <div className="buyed_lessons_hover white">
            <div className="jcsb">
                <h1>Top Education offers and deals are listed here</h1>
                <a href="#" className='see_all'>See all</a>
            </div>
            <div className="educates">
                {
                    data.data.lessons.map((item, index) => (
                        <div className="educate" style={{backgroundImage: `url(${item.img})`}}>
                            <div className="precent" style={{backgroundColor: data.data.backgroundColor}}>
                                <h2>{parseInt(item.read_lessons / (item.all_lessons / 100))}%</h2>
                            </div>
                            <h3>Lorem ipsum dolor</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default TopEducation