import React from "react";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";
import HomeCard from "views/customviews/functionalcomponents/HomeCard.jsx";
import SectionContacts from "views/customviews/functionalcomponents/HomeLocation.jsx";
import SectionTeams from "views/customviews/functionalcomponents/HomeOurStory.jsx";
class Home extends React.Component {
  componentDidMount() {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    if (window.location.href.lastIndexOf("#") > 0)
      document.getElementById(href).scrollIntoView();
    window.addEventListener("scroll", this.updateView);
    this.updateView();
  }
  componentDidUpdate() {
    var href = window.location.href.substring(
      window.location.href.lastIndexOf("#") + 1
    );
    document.getElementById(href).scrollIntoView();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateView);
  }
  easeInOutQuad(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }
  updateView() {
    var contentSections = document.getElementsByClassName("cd-section");
    var navigationItems = document
      .getElementById("header")
      .getElementsByTagName("a");
  }
  smoothScroll(target) {
    var targetScroll = document.getElementById(target);
    this.scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
  }
  scrollGo(element, to, duration) {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = this.easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    }.bind(this);
    animateScroll();
  }
  render() {

    return (

      <div id="begin">
      <DefaultLayout parallaxImg={require('assets/images/hero.png')} h1Text="Welcome to S'Mac" h2Text="Irresistible Mac N' Cheese"
      heroHeight={"80vh"}
      >
        <HomeCard/>
        <SectionTeams id="ourstory"content="S'MAC was a concept born at the Peanut Butter Co. in New York's Greenwich Village (what better venue for inspiration than another comfort food joint!). It was created by husband & wife team, Sarita & Caesar Ekya.
        While sitting down and savoring their PB & J sandwiches, Sarita casually mentioned to Caesar 'Wouldn't it be great if there was a place that served PB & J, Grilled Cheese Sandwiches and...MAC-N-CHEESE?!?! Comfort food galore!' Both of them laughed (and salivated for some time) and went on their way. But the idea couldn't be shaken -- well that is, the part about the mac-n-cheese couldn't be shaken. So they started on an adventure that would eventually lead them to the opening of their 'baby' S'MAC 9 months later." />
        <br/><br/>
        <SectionContacts className="cd-section" />
      </DefaultLayout>
</div>
    );
  }
}

export default Home;
