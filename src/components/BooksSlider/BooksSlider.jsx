import React, { useRef, useState } from 'react';
import Swiper from 'swiper';
import './BooksSlider.scss'
import { Creators } from '../../lib/Creators';

function BooksSlider() {
    const swiperRef = useRef(null);
    React.useEffect(() => {
        swiperRef.current = new Swiper('.swiper-container', {
            navigation: true
        });
    }, []);

    // Function to handle custom button click
    const [active, setActive] = useState(0)
    var kere = [0, 0, 0, 0]
    const handleSlide = (number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(number);
            if(number >= 0 && number < kere.length)
            setActive(number)
        }
    }

    return (
        <div className="swiper">
            <div className="jcsb">
                <h1>Literature course</h1>
            </div>
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        kere.map((item, index) => (
                            <div className="swiper-slide">
                                <div className="books_hover">

                                    {
                                        Creators.map((item, index) => (
                                            <div className="book">
                                                <img className='book_img' src={item.img} alt="" />
                                                <div className="book_data">
                                                    <h3>{item.name}</h3>
                                                    <h4>$24</h4>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="pg_butons_hover">
                <button className='slider_comp' onClick={()=> handleSlide(active - 1)}><i className='bi bi-chevron-left'></i></button>
                {
                    kere.map((item, index) => index == active ? <button className='active' onClick={() => handleSlide(index)}>{index + 1}</button> : <button onClick={() => handleSlide(index)}>{index + 1}</button>)
                }
                <button className='slider_comp' onClick={()=> handleSlide(active + 1)}><i className='bi bi-chevron-right'></i></button>
            </div>
        </div>
    );
}

export default BooksSlider;