import React from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

function Layoutpage() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Nav />

        <div className="flex flex-grow">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Layoutpage;
