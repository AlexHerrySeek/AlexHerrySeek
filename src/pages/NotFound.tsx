import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/"); // Quay về trang chủ
  };

  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <img
          src="https://cdn3d.iconscout.com/3d/premium/thumb/error-404-8808966-7122235.png"
          alt="404 Not Found"
          className="notfound-image"
        />
        <p className="notfound-text">Oh! Page not found.</p>
        <button className="notfound-button" onClick={goHome}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
