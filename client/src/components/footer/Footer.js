import React from 'react'
import "./footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

function Footer() {
    return (
        <div className='footerCon'>
            <div className="footerWrapper">
                <div className="footerLeftCon">
                    <div className="footerLeftConTitle">Social Media</div>
                    <div className="footerLeftConSubTitle">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ipsa perspiciatis labore necessitatibus dignissimos ullam quaerat sequi laudantium perferendis. Quod, quibusdam harum. Repellat animi soluta fugit beatae voluptatem odio fugiat!

                    </div>

                    <div className="socialMediaIconCon">
                        <div className="socialMediaIcon">
                            <FacebookIcon />
                        </div>

                        <div className="socialMediaIcon">
                            <InstagramIcon />
                        </div>

                        <div className="socialMediaIcon">
                            <PinterestIcon />
                        </div>


                        <div className="socialMediaIcon">
                            <TwitterIcon />
                        </div>
                    </div>
                </div>






                <div className="footerCenterCon">
                    <div className="footerCenterConTitle">Quick Links</div>
                    <div className="quickLinkCon">
                        <ul className="quickLinkLists">
                            <li className="quickLinkListsItem">Home</li>
                            <li className="quickLinkListsItem">Cart</li>
                            <li className="quickLinkListsItem">Orders</li>
                            <li className="quickLinkListsItem">Men fashion</li>
                            <li className="quickLinkListsItem">Women Fashion</li>
                            <li className="quickLinkListsItem">My Account</li>
                            <li className="quickLinkListsItem">Wishlist</li>
                            <li className="quickLinkListsItem">terms and Condition</li>
                            <li className="quickLinkListsItem">Order Tracking</li>
                            <li className="quickLinkListsItem">terms and Condition</li>
                        </ul>



                    </div>
                </div>
















                <div className="footerRightCon">
                    <span className="footerRightConTitle">Our Contact</span>
                    <div className="addressRow">
                        <LocationOnIcon />
                        <span className='contactSpan'>New-Baneshwor 3342 Kathmandu,Nepal</span>

                    </div>
                    <div className="addressRow">
                        <PhoneIcon />
                        <span className='contactSpan'>+977-984-567-890</span>
                    </div>
                    <div className="addressRow">
                        <EmailOutlinedIcon />
                        <span className="contactSpan">demoshopping@gmail.com</span>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Footer