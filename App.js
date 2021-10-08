import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Drawer from "./navigation/Drawer";
import CustumDrawer from "./navigation/CustumDrawer";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";
import AuthNavigation from "./navigation/AuthNavigation";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  const [isLoged, setIsLoged] = useState(true);
  return (
    <Provider store={store}>
      <NavigationContainer>
        {isLoged ? <CustumDrawer /> : <AuthNavigation />}
      </NavigationContainer>
    </Provider>
  );
}
