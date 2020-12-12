import React from 'react';
import { NavLink} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import ContactsIcon from '@material-ui/icons/Contacts';


const Menu = () => {
    return (
        <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark container-fluid text-dark">
  < NavLink className="navbar-brand" exact to="https://trideep-website.herokuapp.com">trideep.works</ NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        < NavLink className="nav-link" exact to="/"><HomeIcon/> Home<span className="sr-only">(current)</span></ NavLink>
      </li>
      <li className="nav-item">
        < NavLink className="nav-link" exact to="/about"><SupervisorAccountIcon/> About</ NavLink>
      </li>
      <li className="nav-item">
        < NavLink className="nav-link" exact to="/service"><WorkIcon/> Service</ NavLink>
      </li>
      <li className="nav-item">
        < NavLink className="nav-link" exact to="/contact"><ContactsIcon/> Contact</ NavLink>
      </li>
    </ul>
    <form className="form-inline" style={{display:"flex"}}>
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
  </form>
  </div>
</nav>
        </>
    )
}

export default Menu;