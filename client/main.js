import React from 'react';
import ReactDOM from 'react-dom';

import EmployeeList from './components/employee_list';

const App = () => {
  return (
    <div>
    <EmployeeList />
    </div>
  );
};

//After MEteor loads in browser, render my ap to DOM.
Meteor.startup(() => {
  //React render call
ReactDOM.render(<App />, document.querySelector('.container'));
});
