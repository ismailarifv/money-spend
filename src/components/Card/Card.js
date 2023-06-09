import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addToBasket,deleteToBasket } from "../../redux/productSlice";

function Card() {
  const products = useSelector((state) => state.products.items);
  const totalMoney= useSelector((state) => state.products.total)
  const dispatch = useDispatch();
  return (
    <div className='card'>
      {
        products.map((product) =>(
          <div key={product.id} className='cardElement'>
            <img src={product.image}alt="" />
            <p className='productName'><b>{product.title}</b></p>
            <p className='productPrice'><b>${product.price}</b></p>
            <div>
                <button className='productSell' onClick={() => dispatch(deleteToBasket(product))} disabled={!(product.count > 0)}><b>Sell</b></button>
                <input className='productCount' type="text" min="0" max="50" value={product.count || 0}/>
                <button className='productBuy' onClick={() => dispatch(addToBasket(product))} disabled={!(product.price <= totalMoney)}><b>Buy</b></button>
            </div>
        </div>
        ))
      }
        
        
    </div>
  )
}

export default Card