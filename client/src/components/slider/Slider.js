import React from 'react'
import "./slider.scss"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

function Slider() {
    return (
        <div className="sliderCon">
        
                <div className="slideImgCon">
                    <img className='slideImg' src="https://i.ibb.co/DG69bQ4/2.png" alt="" />
                </div>
                <div className="slideInfo">
                    <span className="title">SUMMER SALE</span>
                    <span className="sliderDesc">DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</span>
                    <div className="sliderButtonCon">

                        <span>SHOP NOW</span>
                        <ArrowRightIcon />

                    </div>

                </div>
        

           

        </div>
    )
}

export default Slider