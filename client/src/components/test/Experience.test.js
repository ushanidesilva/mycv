import React from 'react';
import ReactDOM from 'react-dom';
import Experience from '../Experience';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Experience />, div);
  ReactDOM.unmountComponentAtNode(div);
});


