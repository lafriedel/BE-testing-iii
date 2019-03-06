import React from 'react';
import { render, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup);

describe('Display', () => {
    // test.skip('defaults gate to unlocked and open');

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

    // test.skip('uses "red-led" class when displaying "Closed"');

    // test.skip('uses "red-led" class when displaying "Locked"');

    // test.skip('uses "green-led" class when displaying "Open"');

    // test.skip('uses "green-led" class when displaying "Unlocked"');

    test.skip('matches snapshot', () => {
        const tree = renderer.create(<Display />);

        expect(tree).toMatchSnapshot();
    })
})
