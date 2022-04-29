
import './navbar.scss'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';










function Navbar() {



    //for Cart==========================================>
    const cart = useSelector(state => state.cart)
    console.log(cart);

    const quantity = useSelector(state => state.cart.quantity)
    console.log(quantity);












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

                        <div className="badgeCircle">{quantity}</div>
                        <ShoppingCartOutlinedIcon className='navRightIcon' />















                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar