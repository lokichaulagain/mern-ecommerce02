import React from 'react'
import './navbar.scss'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function Navbar() {
    return (
        <div className="navBar">
            <div className="navWrapper">

                <div className="navLeft">
                    <span className="eN">EN</span>
                    <ArrowDropDownIcon className='navTopLeftDropdownIcon' />
                    <div className="navSearchCon">
                        <input type="text" placeholder="Search" className="navSearch" />
                        <SearchIcon className='navSearchIcon' />
                    </div>
                </div>

                <div className="navCenter">
                    <span className="logo">RoseCloset</span>
                </div>

                <div className="navRight">
                    <div className="navRightItem">
                        <span className='navRightTxt'>REGISTER</span>
                    </div>
                    <div className="navRightItem">
                        <span className='navRightTxt'>LOGIN</span>
                    </div>
                    <div className="navRightItem">
                        <Badge className='navRightCartIconBadge' badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon className='navRightCartIcon' />
                        </Badge>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar