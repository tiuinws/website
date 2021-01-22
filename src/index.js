import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.unstable_createRoot(
  document.getElementById('root')
).render(<App />);

// We are using experimental concurrent API,
// if you want to go back to default API, then change to below render
// don't forget to change the react & react-dom package also
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

in package.json
 //"react": "^17.0.1",
    //"react-dom": "^17.0.1",
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
