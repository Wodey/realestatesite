import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './Pages/Main';
import HomeItem from "./Pages/HomeItem";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import About from "./Pages/About";
import Sell from './Pages/Sell';
import styled from "styled-components";
import initializeStore from './services';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import "./firebase";

const Wrapper = styled.div`
    background-size: 100%;
    width: 100%;
    overflow: hidden;
`;
function App() {
  const {store, persistor} = initializeStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper>
          <Router>
            <Header />
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
              <Route path="/homes/:id">
                <HomeItem />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/sell">
                <Sell />
              </Route>
            </Switch>
            <Footer />
          </Router>
        </Wrapper>
      </PersistGate>
    </Provider>
  );
}

export default App;
