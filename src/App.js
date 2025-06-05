import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    const interval = setInterval(() => {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.innerText = '❤️';
      heart.style.left = Math.random() * 100 + 'vw';
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>Olá mundo</h1>
      <h2>Bem-vinda, Rayssa 💕</h2>
    </div>
  );
}

export default App;
