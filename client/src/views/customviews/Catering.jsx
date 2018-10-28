import React from "react";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";

class Catering extends React.Component {

  render() {

    return (
      <DefaultLayout parallaxImg={require('assets/images/catering_hero.png')} heroHeight={300}>

      </DefaultLayout>

    );
  }
}

export default Catering;
