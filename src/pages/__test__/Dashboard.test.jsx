import React from "react";
import { Provider } from 'react-redux';
import { fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import mockIndex from "./mocks/mockIndex";
import Dashboard from "../Dashboard";

fdescribe('<Dashboard/>', () => {
    it('should render Dashboard correctly', () => {
        const store = mockIndex
        const component = render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        )
        expect(component.queryAllByTestId('product-on-display-img').length).toEqual(12)
        expect(component.getByText('MINI MARKET • CART')).toBeTruthy()
        expect(component.getByText('Store')).toBeTruthy()
        expect(component.getByText('Product')).toBeTruthy()
        expect(component.getByTestId('cart-button-mobile')).toBeTruthy()
        expect(component.getByTestId('cart-button-desktop')).toBeTruthy()
        expect(component.getByTestId('text-price-button').textContent).toEqual('$0')
    })

    it('should  show Product if the user to do click on some product', async () => {
        const store = mockIndex
        const component = render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        )
        const firstProduct = component.queryAllByTestId('product-on-display-img')[0]
        await act(async () => {
            await fireEvent.click(firstProduct)
        })
        expect(component.getAllByTestId('product-selected-name')[0].textContent).toEqual('Alqueria Megalitro · $1.5')
    })

    it('should  add to cart if the user selected a pair products', async () => {
        const store = mockIndex
        const component = render(
            <Provider store={store}>
                <Dashboard />
            </Provider>
        )
        const firstProduct = component.queryAllByTestId('product-on-display-img')[0]
        const secondProduct = component.queryAllByTestId('product-on-display-img')[1]

        await act(async () => {
            await fireEvent.click(firstProduct)
        })

        let plusButton = component.queryAllByTestId('plus-button')[0]
        let addToCartButton = component.queryAllByTestId('add-to-cart-button')[0]

        await act(async () => {
            await fireEvent.click(plusButton)
        })
        await act(async () => {
            await fireEvent.click(addToCartButton)
        })

        expect(component.getByTestId('text-price-button').textContent).toEqual('$1.5')

        await act(async () => {
            await fireEvent.click(secondProduct)
        })

        plusButton = component.queryAllByTestId('plus-button')[0]
        addToCartButton = component.queryAllByTestId('add-to-cart-button')[0]

        await act(async () => {
            await fireEvent.click(plusButton)
        })
        await act(async () => {
            await fireEvent.click(addToCartButton)
        })
        expect(component.getByTestId('text-price-button').textContent).toEqual('$4')
    })
})