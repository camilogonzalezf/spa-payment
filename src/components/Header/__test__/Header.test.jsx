import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from "@testing-library/react";
import Header from '../Header'

describe('<Header/>', () => {
    it('should render title correctly', () => {
        const titleMock = 'Example Title'
        const component = render(<Header title={titleMock} />)
        expect(component.getByText(titleMock)).toBeTruthy()
    })
})