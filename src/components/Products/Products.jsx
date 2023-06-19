import Card from "../Card/Card";
import { CartButton } from "../CartButton/styles";
import { ContainerHeaderStore, ContainerICon, Text, ContainerProducts, ProductPart } from "./styles";

import bag from '../../assets/bag.svg'

const ProductsContainer = ({ products, onShowProducts, onShowModal }) => {
    return (
        <div>
            <ContainerHeaderStore>
                <ContainerICon>
                    <img src={bag} alt='bag icon' />
                </ContainerICon>
                <Text>Store</Text>
            </ContainerHeaderStore>
            <ContainerProducts>
                <ProductPart>
                    {products[0].map((item, index) =>
                        <Card product={item} key={index} onShowProducts={onShowProducts} onShowModal={onShowModal} />
                    )}
                </ProductPart>
                <ProductPart>
                    {products[1].map((item, index) =>
                        <Card product={item} key={index} onShowProducts={onShowProducts} onShowModal={onShowModal} />
                    )}
                </ProductPart>
                <ProductPart>
                    {products[2].map((item, index) =>
                        <Card product={item} key={index} onShowProducts={onShowProducts} onShowModal={onShowModal} />
                    )}
                </ProductPart>
            </ContainerProducts>
        </div>
    );
}

export default ProductsContainer;