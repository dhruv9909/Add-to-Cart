import React, { useEffect, useState } from 'react';
import './Styel.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addToCart } from '../redux/feature/CartSlice.js';
import { useDispatch } from 'react-redux';

const Home = () => {
  const [cartData, setCartData] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();

      if (data.length > 0) {
        setCartData(data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add to cart
  const send = (e) => {
    dispatch(addToCart(e));
  };

  return (
    <>
      <section className='item_section mt-4 container'>
        <h2 className='px-4' style={{ fontWeight: 400 }}>Open In Now Mohali Phase 5</h2>

        <div className='row mt-2 d-flex justify-content-between align-items-between'>
          {cartData.map((element, index) => {
            const { id, title, price, description, image } = element;
            return (
              <Card key={id} style={{ width: "22rem", border: "none" }} className='hover mb-4'>
                <Card.Img variant='top' className='cd' src={image} alt={title} />
                <div className='card_body'>
                  <div className='upper_data d-flex justify-content-center align-items-center'>
                    <h4 className='mt-2 card-title'>{title}</h4>
                  </div>

                  <div className='lower_data d-flex justify-content-center'>
                    <span>${price}</span>
                  </div>

                  <div className='extra'></div>

                  <div className='last_data d-flex justify-content-center align-items-center'>
                    <Button
                      style={{ width: "150px", background: "#ff3054db", border: 'none' }}
                      variant='outline-light'
                      className='mt-2 mb-2'
                      onClick={() => send(element)}
                    >
                      Add To Cart
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
