import { useSelector, useDispatch } from "react-redux";
import { removeProductToCart } from "../../redux/slices/cart";
import {
    ShoppinCart,
    ContainerProduct,
    Text,
    QuantityCircle,
    ContainerTotal,
    TextTotal,
    TextPrice,
    TextName,
    ContainerInfo,
    IconTrash
} from './styles'

import trash from '../../assets/trash.svg'
const ProductsInCart = () => {
    const win = window.localStorage;
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)
    win.setItem("productsInCart", JSON.stringify(cart));
    const total = cart.length ?
        cart.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0)
        :
        0

    const handleRemoveItemToCart = (index) => {
        dispatch(removeProductToCart(index))
    }
    return (
        <ShoppinCart>
            <Text>Shopping Cart</Text>
            {cart.map((item, index) =>
                <ContainerProduct key={index}>
                    <ContainerInfo>
                        <QuantityCircle>{item.quantity}</QuantityCircle>
                        <img src={item.url} width={100} alt='product' />
                        <TextName>{item.name}</TextName>
                    </ContainerInfo>
                    <IconTrash src={trash} alt='trash' onClick={() => handleRemoveItemToCart(index)} />
                </ContainerProduct>
            )}
            <ContainerTotal>
                <TextTotal>Total:</TextTotal>
                <TextPrice>${total}</TextPrice>
            </ContainerTotal>
        </ShoppinCart>
    );
}

export default ProductsInCart;