import React from 'react';
import ReactDOM from 'react-dom';
import PersonalDetails from '../PersonalDetails';
import {getQueriesForElement} from '@testing-library/dom';
import {querySelector} from '@testing-library/jest-dom';
import {render , fireEvent} from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders are correct", () => {
  const root = document.createElement('div');
  ReactDOM.render(<PersonalDetails />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);

  expect(root.querySelector("h3").textContent).toBe("Step 1 : Personal Information");

   expect(root.querySelector("button").textContent).toBe("Next");
});

test("Name element correct", () => {
  const root = document.createElement('div');
  ReactDOM.render(<PersonalDetails />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Name*")).not.toBeNull();
  
});

test("Email element correct", () => {
  const root = document.createElement('div');
  ReactDOM.render(<PersonalDetails />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Email*")).not.toBeNull();
  
});

test("Mobile element correct", () => {
  const root = document.createElement('div');
  ReactDOM.render(<PersonalDetails />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Mobile*")).not.toBeNull();
  
});

test("Linkedin element correct", () => {
  const root = document.createElement('div');
  ReactDOM.render(<PersonalDetails />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Linkedin")).not.toBeNull();
  
});

test("Github element correct", () => {
  const root = document.createElement('div');
  ReactDOM.render(<PersonalDetails />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Github")).not.toBeNull();
  
});

test("Skills element correct", () => {
  const root = document.createElement('div');
  ReactDOM.render(<PersonalDetails />, root);

  const {getByText, getByLableText} = getQueriesForElement(root);
  expect(getByText("Technical Skills * (Separate each skill with a comma)")).not.toBeNull();
  
});




