import { Component } from 'react';
import './latest-news.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import abpnews from "../../assets/images/ABP-NEWS.jpg";
import ndtv from "../../assets/images/ndtv.jpg";
import economics from "../../assets/images/economics.jpg";
import thestraits from "../../assets/images/thestraits.jpg";
export class LatestNews extends Component {
    newsList = [
        {
            image: abpnews,
            newsChannel: "ABP NEWS",
            date: "January 24, 2024",
            headLine: "Empowering Universities: Finolity's Digital Campus Program And Strategic Partnerships",
            url: "https://news.abplive.com/brand-wire/empowering-universities-finolity-s-digital-campus-program-and-strategic-partnerships-1659027"
        },
        {
            image: ndtv,
            newsChannel: "NDTVProfit",
            date: "October 25, 2024",
            headLine: "Finolity Becomes Authorized Corel Partner, Offering Cutting-Edge Software Solutions to Businesses",
            url: "#"
        },
        {
            image: economics,
            newsChannel: "Economictimes",
            date: "December 1, 2024",
            headLine: "Finolity Achieves Certified Adobe Reseller Status, Expanding Access to Premium Creative Tools",
            url: "#"
        },
        {
            image: thestraits,
            newsChannel: "The Straits Times",
            date: "November 4, 2024",
            headLine: "Finolity Launches New Brand 'Namestair' to Provide Affordable Cloud Services and Domain Solutions for SMBs",
            url: "#"
        }
    ];
    render() {
        return (
            <>
                <div className="latest-news">
                    <section className='container mb-2'>
                        <h3>Latest News</h3>
                        <div>
                            <Swiper
                                spaceBetween={10}
                                slidesPerView={3}
                                slidesPerGroup={3}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => console.log(swiper)}
                                pagination={{
                                clickable: true,
                                }}
                                modules={[Pagination]}
                                a11y={{
                                    prevSlideMessage: 'Previous slide',
                                    nextSlideMessage: 'Next slide',
                                }}
                                className="mySwiper">
                                    {(this.newsList.map((news, index) => {
                                return (<SwiperSlide key={index}>
                                <div className="card">
                                    <img src={news.image} className="card-img-top" alt={news.headLine} />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {news.newsChannel}
                                            <span className='mx-2'>|</span>
                                            {news.date}
                                        </h5>
                                        <p className="card-text">{news.headLine}</p>
                                        <a href={news.url} className="btn btn-link text-decoration-none text-danger read-more p-0">Read more</a>
                                    </div>
                                </div>
                                </SwiperSlide>)
                                }))}
                            </Swiper>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}