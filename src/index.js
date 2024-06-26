import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/MyProfile/hero-section/hero.css";

import { store, persiStore } from "./redux/store";
import { Provider } from "react-redux"; // react-redux fornisce i componenti e gli hooks necessari

//
import { PersistGate } from "redux-persist/integration/react";
//

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persiStore}>
      <App />
    </PersistGate>
  </Provider>
);
