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
        <Route path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/service' component={Service}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
      </div>
    </>
  )
}

export default App;
