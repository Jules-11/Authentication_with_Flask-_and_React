const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: null,
      privateMessage: null,
    },
    actions: {
      syncTokenFromSessionStore: () => {
        const token = sessionStorage.getItem("token");
        console.log(
          "Application just loaded, syncing to session storage token"
        );
        if (token && token !== "" && token !== undefined)
          setStore({ token: token });
      },
      logout: () => {
        sessionStorage.removeItem("token");
        console.log("Login Out");
        setStore({ token: null });
        setStore({ message: null });
      },

      login: async (email, password) => {
        const option = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            "https://3001-4geeksacade-reactflaskh-is7p5gh0n47.ws-eu51.gitpod.io/api/token",
            option
          );
          if (resp.status !== 200) {
            alert("Invalid email");
            return false;
          }
          const data = await resp.json();
          console.log("this came from the backend", data);
          sessionStorage.setItem("token", data.access_token);
          setStore({ token: data.access_token });
          return true;
        } catch (error) {
          console.error("There has been an error login in");
        }
      },

      signup: async (email, password) => {
        const option = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        };
        try {
          const resp = await fetch(
            "https://3001-4geeksacade-reactflaskh-is7p5gh0n47.ws-eu51.gitpod.io/api/signup",
            option
          );
          if (resp.status !== 200) {
            alert("There was an error with the sign up process!!");
            return false;
          }
          const data = await resp.json();
          console.log("this came from the backend", data);
          return true;
        } catch (error) {
          console.error("There has been an error login in");
        }
      },

      getMessage: () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };
        fetch(
          "https://3001-4geeksacade-reactflaskh-is7p5gh0n47.ws-eu51.gitpod.io/api/hello",
          opts
        )
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ message: data.message });
            setStore({ privateMessage: data.privateMessage });
          })
          .catch((error) => console.log("Error loading from backend", error));
      },
    },
  };
};

export default getState;
