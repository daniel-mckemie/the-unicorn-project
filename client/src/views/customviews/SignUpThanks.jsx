import React from "react";
import Button from "components/CustomButtons/Button.jsx";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";
import { Link } from "react-router-dom";

class SignUpThanks extends React.Component {

  render() {

    return (
      <DefaultLayout heroHeight={0} noParallax={true}>
      <div style={{height:`120vh`, color:`black`,paddingTop:`30vh`}}>
      <center>
      <h1 style={{fontFamily:`Futura-Bold,Arial,Nunito`, fontWeight:`800`}}>THANK YOU FOR SIGNING UP!</h1>
      <div style={{height:`15vh`}}></div>
      <Link to="/profile">
      <Button style={{color:`black`, width:"33vw", fontSize:`1.5rem`}}color="warning">Get My Mac N Cheese On!<div style={{clipPath : `polygon(10% 40%, 70% 40%, 70% 20%, 100% 53%, 70% 83%, 70% 62%, 10% 63%)`, marginLeft:"3px", backgroundColor:"black ", width:"15vw",height:"2rem", display:"inline"}}></div></Button>
      </Link>
      </center>
      </div>
      </DefaultLayout>

    );
  }
}

export default SignUpThanks;
