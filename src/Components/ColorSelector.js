import { useDispatch, useSelector } from 'react-redux';
import { setBackgroundColor } from '../redux/UiSlice';

function ColorSelector() {

  const dispatch = useDispatch();

  const colorValue = useSelector((state) => state.ui.backgroundColor);


  const handleColorChange = (e) => {
    dispatch(setBackgroundColor(e.target.value));
  }

  return (
    <div className="component" style={{flexDirection: 'column'}}>
      <h3>Pick a color:</h3>
      <div>
        <input type="color" onChange={handleColorChange} value={colorValue} />
      </div>
    </div>
  );
}

export default ColorSelector;
