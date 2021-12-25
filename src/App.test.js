import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import App from './App'

afterEach(cleanup)

it('should take a snapshot', () => {
    const { asFragment } = render(<App />)

    expect(asFragment(<App />)).toMatchSnapshot()

});


it('incerment 1', () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId('button-1'))

    expect(getByTestId('counter')).toHaveTextContent('1')
});

it('incerment 2', () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId('button-2'))

    expect(getByTestId('counter')).toHaveTextContent('2')
});

it('decrement 1', () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId('button-3'))

    expect(getByTestId('counter')).toHaveTextContent('-1')
});

it('decrement 2', () => {
    const { getByTestId } = render(<App />);

    fireEvent.click(getByTestId('button-4'))

    expect(getByTestId('counter')).toHaveTextContent('-2')
});

