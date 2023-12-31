import { useSelector } from "react-redux";
import { ContainerCart, CartButton, Text, TextPrice, ButtonClose } from "./styles";
import cartIconLight from '../../assets/cart.svg'
import cartIconDark from '../../assets/cart-dark.svg'
const CartButtonMobile = ({ onShowCart, showCart, onShowModal }) => {
    const { cart } = useSelector(state => state.cart)
    const handleSetStates = () => {
        onShowCart()
        onShowModal()
    }
    const total = cart.length ?
        cart.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0)
        :
        0
    return (
        <ContainerCart data-testid="cart-button-mobile">
            <CartButton onClick={handleSetStates} bgColorLight={showCart}>
                <div className="p-2 flex">
                    <img src={showCart ? cartIconDark : cartIconLight} alt='cart icon' />
                    <TextPrice textColorDark={showCart} data-testid="text-price-button">${total}</TextPrice>
                </div>
                {showCart && <ButtonClose>X</ButtonClose>}
            </CartButton>
        </ContainerCart>
    );
}

export default CartButtonMobile;