import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Footer from "components/Footer/Footer.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import DefaultLayout from "views/customviews/DefaultLayout.jsx";

import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx";


const product1 = "http://progressandfortune.com/smac_images/menu_items/sampler.png";

const product2 = "http://progressandfortune.com/smac_images/menu_items/cheeseburger.png";

const product3 = "http://progressandfortune.com/smac_images/menu_items/4_cheese.png";
class Cart extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    return (
      <DefaultLayout parallaxImg={require('assets/images/hero.png')}
      heroHeight={"80vh"}>
          <div className={classes.container}>
            <Card plain>
              <CardBody plain>
                <h3 className={classes.cardTitle}>My Cart</h3>
                <Table
                  tableHead={[
                    "",
                    "Menu Item",
                    "Favorite",
                    "SIZE",
                    "PRICE",
                    "QTY",
                    "AMOUNT",
                    ""
                  ]}
                  tableData={[
                    [
                      <div className={classes.imgContainer}>
                        <img src={product1} alt="..." className={classes.img} />
                      </div>,
                      <span>
                        <a href="#sampler" className={classes.tdNameAnchor}>
                          Sampler
                        </a>
                        <br />

                      </span>,
                      "No",
                      "M",
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> 19.99
                      </span>,
                      <span>
                        1{` `}
                        <div className={classes.buttonGroup}>
                          <Button
                            color="info"
                            size="sm"
                            round
                            className={classes.firstButton}
                          >
                            <Remove />
                          </Button>
                          <Button
                            color="info"
                            size="sm"
                            round
                            className={classes.lastButton}
                          >
                            <Add />
                          </Button>
                        </div>
                      </span>,
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> 19.99
                      </span>,
                      <Tooltip
                        id="close1"
                        title="Remove item"
                        placement="left"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button link className={classes.actionButton}>
                          <Close />
                        </Button>
                      </Tooltip>
                    ],
                    [
                      <div className={classes.imgContainer}>
                        <img src={product2} alt="..." className={classes.img} />
                      </div>,
                      <span>
                        <a href="#sampler" className={classes.tdNameAnchor}>
                          Cheeseburger{" "}
                        </a>
                        <br />
                      </span>,
                      "No",
                      "M",
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> 19.99
                      </span>,
                      <span>
                        1{` `}
                        <div className={classes.buttonGroup}>
                          <Button
                            color="info"
                            size="sm"
                            round
                            className={classes.firstButton}
                          >
                            <Remove />
                          </Button>
                          <Button
                            color="info"
                            size="sm"
                            round
                            className={classes.lastButton}
                          >
                            <Add />
                          </Button>
                        </div>
                      </span>,
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> 19.99
                      </span>,
                      <Tooltip
                        id="close2"
                        title="Remove item"
                        placement="left"
                        classes={{ tooltip: classes.tooltip }}
                      >
                        <Button link className={classes.actionButton}>
                          <Close />
                        </Button>
                      </Tooltip>
                    ],
                    [
                      <div className={classes.imgContainer}>
                        <img src={product3} alt="..." className={classes.img} />
                      </div>,
                      <span>
                        <a href="#sampler" className={classes.tdNameAnchor}>
                          4 Cheese
                        </a>
                        <br />
                      </span>,
                      "No",
                      "L",
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> 19.99
                      </span>,
                      <span>
                        1{` `}
                        <div className={classes.buttonGroup}>
                          <Button
                            color="info"
                            size="sm"
                            round
                            className={classes.firstButton}
                          >
                            <Remove />
                          </Button>
                          <Button
                            color="info"
                            size="sm"
                            round
                            className={classes.lastButton}
                          >
                            <Add />
                          </Button>
                        </div>
                      </span>,
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> 19.99
                      </span>,
                      <Tooltip
                        id="close3"
                        title="Remove item"
                        placement="left"
                        classes={{ tooltip: classes.tooltip }}
                      >

                        <Button link className={classes.actionButton}>
                          <Close />
                        </Button>
                      </Tooltip>
                    ],
                    {
                      purchase: true,
                      colspan: "3",
                      amount: (
                        <span>
                          <small>$</small>59.97
                        </span>
                      ),
                      col: {
                        colspan: 3,
                        text: (
                            <a href="/thank-you">
                          <Button color="info" round>
                            Complete Purchase <KeyboardArrowRight />
                          </Button>
                          </a>
                        )
                      }
                    }
                  ]}
                  tableShopping
                  customHeadCellClasses={[
                    classes.textCenter,
                    classes.description,
                    classes.description,
                    classes.textRight,
                    classes.textRight,
                    classes.textRight
                  ]}
                  customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                  customCellClasses={[
                    classes.tdName,
                    classes.customFont,
                    classes.customFont,
                    classes.tdNumber,
                    classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                    classes.tdNumber + " " + classes.textCenter
                  ]}
                  customClassesForCells={[1, 2, 3, 4, 5, 6]}
                />
              </CardBody>
            </Card>

        </div>
      </DefaultLayout>
    );
  }
}

export default withStyles(shoppingCartStyle)(Cart);
