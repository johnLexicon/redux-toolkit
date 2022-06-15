import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counter';

function App() {
  // state.counter contains the actual reducer which contains the count variable
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Redux Toolkit Counter Example</h1>
      <p>Counter is: {count}</p>
      <div className="buttons-wrapper">
        <button onClick={() => dispatch(increment())}>Increment by 1</button>
        <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
}

export default App;
