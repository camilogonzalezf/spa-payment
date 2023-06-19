import React from "react";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import CartButton from '../CartButton'
import cartWithProducts from './mocks/mockReduxWithProducts'
import cartWithoutProducts from './mocks/mockReduxWithoutProducts'

const props = {
    onShowCart: jest.fn(),
    showCart: false,
}

describe('<CartButton/>', () => {
    it('should render CartButton having the total purchase equal to zero  without productos', () => {
        const store =
            configureStore({
                reducer: {
                    cart: cartWithoutProducts
                }
            })
        const component = render(
            <Provider store={store}>
                <CartButton {...props} />
            </Provider>
        )
        expect(component.getByText('$0')).toBeTruthy()
    })
    it('should render CartButton having the total purchase greater than zero  with productos', () => {
        const store =
            configureStore({
                reducer: {
                    cart: cartWithProducts
                }
            })
        const component = render(
            <Provider store={store}>
                <CartButton {...props} />
            </Provider>
        )
        expect(component.getByText('$16')).toBeTruthy()
    })


})