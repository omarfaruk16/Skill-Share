import React, { useContext, useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router";
import logo from "../assets/logo.png";
import { AuthContext } from "../Provider/AuthProvider";

const Header = () => {
  const { user, SignOut } = useContext(AuthContext);
  const [seeUserName, setSeeUserName] = useState(false);
  const navigate = useNavigate();


  const handleSignOut = () => {
    SignOut();
  };
  return (
    <div className="navbar  max-w-[1200px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-md dropdown-content bg-yellow rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink className="hover:text-white" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:text-white" to="/signup">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex gap-2 items-center">
          <img src={logo} alt="" />
          <h4 className="text-xl font-semibold text-space-grotesk">
            SkillSwap
          </h4>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex lg:justify-end">
        <ul className="menu menu-horizontal px-1 text-md font-semibold lg:flex lg:gap-3 lg:justify-center lg:items-center">
          <li>
            <NavLink className="hover:text-yellow" to="/">
              Home
            </NavLink>
          </li>
          <li>
            {user ? (
              <div
                onMouseEnter={() => setSeeUserName(true)}
                onMouseLeave={() => setSeeUserName(false)}
                className="flex items-center justify-center"
                onClick={() => navigate("/profile")}
              >
                <img
                  className="rounded-4xl max-w-8 h-fit"
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://www.bing.com/images/search?view=detailV2&ccid=PNsTDJx0&id=9017FBDEB24DF56861EE83BF3D51DF736E4797A7&thid=OIP.PNsTDJx0_bkDy5UqONf3dAHaHa&mediaurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F3607%2F3607444.png&cdnurl=https%3A%2F%2Fth.bing.com%2Fth%2Fid%2FR.3cdb130c9c74fdb903cb952a38d7f774%3Frik%3Dp5dHbnPfUT2%252fgw%26pid%3DImgRaw%26r%3D0&exph=512&expw=512&q=user&FORM=IRPRST&ck=22D430D58B02787A5C957D39E66DE974&selectedIndex=2&itb=1&cw=1145&ch=571&ajaxhist=0&ajaxserp=0"
                  }
                  alt="user"
                />
                {seeUserName && (
                  <p className="text-sm font-light">
                    {user.displayName ? user.displayName : "Profile"}
                  </p>
                )}
              </div>
            ) : (
              <NavLink className="hover:text-yellow" to="/signup">
                Sign Up
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ul>
          <li>
            {user ? (
              <button
                onClick={handleSignOut}
                className="btn bg-red-600 text-white border-red-500 rounded-2xl"
              >
                Sign Out
              </button>
            ) : (
              <NavLink
                to="/signin"
                className="btn bg-main text-white hover:bg-yellow rounded-2xl"
              >
                Sign In
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
