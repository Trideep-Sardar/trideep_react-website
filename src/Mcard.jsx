import React from 'react';

const Mcard = (props) => {
    return (
        <>
            <div className="col-sm-4">
                <div class="card" style={{ maxWidth: "18rem", maxHeight: "18rem", margin: "20px auto" }}>
                    <img src={props.image} class="card-img-top img-fluid" alt="Loading" style={{ width: "100vw", height: "100vh" }} />
                </div>
            </div>
        </>
    )
}

export default Mcard;