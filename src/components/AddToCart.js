import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import CartAmountToggle from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
const AddToCart = ({ product }) => {

    const { id, colors, stock } = product;

    const [color, setColor] = useState(colors[0]);

    const [amount, setAmount] = useState(1);

    const setIncrease = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock);
    }

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    }


    return (
        <Wrapper>
            <div className='colors'>
                <p>
                    Colors:
                    {
                        colors.map((curColor, index) => {
                            return (
                                <button
                                    key={index}
                                    style={{ backgroundColor: curColor }} className={color === curColor ? 'btnStyle active' : "btnStyle"}
                                    onClick={() => setColor(curColor)}>
                                    {/* niche humne condition lagayi hai k agar (color == curColor) k barabar hai to (react icon Facheck) lgega ni to null rahega iski vjh se jo hexa digits thi vo hatt jati hai... */}
                                    {color === curColor ? <FaCheck className='checkStyle' /> : null}

                                </button>
                            )
                        })
                    }
                </p>
            </div>

            {/* add to cart and quantity bar making  */}
            <CartAmountToggle
                amount={amount}
                setDecrease={setDecrease} setIncrease={setIncrease}
            />
            <NavLink to="/Cart">
            <Button className='btn'>Add To Cart</Button>
            </NavLink>
            
        </Wrapper>
    )
};

const Wrapper = styled.section`
    .colors p{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .btnStyle{
        width: 2rem;
        height: 2rem;
        background-color: #000;
        border-radius: 50%;
        margin-left: 1rem;
        border: none;
        outline: none;
        opacity: 0.5;
        cursor: pointer;

        &:hover{
            opacity: 1;
        }
    }

    .active{
        opacity: 1;
    }

    .checkStyle{
        font-size: 1rem;
        color: #fff;
    }

    .amount-toggle{
        margin-top: 3rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 1.4rem;

        button{
            border: none;
            background-color: #fff;
            cursor: pointer;
        }

        .amount-style{
            font-size: 1.8rem;
            color: ${({ theme }) => theme.colors.btn};
        }
    }
    .btn{
        
        width: 100%;
    }

`;

export default AddToCart;