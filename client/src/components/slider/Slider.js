import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css";
import Loading from "../loading/Loading";
import ReactTooltip from "react-tooltip";

const Sliderr = () => {
  const [dataa, setDataa] = useState([]);
  const [indexx, setIndexx] = useState("");
  const [loading, setLoading] = useState(true);

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
    fetch("http://localhost:5000/images")
      .then((res) => res.json())
      .then((allProducts) =>
        setDataa(
          allProducts,
          console.log(`products fetched`, allProducts),
          setLoading(false)
        )
      );
  };

  useEffect(() => {
    getData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  const change = (e) => {
    // if (e.clientX > 476) {
    //   next();
    // }
    console.log(e.maxWidth);
  };

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
                      onMouseOver={() => {
                        setIndexx(String(index - 1));
                        console.log(indexx);
                      }}
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

        <button
          className="btn red tooltipped"
          // data-position="bottom"
          // data-tooltip="dssssss"
          onClick={previous}
          data-tip="hello world"
        >
          Prev
        </button>
        <button className="btn green" onClick={next}>
          Next
        </button>
      </div>
    );
  }
};

export default Sliderr;
