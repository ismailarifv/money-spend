import React from 'react'
import { useSelector } from "react-redux";
function TotalMoney() {
  const totalMoney= useSelector((state) => state.products.total)
  return (
    <div>
        <div className='headerTotalMoney'>
        <p><b>${totalMoney}</b></p>
      </div>
    </div>
  )
}

export default TotalMoney