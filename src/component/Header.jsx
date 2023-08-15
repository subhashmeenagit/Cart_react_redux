import React from 'react'
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineAmazon } from 'react-icons/ai'
import { useSelector } from "react-redux";
// ye stste ko exract krne ke kam aata hai

const Header = () => {
    const { cartItems } = useSelector((state) => state.cart);

    return (
        <nav>
            <h2>
                <AiOutlineAmazon />
                <p>Amazon</p>
            </h2>

            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/cart"}>
                    <FiShoppingBag />
                    <p>0</p>
                    <p>{cartItems.length}</p>
                </Link>
            </div>
        </nav>
    )
}

export default Header