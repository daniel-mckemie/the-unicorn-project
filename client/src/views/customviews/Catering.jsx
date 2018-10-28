import React from "react";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";

class Catering extends React.Component {

  render() {

    return (
      <DefaultLayout parallaxImg={require('assets/images/catering_hero.png')} heroHeight={"60vh"}>

      <center >
      <h1 style={{fontFamily:`Futura-Bold,Arial,Nunito`, fontWeight:`800`, color:`#ff802c`, fontSize:`4rem`}}>CATERING</h1>
        <h2 style={{fontFamily:`Futura-Bold,Arial,Nunito`, fontWeight:`700`}}>Hosting a party or event? Let us cater it!</h2>
        <h3 style={{fontFamily:`Futura-Bold,Arial,Nunito`, fontWeight:`700`}}>
        Partay! sizes are available for takeout only and are served in half size catering pans. <br/>Each pan will serve 8-12 people depending upon what else is on the menu.
        </h3>
        <h3 style={{fontFamily:`Futura-Bold,Arial,Nunito`, fontWeight:`700`}}>
        Although we wil try our best to fulfill Partay! orders on the same day, we request that you <br/>give us at least 24 hour advance notice so that we may be sure to be prepared.
        </h3>



      </center>
      <div style={{backgroundColor:`#ff802c`, width:`100%`,marginBottom:`10vh`, fontFamily:`Futura, Nunito, Arial`, fontWeight:`bold`}}>
      <center><h3>TO ORDER CATERING:</h3></center>
      <div style={{display:`flex`, justifyContent:`center`,}}>
      <h4 style={{fontFamily:`Futura, Nunito, Arial`, fontWeight:`bold`}}>Call Us At : <br/>212-358-7912</h4>
      <div style={{width:`10rem`}}>{" "}</div>
      <h4 style={{fontFamily:`Futura, Nunito, Arial`, fontWeight:`bold`}}>Order Online : <br/><a href="http://catercow.com" className="">Cater Cow</a></h4>
      </div>

      </div>
      </DefaultLayout>

    );
  }
}

export default Catering;
