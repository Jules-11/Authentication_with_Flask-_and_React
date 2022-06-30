import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  console.log("this is your token", store.token);
  const handleClick = () => {
    actions.login(email, password);
  };

  if (store.token && store.token !== "" && store.token !== undefined)
    history.push("/private");

  return (
    <div className="text-center mt-5">
      <h1 className="text-success">Login</h1>
      {store.token && store.token !== "" && store.token !== undefined ? (
        "You are logged in with this token" + store.token
      ) : (
        <div style={{ maxWidth: "50%", display: "block", margin: "0 auto" }}>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-success" for="floatingInput">
              Username
            </label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="text-success" for="floatingPassword">
              Password
            </label>
            <button className="btn btn-success mt-3 mb-5" onClick={handleClick}>
              Login
            </button>
          </div>
        </div>
      )}
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-8 offset-2 border border-secondary border-1 rounded fw-light p-4">
            <h3 className="fw-light">
              <strong>Did you know...</strong>
            </h3>
            <li>
              <span className="text-success">Plants</span> dislike human noise.
            </li>
            <li>
              The smell of freshly-cut grass is actually a{" "}
              <span className="text-success">plant</span> distress call.
            </li>
            <li>
              <span className="text-success">Plants</span> can recognize their
              siblings and give them preferential treatment.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};
