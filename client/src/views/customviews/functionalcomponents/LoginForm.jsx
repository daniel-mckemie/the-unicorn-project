import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
// core components
import { Link } from "react-router-dom";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";


class LoginForm extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div
          style={{
            marginTop:"15vh",
            backgroundColor:"white",
            height:"100vh",
            width:"100vw"
          }}
        >
          <div style={{ paddingTop:"10vh"}}className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form className={classes.form}>
                    <CardHeader
                    style={{backgroundColor:`#ff802c`}}
                      signup
                      className={classes.cardHeader}
                    >
                      <h2   style={{color:"black", fontFamily:"Futura,Arial,Nunito Sans"}}>Welcome Back!</h2>
                    </CardHeader>
                    <p
                      className={`${classes.textCenter}`}
                    >
                      Please Login To Connect Your Account
                    </p>
                    <CardBody signup>
                      <CustomInput
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "First Name...",
                          type: "text",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Face className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Email...",
                          type: "email",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        id="pass"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          placeholder: "Password",
                          type: "password",
                          startAdornment: (
                            <InputAdornment position="start">
                              <Icon className={classes.inputIconsColor}>
                                lock_utline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                    </CardBody>
                    <div className={classes.textCenter}>
                    <Link to="/signup">
                    <span>Don't Have An Account Sign Up Here</span></Link>
                    <Link to="/profile">
                      <Button color="warning" size="lg">
                        <span style={{color:"black"}}>Get My Mac and Cheese On!</span>
                        <div style={{clipPath : `polygon(10% 40%, 70% 40%, 70% 20%, 100% 53%, 70% 83%, 70% 62%, 10% 63%)`, marginLeft:"3px", backgroundColor:"black ", width:"4rem",height:"2rem", display:"inline"}}></div>
                      </Button>
                      </Link>
                    </div>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginForm);
