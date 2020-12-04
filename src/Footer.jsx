import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';


const Footer = () => {
    return (
        <>
            <footer className="w-100 wrapper mt-2" style={{paddingTop:"35px",backgroundColor:"rgba(0,0,0,0.9)",paddingBottom:"5px",diplay:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <div style={{display:"flex",flexDirection:"column",textAlign:"center"}}>
                <a style={{fontSize:"1.2rem",color:"white"}} href="https://www.mail.trideepsardar@gmail.com"><MailIcon style={{fontSize:"1.2rem",color:"white"}}/> trideepsardar@gmail.com</a>
                <p className="text-white " href="www.google.com" style={{fontSize:"1.2rem"}}><CallIcon style={{fontSize:"1.2rem"}}/><span style={{color:"orange"}}>+91-</span>6350444059</p>
                </div>
                <div className="text-center my-2 w-25 mx-auto active" style={{display:"flex",flexDirection:"row",justifyContent:"space-around",color:"white"}}>
                <a href="www.google.com"><LinkedInIcon style={{fontSize:"3rem"}}/></a>
                <a href="www.google.com"><GitHubIcon style={{fontSize:"3rem"}}/></a>
                <a href="www.google.com"><FacebookIcon style={{fontSize:"3rem"}}/></a>
                <a href="www.google.com"><InstagramIcon style={{fontSize:"3rem"}}/></a>
                </div>
                <p className="text-center" style={{fontSize:"1.4rem",color:"rgba(277,277,277,0.4)",borderBottom:"2px solid white",width:"48%",margin:"20px auto"}}>Copyright &copy;2020 <a href="https://trideep-website.herokuapp.com" style={{color:"yellow",textDecoration:"none"}}>trideep.works</a> | All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Footer;