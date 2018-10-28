import React from "react";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons

import Add from "@material-ui/icons/Add";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Badge from "components/Badge/Badge.jsx";

import Clearfix from "components/Clearfix/Clearfix.jsx";
import Button from "components/CustomButtons/Button.jsx";

import christian from "assets/img/faces/christian.jpg";

import HomeCard from "views/customviews/functionalcomponents/HomeCard.jsx";
import SectionContacts from "views/customviews/functionalcomponents/HomeLocation.jsx";
import SectionTeams from "views/customviews/functionalcomponents/HomeOurStory.jsx";
import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.jsx";

class Profile extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const name = "Christian";
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
    <DefaultLayout h1Text={`Welcome ${name}`}parallaxImg={require('assets/images/signup_hero.png')} heroHeight={"60vh"}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={christian} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button
                      justIcon
                      simple
                      color="dribbble"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-dribbble"} />
                    </Button>
                    <Button
                      justIcon
                      simple
                      color="twitter"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      simple
                      color="pinterest"
                      className={classes.margin5}
                    >
                      <i className={classes.socials + " fab fa-pinterest"} />
                    </Button>
                  </div>
                </div>
                <div className={classes.follow}>
                  <Tooltip
                    id="tooltip-top"
                    title="Follow this user"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <Button
                      justIcon
                      round
                      color="primary"
                      className={classes.followButton}
                    >
                      <Add className={classes.followIcon} />
                    </Button>
                  </Tooltip>
                </div>
              </GridItem>
            </GridContainer>
            <div
              className={classNames(classes.description, classes.textCenter)}
            >
              <p>
                I just love Mac and Cheese Yes I do... uh huh...
                {" "}
              </p>
            </div>

            <Clearfix />
          </div>
          <div id="begin"></div>
            <HomeCard />
            <SectionTeams id="ourstory"content="S'MAC was a concept born at the Peanut Butter Co. in New York's Greenwich Village (what better venue for inspiration than another comfort food joint!). It was created by husband & wife team, Sarita & Caesar Ekya.
            While sitting down and savoring their PB & J sandwiches, Sarita casually mentioned to Caesar 'Wouldn't it be great if there was a place that served PB & J, Grilled Cheese Sandwiches and...MAC-N-CHEESE?!?! Comfort food galore!' Both of them laughed (and salivated for some time) and went on their way. But the idea couldn't be shaken -- well that is, the part about the mac-n-cheese couldn't be shaken. So they started on an adventure that would eventually lead them to the opening of their 'baby' S'MAC 9 months later." />
            <br/><br/>
            <SectionContacts className="cd-section" />
      </DefaultLayout>
    );
  }
}

export default withStyles(profilePageStyle)(Profile);
