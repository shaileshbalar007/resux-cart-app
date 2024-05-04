import React, { useEffect, useState } from 'react';
import mobile from '../common/images/mobile2.avif'

function HomeComponents(props) {
    console.log("Home", props.data)

    const [data, setData] = useState([
        { id: 101, qty: 1, stock: 50, name: 'I-Phone 11', price: 10000 },
        { id: 102, qty: 1, stock: 50, name: 'I-Phone 12', price: 10000 },
        { id: 103, qty: 1, stock: 50, name: 'I-Phone 13', price: 10000 },
        { id: 104, qty: 1, stock: 50, name: 'I-Phone 14', price: 10000 },
    ])

    useEffect(()=>{
        setData(props.data.obj2.length > 0 ? props.data.obj2[0] : data)
    },[props.data,data])

    return (
        <div>
            <h2>Product Cart Application Demo :</h2>
           
                {data.map((item) =>
                   <>
                    <div className='cart-wrapper'>
                    <div className='img-wrapper item'>
                    <img src={mobile} alt="Not found"/>
                        </div>
                        <div className='text-wrapper item'>
                            <span>
                                {item.name}
                            </span><br></br>
                            <span>
                                Price : {item.price}
                            </span><br></br>
                            <span>
                                Stoke : {item.stock}
                            </span>
                        </div>
                        <div className='btn-wrapper item'>
                            <button style={{backgroundColor:'green',width: '111px',marginBottom:'8px'}} onClick={()=>props.addToCartHandler({id:item.id,qty:1,price:item.price,name:item.name,productData:data})}>Add To Cart</button>
                            <button style={{backgroundColor:'red',width: '111px',marginBottom:'8px'}} onClick={()=>props.removeToCartHandler({id:item.id,productData:data})}>Remove To Cart</button>
                            <button style={{backgroundColor:'purple',width: '111px',marginBottom:'8px'}} onClick={()=>props.removeSingleHandler({id:item.id,flag:true,productData:data})}>Remove Single</button>
                        </div>
                        </div>
                    </>
                )
                }
                {/* <div className='img-wrapper item'>
                    <img src={mobile} />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone 11
                    </span><br></br>
                    <span>
                        Price : $500.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button style={{ backgroundColor: 'green', width: '111px', marginBottom: '8px' }} onClick={() => props.addToCartHandler({ id: 101, qty: 1, price: 500, name: 'I-Phone 11' })}>Add To Cart</button>
                    <button style={{ backgroundColor: 'red', width: '111px', marginBottom: '8px' }} onClick={() => props.removeToCartHandler({ id: 101 })}>Remove To Cart</button>
                    <button style={{ backgroundColor: 'purple', width: '111px', marginBottom: '8px' }} onClick={() => props.removeSingleHandler({ id: 101, flag: true })}>Remove Single</button>
                </div> */}
           

            {/* <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src={mobile} />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone 12
                    </span><br></br>
                    <span>
                        Price : $700.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button style={{ backgroundColor: 'green', width: '111px', marginBottom: '8px' }} onClick={() => props.addToCartHandler({ id: 102, qty: 1, price: 700, name: 'I-Phone 12' })}>Add To Cart</button>
                    <button style={{ backgroundColor: 'red', width: '111px', marginBottom: '8px' }} onClick={() => props.removeToCartHandler({ id: 102 })}>Remove To Cart</button>
                    <button style={{ backgroundColor: 'purple', width: '111px', marginBottom: '8px' }} onClick={() => props.removeSingleHandler({ id: 102, flag: true })}>Remove Single</button>
                </div>
            </div>

            <div className='cart-wrapper'>
                <div className='img-wrapper item'>
                    <img src={mobile} />
                </div>
                <div className='text-wrapper item'>
                    <span>
                        I-Phone 13
                    </span><br></br>
                    <span>
                        Price : $900.00
                    </span>
                </div>
                <div className='btn-wrapper item'>
                    <button style={{ backgroundColor: 'green', width: '111px', marginBottom: '8px' }} onClick={() => props.addToCartHandler({ id: 103, qty: 1, price: 900, name: 'I-Phone 13' })}>Add To Cart</button>
                    <button style={{ backgroundColor: 'red', width: '111px', marginBottom: '8px' }} onClick={() => props.removeToCartHandler({ id: 103 })}>Remove To Cart</button>
                    <button style={{ backgroundColor: 'purple', width: '111px', marginBottom: '8px' }} onClick={() => props.removeSingleHandler({ id: 103, flag: true })}>Remove Single</button>
                </div>
            </div> */}
        </div>
    )
}
export default HomeComponents