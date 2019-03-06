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

    test('disables open button if gate is locked and closed', () => {
        render(<Controls locked={true} closed={true}/>);
        const { getByTestId } = render(<Display locked={true} closed={true} />);

        const openButton = getByTestId("openBtn");
        const lockedGate = getByTestId("lockStatus");
        const openGate = getByTestId("openStatus")

        expect(openButton).toBeDisabled();
        expect(openGate.textContent).toBe("Closed");
        expect(lockedGate.textContent).toBe("Locked");
    });

    test.skip('matches snapshot', () => {
        const tree = renderer.create(<Controls />)

        expect(tree.toJSON()).toMatchSnapshot();
    })
})
