import { useState } from 'react';
import './App.css';
import Count from './Components/Count';
import Controls from './Components/Controls';
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Count />
        <Controls />
      </Provider>
    </div>
  );
}

export default App;
