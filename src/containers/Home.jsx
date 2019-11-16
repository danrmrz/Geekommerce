import React from "react";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from '../components/CarouselItem';
import "../assets/styles/App.scss";

const Home = () => (
    <div className="Home">
        <Categories title="">
            <Carousel>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
            </Carousel>
        </Categories>
        <Categories title="">
            <Carousel>
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
              <CarouselItem />
            </Carousel>
        </Categories>
    </div>
);

export default Home;
