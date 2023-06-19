import { useSelector } from "react-redux";
import { ContainerCart, CartButton, Text, TextPrice, ButtonClose } from "./styles";
import cartIconLight from '../../assets/cart.svg'
import cartIconDark from '../../assets/cart-dark.svg'
const Cart = ({ onShowCart, showCart }) => {
    const { cart } = useSelector(state => state.cart)
    const total = cart.length ?
        cart.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0)
        :
        0
    return (
        <ContainerCart >
            <CartButton onClick={onShowCart} bgColorLight={showCart} data-testid='cart-button-desktop'>
                <div className="p-2 flex">
                    <img src={showCart ? cartIconDark : cartIconLight} alt='cart icon' />
                    <TextPrice textColorDark={showCart}>${total}</TextPrice>
                </div>
                {showCart && <ButtonClose>X</ButtonClose>}
            </CartButton>
        </ContainerCart>
    );
}

export default Cart;