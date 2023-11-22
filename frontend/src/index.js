import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import `index.css`
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

//this will be the entry point of our react app
//all routes will be defined here
const router = createBrowserRouter(
  createRoutesFromElements(
    //path takes the url path and element takes the component to be rendered
    //setting index to true will make the route the default route preventing multiple components from being rendered
    //the productscreen import makes product details page available
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
    </Route>

  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
