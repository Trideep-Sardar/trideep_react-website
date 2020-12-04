import React from 'react';

const Contact=()=>{
    return (<>
        <div classNameName="contact_maiin w-100" style={{maxHeight:"100vh"}}>
            <h1 className="text-capitalize text-center" style={{marginTop:"5%"}}>Contact Here</h1>
            <div className="container mt-5 w-75">
            <form onSubmit={(event)=>{
                event.preventDefault();
            }}>
  <div className="form-group mt-3">
    <label for="username">Full Name</label>
    <input type="text" className="form-control" id="username" autoComplete="none"/>
  </div>
  <div className="form-group mt-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete="none"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-3">
    <label for="user_mobile">Phone No.</label>
    <input type="number" className="form-control" id="user_mobile" autoComplete="none"/>
  </div>
  <div className="form-group mt-3">
    <label for="user_message">Message</label>
    <textarea type="text" name="message" id="user_message" className="form-control" rows="4"></textarea>
  </div>
  <div className="form-group mt-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label text-capitalize" for="exampleCheck1">Abve details are correct</label>
  </div>
  <button type="submit" className="btn btn-primary mt-4">Submit</button>
</form>

            </div>

        </div>
    </>)
}

export default Contact;