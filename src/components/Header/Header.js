import React from 'react'
import TotalMoney from './TotalMoney'

function Header() {
  return (
    <div >
      <div className='header'>
        <div className='headerImg'>
            <img src="./billgates.jpg" alt="" />
        </div>
        <div className='headerText'><p><b>Spend Bill Gates' Money</b></p></div>
      </div>
      <TotalMoney/>
    </div>
  )
}

export default Header