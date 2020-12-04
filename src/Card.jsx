import React from 'react';

const Card = (props) => {

    return (
        <>
            <div className="col-sm-6">
                <div className="card" style={{ maxWidth: "28rem", minHeight: "26rem", margin: "20px auto" }}>
                    <img src={props.image} className="card-img-top img-fluid" alt="tech_logo" style={{ height: "200px", width: "200px", margin: "auto" }} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.sub_title}</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card;