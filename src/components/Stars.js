import React from 'react'
import {AiOutlineStar} from 'react-icons/ai';
import {FaStar,FaStarHalfAlt} from 'react-icons/fa';
import styled from 'styled-components';

const Stars = ({star,review}) => {
    // console.log(star,review);
  
    //  we take a numbers from (0 to 5 ) for rating the star...so we take (Array.from() method)..to take the 5 numbers to rate the stars...
  const RatingStar = Array.from({length:5},(elem,index)=>{
    // ye niche number islie likha hai qk muje half star bhi show karna hai...
      let number = index + 0.5;
      debugger;
      return (
        <span key={index}>
          {
            star >= index + 1 ? (<FaStar className='icon'/>):
            star >= number ? (<FaStarHalfAlt className='icon'/>):
            <AiOutlineStar className='icon'/>
          }
        </span>
      )
  });
    return <>
      <Wrapper>
        <div className='icon-style'>
          {RatingStar}
          <p> ({review} customer reviews) </p>
        </div>
      </Wrapper>
    
    </>
};

const Wrapper = styled.section`
  .icon-style{
    display: flex;
    gap: 0.3rem;
    align-items: center;
    justify-content: flex-start;

    .icon{
      font-size: 2rem;
      color: orange;
    }

    .empty-icon{
      font-size: 2.6rem;
    }

    p{
      margin: 0;
      padding-left: 1.2rem;
    }
  }

`; 

export default Stars;