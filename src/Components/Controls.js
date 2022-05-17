function Controls(props) {
  
  const { count, setCount } = props;

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }
  
  return (
    <div className="component controls">
      <button onClick={increment}>Increment</button>
      <button disabled={!count} onClick={decrement}>Decrement</button>
    </div>
  );

}

export default Controls;
