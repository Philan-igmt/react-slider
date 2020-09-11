import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Loading from "../loading/Loading";
import ReactTooltip from "react-tooltip";

const Sliderr = () => {
  const [dataa, setDataa] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [myIndex, setMyIndex] = useState("");

  // To access underlying DOM object for the slider
  const sliderRef = useRef();

  const next = () => {
    sliderRef.current.slickNext();
  };
  // Trigger previous method to show the previous slides
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  //to get the data from  database
  const getData = async () => {
    fetch("/images")
      .then((res) => res.json())
      .then((allProducts) =>
        setDataa(
          allProducts,
          console.log(`products fetched`, allProducts),
          setLoading(false)
        )
      );
  };

  //to call the function once after reload
  useEffect(() => {
    getData();
  }, []);

  //setting the slider properties
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  //image change slide on click 1/2
  const change = (e) => {
    const results = window.matchMedia("(max-width:760px)");
    if (results.matches == false) {
      if (e.pageX < 845) {
        previous();
      } else if (e.pageX > 845) {
        next();
      }
    }
    
  };

  //display components with conditions
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="center">
        <Slider
          className="slider"
          {...settings}
          ref={(slider) => (sliderRef.current = slider)}
        >
          {dataa.map((pic, index) => {
            return (
              <div key={pic._id}>
                <div className="card all_data">
                  <div className="card-image">
                    <img
                      src={pic.URL}
                      alt={pic.name}
                      className="image"
                      onClick={change}
                      // onMouseOver={setMyIndex(String(index))}
                    />
                  </div>
                  <div className="card-content">
                    <h5>{pic.name}</h5>
                    <p>"{pic.description}"</p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
        <ReactTooltip />

        <button className="btn red" data-tip=":(" onClick={previous}>
          Prev
        </button>
        <button className="btn green" data-tip=":(" onClick={next}>
          Next
        </button>
      </div>
    );
  }
};

export default Sliderr;
