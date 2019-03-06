import React from 'react';
import { render, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import Controls from './Controls';
import Display from '../display/Display';

afterEach(cleanup);

describe('Controls', () => {
    // test.todo('provides button for toggling open/closed');

    // test.todo('provides button for toggling locked/unlocked');

    test('disables lock button if gate is open', () => {
        render(<Controls closed={false} />)
        const { getByTestId } = render(<Display closed={false} />);

        const lockButton = getByTestId("lockBtn");
        const openGate = getByTestId("openStatus");

        expect(lockButton).toBeDisabled();
        expect(openGate.textContent).toBe("Open");

    });

    // test.todo('disables open button if gate is locked and closed');

    test.skip('matches snapshot', () => {
        const tree = renderer.create(<Controls />)

        expect(tree.toJSON()).toMatchSnapshot();
    })
})
