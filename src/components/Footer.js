import React from 'react';
import { styled } from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { FiFacebook } from 'react-icons/fi';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaGithubAlt } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';



const Footer = () => {
    return (
        <Wrapper>

            <section className='contact-short'>
                <div className='grid grid-two-column'>
                    <div>
                        <h3>Ready to get Started?</h3>
                        <h3>Talk to us Today</h3>
                    </div>
                    <div>
                        <Button>
                            {/* iss niche {navlink} se hum direct navlink pr jayenge button ko click krne se */}
                            <NavLink to="/Contact">Get Started</NavLink>
                        </Button>
                    </div>
                </div>
            </section>

            {/* main footer  */}

            <footer>
                <div className='container grid grid-four-column'>
                    <div className='footer-about'>
                        <h3>SmartBuys</h3>
                        <p>it's an online shopping place,that ease your life..</p>
                    </div>

                    <div className='footer-subscribe'>
                        <h3>Subscribe to get important updates</h3>
                        <form action='#'>
                            <input type='email' placeholder='your e-mail' />
                            <input type='submit' value="subscribe" />
                        </form>
                    </div>
                    <div className='footer-social'>

                        <h3>Follow Us</h3>
                        <div className='footer-social--icons'>
                            <div>
                                <FiFacebook className='icons' />
                            </div>
                            <div>
                                <AiOutlineInstagram className='icons' />
                            </div>
                            <div>
                                <FaGithubAlt className='icons' />
                            </div>
                            <div>
                                <a href='https://www.youtube.com/channel/UCUlByEkhPXqF_dd9Bqm3Qvg' target='_blank'>
                                    <FaYoutube className='icons' />
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className='footer-contact'>
                        <h3>Call Us</h3>
                        <a href='tel:12345678910'>+9112345678910</a>

                    </div>

                </div>

                <div className='footer-bottom--section'>

                    <hr />
                    <div className='container grid grid-two-column'>
                        <p>
                            @{new Date().getFullYear()} SmartBuys.All Rights Reserved..
                        </p>

                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>
                    </div>

                </div>
            </footer>




        </Wrapper>
    )
}
const Wrapper = styled.section`

    .contact-short{
        max-width: 90vw;
        margin:auto;
        padding: 5rem 10rem;
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        transform: translateY(50%);

        .grid div: last-child{
            justify-self:end;
            align-self: center;
        }
    }

    footer{
        padding: 14rem 0 9rem 0;
        background-color: ${({ theme }) => theme.colors.footer_bg};
        h3{
            color: ${({ theme }) => theme.colors.hr};
            margin-bottom: 2.2rem;
        }
        p{
            color:${({ theme }) => theme.colors.white};
        }

        .footer-social--icons{
            display: flex;
            gap: 1rem;
            

            div{
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid ${({ theme }) => theme.colors.white};

                .icons{
                    color: ${({ theme }) => theme.colors.white};
                    font-size: 1rem;
                    position: relative;
                    cursor: pointer;
                }
            }
        }

        
    }

    .footer-bottom--section{
        padding-top: 9rem;

        hr{
            margin-bottom: 2rem;
            color: ${({ theme }) => theme.colors.hr};
            height: 0.2px;
        }
    }

    @media (max-width:${({ theme }) => theme.media.mobile}){
        .contact-short{
            max-width: 80vw;
            margin: 4.8rem auto;
            transform: translateY(0%);
            text-align:center;

            .grid div: last-child{
                justify-self: center;
            }
        }
        footer{
            padding: 9rem 0 9rem 0;
        }
        .footer-bottom--section{
            padding-top: 4.8rem;
        }
    }
`;

export default Footer;