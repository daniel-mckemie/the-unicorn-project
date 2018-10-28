import React from "react";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import Check from "@material-ui/icons/Check";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";


import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx";

import city from "assets/img/examples/city.jpg";
import ourStory from "assets/images/home_ourstory.png";

const ourStoryImg ={
  height: "24rem",
  width: "40rem",
  backgroundSize:"contain",
  backgroundPosition:"center",
  margin:"0"
}
const ourStoryStyle ={
  width: "12rem",
  height: "2.5rem",
  fontFamily: "Nunito",
  fontSize: "2.5rem",
  fontWeight: "bold",
  letterSpacing: "0.01rem",
  color: "#4a4a4a",
  margin:"0"
}

const RegularMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{lat: 40.730212, lng: -73.985918 - 0.025 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 40.730212, lng: -73.985918 }} />
    </GoogleMap>
  ))
);

class SectionContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: []
    };
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div className="cd-section" {...rest}>
        {/* Contact us 2 START */}
        <div className={classes.contacts2}>
          <div className={classes.map}>
            <RegularMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAh9s0vi2SVmoC5S9B67Q0d-xoL43p4QRE"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={
                <div
                  style={{
                    height: `100%`,
                    borderRadius: "6px",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "flex-end"
                  }}
                />
              }
              mapElement={<div style={{ height: `100%`, width:`100%`,zIndex:"0" }} />}
            />
          </div>
          <GridItem xs={12} sm={6} md={6}>
            <Card className={classes.card2}>

                <CardHeader contact color="warning" className={classes.textCenter}>
                  <h2 className={classes.cardTitle}>Hours & Location</h2>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={6} md={6}>
                      <InfoArea
                        className={classes.infoArea2}
                        title={"Contact Info"}
                        description={
                          <span>
                            197 1st Avenue<br/> New York, NY 10003 <br/> (212) 358-7912 <br/>eastvillage@smacnyc.com
                          </span>
                        }
                        icon={Phone}
                        iconColor="warning"
                      />
                    </GridItem>
                    <GridItem xs={12} sm={6} md={6}>
                      <InfoArea
                        className={classes.infoArea2}
                        title="Hours of Operation"
                        description={
                          <span>
                          Monday-Thursday,Sunday
                          <br/>
                          11am - 11pm
                          <br/>
                          Friday & Saturday
                          <br/>
                          11am - 12am
                          </span>
                        }
                        icon={PinDrop}
                        iconColor="warning"
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
            </Card>
          </GridItem>


        </div>
        {/* Contact us 2 END */}
      </div>
    );
  }
}

export default withStyles(contactsStyle)(SectionContacts);
