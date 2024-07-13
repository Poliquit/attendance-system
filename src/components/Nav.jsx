import React from "react";

function Nav() {
  const imgHeight = {
    height: "2rem",
    marginBottom: "0",
  };

  return (
    <>
      <nav>
        <div className="bg-white">
          <div className="d-flex justify-content-between align-items-center py-2 px-4 shadow-sm">
            {/* Mobile View */}
            <div className="d-flex d-lg-none align-items-center">
              <i className="bi bi-list fs-4 me-3"></i>
              <img
                src="./src/assets/logo.jpg"
                className="rounded-circle"
                style={imgHeight}
                alt="Profile"
              />
              <p className="mt-3 ms-2">Attendance</p>
            </div>

            {/* Desktop View */}
            <div className="d-none d-lg-flex justify-content-center align-items-center">
              <h4>Logo.</h4>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <p className="fs-2 me-4 mb-2">+</p>
              <img
                src="./src/assets/profile.jpg"
                className="rounded-circle"
                style={imgHeight}
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
