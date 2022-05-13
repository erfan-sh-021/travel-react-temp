import { useState } from 'react'
import Slider from 'react-slick'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Carousel() {
  const [sliderRef, setSliderRef] = useState(null)

  const sliderSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const hotelCards = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      title: 'هتل مرمر کرج',
      description: 'امکانات هتل',
      pricingText: '285,000تومان/ روزانه',
      features: ['وای فای ', 'صبحانه'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'هل امیر کبیر کرج',
      description: 'امکانات هتل',
      pricingText: '285,000تومان/ روزانه',
      features: ['وای فای ', 'صبحانه'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      title: 'هتل کندلوس کرج',
      description: 'امکانات هتل',
      pricingText: '285,000تومان/ روزانه',
      features: ['وای فای ', 'صبحانه','ناهار'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'هتل پردیس کرج',
      description: 'امکانات هتل',
      pricingText: '285,000تومان/ روزانه',
      features: ['وای فای ', 'صبحانه','ناهار'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
      title: 'هتل سامان کرج',
      description: 'امکانات هتل',
      pricingText: '285,000تومان/ روزانه',
      features: ['وای فای ', 'صبحانه'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
      title: 'هتل مرمر کرج',
      description: 'امکانات هتل',
      pricingText: '285,000تومان/ روزانه',
      features: ['وای فای ', 'صبحانه'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      title: 'هتل کندلوس کرج',
      description: 'امکانات هتل',
      pricingText: '285,000تومان/ روزانه',
      features: ['وای فای ', 'صبحانه','ناهار'],
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
      title: 'هتل پردیس کرج',
      description: 'امکانات هتل',
      pricingText: '285,000تومان/ روزانه',
      features: ['وای فای ', 'صبحانه','ناهار'],
    },
  ]

  return (
    <div className='container-fluid'>

      <Slider ref={setSliderRef} {...sliderSettings}>
        {hotelCards.map((card, index) => (
          <div key={index} className='card' >
            <img src={card.imageSrc} alt={card.title} className='card-image' />
            <div className='text-infoo' dir='rtl'>
              <div className='card-header '>
                <h2 >{card.title}</h2>
                <span className='text-success'>{card.pricingText}</span>
              </div>
              <p className=''>{card.description}</p>
              <ul >
                {card.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <button>انتخاب</button>
          </div>
        ))}
      </Slider>
      <div className='controls d-flex justify-content-center my-5'>
        <button onClick={sliderRef?.slickPrev}>
          <FaChevronLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}