import { useState } from 'react';
import './App.css';
import Count from './Components/Count';
import Controls from './Components/Controls';

function App() {
  
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Count count={count} />
      <Controls count={count} setCount={setCount} />
    </div>
  );
}

export default App;
