import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignup = () => {
    if (email && password) {
      if (actions.signup(email, password)) {
        history.push("/login");
      }
    }
  };

  if (store.token && store.token !== "" && store.token !== undefined)
    history.push("/");

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-10 offset-1 text-center mt-5">
            <h2 className="fw-light">
              A stunningly illustrated guide to the fascinating world of plants.
            </h2>
          </div>
          <div className="col-8 offset-2 p-0 ">
            <p className="fw-light">
              We will take you on another trip across the globe, bringing to
              life the science of plants by revealing how their worlds are
              intricately entwined with our own history, culture and folklore.
              From the seemingly familiar ficus and monstera to the iconic
              baobab and strelitzia, stars of the African continent, each of
              these plants are full of surprises. Some have a troubling past,
              while others have ignited human creativity or enabled whole
              civilizations to flourish.
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center mt-3"
        style={{ maxWidth: "50%", display: "block", margin: "0 auto" }}
      >
        <h1 className="text-success">Sign Me Up !!!</h1>
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

          <div className="form-check mt-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label fw-light" for="flexCheckDefault">
              I have read and I accept the{" "}
              <span style={{ textDecoration: "underline" }}>
                Plants and Conditions
              </span>
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckChecked"
              checked
            />
            <label className="form-check-label fw-light" for="flexCheckChecked">
              I don't want to start the week with only work emails, sign me up
              to become a World of Plants Insider!!!
            </label>
          </div>

          <button className="btn btn-success mt-3 mb-4" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

{
  /* <div class="form-check">
<input
  className="form-check-input"
  type="checkbox"
  value=""
  id="flexCheckDefault"
/>
<label className="form-check-label" for="flexCheckDefault">
  I have read and I accept the{" "}
  <span style={{ textDecoration: "underline" }}>
    Terms and Conditions
  </span>
</label>
<label className="form-check-label" for="flexCheckDefault">
  I want to become a World of Plants insider, add me to your
  newsletter!!!
</label>
</div> */
}
