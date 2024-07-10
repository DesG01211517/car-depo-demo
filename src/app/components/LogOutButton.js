import React from "react";

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    // Handle logout logic here
    console.log("User logged out");
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="flex-left bg-gray-500 text-white p-2 rounded"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
