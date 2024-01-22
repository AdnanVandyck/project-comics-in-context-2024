import React from 'react';
import UserInterface from './UserInterface';
import './App.css';


function App() {
  return (
    <div className="App">
      <main>
        <h1
        style={{
          color: "#FEE001",
          fontFamily: "Luminari, fantasy",
          fontSize: 50
        }}
        >
          Welcome to Comics Galore!
        </h1>
        <UserInterface />
      </main>
    </div>
  );
}

export default App;
