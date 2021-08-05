import React, { Component } from "react";
import './App.css';



import Carousel from "react-bootstrap/Carousel";

const BootstrapCarousel = (props) =>  {
    const IMG_API = "https://image.tmdb.org/t/p/w1280"
    console.log(props.title)



    return (
      <div>
        <div class="container-fluid">
          <div className="row title" style={{ marginBottom: "20px" }}>
          </div>
        </div>

        <div className="container-fluid">
          <Carousel>
            <Carousel.Item style={{ height: "400px" }}>
              <img
                style={{ height: "900px" }}
                className="d-block w-95"
                src={IMG_API + props.posterimage} 
              />

              <Carousel.Caption>
                <h3>{props.title}</h3>
              </Carousel.Caption>
            </Carousel.Item>

            

            
          </Carousel>
        </div>
      </div>
    );
  }


export default BootstrapCarousel;
