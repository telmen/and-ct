import React from 'react';
import {Route} from 'wouter'
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/'>
        {params => <h1>hi</h1>}
      </Route>
    </div>
  );
}

export default App;
