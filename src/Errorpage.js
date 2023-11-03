import React from 'react'
import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';
import { Button } from './styles/Button';


const Errorpage = () => {
  return (
    <Wrapper>
      <div className='container'>
        <div>
          <h2>404</h2>
          <h3>UH OH! YOU'RE LOST</h3>
          <p>
            The page you are looking for does not exist.But you can click the button below to go back to the Homepage.
          </p>
          <NavLink to="/">
            <Button>GO BACK TO HOME</Button>
          </NavLink>

        </div>
      </div>

    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container{
    padding: 8rem 0;
    text-align:center;

    h2{
      font-size: 8rem;
    }
    h3{
      font-size: 3.3rem;
      margin-bottom: 1rem;
    }
    p{
      margin: 2rem 0;
    }
  }

`;

export default Errorpage;