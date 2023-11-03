import React from 'react';
import { styled } from 'styled-components';


const Contact = () => {

  const Wrapper = styled.section`
      padding: 9rem 0 5rem 0;

      text-align:center;

      .container{
        margin-top: 6rem;

        .contact-form{
          max-width: 25rem;
          margin:auto;

          .contact-inputs{
            display:flex;
            flex-direction: column;
            gap: 3rem;

            input[type='submit']{
              cursor:pointer;
              transition: all 0.2s;

              &:hover{
                background-color: ${({ theme }) => theme.colors.white};
                border: 1px solid ${({ theme }) => theme.colors.btn};
                color: ${({ theme }) => theme.colors.btn};
                transform: scale(0.9);
                border-radius: 20px;
              }
            }
          }
        }
      }
`;
  return (
    <Wrapper>
      <h2 className='common-heading'>Feel Free To Contact Us</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.11484160351!2d77.20498719297306!3d28.628901610663156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1692259857111!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">

      </iframe>

      <div className='container'>
        <div className='contact-form'>
          <form action='https://formspree.io/f/mzblellq' method='POST' className='contact-inputs'>

            <input type='text'
              placeholder='Username'
              required
              name='Username'
              autoComplete='off' />

            <input type='email'
              placeholder='Enter your mail id'
              name='mail id'
              required
              autoComplete='off'
            />

            <textarea name='Message'
              cols="30"
              rows="10"
              required
              autoComplete='off'
              placeholder='Enter your message'
            />

            <input type='submit' value="send"></input>

          </form>
        </div>
      </div>

    </Wrapper>
  );


}


export default Contact;