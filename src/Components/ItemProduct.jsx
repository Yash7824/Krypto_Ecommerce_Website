import React from 'react'
import Records from '../Records.json';

export default function ItemProduct(props) {
  return (
    <div>
      {
        Records && Records.map((records) => {
            return(
                <div className="ItemProduct">
                    <div className="imageProduct">
                        <img src={records.image} alt="Not available" />
                    </div>
                    <div className="description">
                        <p>{records.title}</p>
                        <p>{records.description}</p>
                        <p>{records.amount}</p>
                    </div>

                    <div className="optionsProduct">
                        <input type="button" value="Buy Now" />
                        <input type="button" value="Add to Basket" />
                    </div>
                </div>

                
            )
        })
      }
    </div>
  )
}
