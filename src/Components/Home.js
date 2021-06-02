import React from 'react'
import './Home.css'
import Products from './Products'


function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img className='home__image' src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg' alt=''></img>
                <div className='home__row'>
                    <Products
                        id='1'
                        title='Me before you'
                        price={29.99}
                        image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/%27Me_Before_You%27.jpg/220px-%27Me_Before_You%27.jpg"
                        rating={5} />
                    <Products
                        id='2'
                        title='Mixer'
                        price={250.99}
                        image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1573145907-41p3r7dj21L.jpg?crop=1xw:1.00xh;center,top&resize=480:*"
                        rating={4} />
                </div>
                <div className='home__row'>
                    <Products
                        id='3'
                        title='Samsung Tv'
                        price={954.99}
                        image="https://images.samsung.com/is/image/samsung/fr-hdtv-ru7300-ue49ru7375uxxc-frontblack-151279115?$720_576_PNG$"
                        rating={7}
                    />
                    <Products
                        id='4'
                        title='Smart Speaker'
                        price={120.45}
                        image="https://i.gadgets360cdn.com/products/smart-home/large/1551964770_832_google_home-smart-speaker.jpg"
                        rating={5}
                    />
                    <Products
                        id='5'
                        title='New Apple ipod pro'
                        price={745.26}
                        image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553704156"
                        rating={8}
                    />
                </div>
                <div className='home__row'>

                </div>
            </div>
        </div>
    )
}

export default Home
