import React from 'react';
import img1 from './Images/home1.jpg';
import img2 from './Images/home2.jpg';
import img3 from './Images/home3.jpg';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';

const Home = () => {
    return <>
        <header>
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="i1" style={{ height: "92vh" }} />
                        <div className="carousel-caption d-sm-block d-md-block">
                            <h2 >React.JS Developer</h2>
                            <p style={{marginBottom: "100px", width: "auto", margin: "auto auto 20px auto",fontSize:"1.3rem" }}>“We love what we do and we do what our clients love and work with great clients all over the world to create thoughtful and purposeful websites.”</p>
                            <NavLink exact to="/about"><Button variant="contained" color="primary" classNameName="direct_about mb-5">
                                Get Started
      </Button></NavLink>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="i2" style={{ height: "92vh" }} />
                        <div className="carousel-caption d-sm-block d-md-block">
                            <h2 >Front-End Developer</h2>
                            <p style={{marginBottom: "100px", width: "auto", margin: "auto auto 20px auto",fontSize:"1.3rem" }}>“The user experience design of a product essentially lies between the intentions of the product and the characteristics of your user.”</p>
                            <NavLink exact to="/about"><Button variant="contained" color="primary" classNameName="direct_about mb-5">
                                Get Started
      </Button></NavLink>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="i3" style={{ height: "92vh" }} />
                        <div className="carousel-caption d-sm-block d-md-block">
                            <h2 >Node.JS DEveloper</h2>
                            <p style={{marginBottom: "100px", width: "auto", margin: "auto auto 20px auto",fontSize:"1.3rem" }}>“A successful website does three things:
                            It attracts the right kinds of visitors.
                            Guides them to the main services or product you offer.
Collect Contact details for future ongoing relation.”</p>
<NavLink exact to="/about"><Button variant="contained" color="primary" classNameName="direct_about mb-5">
                                Get Started
      </Button></NavLink>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </header>
    </>
}

export default Home;
