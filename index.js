import React from "react";
import reactDom, { render } from "react-dom";
import App from "./src/App"
import { Provider } from "react-redux";
import store from "./src/redux/store";


reactDom.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));