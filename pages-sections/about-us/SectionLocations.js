import React from "react";
// react components for routing our app without refresh
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import examplesStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationSections/examplesStyle.js";
import imagesStyles from "assets/jss/nextjs-material-kit-pro/imagesStyles.js";

import Tanganyika from "assets/img/locations/tanganyika.jpg";
import Maindombe from "assets/img/locations/maindombe.jpg";
import SudKivu from "assets/img/locations/sudkivu.jpg";
import KasaïTshikapa from "assets/img/locations/kasaïtshikapa.jpg";
import Kwangu from "assets/img/locations/kwangu.jpg";
import Manyema from "assets/img/locations/manyema.jpg";
import HautKatanga from "assets/img/locations/hautkatanga.jpg";
import Equateur from "assets/img/locations/equateur.jpg";
import Bandundu from "assets/img/locations/bandundu.jpg";
import NordKivu from "assets/img/locations/nordkivu.jpg";
import Lualaba from "assets/img/locations/lualaba.jpg";
import NordUbangi from "assets/img/locations/nordubangi.jpg";
import Lamungala from "assets/img/locations/lamungala.jpg";
import KongoCentral from "assets/img/locations/kongocentral.jpg";
import Sankuru from "assets/img/locations/sankuru.jpg";
import KasaiCentrale from "assets/img/locations/kasaicentrale.jpg";
import KasaiOrientale from "assets/img/locations/kasaiorientale.jpg";
import BasUele from "assets/img/locations/basuele.jpg";

const styles = {
  ...examplesStyle,
  ...imagesStyles
};

const useStyles = makeStyles(styles);

export default function SectionLocations() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.section, classes.sectionDark)}>
      <div className={classes.container}>
        <GridItem md={8} className={classNames(classes.mrAuto, classes.mlAuto)}>
          <div className={classes.sectionDescription}>
            <h2 className={classes.title}>Membres du Conseil D'Administration</h2>
            <h5 className={classes.description}>
              The easiest way to get started is to use one of our pre-built
              example pages. From landing pages to e-commerce or blog pages, you
              will be able jump start your development. Show your clients a
              quick prototype and get inspired for your next project!
            </h5>
          </div>
        </GridItem>
        <GridContainer>
          <GridItem md={4} sm={4} xs={12}>
            <h4 className={classes.title}>Tanganyika</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={Tanganyika}
                alt="About us"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Maindombe</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={Maindombe}
                alt="Landing Page"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Sud Kivu</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={SudKivu}
                alt="Contact us"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Lamungala</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={Lamungala}
                alt="Blog Posts"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Kasai Centrale</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={KasaiCentrale}
                alt="Blog Posts"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Bas Uele</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={BasUele}
                alt="Blog Posts"
                className={classes.imgCard}
              />
            </Card>
          </GridItem>
          <GridItem md={4} sm={4} xs={12}>
            <h4 className={classes.title}>Kasaï Tshikapa</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={KasaïTshikapa}
                alt="Blog Post"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Kongo Central</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={KongoCentral}
                alt="Blog Posts"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Sankuru</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={Sankuru}
                alt="Blog Posts"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Nord–Kivu</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={NordKivu}
                alt="Product Pge"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Haut-Katanga</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={HautKatanga}
                alt="Login Page"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Kasai Orientale</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={KasaiOrientale}
                alt="Blog Posts"
                className={classes.imgCard}
              />
            </Card>
          </GridItem>
          <GridItem md={4} sm={4} xs={12}>
            <h4 className={classes.title}>Kwangu</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={Kwangu}
                alt="Pricing Page"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Manyema</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={Manyema}
                alt="Signup Page"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Equateur</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={Equateur}
                alt="Profile Page"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Bandundu</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={Bandundu}
                alt="Blog Posts"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Lualaba</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={Lualaba}
                alt="Lualaba"
                className={classes.imgCard}
              />
            </Card>
            <h4 className={classes.title}>Nord Ubangi</h4>
            <Card className={classes.imgCardExtended}>
              <img
                src={NordUbangi}
                alt="Blog Posts"
                className={classes.imgCard}
              />
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
