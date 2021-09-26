import React from 'react';
import ReactDOM from 'react-dom';
import PersonalDetails from '../PersonalDetails';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalDetails />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("renders correct", () => {
  const h = document.createElement("h3");
  ReactDOM.render(<PersonalDetails />, h);

  expect(h.querySelector("h3").textContent).toBe("Step 1 : Personal Information");
});
