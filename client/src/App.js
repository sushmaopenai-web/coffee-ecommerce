import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <header style={{padding:20, borderBottom:'1px solid #ddd'}}>
        <h1>Coffee Shop</h1>
      </header>
      <main style={{padding:20}}>
        <Home />
      </main>
    </div>
  );
}

export default App;
