import React, { useEffect, useState } from 'react'
import './CartStyel.css'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeToCart, removeSingleIteam, emptyCart } from '../redux/feature/CartSlice'


const CartDetails = () => {

    const[totalPrice,setTotalprice] = useState(0)
    const cartData = useSelector((state) => state.allCart)
    console.log(cartData, "................")
    const dispatch = useDispatch()

    const total = () =>{
        let totalPrice = 0;
        cartData.carts.forEach(element => {
            totalPrice = element.qnty * element.price + totalPrice
        });
        setTotalprice(totalPrice)
    };

    const [totalQnty, setQnty] = useState(0)

    const total_qnty = ()=>{
        let totalQnty = 0
        cartData.carts.forEach(ele=>{
            totalQnty = ele.qnty + totalQnty
        });
        setQnty(totalQnty)
    }


    useEffect(()=>{
        total()
        total_qnty()
    },[total,total_qnty])



    // add to cart

    const handelIncriment = (e) => {
        dispatch(addToCart(e))

    }

    // remove particular item
    const removeItem = (e) => {
        dispatch(removeToCart(e))
    }

    // decriment qnty

    const handelDecrement = (e) => {
        dispatch(removeSingleIteam(e))
    }

    // emptycart
    const cartEmpty = () => {
        dispatch(emptyCart())
    }
    return (
        <>
            <div className='row justify-content-center m-0'>
                <div className='col-md-8 mt-5 cardsdetails'>
                    <div className='card'>
                        <div className='card-header bg-dark p-3'>
                            <div className='card-header-flex'>
                                <h5 className='text-white m-0'> Cart Calculation {(cartData.carts.length)}</h5>
                                {
                                    cartData.carts.length > 0 ? <button className='btn btn-danger mt-0 btn-sm' onClick={() => cartEmpty()}>
                                        <i className='fa fa-trash-alt mr-2'></i>
                                        <span>EmptyCart</span></button>
                                        :
                                        " "
                                }

                            </div>

                        </div>
                        <div className='card-body p-0'>
                            {
                                cartData.carts.length === 0 ? <table className='table cart-table mb-0'>
                                    <tbody>
                                        <tr>
                                            <td colSpan={6}>
                                                <div className='cart-empty'>
                                                    <i className='fa fa-shopping-cart'></i>
                                                    <p>Your cart is Empty</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>

                                </table> :
                                    <table className='table cart-table mb-0 table-responsive-sm'>
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th className='text-right'> <span id="amount" className='amount'>Total amount</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartData.carts.map((data, index) => {
                                                    const {image, title}=data;
                                                    return (
                                                        <>
                                                            <tr>
                                                                <td>
                                                                    <button className='prdct-delete' onClick={() => removeItem(data.id)}> <i className='fa fa-trash-alt mr-2'></i></button>
                                                                </td>
                                                                <td><div className='product-img'><img src={image} alt=""></img></div></td>
                                                                <td><div className='product-name'><p>{title}</p></div></td>
                                                                <td>{data.price}</td>
                                                                <td>
                                                                    <div className='prdct-qty-container'>
                                                                        <button className='prdct-qty-btn' type='button' onClick={data.qnty <= 1 ? () => removeItem(data.id) : () => handelDecrement(data)}>
                                                                            <i className='fa fa-minus'></i>
                                                                        </button>
                                                                        <input type='text' className='qty-input-box' value={data.qnty} disabled />
                                                                        <button className='prdct-qty-btn' type='button' onClick={() => handelIncriment(data)}>
                                                                            <i className='fa fa-plus'></i>
                                                                        </button>

                                                                    </div>
                                                                </td>
                                                                <td className='text-right'> {data.price * data.qnty} </td>
                                                            </tr>
                                                        </>
                                                    )
                                                })
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th colSpan={3}> &nbsp;</th>
                                                <th>Item in cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalQnty}</span></th>
                                                <th className='text-right'>Total Price <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalPrice}</span></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                            }
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default CartDetails