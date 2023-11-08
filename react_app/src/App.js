
import './App.css';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import AllRoutes from './Routes/AllRoutes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
         <ToastContainer />
      <AllRoutes />
     
    
    </div>
  );
}

export default App;
