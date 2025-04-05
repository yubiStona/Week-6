import { useNavigate } from "react-router-dom";
import api from "../utils/axios";
import { useEffect, useState } from "react";
const Admin = () => {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };
  useEffect(() => {
    const fetchHome = async () => {
      try {
        const response = await api.get("/profile");
        setData(response.data.message);
      } catch (err) {
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          localStorage.removeItem("role");
          navigate("/login");
        }
      }
    };
    fetchHome();
  }, []);

  return (
    <div className="container-fluid p-4">
      <div className="row">
        {/* Sidebar with Logout Button */}
        <div className="col-md-3 mb-4 d-flex flex-column">
          <div className="card flex-grow-1">
            <div className="card-header bg-dark text-white">
              <h5>Admin Navigation</h5>
            </div>
            <div className="card-body p-0 d-flex flex-column">
              <ul className="nav flex-column flex-grow-1">
                <li className="nav-item">
                  <a className="nav-link p-3 border-bottom" href="#">
                    <i className="fas fa-tachometer-alt me-2"></i>Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-3 border-bottom" href="#">
                    <i className="fas fa-users me-2"></i>Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-3 border-bottom" href="#">
                    <i className="fas fa-box me-2"></i>Products
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link p-3 border-bottom" href="#">
                    <i className="fas fa-cog me-2"></i>Settings
                  </a>
                </li>
              </ul>
              {/* Logout Button at Bottom */}
              <div className="p-3 border-top">
                <button onClick={handleLogout} className="btn btn-danger w-100">
                  <i className="fas fa-sign-out-alt me-2"></i>Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content (unchanged) */}
        <div className="col-md-9">
          {/* ... rest of your admin panel content ... */}
          <div className="card">
            <div className="card-header bg-light">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Admin Dashboard</h5>
                <button className="btn btn-primary btn-sm">
                  <i className="fas fa-plus me-1"></i> Add New
                </button>
              </div>
            </div>
            <div className="card-body">
              {/* ... existing dashboard content ... */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
