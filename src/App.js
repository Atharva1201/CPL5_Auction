import logo from './logo.svg';
import './App.css';
import BasicExample from './Pages/UserHomePage';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router';
import AppRoutes from './Routes/routes';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
