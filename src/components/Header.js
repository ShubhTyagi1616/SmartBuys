import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import Navbar from './Navbar';

const Header = () => {
  return  (
    <MainHeader>
        <NavLink to="/">
            <img className='SmartBuys' src='./images/SmartBuys.png' alt='logo'/>
        </NavLink>
        <Navbar/>
    </MainHeader>
  )
  
}
const MainHeader = styled.header`
    padding: 0 1rem;  
    height: 4rem;
    background-color: ${({theme})=>theme.colors.bg};
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .SmartBuys{
        height: 3.2rem;
        border: 1px solid white;
        border-radius: 8px;
               
    }
`;

export default Header;