import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerImage, QuantityCircle } from "./styles";
import { setProduct } from "../../redux/slices/productSelected";

const Card = ({ product, onShowProducts, onShowModal }) => {
    const [showQuantity, setShowQuantity] = useState(false)
    const [quantity, setQuantity] = useState(0)
    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    useEffect(() => {
        let isSelected = false
        cart.forEach(element => {
            if (element.sku === product.sku) {
                isSelected = isSelected || true
                setQuantity(element.quantity)
            }
        });

        if (isSelected) {
            setShowQuantity(true)
        } else {
            setShowQuantity(false)
        }

    }, [product, cart])

    const handleSetSelectedProduct = useCallback(() => {
        if (!showQuantity) {
            onShowProducts()
            onShowModal()
            dispatch(setProduct(product))
        }

    })
    const widthImage = product.highlight ? 250 : 150

    return (
        <ContainerImage onClick={handleSetSelectedProduct}>
            {showQuantity && <QuantityCircle>{quantity}</QuantityCircle>}
            <img width={widthImage} height={350} src={product.url} alt='product' />
        </ContainerImage>
    );
}

export default Card;