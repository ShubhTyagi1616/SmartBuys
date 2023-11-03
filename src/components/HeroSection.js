import React from 'react';
import { styled } from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';



const HeroSection = ({myData}) => {
    const {name} = myData;
    return (
        <Wrapper>
            <div className='container'>
                <div className='grid grid-two-column'>
                    <div className='hero-section-data'>
                        <p className='intro-data'>Welcome to</p>
                        <h1>{name}</h1>
                        <p>Teams around the world invent on behalf of our customers
                            every day to meet their desire for lower prices, better selection,
                            and convenient services. One way we guarantee a wide selection
                            of products and services for customers is by creating
                            India-specific programs to support the thousands of
                            small and medium businesses in India that sell on SmartBuys.in.</p>
                        <NavLink>
                            <Button>Shop Now</Button>
                        </NavLink>
                    </div>

                    {/* {OUR HOMEPAGE IMAGE} */}
                    <div className='hero-section-image'>
                        <figure>
                            <img src="images/homepageimage.jpg"
                                alt="homepagephoto"
                                className='img-style' />
                        </figure>
                    </div>


                </div>
            </div>
        </Wrapper>
    );
}
const Wrapper = styled.section`
    padding: 8rem 0;

    img{
        min-width: 20rem;
        height: 17rem;
        border-radius: 8px;
    }

    .hero-section-data{
        p{
            margin: 2rem 0;
        }
        h1{
            text-transform: capitalize;
            font-weight: bold;
        }

        .intro-data{
            margin-bottom:0;
        }
    }

    .hero-section-image{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    figure{
        position: relative;

        &::after{
            content:"";
            width: 60%;
            height:80%;
            background-color: rgba(81, 56, 238,0.4);
            position: absolute;
            left:50%;
            top: -2.8rem;
            z-index: -1;
            border-radius: 10px;
        }
    }
    .img-style{
        width:100%;
        height: auto;
    }

    @media (max-width:${({ theme }) => theme.media.mobile}){
        .grid{
            gap:5rem;
        }
        figure::after{
            content:"";
            width: 50%;
            height:100%;
            left:0;
            top:10%;
            background-color: rgba(81,56,238,0.4);
        }
    }
`;

export default HeroSection;