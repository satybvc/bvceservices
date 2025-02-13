import Heading from "./Heading";
import Button from "./Button";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImgOne from '../assets/images/slider-one.webp'
import ImgTwo from '../assets/images/slider-two.webp'
import ImgThree from '../assets/images/slider-three.webp'
import ImgFour from '../assets/images/slider-four.webp'
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const data = [
  { name: "Amit Sethiya", company: "SYSKA Group", img: ImgOne },
  { name: "Deepali Naair", company: "IBM", img: ImgTwo },
  { name: "Jahid Ahmed", company: "HDFC Bank", img: ImgThree },
  { name: "Lalatendu Panda", company: "Reliance Retail", img: ImgFour },
];

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <BsChevronRight />
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <BsChevronLeft />
    </div>
  );
};

export default function Participants() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };


  return (
    <section className="participants slider_section text-center">
      <Container>
        <Heading
          title={"Past Participants "}
          description={"Look who made Intersec lively and happening in the past"}
        />

        <div className="slider_container">
          <Slider {...settings}>
            {data.map((person, index) => (
              <div key={index} className="box">
                <div className="img-box">
                  <img src={person.img} alt={person.name} />
                </div>
                <div className="info">
                  <h3>{person.name}</h3>
                  <p>{person.company}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>


        <Button label={"View More"} className={"black"} />
      </Container>
    </section>
  )
}
