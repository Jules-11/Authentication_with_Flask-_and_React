import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  const backgroundImage = {
    backgroundImage:
      "url(https://www.clearwaycommunitysolar.com/wp-content/uploads/2019/03/iStock-956366756-1024x683.jpg)",
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "550px",
  };

  useEffect(() => {
    if (store.token && store.token !== "" && store.token !== undefined)
      actions.getMessage();
  }, [store.token]);

  return (
    <div className="text-center pb-5">
      <div className="p-0 py-5 m-0 mb-4" style={backgroundImage}>
        <div className="container-fluid p-0 py-5">
          <h1 className="fw-bold display-1 text-center bg-light bg-opacity-25">
            A World Of Plants
          </h1>
          <h2 className="display-5 text-center bg-light bg-opacity-25">
            Will Knock Your Leaves Off
          </h2>
        </div>
      </div>
      <div className="alert alert-success">
        {store.message ||
          "Sign up and login and have access to hours and hours of information about plants!!!"}
      </div>
    </div>
  );
};
