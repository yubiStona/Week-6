import { useSelector } from "react-redux";
import React from "react";

const ShowTodo = () => {
  const { data, isLoading } = useSelector((state) => state.todo);
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-12">
          {data && data.length > 0 ? (
            <div className="list-group">
              {data.map((todo) => (
                <div
                  key={todo.id}
                  className="list-group-item list-group-item-action"
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="mb-1">{todo.title}</h5>
                    <span
                      className={`badge ${
                        todo.completed ? "bg-success" : "bg-warning"
                      }`}
                    >
                      {todo.completed ? "Completed" : "Pending"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info">No todos found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowTodo;
