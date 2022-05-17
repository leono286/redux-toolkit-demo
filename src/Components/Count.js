import { useSelector } from 'react-redux';

function Count() {
  const count = useSelector(state => state.counter.count);
  
  const backgroundColor = useSelector((state) => state.ui.backgroundColor)

  return (
    <div className="count-box component" style={{ backgroundColor: backgroundColor }}>
      <h2>Count: { count }</h2>
    </div>
  )
}

export default Count;
