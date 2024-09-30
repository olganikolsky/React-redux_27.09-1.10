import {
  increment,
  decrement,
} from '../features/counter/CounterSlice';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>
        {' '}
        Увеличить значение
      </button>
      <button onClick={() => dispatch(decrement())}>
        Уменьшить значение
      </button>
    </div>
  );
};

export default Counter;
