import React from 'react';
import ReactDOM from 'react-dom';
import Project from '../Project';
import {querySelectorElement} from '@testing-library/dom';
import {querySelector} from '@testing-library/jest-dom';



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Project />, div);
  ReactDOM.unmountComponentAtNode(div);
});
