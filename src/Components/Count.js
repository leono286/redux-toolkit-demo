import { useSelector } from 'react-redux';

function Count() {
  const count = useSelector(state => state.counter.count);

  return (
    <div className="count-box component">
      <h2>Count: { count }</h2>
    </div>
  )
}

export default Count;
