import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import Modal from '../Modal'

const props = {
    children: <div>Example Children</div>,
    onShowModal: jest.fn(),
    hiddenButton: false
}

describe('<Modal/>', () => {
    it('should render children correctly', () => {
        const component = render(<Modal {...props} />)
        expect(component.getByText('Example Children')).toBeTruthy()
    })

    it('should render children with close button', () => {
        props.hiddenButton = true
        const component = render(<Modal {...props} />)
        expect(component.getByText('Close')).toBeTruthy()
    })

    it('should render children without close button', () => {
        props.hiddenButton = false
        const component = render(<Modal {...props} />)
        expect(component.queryByText('Close')).toBeNull()
    })
})