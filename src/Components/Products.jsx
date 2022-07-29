/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Records from '../Records.json';
import { TiHeart } from "react-icons/ti";
import { RiShoppingCartFill } from "react-icons/ri";

import '../CSS/Products.css'

export default function Products() {
    return (
        <div className="whole_cards">

            {
                Records && Records.map(record => {
                    return (
                        
                        <div className="cards" key={record.id}>
                            <a href="/ItemProduct"><img src={record.image} /></a>
                            <p>T shirt for formal men</p>
                            <p> $ {record.amount} </p>
                            <div className="rate">
                                {record.rating}
                            </div>
                            <div className="Heart"><TiHeart /></div>
                            <div className="cart_shop">
                                <RiShoppingCartFill />
                            </div>
                            
                        </div>
                        

                    )
                })
            }
        </div>
    )
}
