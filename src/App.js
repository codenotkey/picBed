import logo from './logo.svg';
import './App.css';
import React, {Suspense,lazy} from "react";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

import {Switch,Route} from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy( ()=> import('./pages/Register'))
// import Home from './pages/Home';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Suspense fallback={<Loading/>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login"  component={Login} />
            <Route path={'/register'} component={Register} />
          </Switch>
        </Suspense>
      </main>
      <Footer/>
    </>
  );
}

export default App;
