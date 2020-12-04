import React from 'react';
import Menu from './Menu'
import { Route, Switch,Redirect } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import Footer from './Footer';

const App = () => {
  return (
    <>
    <div style={{height:"100vh"}}>
      <Menu />
      <Switch>
        <Route exact path='/trideep_react-website/' component={Home}/>
        <Route exact path='/trideep_react-website/about' component={About}/>
        <Route exact path='/trideep_react-website/contact' component={Contact}/>
        <Route exact path='/trideep_react-website/service' component={Service}/>
        <Redirect to="/trideep_react-website/"/>
      </Switch>
      <Footer/>
      </div>
    </>
  )
}

export default App;
