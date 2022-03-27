
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Header from './components/Header';
import FavoritesScreen from './screens/FavoritesScreen';
import HomeScreen from './screens/HomeScreen';


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header />
        <main className='main'>
          <div className='content'>
            <Routes>
              <Route exact path="/" element={<HomeScreen />}></Route>
              <Route exact path="/favorites" element={<FavoritesScreen />}></Route>
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
