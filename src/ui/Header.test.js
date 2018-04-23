import React from "react";
import renderer from "react-test-renderer";
import { Header, HeaderLogo, HeaderTitle } from "./Header";

test("UI - Header:", () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("UI - HeaderLogo:", () => {
  const tree = renderer.create(<HeaderLogo />).toJSON();
  expect(tree).toMatchSnapshot();
});
