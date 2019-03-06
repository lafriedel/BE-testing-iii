import React from "react";
import { render } from "react-testing-library";
import renderer from 'react-test-renderer';
import Dashboard from "./Dashboard";
import Controls from "../controls/Controls";
import Display from "../display/Display";

describe("Dashboard", () => {
  test("renders without crashing", () => {
    render(<Dashboard />);
  });

  test("renders Controls component without crashing", () => {
    render(<Controls />);
  });

  test("renders Display component without crashing", () => {
    render(<Display />);
  });

  test.skip('matches snapshot', () => {
    const tree = renderer.create(<Dashboard />);

    expect(tree.toJSON()).toMatchSnapShot();
  });
});
