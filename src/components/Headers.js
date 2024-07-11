import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Styel.css'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Headers = () => {
    const cartData = useSelector((state) => state.allCart);
    const totalQuantity = cartData.carts.reduce((acc, item) => acc + item.qnty, 0);

    return (
        <>
            <Navbar style={{ height: "60px", background: "black", color: "white" }}>
                <Container>
                    <NavLink to='/Add-to-Cart' className="text-decoration-none text-light mx-2">
                        <h3 className='text-light'>Ecommerce</h3>
                    </NavLink>
                    <NavLink to='/cart' className="text-decoration-none text-light mx-2">
                        <div id='ex4'>
                            <span className='p1 fa-stack fa-2x has-badge' data-count={totalQuantity}>
                                <i className="fa-solid fa-cart-shopping"></i>
                            </span>
                        </div>
                    </NavLink>
                </Container>
            </Navbar>
        </>
    )
}

export default Headers;
