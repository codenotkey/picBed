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
const History = lazy( ()=> import('./pages/History'))
const About = lazy( ()=> import('./pages/About'))
const NoMatch = lazy(()=>import('./pages/404'))
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
            <Route path={'/history'} component={History} />
            <Route path={'/about'} component={About} />
            <Route path="*" component={NoMatch}/>
          </Switch>
        </Suspense>
      </main>
      <Footer/>
    </>
  );
}

export default App;
