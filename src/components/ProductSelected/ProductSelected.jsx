import { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearProduct } from "../../redux/slices/productSelected";
import { addProductToCart } from "../../redux/slices/cart"
import {
    ContainerProduct,
    Text,
    ContainerInfoProduct,
    ContainerImage,
    CloseButton,
    QuantityCircle,
    ContainerDescription,
    SectionButtons,
    TextName,
    TextPrice,
    ContainerButtons,
    ButtonPlus,
    ButtonMinus,
    TextDescription,
    AddCartButton
} from "./styles";


const ProductSelected = ({ onShowModal }) => {
    const [showProductSelected, setShowProductSelected] = useState(false)
    const [blockAddCart, setBlockAddCart] = useState(true)
    const [quantity, setQuantity] = useState(0)
    const { productSelected } = useSelector(state => state.productSelected)
    const win = window.localStorage;

    const dispatch = useDispatch()

    useEffect(() => {
        Boolean(Object.keys(productSelected).length)
            ?
            setShowProductSelected(true)
            :
            setShowProductSelected(false)
    }, [productSelected])

    const handleCloseProductSelected = useCallback(() => {
        setShowProductSelected(Boolean(Object.keys(productSelected).length) && !showProductSelected)
        setQuantity(0)
        setBlockAddCart(true)
        onShowModal()
        dispatch(clearProduct())
    }, [productSelected, showProductSelected, onShowModal])

    const handlePlusQuantity = useCallback(() => {
        setQuantity(quantity + 1)
        setBlockAddCart(false)
    }, [quantity])

    const handleMinusQuantity = useCallback(() => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
            if (quantity - 1 === 0)
                setBlockAddCart(true)
        }
    }, [quantity])

    const handleAddtoCart = useCallback(() => {
        if (quantity > 0) {
            const productToAdd = {
                sku: productSelected.sku,
                name: productSelected.name,
                quantity: quantity,
                price: productSelected.price,
                url: productSelected.url,
                total: productSelected.price * quantity
            }
            dispatch(addProductToCart(productToAdd))
            handleCloseProductSelected()
        }
    }, [quantity, productSelected])

    return (
        <ContainerProduct>
            <Text>Product</Text>
            {
                showProductSelected && (
                    <ContainerInfoProduct>
                        <ContainerImage>
                            <CloseButton onClick={handleCloseProductSelected}>X</CloseButton>
                            <QuantityCircle>{quantity}</QuantityCircle>
                            <img src={productSelected.url} width={250} alt='product' />
                        </ContainerImage>
                        <ContainerDescription>
                            <SectionButtons>
                                <TextName>{productSelected.name} · <TextPrice>${productSelected.price}</TextPrice></TextName>
                                <ContainerButtons>
                                    <ButtonMinus onClick={handleMinusQuantity}>-</ButtonMinus>
                                    <ButtonPlus onClick={handlePlusQuantity}>+</ButtonPlus>
                                </ContainerButtons>
                            </SectionButtons>
                            <TextDescription>
                                {productSelected.description}
                            </TextDescription>
                            <AddCartButton onClick={handleAddtoCart} blockButton={blockAddCart}>Add Cart</AddCartButton>
                        </ContainerDescription>
                    </ContainerInfoProduct>
                )
            }

        </ContainerProduct>
    );
}

export default ProductSelected;