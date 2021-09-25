import React from 'react';
import ReactDOM from 'react-dom';
import PersonalDetails from '../PersonalDetails';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalDetails />, div);
//   ReactDOM.unmountComponentAtNode(div);
});
