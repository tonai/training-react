import { useEffect, useReducer, useRef, useState } from "react";

function reducer(prevState, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...prevState,
        counter: prevState.counter + Number(prevState.step)
      };

    case 'stepChange':
      return {
        ...prevState,
        step: action.value
      };

    default: 
      return prevState;
  }
}

function Counter() {
  const [start, setStart] = useState(false);
  const timerId = useRef();
  const [state, dispatch] = useReducer(reducer, { counter: 0, step: '1' });

  useEffect(() => {
    if (start) {
      timerId.current = setInterval(() => {
        dispatch({ type: 'increment' });
      }, 1000);
      return () => {
        clearInterval(timerId.current);
      }
    }
  }, [start]);

  function handleClick() {
    if (!start) {
      setStart(true);
    } else {
      setStart(false);
    }
    // if (!timerId.current) {
    //   timerId.current = setInterval(() => {
    //     dispatch({ type: 'increment' });
    //   }, 1000);
    // } else {
    //   clearInterval(timerId.current);
    //   timerId.current = null;
    // }
  }

  function handleChange(event) {
    dispatch({ type: 'stepChange', value: event.target.value })
  }

  return (
    <>
      <button onClick={handleClick}>{state.counter}</button>
      <input value={state.step} onChange={handleChange} type="number" />
    </>
  );
}

export default Counter;
