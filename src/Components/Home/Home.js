import React from 'react'
import './Home.css'
import banner from '../../assets/AmazonBanner.png'
import Product from '../../Product'

const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src={banner} alt='bannerimage'/>
            <div className='home__row'>
           <Product title='lean start up' 
           id='369258'
           rating={3}
           price= {300} 
           image="https://www.qualitylogoproducts.com/images/_graphics/QuickShipBox.png?size=thumb_retina" alt="productImage"/>
            <Product title='Laptop and stuff' 
           rating={5}
           price= {40000} 
           image="https://www.edesk.com/wp-content/uploads/2021/03/find-trending-products-sell-ecommerce.png" alt="productImage"/>
          
        </div>
        <div className='home__row'>
        <Product title='Trolly bags' 
           id='741258'
           rating={5}
           price= {400} 
           image="https://www.dreamhost.com/blog/wp-content/uploads/2019/06/afa314e6-1ae4-46c5-949e-c0a77f042e4f_DreamHost-howto-prod-descrips-full-750x500.jpeg" alt="productImage"/>
          
          <Product title='Bags of chips'
           id='789456' 
           rating={5}
           price= {100} 
           image="https://m.economictimes.com/thumb/msid-77885315,width-1200,height-900,resizemode-4,imgsize-260096/pesico-products-website.jpg" alt="productImage"/>
          
          <Product title='Cases'
           id='248367' 
           rating={5}
           price= {250} 
           image="https://media.gq.com/photos/615339eaefcfe3c162d4ee44/master/pass/skincare.jpg" alt="productImage"/>
          
        </div>
        <div className='home__row'>
        <Product title='Cosmatics'
           id='458632' 
           rating={5}
           price= {1999} 
           image="https://corporate.oriflame.com/about-oriflame/product-philosophy/-/media/2E279B139BD74617958EDE0360D641FC.ashx" alt="productImage"/>
          
        </div>
        </div>
       
       
    </div>
  )
}

export default Home