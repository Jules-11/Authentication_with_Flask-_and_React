import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  const logoutHandler = () => {
    actions.logout();
    history.push("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand" href="#">
            <i className="bi bi-tree-fill"></i>
            <strong> World Of Plants</strong>
          </a>
        </Link>
        <div className="">
          {!store.token ? (
            <>
              <Link style={{ margin: "10px" }} to="/signup">
                <button className="btn btn-dark">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-dark">Log in</button>
              </Link>
            </>
          ) : (
            <button onClick={logoutHandler} className="btn btn-dark">
              Log Out
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
