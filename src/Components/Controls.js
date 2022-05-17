import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/CounterSlice';

function Controls() {
  
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  const incrementHandler = () => {dispatch(increment())};
  const decrementHandler = () => {dispatch(decrement())};
  
  return (
    <div className="component controls">
      <button onClick={incrementHandler}>Increment</button>
      <button disabled={!count} onClick={decrementHandler}>Decrement</button>
    </div>
  );

}

export default Controls;
