import { useState } from "react";
import "./admin.style.css";
import CreateTheatreTab from "./components/create-theatre";
import CreateMovieTab from "./components/create-movie";
const AdminDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("create-theatre");

  const selectTab = (id) => setSelectedTab(id);

  return (
    <div className="admin-dashboard-container">
      <div className="sidebar">
        <div className="sidebar-item">
          <h6>Create</h6>
          <ul>
            <li onClick={() => selectTab("create-theatre")}>Theatre</li>
            <li onClick={() => selectTab("create-theatre-halls")}>
              Theatre Halls
            </li>
            <li onClick={() => selectTab("create-movie")}>Movies</li>
          </ul>
        </div>
        <div className="sidebar-item">
          <h6>Manage</h6>
          <ul>
            <li onClick={() => selectTab("create-show")}>Create Show</li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        {selectedTab === "create-theatre" && <CreateTheatreTab />}
        {selectedTab === "create-movie" && <CreateMovieTab />}
      </div>
    </div>
  );
};

export default AdminDashboard;
