import React from 'react';
import cart from '../common/images/cart1.jpg'

function Header(props) {
    console.log(props.data.obj1)
    const uniqueProduct = [];
    props.data.obj1.map(res => {
        if (uniqueProduct.indexOf(res.id) === -1) {
            uniqueProduct.push(res.id)
        }
    });

    return (

        <div>
            <div className='add-to-cart'>
                <span className='cart-count'>{uniqueProduct.length}</span>
                <img src={cart} alt="Not found" />
            </div>
            <div>
                <table>
                    <tr>
                        <th>Product Name</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Sub Total</th>
                    </tr>
                    {/* {props.data.obj1.map((items) => {
                        return <tr> <td>{items.name}</td> <td>{items.qty}</td> <td>{items.price}</td> <td>{(items.qty * items.price).toFixed(2)}</td> </tr>
                    }
                    )
                    } */}
                </table>
            </div>
        </div>
    )
}
export default Header