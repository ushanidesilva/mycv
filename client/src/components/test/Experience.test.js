import React from 'react';
import ReactDOM from 'react-dom';
import Experience from '../Experience';
import {getQueriesForElement} from '@testing-library/dom';
import {querySelectorElement} from '@testing-library/dom';
import {querySelector} from '@testing-library/jest-dom';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Experience />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("renders are correct", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Experience />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);

  expect(root.querySelector("h3").textContent).toBe("Step 2 : Work Experience Information");

});

test("Company Name element test", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Experience />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Company Name*")).not.toBeNull();
  
});

test("Position   element test", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Experience />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Position *")).not.toBeNull();
  
});


test("Duration  Name element test", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Experience />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Duration *")).not.toBeNull();
  
});

test("Description  element test", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Experience />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Description *")).not.toBeNull();
  
});



