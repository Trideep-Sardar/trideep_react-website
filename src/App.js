import React from 'react';
import Menu from './Menu'
import { Route, Switch } from 'react-router-dom';
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
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/service' component={Service}/>
      </Switch>
      <Footer/>
      </div>
    </>
  )
}

export default App;
