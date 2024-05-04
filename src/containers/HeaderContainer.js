import Header from '../components/Header';
import {connect} from 'react-redux';


const mapDispatchToProps=dispatch=>({
})

const mapStateToProps=state=>({
    data:state.cartItems
})


export default connect(mapStateToProps,mapDispatchToProps)(Header)