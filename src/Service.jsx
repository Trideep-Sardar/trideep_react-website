import React from 'react';
import Media from './Media';
import Mcard from './Mcard';

const Service=()=>{
    return (<>
            <div className="service_maiin" style={{height:"auto"}}>
            <div class="jumbotron jumbotron-fluid" style={{marginTop:"8rem"}}>
  <div class="container text-center">
    <h1 class="display-4">Our Service</h1>
    <p class="lead text-capitalize">Every services we provide are mentioned below.</p>
  </div>
  </div>
  <div className="row container-fluid">
      {
        Media.map((val,index)=>{
          return <Mcard image={val.image} key={index}/>
        })
      }
  </div>
</div>
    </>)
}

export default Service;