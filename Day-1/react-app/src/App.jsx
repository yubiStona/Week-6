import { useState } from "react";
import "./App.css";
import Modal from "react-modal";
import Modals from "./components/Modals";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const notify = () => toast("wow so toasty!");
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>

      <div className="container">
        <button
          className="btn btn-primary"
          onClick={() => {
            setModalIsOpen(true);
          }}
        >
          Click Me
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setModalIsOpen(false);
          }}
          style={{
            content: {
              width: "500px",
              height: "300px",
              margin: "auto",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              borderRadius: "10px",
              padding: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2",
            },
            overlay: {
              background: "rgba(0,0,0,0.5)",
            },
          }}
        >
          <Modals
            onClick={() => {
              setModalIsOpen(false);
            }}
          />
        </Modal>
        <button className="btn btn-secondary" onClick={notify}>
          Notify!
        </button>
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
