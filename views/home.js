import SectionHomeGrid from "@/components/Sections/SectionsHome/SectionsHomeGrid/SectionHomeGrid";
import Grid from "@/components/ui/Grid";
import React from "react";

const HomePage = () => {
  return (
    <div className='homePage'>
      <div className='wrapper'>
        <div className='mainContainer'>
          <div className='video'>Video d'introduction de notre entreprise</div>

          <div className='imgTxtContainer'>
            <div className='picture'> IMG representant notre entrepri</div>
            <div className='txt'>
              <h1 className='title'>Entreprise LLinares Digital</h1>
              <p> Introduction de notre entreprise</p>
              <a>En savoir +</a>
            </div>
          </div>

          <h2>Nos modeles</h2>
          <Grid>
            <SectionHomeGrid />
          </Grid>

          <h3 className='title'>Ils nous ont fait confiance</h3>

          <div className='sliderMultipleImg'>
            Ensemble des réalisations sous forme de slider - Voir ce qu'il y a
            de dipo en type de slider
          </div>

          <div className='contactContainer'>
            <div className='formContainer'>
              <form action=''></form>
            </div>
            <div className='txt'>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
