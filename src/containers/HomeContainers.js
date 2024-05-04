import Home from '../components/HomeComponents';
import {connect} from 'react-redux';
import {addToCart, removeToCart} from '../services/Actions/actions';

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data)), //addToCartHandler call from component actions
    removeToCartHandler:data=>dispatch(removeToCart(data)), //addToCartHandler call from component actions
    removeSingleHandler:data=>dispatch(removeToCart(data))
})

const mapStateToProps=state=>({
   // debugger
    //cartData:state
    data:state.cartItems
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)