import React from 'react';

import { connect } from 'react-redux';
import  { createStructuredSelector } from 'reselect';

import { toogleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss'

const CartIcon = ({toogleCartHidden, itemCount}) => {
    return (
        <div className="cart-icon" onClick={toogleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toogleCartHidden : () => dispatch(toogleCartHidden())
})

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount : cartItems.reduce((totalQuantity, cartItem) => cartItem.quantity + totalQuantity,0)
// })

const mapStateToProps = createStructuredSelector({
    itemCount : selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
