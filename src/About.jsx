import React from 'react';
import Card from './Card';
import Data from './Data';

const About = () => {
    return (<>
        <div className="about_main bg-dark w-100" style={{ minHeight: "100vh" }}>
            <div className="about_main_inner text-capitalize container-fluid text-center text-white" style={{ paddingTop: "100px" }}>
                <h1>Welcome to our creative website</h1>
                <p>we do what people want, Not what we want.</p>
                <p>our first priority is client satisfaction ,coz we do quality work to impress our client from every aspects.</p>
            </div>
            <div>
                <h2 className="text-center m-4 mt-5 text-white">Technolgies we use in our work</h2>
                <div className="row container-fluid text-center">
                    {
                        Data.map((val,index)=>{
                            return <Card image={val.image} key={index} title={val.title} sub_title={val.sub_title}/>
                        })
                    }
                </div>
            </div>
        </div>
    </>)
}

export default About;