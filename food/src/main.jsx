import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { FoodProvider } from "../src/Context/FoodContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* পুরো অ্যাপকে প্রোভাইডার দিয়ে র‍্যাপ করে দিলাম */}
    <FoodProvider>
        <App />
    </FoodProvider>
  </React.StrictMode>,
);