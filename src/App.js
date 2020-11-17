import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './Pages/Main';
import HomeItem from "./Pages/HomeItem";
import Header from "./Pages/Header";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";
import Profile from "./Pages/Profile";
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
  const [isLoginPageOpened, openLoginPage] = useState(false);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Wrapper>
          <Router>
            <Header openLoginPage={() => openLoginPage(!isLoginPageOpened)} />
            <>
            {
              isLoginPageOpened ? <Login closeLoginPage={() => openLoginPage(false)} /> : ""
            }
            </>
            <Switch>
              <Route path="/" exact>
                <Main />
              </Route>
              <Route path="/homes/:id">
                <HomeItem />
              </Route>
              <Route path="/profile">
                <Profile />
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
