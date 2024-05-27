import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'; 
import Header from './Component/Header';
import Hero from './Component/Hero';
import Profile from './Component/Profile';
import Features from './Component/Features';
import Footer from './Component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Profile />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
