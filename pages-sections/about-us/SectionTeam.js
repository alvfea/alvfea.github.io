import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// import  from "@material-ui/icons/";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Muted from "components/Typography/Muted.js";

import teamsStyle from "assets/jss/nextjs-material-kit-pro/pages/sectionsSections/teamsStyle.js";

import ndaya from "assets/img/staff/ndaya.jpg";
import vicePresident from "assets/img/staff/vice-president.jpg";
import conseiller from "assets/img/staff/conseiller.jpg";
import mamieBilonda from "assets/img/staff/mamie-bilonda.jpg";
import siegeAdministratif from "assets/img/staff/siege-administratif.jpg";
import secretaireRapporteur from "assets/img/staff/secretaire-rapporteur.jpg";
import secretaireComptable from "assets/img/staff/secretaire-comptable.jpg";
import caissiere from "assets/img/staff/caissiere.jpg";
import coordinatriceGenerale from "assets/img/staff/coordinatrice-generale.jpg";

const useStyles = makeStyles(teamsStyle);

export default function SectionTeams({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.team}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={8}
              md={8}
              className={
                classes.mlAuto + " " + classes.mrAuto + " " + classes.textCenter
              }
            >
              <h2 className={classes.title}>L'équipe de direction</h2>
              <h5 className={classes.description}>
                L'Association veille à sensibiliser la femme et les enfants abandonnés, de la prise de 
                conscience de leurs sens humanitaires, afin de vivre comme tant d'autres personnes. 
                Rencontrez l'équipe de direction responsable de tout cela.
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <img src={ndaya} alt="..." />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${ndaya})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Ndaya</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Présidente</h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <img src={vicePresident} alt="..." />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${vicePresident})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Unknown Name</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Vice-présidente</h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <img src={conseiller} alt="..." />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${conseiller})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Unknown Name</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Conseiller</h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={mamieBilonda} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${mamieBilonda})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Mamie Bilonda</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Bureau d'études</h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={siegeAdministratif} alt="..." />
                  </a>
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${siegeAdministratif})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Unknown Name, Unknown Name, Unknown Name </h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Siege Administratif</h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <img src={secretaireRapporteur} alt="..." />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${secretaireRapporteur})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Unknown Name</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Secrétaire Rapporteur</h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <img src={secretaireComptable} alt="..." />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${secretaireComptable})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Unknown Name</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Secrétaire Comptable</h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <img src={caissiere} alt="..." />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${caissiere})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Abi Avio</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Caissière</h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <Card plain profile>
                <CardHeader image plain>
                  <img src={coordinatriceGenerale} alt="..." />
                  <div
                    className={classes.coloredShadow}
                    style={{
                      backgroundImage: `url(${coordinatriceGenerale})`,
                      opacity: "1"
                    }}
                  />
                </CardHeader>
                <CardBody plain>
                  <h4 className={classes.cardTitle}>Vévé</h4>
                  <Muted>
                    <h6 className={classes.cardCategory}>Coordinatrice Générale</h6>
                  </Muted>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
