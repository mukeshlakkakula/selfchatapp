import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiCirclePlus } from "react-icons/ci";
import "./index.css";
const Sidebar = () => {
  const [activeRoute, setActiveRoute] = useState("");
  const [activeSideBar, setActiveSidebar] = useState(true);
  let screenSizeOf = window.innerWidth;
  const handleCloseSideBar = () => {
    if (activeSideBar !== undefined && screenSizeOf <= 900) {
      setActiveSidebar(false);
    }
  };

  const handleAll = (event) => {
    handleCloseSideBar();
    setActiveRoute(event.target.value);
  };

  useEffect(() => {
    handleCloseSideBar();
  }, [activeRoute]);

  return (
    <div>
      <div>
        <button
          className="logoBurger"
          type="button"
          onClick={() => setActiveSidebar((prev) => !prev)}
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <div
        className={activeSideBar ? "sidebarContainer" : "sidebarContainerNone"}
      >
        <div className="d-flex justify-content-around align-items-center w-100 p-2 bg-secondary">
          <button className="btn rounded-circle bg-light  ">R</button>
          <div className="text-white">
            <h5>Rajamouli</h5>
            <p>Research analyst</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center w-100 p-2">
          <h3>
            Conversations
            <CiCirclePlus />
          </h3>
        </div>

        <Link to="/Poland">
          <button
            className={
              activeRoute === "Poland"
                ? "activeBtn "
                : "notActiveBtn hover-element"
            }
            value="Poland"
            onClick={handleAll}
          >
            # Poland office
          </button>
        </Link>

        <Link to="/">
          <button
            className={
              activeRoute === "" ? "activeBtn" : "notActiveBtn hover-element"
            }
            value=""
            onClick={handleAll}
          >
            # Introduction
          </button>
        </Link>

        <Link to="/India">
          <button
            className={
              activeRoute === "India"
                ? "activeBtn"
                : "notActiveBtn hover-element"
            }
            value="India"
            onClick={handleAll}
          >
            # India office
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
