import React from "react";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";
import SectionBlogs from "views/customviews/functionalcomponents/HomeCard.jsx";
import SectionContacts from "views/customviews/functionalcomponents/HomeLocation.jsx";
import SectionTeams from "views/customviews/functionalcomponents/HomeOurStory.jsx";
class Home extends React.Component {

  render() {

    return (
      <DefaultLayout parallaxImg={require('assets/images/hero.png')} h1Text="Welcome to S'Mac" h2Text="Irresistible Mac N' Cheese"
      heroHeight={400}
      >
        <SectionBlogs/>
        <SectionTeams content="S'MAC was a concept born at the Peanut Butter Co. in New York's Greenwich Village (what better venue for inspiration than another comfort food joint!). It was created by husband & wife team, Sarita & Caesar Ekya.
        While sitting down and savoring their PB & J sandwiches, Sarita casually mentioned to Caesar 'Wouldn't it be great if there was a place that served PB & J, Grilled Cheese Sandwiches and...MAC-N-CHEESE?!?! Comfort food galore!' Both of them laughed (and salivated for some time) and went on their way. But the idea couldn't be shaken -- well that is, the part about the mac-n-cheese couldn't be shaken. So they started on an adventure that would eventually lead them to the opening of their 'baby' S'MAC 9 months later." />
        <br/><br/>
        <SectionContacts />
      </DefaultLayout>

    );
  }
}

export default Home;
