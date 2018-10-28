import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Info from "components/Typography/Info.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Button from "components/CustomButtons/Button.jsx";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.jsx";


import homeOrder from "assets/images/home_order.png";
import homeMenu from "assets/images/home_menu.png";
import homeCatering from "assets/images/home_catering.png";

const imageContain ={
  height: "18rem",
  width: "18rem",
  backgroundSize:"contain",
  backgroundPosition:"center"
}
const cardFooterStyle ={
  width: "12rem",
  height: "2.5rem",
  fontFamily: "Nunito",
  fontSize: "2rem",
  fontWeight: "bold",
  letterSpacing: "0.01rem",
  color: "#4a4a4a",
  marginTop:"0.05rem"
}

function SectionBlogs({ ...props }) {
  const { classes, ...rest } = props;
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={12}
              md={10}
              className={`${classes.mlAuto} ${classes.mrAuto}`}
            >

              <br />
              <GridContainer>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="/order" onClick={e => e.preventDefault()}>
                        <img style={imageContain} src={homeOrder} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${homeOrder})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <center>
                        <h1 style={cardFooterStyle}>ORDER</h1>
                      </center>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="/menu" onClick={e => e.preventDefault()}>
                        <img style={imageContain} src={homeMenu} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${homeMenu})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                    <center>
                    <h1 style={cardFooterStyle}>MENU</h1>
                    </center>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={4} md={4}>
                  <Card plain blog>
                    <CardHeader plain image>
                      <a href="/catering" onClick={e => e.preventDefault()}>
                        <img style={imageContain} src={homeCatering} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${homeCatering})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                    <CardBody plain>
                      <center style ={{width:"100%"}}>
                      <h1 style={cardFooterStyle}>CATERING</h1>
                      </center>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}

export default withStyles(blogsStyle)(SectionBlogs);
