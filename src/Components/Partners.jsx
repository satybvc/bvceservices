import Heading from "./Heading";
import Button from "./Button";
import Slider from "react-slick";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ImgOne from '../assets/images/partner_one.webp'
import ImgTwo from '../assets/images/partner_two.webp'
import ImgThree from '../assets/images/partner_three.webp'
import ImgFour from '../assets/images/partner_four.webp'

const data = [
    { name: "Partner", img: ImgOne },
    { name: "Partner", img: ImgTwo },
    { name: "Partner", img: ImgThree },
    { name: "Partner", img: ImgFour },
];



export default function Partners() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: true,
        slidesToShow: 4,
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
        <section className="partner slider_section text-center">
            <Container>
                <Heading
                    title={"Partners"}
                    description={"The more, the merrier! The best in business have partnered with Intersec, have you?"}
                />

                <div className="slider_container">
                    <Slider {...settings}>
                        {data.map((person, index) => (
                            <div key={index} className="box">
                                <div className="img-box">
                                    <img src={person.img} alt={person.name} />
                                </div>
                                <button className="slider-btn">{person.name}</button>
                            </div>
                        ))}
                    </Slider>
                </div>

                <p className="mx-600 mx-auto para-1">Over the years, our partners have reaped the benefits of exhibiting thought leadership,
                    effective lead generation, best in class branding & exceptional ROI</p>

                <Button label={"Become a Partner"} className={"black"} />
            </Container>
        </section>
    )
}
