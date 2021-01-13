import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// @material-ui icons
import Apps from "@material-ui/icons/Apps";
import ViewDay from "@material-ui/icons/ViewDay";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import descriptionStyle from "assets/jss/nextjs-material-kit-pro/pages/presentationSections/descriptionStyle.js";

const useStyles = makeStyles(descriptionStyle);

export default function SectionDescription() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem md={8} sm={8}>
            <h4 className={classes.description}>
            Il est créé en date du 10 Mars 2019 à Kinshasa, une Association dénommée « Association de Lutte contre les Violences des Valeurs de la Femme et des Enfants Abandonnés »A.L.V.F.E.A asbl en sigle. TSHOMBA Gustave, TINA TATIANA KANGE, TSHIBANDA M Marcel, et UWEZO ERAY Héritier, tous souciés de la vie humain toute son Intégrité, à l'occasion de la journée Internationale de après avoir analysé les Informations fournies par le doyen et visionneur de l'Alvfea UWEZO ERAY Héritier, une Association qui va réconcilier la Société Congolaise et aider le Gouvernement à résoudre certaines questions qui s'imposent à l'égard de sa population pour mettre la femme au centre de tout Action (Education, Encadrement, Travail,  Mariage responsable, Naissance désirable etc...) , dans le but d'éradiquer le phénomène enfants abandonnés.
            L'Association veille à sensibiliser la femme et les enfants abandonnés, de la prise de conscience de leurs sens humanitaires, afin de vivre comme tant d'autres personnes.
 	          Elle veille à sensibiliser la femme et les enfants abandonnés à protéger l'outil de la population, bénéficiée du gouvernement de la République Démocratique du Congo ; pour épargner l'Etat Congolais à des dépenses répétitives.

            </h4>
          </GridItem>
        </GridContainer>
        <div className={classes.features}>
          <GridContainer>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Example Title"
                description="La multiplication des enfants de la rue dans les différentes villes de la République qui ne sont pas encadrés."
                icon={Apps}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Example Title"
                description="La multiplication des naissances non désirables à l'égard de la fille Congolaise en particulier et de la jeunesse Congolaise en général."
                icon={ViewDay}
                iconColor="primary"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Example Title"
                description="La multiplication des avortements forcés suite à l'incapacité de prise en charge par les auteurs des grossesses."
                icon={ViewCarousel}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Example Title"
                description="Un taux de décès plus élevés à l'égard de la femme et des enfants."
                icon={Apps}
                iconColor="danger"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Example Title"
                description="La multiplication de crimes sur toute l'étendue de la République (à Kinshasa les KULUNAS, à l'Est du pays les hommes à mains armés, ainsi que les groupes armés qui enrôlent les enfants."
                icon={ViewDay}
                iconColor="primary"
                vertical={true}
              />
            </GridItem>
            <GridItem md={4} sm={4}>
              <InfoArea
                title="Example Title"
                description="La multiplication des avortements forcés suite à l'incapacité de prise en charge par les auteurs des grossesses."
                icon={ViewCarousel}
                iconColor="success"
                vertical={true}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
