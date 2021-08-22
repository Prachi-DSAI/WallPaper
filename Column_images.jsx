import React from "react";
import "./Gallery.css";

export function Column_images(props) {
  return (
    <div id="Column_images">
     <div class="container">
        <img src={props.images1} className="image"/>
        <div class="overlay">
          <div className="icon">
              <i className="fas fa-arrow-circle-down"></i>
              <i className="fas fa-heart full"></i>
          </div>
        </div>
      </div>
      <div class="container">
        <img src={props.images2} className="image"/>
        <div class="overlay">
          <div className="icon">
              <i className="fas fa-arrow-circle-down"></i>
              <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
      <div class="container">
        <img src={props.images3} className="image"/>
        <div class="overlay">
          <div className="icon">
              <i className="fas fa-arrow-circle-down"></i>
              <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
      <div class="container">
        <img src={props.images4} className="image"/>
        <div class="overlay">
          <div className="icon">
              <i className="fas fa-arrow-circle-down"></i>
              <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
      <div class="container">
        <img src={props.images5} className="image"/>
        <div class="overlay">
          <div className="icon">
              <i className="fas fa-arrow-circle-down"></i>
              <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
      <div class="container">
        <img src={props.images6} className="image"/>
        <div class="overlay">
          <div className="icon">
              <i className="fas fa-arrow-circle-down"></i>
              <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
      <div class="container">
        <img src={props.images7} className="image"/>
        <div class="overlay">
          <div className="icon">
              <i className="fas fa-arrow-circle-down"></i>
              <i className="fas fa-heart"></i>
          </div>
        </div>
      </div>
      
      
    </div>
  );
}
