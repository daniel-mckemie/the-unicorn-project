import React from "react";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";
import SectionBlogs from "views/SectionsPage/Sections/SectionBlogs.jsx"
class Home extends React.Component {

  render() {

    return (
      <DefaultLayout parallaxImg={require('assets/images/hero.png')} h1text="Welcome to S'Mac" h2text="Irresistible Mac N' Cheese">
        <SectionBlogs/>
      </DefaultLayout>

    );
  }
}

export default Home;
