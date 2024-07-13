import React from "react";

function Nav() {
  const imgHeight = {
    height: "2rem",
    marginBottom: "0",
  };

  return (
    <>
      <nav className="border-b-2 w-full h-16 flex-shrink-0">
        <div className="flex justify-between items-center h-full">
          <div className="flex">
            <i className="fa-solid fa-bars mt-4 mb-1 ml-8 text-xl"></i>
            <p className="ml-8 mt-3 text-xl">Classroom</p>
          </div>
          <div className="flex">
            <div className="text-3xl mr-8 mt-1">+</div>
            <img
              src="../src/assets/profile.jpg"
              className="h-9 rounded-full mr-8 mt-2"
              alt="profile"
            />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
