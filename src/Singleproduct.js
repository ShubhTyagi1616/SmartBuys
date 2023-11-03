import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductContext } from "./context/productcontext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./Helper/FormatPrice";
import { TbTruckDelivery } from 'react-icons/tb';
import { TbReplace } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import Stars from "./components/Stars";
import AddToCart from "./components/AddToCart";


const API = "https://api.pujakaitem.com/api/products";

const Singleproduct = () => {

  const { getSingleProduct, isSingleLoading, SingleProduct } = useProductContext();

  // (useParams) is mainly used for access and extraction of parameters from URL in your components.
  const { id } = useParams();

  // DESTRUCTURE ALL THE QUALITIES AND NAMING OF THE PRODUCT....
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image,
  } = SingleProduct;
  // console.log(id); .... to show tha (id) in the console log on html page...

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  },[]);

  // when details of products fetching through api so we use loading properties...
  if (isSingleLoading) {
    return <div className="page-loading"> Loading... </div>;
  }
  return (
    <Wrapper>
      <PageNavigation title={name} />

      <Container className="container">
        <div className="grid grid-two-column">

          {/* showing product images */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>

          <div className="product-data">
            <h3>{name}</h3>
            <Stars star = {stars} review = {reviews}/>
            
            
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>

            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>

            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className='warranty-icon' />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className='warranty-icon' />
                <p>30 Days Replacement</p>
              </div>
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>24*7 services</p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className='warranty-icon' />
                <p>2 Years warranty</p>
              </div>
            </div>
            <div className="product-data-info">
              <p>
                Available:
                <span> {stock > 0 ? "In stock" : "Not Available"} </span>
              </p>
              <p>
                ID :<span> {id} </span>
              </p>
              <p>
                Brand: <span> {company} </span>
              </p>
            </div>

            <hr/>
            {stock > 0 && <AddToCart product = {SingleProduct}/>}



          </div>

        </div>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  .container{
    padding: 9rem 0;
  }
  
  .product_images{
    display:flex;
    align-items: center;
  }

  .product-data{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

     .product-warranty-data{
      text-align:center;

       .warranty-icon{
        background-color: rgba(220,220,220,0.5);
        border-radius: 50%;
        width: 2.8rem;
        height: 2.8rem;
        padding: 0.6rem;
       }
       p{
        font-size: 1rem;
        padding-top: 0.4rem;
        }
      }
    }
    .product-data-price{
      font-weight: bold;
    }
    .product-data-real-price{
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info{
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span{
        font-weight:bold;
      }
    }
    hr{
      max-width: 100%;
      width:100%;
      border: 0.1rem solid #000;
      color: red;
    }
  }
  
  .page-loading{
    font-size: 3.2rem;
    display:flex;
    justify-content: center;
    align-items:center;
  }
  @media(max-width:${({ theme }) => theme.media.mobile}){
    padding: 0 2.4rem;
  }

`;

export default Singleproduct;