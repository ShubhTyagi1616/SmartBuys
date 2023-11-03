import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";



const Navbar = () => {

    // use (useState) to handle clickable problem and change the (menu-icon) and (close-icon)...

    const [menuIcon, setMenuIcon] = useState();

    const Nav = styled.nav`
        .navbar-lists{
            display: flex;
            gap: 5rem;
            align-items: center;
            padding-right:4px;
        

        .navbar-link{
            &:link,
            &:visited{
                display: inline-block;
                text-decoration: none;
                font-size: 1.2rem;
                font-weight: 500;
                text-transform: uppercase;
                color: ${({ theme }) => theme.colors.black};
                transition: color 1.2s linear;
            }

            &:hover,
            &:active {
                color:${({ theme }) => theme.colors.helper};
            }
        }
    }

    .cart-trolley--link{
        position: relative;

        .cart-trolley{
            position: relative;
            font-size: 2rem;
        }
        .cart-total--item{
            width: 1.8rem;
            height: 1.8rem;
            position: absolute;
            background-color: #000;
            color: #000;
            border-radius: 50%;
            display: grid;
            place-items: center;
            top:-20%;
            left: 70%;
            background-color: ${({ theme }) => theme.colors.helper};

        }
    }

    .mobile-navbar-btn{
        display: none;
        background-color: transparent;
        cursor: pointer;
        border:none;
    }
    .mobile-nav-icon[name="close-outline"]{
        display: none;
    }
    .close-outline{
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}){
        .mobile-navbar-btn{
            display:inline-block;
            z-index: 9999;
            border: ${({ theme }) => theme.colors.black};

            .mobile-nav-icon{
                font-size: 4.2rem;
                color: ${({ theme }) => theme.colors.black};
            }
        }

        .active .mobile-nav-icon{
            display: none;
            font-size: 4.2rem;
            position: absolute;
            top: 30%;
            right: 10%;
            color: ${({ theme }) => theme.colors.black};
            z-index: 9999;
        }

        .active .close-outline{
            display: inline-block;
        }
        
        .navbar-lists{
            width: 100vw;
            height: 100vh;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #fff;

            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;

            visibility: hidden;
            opacity: 0;
            transform: translateX(100%);
            transition: all 3s linear;
        }

        .active .navbar-lists{
            visibility: visible;
            opacity: 1;
            transform: translateX(0);
            z-index: 999;
            transform-origin: right;
            transition: all 3s linear;

            .navbar-link{
                font-size: 4.2rem;
            }
        }

        .cart-trolley--link{
            position: relative;

            .cart-trolley{
                position: relative;
                font-size: 5.2rem;
            }

            .cart-total--item{
                width: 4.2rem;
                height: 4.2rem;
                font-size: 2rem;
            }
        }

        .user-logout,
        .user-login{
            font-size: 2.2rem;
            padding: 0.8rem 1.4rem;
        }
    }
  `;

    return (<Nav>
        <div className={menuIcon ? "navbar active" : "navbar"}>
            <ul className='navbar-lists'>
                <li>
                    <NavLink to="/" className="navbar-link"
                        onClick={()=>setMenuIcon(false)}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/About" className="navbar-link"
                        onClick={()=>setMenuIcon(false)} >About</NavLink>
                </li>
                <li>
                    <NavLink to="/Products" className="navbar-link"
                        onClick={()=>setMenuIcon(false)}>Products</NavLink>
                </li>
                <li>
                    <NavLink to="/Contact" className="navbar-link"
                        onClick={()=>setMenuIcon(false)} >Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/Cart" className="navbar-link cart-trolley--link"
                        onClick={()=>setMenuIcon(false)} >
                        {/* ye fishoppingcart ek (cart-icon) hai jo maine (react-icons) se lia hai */}
                        <FiShoppingCart className='cart-trolley' />
                        <span className='cart-total--item'>10</span>
                    </NavLink>
                </li>
            </ul>

            {/* {two button for open and close of menu for mobile version} */}
            <div className='mobile-navbar-btn'>
                <CgMenu
                    name='menu-outline'
                    className='mobile-nav-icon'
                    // niche agar hum ( ()=> isko ni lagayenge to vo continuous chalta rhega aur state ko hamesha true rakhega aur home page ko show ni krega)
                    onClick={() => setMenuIcon(true)} />

                <CgClose
                    name='close-outline'
                    className='mobile-nav-icon close-outline'
                    // niche isko use kia hai jab (cross) pr click kare to vo close bhi ho jaye....
                    onClick={() => setMenuIcon(false)} />

            </div>

        </div>
    </Nav>
    );
};

export default Navbar;