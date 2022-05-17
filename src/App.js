import './App.css';
import Count from './Components/Count';
import Controls from './Components/Controls';
import { Provider } from "react-redux";
import store from './redux/store';
import ColorSelector from './Components/ColorSelector';

function App() {
  
  return (
    <div className="App">
      <Provider store={store}>
        <Count />
        <Controls />
        <ColorSelector />
      </Provider>
    </div>
  );
}

export default App;
