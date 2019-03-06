import React from 'react';
import { render, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup);

describe('Display', () => {
    test('defaults gate to unlocked and open', () => {
        const { getByText } = render(<Display />);

        const unlocked = getByText(/Unlocked/);
        const open = getByText(/Open/);

        expect(unlocked).toBeInTheDocument();
        expect(open).toBeInTheDocument();
    });

    test('displays "Closed" if props.closed === true', () => {
        const { getByText } = render(<Display closed={true} />);

        const closed = getByText(/Closed/);

        expect(closed).toBeInTheDocument();
    });

    test('displays "Locked" if props.locked === true', () => {
        const { getByText } = render(<Display locked={true} />)

        const locked = getByText(/Locked/);

        expect(locked).toBeInTheDocument();
    });

    test('uses "red-led" class when displaying "Closed"', () => {
        const { getByText } = render(<Display closed={true} />);

        const closed = getByText(/Closed/);

        expect(closed).toHaveClass("red-led")
    });

    test('uses "red-led" class when displaying "Locked"', () => {
        const { getByText } = render(<Display locked={true} />);

        const locked = getByText(/Locked/);

        expect(locked).toHaveClass("red-led");
    });

    test('uses "green-led" class when displaying "Open"', () => {
        const { getByText } = render(<Display closed={false} />);

        const open = getByText(/Open/);

        expect(open).toHaveClass("green-led");
    });

    test('uses "green-led" class when displaying "Unlocked"', () => {
        const { getByText } = render(<Display locked={false} />);

        const unlocked = getByText(/Unlocked/);

        expect(unlocked).toHaveClass("green-led");
    });

    test.skip('matches snapshot', () => {
        const tree = renderer.create(<Display />);

        expect(tree.toJSON()).toMatchSnapshot();
    })
})
