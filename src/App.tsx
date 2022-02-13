import React from "react";
import Routers from "./routers";
import { Provider } from "react-redux";
import store from "./stores";
import AuthProvider from "./providers/authProvider";
import ThemeProvider from "./providers/themeProvider";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <Routers />
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
