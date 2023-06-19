import { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../redux/slices/products";
import Header from "../components/Header/Header";
import ProductsContainer from "../components/Products/Products";
import CartButton from "../components/CartButton/CartButton";
import CartButtonMobile from "../components/CartButtonMobile/CartButtonMobile";
import ProductSelected from "../components/ProductSelected/ProductSelected";
import ProductsInCart from "../components/ProductsInCart/ProductsInCart";
import Modal from "../components/Modal/Modal";
import {
    ContainerSections,
    ContainerProductsSection,
    SideBarContainer,
    Container,
    ContainerButtonCart
} from "./styles/dashboard-styles";


const Login = () => {
    const [showCart, setShowCart] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const dispatch = useDispatch()
    const win = window.localStorage;

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const toggleShowCart = useCallback(() => {
        setShowCart(!showCart)
        setShowModal(!showModal)
    }, [showCart])

    const toggleShowModal = useCallback(() => {
        setShowModal(!showModal)
    }, [showModal])

    const handleShowProducts = useCallback(() => {
        setShowCart(false)
    }, [showCart])

    const { products } = useSelector(state => state.products.products)
    win.setItem("products", JSON.stringify(products))
    return (
        <Container>
            <Header title="MINI MARKET • CART" />
            <ContainerButtonCart>
                {showModal === showCart &&
                    <CartButtonMobile
                        onShowCart={toggleShowCart}
                        showCart={showCart}
                        onShowModal={toggleShowModal}
                    />
                }

            </ContainerButtonCart>

            <ContainerSections>
                <ContainerProductsSection>
                    {products ? <ProductsContainer
                        products={products}
                        onShowProducts={handleShowProducts}
                        onShowModal={toggleShowModal} />
                        :
                        <></>}

                </ContainerProductsSection>

                <SideBarContainer>
                    <CartButton onShowCart={toggleShowCart} showCart={showCart} />
                    {showCart ?
                        <ProductsInCart />
                        :
                        <ProductSelected onShowModal={toggleShowModal} />
                    }
                </SideBarContainer>
                {showModal && (
                    <Modal onShowModal={toggleShowModal} hiddenButton={!showCart}>
                        {showCart ?
                            <ProductsInCart />
                            :
                            <ProductSelected onShowModal={toggleShowModal} />
                        }
                    </Modal>
                )
                }

            </ContainerSections>
        </Container>
    );
}

export default Login;

