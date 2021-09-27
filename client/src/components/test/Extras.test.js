import React from 'react';
import ReactDOM from 'react-dom';
import Extras from '../Extras';
import {querySelectorElement} from '@testing-library/dom';
import {querySelector} from '@testing-library/jest-dom';
import {getQueriesForElement} from '@testing-library/dom';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Extras />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test("renders are correct", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Extras />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);

  expect(root.querySelector("h3").textContent).toBe("Step 5 : Add Extra Curricular Activities");

});

test("Languages element test", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Extras />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Languages (ex: English, Chinese)")).not.toBeNull();
  
});

test("Hobbies / Interests   element test", () => {
  const root = document.createElement('div');
  ReactDOM.render(<Extras />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Hobbies / Interests")).not.toBeNull();
  
});



