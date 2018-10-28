import React from "react";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";

class Profile extends React.Component {

  render() {

    return (
      <DefaultLayout parallaxImg={require('assets/images/catering_hero.png')} heroHeight={300}>

      </DefaultLayout>

    );
  }
}

export default Profile;
