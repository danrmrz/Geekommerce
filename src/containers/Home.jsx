import React from "react";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from '../components/CarouselItem';
import "../assets/styles/App.scss";

const Home = () => (
    <div className="Home">
        <Categories title="">
            <Carousel>
              <CarouselItem image="src\assets\static\tazaLego.JPG" title="Taza Lego" />
              <CarouselItem image="src\assets\static\almoada.JPG" title="Almohada iPhone" />
              <CarouselItem image="src\assets\static\lamparaBatman.JPG" title="Lámpara LED Batman" />
              <CarouselItem image="src\assets\static\llaveroStar.JPG" title="Llavero Darth Vader" />
              <CarouselItem image="src\assets\static\alcanciaZombi.JPG" title="Alcancía Zombie" />
            </Carousel>
        </Categories>
        <Categories title="">
            <Carousel>
              <CarouselItem image="src\assets\static\cubo.JPG" title="Cubo IQ Brain Cube" />
              <CarouselItem image="src\assets\static\robotSolar.JPG" title="Robot Solar" />
              <CarouselItem image="src\assets\static\aretesPlanta.JPG" title="Aretes Planta Carnibora" />
              <CarouselItem image="src\assets\static\anilloDestapador.JPG" title="Anillo Destapador" />
              <CarouselItem image="src\assets\static\gorraPokemon.JPG" title="Gorra Pokemon Ash" />
            </Carousel>
        </Categories>
    </div>
);

export default Home;
