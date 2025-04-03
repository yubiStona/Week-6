const Modals = ({ onClick }) => {
  return (
    <div>
      <h1>This is the modal title</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero
        quis aliquid voluptate! Minima, et eius id adipisci enim sequi
        praesentium quaerat libero architecto veritatis maiores non dolores,
        doloribus odit.
      </p>
      <button onClick={() => onClick()}>Close</button>
    </div>
  );
};

export default Modals;
