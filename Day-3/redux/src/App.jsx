import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/todo";
import ShowTodo from "./components/ShowTodo";
import "./App.css";
function App() {
  const dispatch = useDispatch();
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 text-center mb-4">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchTodos())}
          >
            Fetch Todos
          </button>
        </div>
      </div>
      <ShowTodo />
    </div>
  );
}

export default App;
