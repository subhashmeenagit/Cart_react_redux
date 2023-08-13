import React from 'react'
import { AiFillDelete, } from 'react-icons/ai'
//import pic1 from '../assets/pic1.jpg'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {

    const { cartItems, subTotal, tax, shipping, total } = useSelector(
        (state) => state.cart
    );
    const dispatch = useDispatch();


    const increment = (id) => {
        dispatch({
            type: "addToCart",
            payload: { id },
        });
        dispatch({ type: "calculatePrice" });
    };
    const decrement = (id) => {
        dispatch({
            type: "decrement",
            payload: id,
        });

        dispatch({ type: "calculatePrice" });
    };
    const deleteHandler = (id) => {
        dispatch({
            type: "deleteFromCart",
            payload: id,
        });
        dispatch({ type: "calculatePrice" });
    };

    return (
        <div className="cart">

            <main>

                {
                    cartItems.length > 0 ? (
                        cartItems.map((i) => (
                            <CartItem
                                pic={i.pic}
                                name={i.name}
                                price={i.price}
                                qty={i.quantity}
                                id={i.id}
                                key={i.id}
                                decrement={decrement}
                                increment={increment}
                                deleteHandler={deleteHandler}

                            />
                        ))
                    ) : (
                        <>
                            <h1> O...o.. No Item Added Yet !</h1>

                            <h1> Add Items in Your Bag :)</h1></>
                    )}
            </main>

            <aside>
                <h2>Subtotal: ${subTotal}</h2>
                <h2>Shipping: ${shipping}</h2>
                <h2>Tax: ${tax}</h2>
                <h2>Total: ${total}</h2>
            </aside>

        </div>
    )
}


const CartItem = ({
    pic,
    name,
    id,
    price,
    qty,
    decrement,
    increment,
    deleteHandler
}) => (
    <div className="cartitem">
        <img src={pic} alt={name} />
        <article>
            <h3>{name}</h3>
            <p>${price}</p>
        </article>

        <div className="numbtn">
            <button onClick={() => decrement(id)}>-</button>
            <p>{qty}</p>
            <button onClick={() => increment(id)} >+ </button>
        </div>

        <AiFillDelete onClick={() => deleteHandler(id)} className='deletbut' />

    </div>
)

export default Cart