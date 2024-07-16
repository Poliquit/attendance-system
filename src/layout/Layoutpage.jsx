import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";
import Mainsection from "../components/Mainsection";

function Layoutpage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Nav />

        <div className="flex flex-grow">
          <Sidebar />

          {/* Main Section */}
          <div className="ml-8 mt-10">
            <Mainsection />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layoutpage;
