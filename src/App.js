import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Main from './Pages/Main';
import HomeItem from "./Pages/HomeItem";
import Header from "./Pages/Header";
import initializeStore from './services';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import "./firebase";
function App() {
  const {store, persistor} = initializeStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
              <Route path="/homes/:id">
                <HomeItem />
              </Route>
            </Switch>
          </Router>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
