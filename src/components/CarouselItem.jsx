import React from "react";
import "../assets/styles/components/CarouselItem.scss";

const CarouselItem = () => (
    <div className="carousel-item">
    <img className="carousel-item__img" src="src\assets\static\tazaLego.JPG" alt=""  />
    <div className="carousel-item__details">
      <p className="carousel-item__details--title">Celular</p>
      <div>
        <button class="main_btn">
              Añadir al carrito
        </button>
      </div>
    </div>
  </div>
);

export default CarouselItem;
