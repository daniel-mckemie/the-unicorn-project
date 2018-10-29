import React from "react";
import axios from 'axios';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
// core components
import { Link } from "react-router-dom";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.jsx";

import image from "assets/images/signup_hero.png";

class CreateAccountForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checked: [1]
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  async registerUser(userData) {
    const api_end = '/api/users/register'
    const response = await axios.post(api_end)
    this.setState({
      email: response.email,
      password: response.password
    })
    console.log(response.email);
    console.log(response.password)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password,    
    };

    this.props.registerUser(newUser, this.props.history);
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
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes, email, password, ...rest } = this.props;
    return (
      <div {...rest}>
        <div

          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div style={{backgroundColor:`#ff802c`,borderRadius:`100%`, height: `100vh`, width:`50vw`, minWidth:`696px`}} className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={10} md={10}>
                <Card plain style={{backgroundColor:`rgba(255,255,255,0)`}} >
                  <h3 className={classes.cardTitle}>Sign Up To Be S'Mac Insider!</h3>
                  <h5 className={`${classes.textCenter}`,`${classes.cardTitle}`}>Saved orders and Faster Checkout means you’re fewer<br/> clicks away from Mac and Cheese than ever before.</h5>
                  <CardBody>
                    <GridContainer justify="center">
                      <GridItem xs={12} sm={10} md={10}>
                        <form onSubmit={this.onSubmit} style={{backgroundColor:`white`, padding:`10%`, }} className={`${classes.form}`, `${classes.cardSignup}`}>
                          <CustomInput
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Face
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "First Name..."
                            }}
                          />
                          <CustomInput
                            value={this.email}
                            onChange={this.onChange}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses,

                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Email
                                    className={classes.inputAdornmentIcon}
                                  />
                                </InputAdornment>
                              ),
                              placeholder: "Email...",                              
                            }}
                          />
                          <CustomInput
                            value={this.password}
                            onChange={this.onChange}
                            formControlProps={{
                              fullWidth: true,
                              className: classes.customFormControlClasses,                              
                            }}
                            inputProps={{
                              startAdornment: (
                                <InputAdornment
                                  position="start"
                                  className={classes.inputAdornment}
                                >
                                  <Icon className={classes.inputAdornmentIcon}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                              ),
                              placeholder: "Password...",                                                          
                            }}
                          />
                          <FormControlLabel
                            classes={{
                              label: classes.label
                            }}
                            control={
                              <Checkbox
                                tabIndex={-1}
                                onClick={() => this.handleToggle(1)}
                                checkedIcon={
                                  <Check className={classes.checkedIcon} />
                                }
                                icon={
                                  <Check className={classes.uncheckedIcon} />
                                }
                                classes={{
                                  checked: classes.checked,
                                  root: classes.checkRoot
                                }}
                                checked={
                                  this.state.checked.indexOf(1) !== -1
                                    ? true
                                    : false
                                }
                              />
                            }
                            label={
                              <span>
                                I agree to the{" "}
                                <a href="#pablo">terms and conditions</a>.
                              </span>
                            }
                          />
                          <div className={classes.textCenter}>
                          <Link to="/signup-thanks">
                            <Button round style={{backgroundColor:"yellow", color:"black", width:`50%`}}>
                              Create Account
                              <div style={{clipPath : `polygon(10% 40%, 70% 40%, 70% 20%, 100% 53%, 70% 83%, 70% 62%, 10% 63%)`, marginLeft:"3px", backgroundColor:"black ", width:"2rem",height:"2rem", display:"inline"}}></div>
                            </Button>
                            </Link>
                          </div>
                        </form>
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(signupPageStyle)(CreateAccountForm);
