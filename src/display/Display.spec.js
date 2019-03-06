import React from 'react';
import { render, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import Display from './Display';

afterEach(cleanup);

describe('Display', () => {
    // test.todo('defaults gate to unlocked and open');

    // test.todo('displays "Closed" if props.closed === true');

    // test.todo('displays "Locked" if props.locked === true');

    // test.todo('uses "red-led" class when displaying "Closed"');

    // test.todo('uses "red-led" class when displaying "Locked"');

    // test.todo('uses "green-led" class when displaying "Open"');

    // test.todo('uses "green-led" class when displaying "Unlocked"');

    test.skip('matches snapshot', () => {
        const tree = renderer.create(<Display />);

        expect(tree).toMatchSnapshot();
    })
})
