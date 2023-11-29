import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './redux/CounterSlice';
import { useState } from 'react';

function App() {
  // 状態にアクセス
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState<number>(2);

  return (
    <div>
      <h2>Redux Complete Tutorial</h2>
      <p>count: {count}</p>
      <input
        type="text"
        onChange={(e) => setIncrementAmount(Number(e.target.value))}
        value={incrementAmount}
      />
      <button onClick={() => dispatch(increment())}>プラス</button>
      <button onClick={() => dispatch(decrement())}>マイナス</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(incrementAmount)))}
      >
        追加
      </button>
    </div>
  );
}

export default App;
