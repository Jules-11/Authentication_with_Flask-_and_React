import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  console.log("PRIVATE!!!", store.token);
  useEffect(() => {
    if (
      sessionStorage.getItem("token") == "" ||
      sessionStorage.getItem("token") == undefined
    ) {
      history.push("/login");
    } else {
      console.log("entra");
      actions.getMessage();
    }
  }, [store.token]);

  return (
    <div>
      <div className="text-center">
        <div className="alert alert-success">{store.privateMessage || ""}</div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-10 offset-1 text-center fw-light">
            <h3>
              <strong>Proteas</strong>
            </h3>
            <p>
              With its mythological associations to change and transformation,
              it's not surprising that in the language of flowers, protea
              symbolizes diversity, change and courage.
            </p>
          </div>
          <div>
            <img
              src="https://live.staticflickr.com/616/21346211084_d20050ce2f_b.jpg"
              style={{ width: "65%", display: "block", margin: "0 auto" }}
            />
          </div>
          <div className="col-10 offset-1 text-center fw-light mb-3 mt-3">
            <p>
              Dating back approximately 300 million years, proteas are
              considered to be among the oldest families of flowering plants on
              the planet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
