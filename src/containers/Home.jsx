import React from "react";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from '../components/CarouselItem';
import "../assets/styles/App.scss";

const Home = () => (
    <div className="Home">
        <Categories title="Lo más nuevo">
            <Carousel>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
            </Carousel>
        </Categories>
    </div>
);

export default Home;
