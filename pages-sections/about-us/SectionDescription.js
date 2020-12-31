import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/nextjs-material-kit-pro/pages/aboutUsSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classNames(classes.aboutDescription, classes.textCenter)}>
      <GridContainer>
        <GridItem
          md={8}
          sm={8}
          className={classNames(classes.mrAuto, classes.mlAuto)}
        >
          <h4 className={classes.description}>
            L'Association veille à sensibiliser la femme et les enfants abandonnés, de la prise de 
            conscience de leurs sens humanitaires, afin de vivre comme tant d'autres personnes.
 	        </h4>
          <h4 className={classes.description}>
            Elle veille à sensibiliser la femme et les enfants abandonnés à protéger l'outil de la 
            population, bénéficiée du gouvernement de la République Démocratique du Congo ; pour 
            épargner l'Etat Congolais à des dépenses répétitives.
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
