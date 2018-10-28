import React from "react";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";
import MenuItem from "views/customviews/functionalcomponents/MenuItem.jsx"
class Menu extends React.Component {

  render() {

    return (
      <DefaultLayout parallaxImg={require('assets/images/signup_hero.png')} heroHeight={"60vh"}>
      <center style={{display:`flex`,justifyContent:`center`}}>
      <h1 style={{fontFamily:`Futura-Bold,Arial,Nunito`, fontWeight:`800`}}>
      MENU</h1> <div style={{borderColor:`#ff802c`,borderWidth:`3px`, borderStyle:`solid`, display:`inline`,fontSize:`1rem`, padding:`.5rem`, height:`4rem`, margin:`1rem 2rem`}}><a style={{color:`#ff802c`, fontWeight:`300`}}href="https://www.ubereats.com/en-US/new-york/food-delivery/smac-east-village/F32sN5eFT8yHHoDBbK6u7g/" className="link" >Want it Delivered? <br/><span style={{fontWeight:"700",fontFamily:`Arial black`}}>UBER EATS</span></a></div>
      </center>
      <MenuItem name={"Name Data Here"} description={"Description Data Here"}
      image="http://progressandfortune.com/smac_images/menu_items/sampler.png"/>
      </DefaultLayout>

    );
  }
}

export default Menu;
