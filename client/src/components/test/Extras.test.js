import React from 'react';
import ReactDOM from 'react-dom';
import Extras from '../Extras';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Extras />, div);
  ReactDOM.unmountComponentAtNode(div);
});
