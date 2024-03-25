import React from 'react'
import './HomeNews.scss'
import { HomeNewsData } from '../../lib/HomeNewsData'

function HomeNews() {
    return (
        <div className="latest_news_comp">
            <h2>Lastest News and Resources</h2>
            <h4>See the developments that have occurred to TOTC in the world</h4>
            <div className="latest_news">
                <div className="latest_new">
                    <img src="https://s3-alpha-sig.figma.com/img/5abc/f770/24978c219bf2223fc9e32ec5fae8375f?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TkNZ0dyw6VW2uHGWVoOhvJE0tT3AOrDbhVStCL0tNR7vLf5Tvn-qIe4LFKRli2GYlHZ3cNkxKLV7Z7ufyx5VUHmfD0RHAxMhKx2Y4vQmjvO-4rLk7~bU~FdWsddpt6mUGidR0fwsXj5NyXFrnvaPgwNB3BW17tLAlamhFZc6fwEcJkFTJ8CNOIDieKHg-PVMfqLdaxcPrygNvrLihRfAKp6HoYbVg6jlL~k5q9iY8XKsB6Mzd2o~HoOgbe-BVBpFm9I53V36XOyeHav3Cec-vjduT86ZAp0RW0mMqAgJhgMOcrQx1XiebG2177qkOCe~Jx7Vkde5uHVT8v7Aedm8OA__" alt="" />
                    <span>News</span>
                    <h3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
                    <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                    <a href="#">Read more</a>
                </div>
                <div className="relation_news">
                    {
                        HomeNewsData.map((item, index) => (
                            <div className="relation_new">
                                <div className="new_img_hover">
                                    <span>{item.pos}</span>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="relation_new_datas">
                                    <h3>{item.title}</h3>
                                    <p>{item.comment}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeNews