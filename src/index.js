import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//one file = one react component (App is an exapmle of a component here)
//it is good to have a components folder or some sort of structure 
// {`${firstName }}
// pass in props to a component function and access it to make unique things 
///most of your data will come from an API call    
//23. Mapping Components. Create an array of components, each should have a unique key/id
// state = way a component can maintain its own data and change its own data if it needs to  
//super() grabs goodbies from React.Component
//setstate
//conditional rendering 
//fetch, fetches data from api (41)
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
