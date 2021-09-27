import React from 'react';
import ReactDOM from 'react-dom';
import Education from '../Education';
import {getQueriesForElement} from '@testing-library/dom';
import {querySelector} from '@testing-library/jest-dom';
import {render , fireEvent} from '@testing-library/react';




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Education />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders are correct", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Education />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);

  expect(root.querySelector("h3").textContent).toBe("Step 4 : Education Information");

});

test("Name element test", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Education />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("University Name *")).not.toBeNull();
  
});

test("Graduated Year  element test", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Education />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Graduated Year *")).not.toBeNull();
  
});


test("School Name element test", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Education />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("School Name *")).not.toBeNull();
  
});

test("Year  element test", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Education />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Year *")).not.toBeNull();
  
});

