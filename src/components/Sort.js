import React from 'react';
import styled from 'styled-components';
import { BsFillGridFill, BsList } from 'react-icons/bs';
import { useFilterContext } from '../context/FilterContext';

// sort selection ki styling reh gayi hai aur code bhi....


const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, Sorting } = useFilterContext();
  return (
    <Wrapper className='sort-section'>

      <div className='sorting-list--grid'>
        <button className={grid_view ? 'active sort-btn' : 'sort-btn'}
          onClick={setGridView}
        >
          <BsFillGridFill className='icon' />
        </button>
        <button className={!grid_view ? 'active sort-btn' : 'sort-btn'}
          onClick={setListView}
        >
          <BsList className='icon' />
        </button>
      </div>
      <div className='product-data'>{`${filter_products.length}`} products available</div>

      {/* 3rd column sorting  */}
      <div className='sort-selection'>
        <form action='#'>
          <label htmlFor='sort'></label>
          <select
            name='sort'
            id='sort'
            className='sort-selection--style'
            onClick={Sorting} >
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  .sorting-list--grid{
    display: flex;
    gap: 1.3rem;

    .sort-btn{
      border: none;
      padding: 0.4rem 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .icon{
      font-size: 1.3rem;
    }
    .active{
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style{
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option{
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;