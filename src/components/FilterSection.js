import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';

const FilterSection = () => {
  const {filters: { text, category },
    all_products,
    updateFilterValue,

  } = useFilterContext();

  // to get the unique data of each fields....
  const getUniqueData = (data, property) => {
    let newVal = data.map((curElem) => {
      return curElem[property];
    });
    // we need unique id and products so we use (set data structures) (hashset) to get only unique name...
    return (newVal = ["All", ...new Set(newVal)]);

  }

  // WE GET UNIQUE DATA FROM SEARCH...

  const categoryOnlyData = getUniqueData(all_products, "category");

  // we get unique data from company name.....
  const companyData = getUniqueData(all_products, "company");

  return (<Wrapper>
    <div className='filter-search'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input type='text' name='text' value={text} onChange={updateFilterValue} placeholder='Search' />

      </form>
    </div>
    <div className='filter_category'>
      <h3>Category</h3>
      <div>
        {
          categoryOnlyData.map((curElem, index) => {
            return <button
              key={index}
              type="button"
              name="category"
              value={curElem}
              onClick={updateFilterValue}>
              {curElem}
            </button>
          })
        }
      </div>
    </div>

    <div className='filter_company'>
      <h3>Company</h3>
      <form action='#'>
        <select
          name='company'
          id='company'
          className='filter-company--select'
          onClick={updateFilterValue}>
          {
            companyData.map((curElem, index) => {
              return (
                <option key={index} value={curElem} name='company'>
                  {curElem}
                </option>

              )
            })
          }
        </select>
      </form>
    </div>
  </Wrapper>

  )
};
const Wrapper = styled.section`
  padding: 3.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3{
    padding: 1.5rem 0;
    font-size: bold;
  }
  .filter-section{
    input{
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
  .filter_category{
    div{
      display:flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;

      button{
        border: none;
        background-color: ${({ theme }) => theme.colors.white};
        text-transform: capitalize;
        cursor: pointer;

        &:hover{
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active{
        border-bottom: 1px solid #000;
        color: ${({ theme }) => theme.colors.btn};
      }
    }
  }
  .filter-company--select{
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    colors: ${({ theme }) => theme.colors.text};
    text-transform: capitalize;
  }
  .filter-color-style{
    display:flex;
    justify-content: center;
  }
  .color-all--style{
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnstyle{
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline:none;
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
  .filter_price{
    input{
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }

  .filter-shipping{
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .filter-clear .btn{
    background-color: #ec7063;
    color: #000;
  }
`;

export default FilterSection;