import React, { Component } from "react";
import "./FinalBlogs.css";
import Slider from "react-slick";
import Button from "@material-ui/core/Button";
import ImgMediaCard, {
  TopNews,
  TopNewsAll,
  TopNewsBlog,
} from "../Topnews/TOpNews";
import Pol from "../Pol/Pol";

import data from "./../../data.json";
 

console.log(data);

class FinalBlogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 1000,
      cssEase: "linear",
    };
    return data.blogData.map((blogData, i) => {
      return (
        <div className="container">
          <h4>Latest news</h4>
          <hr />
          <div className="slider-1">
            <Slider
              asNavFor={this.state.nav2}
              ref={(slider) => (this.slider1 = slider)}
            >
              <div className="dic">
                <img className="img-1" src={blogData.imageUrl} alt="slide1" />
              </div>
              <div>
                <img className="img-1" src={blogData.imageUrl} />
              </div>
              <div>
                <img className="img-1" src={blogData.imageUrl} alt="slide1" />
              </div>
              <div>
                <img className="img-1" src={blogData.imageUrl} alt="slide1" />
              </div>
            </Slider>
          </div>
          <div className="slider-2">
            <Slider
              {...settings}
              asNavFor={this.state.nav1}
              ref={(slider) => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              <div>
                <ImgMediaCard />
              </div>
              <div>
                <TopNewsBlog />
              </div>
              <div>
                <TopNews />
              </div>
              <div>
                <TopNewsAll />
              </div>
            </Slider>
          </div>

          <div className="container1">
            <h2>Recent Articles</h2>
            <hr />
            <div className="articleCard-1">
              <Button
                style={{
                  marginLeft: "120px",
                  color: "white",
                  backgroundColor: "red",
                  borderRadius: "10px",
                  fontSize: "9px",
                  position: "absolute",
                  top: "10%",
                  marginLeft: "8px",
                }}
                size="small"
                color="primary"
              >
                Read More
              </Button>
              <h3>{blogData.title} </h3>
              <img
                style={{
                  width: " 140px",
                  height: "80px",
                  position: "absolute",
                  top: 0,
                  borderRadius: "13%",
                  left: "77%",
                }}
                src={blogData.imageUrl}
              />
            </div>
            <div className="articleCard-2">
              <Button
                style={{
                  marginLeft: "120px",
                  color: "white",
                  backgroundColor: "green",
                  borderRadius: "10px",
                  fontSize: "9px",
                  position: "absolute",
                  top: "10%",
                  marginLeft: "8px",
                }}
                size="small"
                color="primary"
              >
                Read More
              </Button>
              <h3>{blogData.title}</h3>
              <img
                style={{
                  width: " 140px",
                  height: "80px",
                  position: "absolute",
                  top: 0,
                  borderRadius: "13%",
                  left: "77%",
                }}
                src={blogData.imageUrl}
              />
            </div>
            <div className="articleCard-3">
              <Button
                style={{
                  marginLeft: "120px",
                  color: "white",
                  backgroundColor: "pink",
                  borderRadius: "10px",
                  fontSize: "9px",
                  position: "absolute",
                  top: "10%",
                  marginLeft: "8px",
                }}
                size="small"
                color="primary"
              >
                Read More
              </Button>
              <h3> {blogData.title}</h3>
              <img
                style={{
                  width: " 140px",
                  height: "80px",
                  position: "absolute",
                  top: 0,
                  borderRadius: "13%",
                  left: "77%",
                }}
                src={blogData.imageUrl}
              />
            </div>
            <div className="articleCard-4">
              <Button
                style={{
                  marginLeft: "120px",
                  color: "white",
                  backgroundColor: "purple",
                  borderRadius: "10px",
                  fontSize: "9px",
                  position: "absolute",
                  top: "10%",
                  marginLeft: "8px",
                }}
                size="small"
                color="primary"
              >
                Read More
              </Button>
              <h3>{blogData.title}</h3>
              <img
                style={{
                  width: " 140px",
                  height: "80px",
                  position: "absolute",
                  top: 0,
                  borderRadius: "13%",
                  left: "77%",
                }}
                src={blogData.imageUrl}
              />
              <a
                style={{
                  position: "relative",
                  textDecoration: "none",

                  top: "-4%",
                  left: "36%",
                }}
                href="#"
              >
                ReadMore
              </a>
            </div>
          </div>

          <Pol />
        </div>
      );
    });
  }
}

export default FinalBlogs;
