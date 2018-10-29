/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Build from "@material-ui/icons/Build";
import Subject from "@material-ui/icons/Subject";
import FormatPaint from "@material-ui/icons/FormatPaint";
import Code from "@material-ui/icons/Code";
import Dashboard from "@material-ui/icons/Dashboard";
import Timeline from "@material-ui/icons/Timeline";
import Group from "@material-ui/icons/Group";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Muted from "components/Typography/Muted.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Badge from "components/Badge/Badge.jsx";

import projectsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/projectsStyle.jsx";

import office2 from "assets/img/examples/office2.jpg";
import cardBlog3 from "assets/img/examples/card-blog3.jpg";
import cardProject1 from "assets/img/examples/card-project1.jpg";
import cardProject2 from "assets/img/examples/card-project2.jpg";
import cardProject3 from "assets/img/examples/card-project3.jpg";
import cardProject4 from "assets/img/examples/card-project4.jpg";
import cardProject5 from "assets/img/examples/card-project5.jpg";
import cardProject6 from "assets/img/examples/card-project6.jpg";

function MenuItem({ ...props }) {
  const { classes,name,image,description, ...rest } = props;
  return (

          
            <GridItem xs={12} sm={6} md={4}>
              <Card
                raised
                background
                style={{ backgroundImage: `url(${image})` }}
              >
                <CardBody background>
                  <h6 className={classes.cardCategory}>{name}</h6>
                  <a href="#pablito" onClick={e => e.preventDefault()}>
                    <h3 className={classes.cardTitleWhite}>
                      Order Your {name} Now
                    </h3>
                  </a>
                  <p className={classes.cardDescription}>
                    {description}
                  </p>
                  <Button round color="danger">
                    <Icon>shopping_cart</Icon> Add To Cart
                  </Button>
                </CardBody>
              </Card>
            </GridItem>


  );
}

export default withStyles(projectsStyle)(MenuItem);
