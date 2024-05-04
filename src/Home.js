import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux';
function Home(props) {

   return (
      <>
         <h2>Welcome to the Home Page</h2>
         <table>
            <tr>
               <th>Product Name</th>
               <th>Qty</th>
               <th>Price</th>
               <th>Sub Total</th>
            </tr>
            {/* {props.data.map((items) =>
               <tr>
                  <td>{items.name}</td>
                  <td>{items.qty}</td>
                  <td>{items.price}</td>
                  <td>{(items.qty * items.price).toFixed(2)}</td>
               </tr>
            )
            } */}
         </table>
      </>
   )
}
const mapStateToProps = state => ({
   data: state.cartItems
})

export default connect(mapStateToProps)(Home)