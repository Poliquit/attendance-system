import React from "react";
import { useState, useEffect } from "react";

function Sidebar() {
  const contentSide = () => {
    return (
      <>
        <div className="flex">
          <i class="fa-solid fa-house"></i>
          <p className="ml-5">Home</p>
        </div>
        <div className="flex">
          <i class="fa-solid fa-share"></i>
          <p className="ml-5">Share</p>
        </div>
        <div className="flex">
          <i class="fa-solid fa-book"></i>
          <p className="ml-5">Enrolled</p>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="border-2 w-60 min-h-full">
        <div className="ml-8">
          <div className="flex flex-col mt-8 space-y-6">{contentSide()}</div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
