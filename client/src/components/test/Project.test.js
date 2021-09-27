import React from 'react';
import ReactDOM from 'react-dom';
import Project from '../Project';
import {querySelectorElement} from '@testing-library/dom';
import {querySelector} from '@testing-library/jest-dom';
import {getQueriesForElement} from '@testing-library/dom';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Project />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("renders are correct", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Project />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);

  expect(root.querySelector("h3").textContent).toBe("Step 3 : Recent Project Information");

});


