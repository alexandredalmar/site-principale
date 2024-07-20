import Link from "next/link";
import React from "react";
import "./globals.css"
import Image from "next/image";


const  Home = () => {
  return (
    <div className="homePage">
      <div className="wrapper">
        <div className="mainContainer">
          <div className="video">
             Video d'introduction de notre entreprise
          </div>

          <div className="imgTxtContainer">
            <div className="picture"> IMG representant notre entrepri</div>
            <div className="txt">
              <h1 className="title">Entreprise LLinares Digital</h1>
             <p> Introduction de notre entreprise
             </p>
             <a>En savoir +</a>
              </div>
          </div>
          


          <h2>Nos modeles</h2>

          <div className="gridContainer">
            <div className="block"> Modem - 1</div>
            <div className="block">Model - 2</div>
            <div className="block">Model - 3</div>
            <div className="block"> Model - 4</div>
          </div>

          <h3 className="title">Ils nous ont fait confiance</h3>

          <div className="sliderMultipleImg">
            Ensemble des réalisations sous forme de slider - Voir ce qu'il y a de dipo en type de slider
          </div>

          <div className="contactContainer">
            <div className="formContainer">
            <form action=""></form>
            </div>
            <div className="txt">
              <p></p>
            </div>
            
          </div>

        </div>
      </div>

    
  
    </div>
  );
}

export default Home ;