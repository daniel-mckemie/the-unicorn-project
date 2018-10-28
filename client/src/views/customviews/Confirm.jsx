import React from "react";
import Button from "components/CustomButtons/Button.jsx";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";
import image from "assets/images/confirm_hero.png";
class Confirm extends React.Component {

  render() {

    return (
      <DefaultLayout heroHeight="100vh" parallaxImg={image} h1Text={<h1 style={{fontFamily:`Futura-Bold,Arial,Nunito`, fontWeight:`800`, backgroundColor:`#ff802c`,color:`white`, fontSize:`6rem`}}>Thank You For Ordering</h1>} h2Text={  <a href="/profile">
        <div style={{height:`15vh`}}></div>
        <Button style={{color:`black`, width:"33vw", fontSize:`1.5rem`}}color="warning">Get My Mac N Cheese On!<div style={{clipPath : `polygon(10% 40%, 70% 40%, 70% 20%, 100% 53%, 70% 83%, 70% 62%, 10% 63%)`, marginLeft:"3px", backgroundColor:"black ", width:"15vw",height:"2rem", display:"inline"}}></div></Button>
        </a>}>
      </DefaultLayout>

    );
  }
}

export default Confirm;
