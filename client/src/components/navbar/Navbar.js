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
                    <span className="EN">EN</span>
                    <ArrowDropDownIcon />
                    <div className="navSearchCon">
                        <input type="text" placeholder="Search" className="navSearch" />
                        <SearchIcon />
                    </div>


                </div>

                <div className="navCenter">
                    <span className="logo">LOKI</span>

                </div>

                <div className="navRight">
                    <div className="navRightItem">
                        <span>REGISTER</span>



                    </div>


                    <div className="navRightItem">
                        <span>LOGIN</span>

                    </div>


                    <div className="navRightItem">
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar