import React from 'react';
import './App.css';
import Family from './components/Family.js'

function App() {
  return (
      <Family
          mommy="blue"
          daddy="red"
          child="purple"
      />
  );
}

export default App;
