import React from "react";
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "changed_name") {
    return {
      age: state.age,
      name: action.changedName,
    };
  }

  if (action.type === "increment-age") {
    return { name: state.name, age: state.age + 1 };
  }
  if (action.type === "decrement_age") {
    return { name: state.name, age: state.age - 1 };
  }
}
const initialState = { name: "yubi", age: 23 };

const ReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleInputChange = (e) => {
    dispatch({ type: "changed_name", changedName: e.target.value });
  };
  return (
    <>
      <input type="text" value={state.name} onChange={handleInputChange} />
      <button onClick={() => dispatch({ type: "increment-age" })}>
        Increment age
      </button>
      <button onClick={() => dispatch({ type: "decrement_age" })}>
        Decrement Age
      </button>
      <p>
        Hello,{state.name}. You are {state.age}
      </p>
    </>
  );
};

export default ReducerComp;
