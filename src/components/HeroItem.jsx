import React from 'react';
import '../assets/styles/components/HeroItem.scss';
import leftArrowIcon from '../assets/static/icon-arrow-left.png';
import itemImage from '../assets/static/cassette.png';

const HeroItem = () => (
  <>
    <div className="hero-item item-one">
      <img src={itemImage} alt="" className="hero-item__img" />
      {/* <div className="hero-item__arrow arrowLeft">
        <img src={leftArrowIcon} alt="" className="hero-item__arrow--iconLeft"/>
      </div>
      <div className="hero-item__arrow arrowRight">
        <img src={leftArrowIcon} alt="" className="hero-item__arrow--iconRight"/>
      </div> */}
    </div>
    <div className="hero-item">
      <img src={itemImage} alt="" className="hero-item__img" />
      <div className="hero-item__arrow arrowLeft">
        <img src={leftArrowIcon} alt="" className="hero-item__arrow--iconLeft"/>
      </div>
      <div className="hero-item__arrow arrowRight">
        <img src={leftArrowIcon} alt="" className="hero-item__arrow--iconRight"/>
      </div>
    </div>
    <div className="hero-item">
      <img src={itemImage} alt="" className="hero-item__img" />
      {/* <div className="hero-item__arrow arrowLeft">
        <img src={leftArrowIcon} alt="" className="hero-item__arrow--iconLeft"/>
      </div>
      <div className="hero-item__arrow arrowRight">
        <img src={leftArrowIcon} alt="" className="hero-item__arrow--iconRight"/>
      </div> */}
    </div>
    <div className="hero-item">
      <img src={itemImage} alt="" className="hero-item__img" />
      <div className="hero-item__arrow arrowLeft">
        <img src={leftArrowIcon} alt="" className="hero-item__arrow--iconLeft"/>
      </div>
      <div className="hero-item__arrow arrowRight">
        <img src={leftArrowIcon} alt="" className="hero-item__arrow--iconRight"/>
      </div>
    </div>
    <div className="hero-item">
      <img src={itemImage} alt="" className="hero-item__img" />
      <div className="hero-item__arrow arrowLeft">
        <img src={leftArrowIcon} alt="" className="hero-item__arrow--iconLeft"/>
      </div>
      <div className="hero-item__arrow arrowRight">
        <img src={leftArrowIcon} alt="" className="hero-item__arrow--iconRight"/>
      </div>
    </div>
  </>
);

export default HeroItem;