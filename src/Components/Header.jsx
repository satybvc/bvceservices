import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from './Button'
import BeachImg from '../assets/images/beach.webp'
import Logo from "../assets/images/logo.png"
import LogoTwo from "../assets/images/logo_2.png"
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import LefsImg1 from '../assets/images/lefs_1.png'
import LefsImg2 from '../assets/images/lefs_2.png'
import Bird1 from '../assets/images/birds_1.png'
import Bird2 from '../assets/images/birds_2.png'

export default function Header() {
  const bird1Ref = useRef(null);
  const bird2Ref = useRef(null);

  useEffect(() => {
    gsap.to(bird1Ref.current, {
      x: "110vw",
      y: "-50px",
      rotation: 15,
      duration: 6,
      repeat: -1,
      ease: "power1.inOut",
      yoyo: true,
    });

    gsap.to(bird2Ref.current, {
      x: "105vw",
      y: "30px",
      rotation: -10,
      duration: 8,
      repeat: -1,
      ease: "power1.inOut",
      yoyo: true,
    });

    gsap.to(".bird", {
      scaleY: 0.9,
      duration: 0.2,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <section className="header">
      <div className='LefsImg1'>
        <img src={LefsImg1} alt="LefsImg1" />
      </div>

      <div className='LefsImg2'>
        <img src={LefsImg2} alt="LefsImg2" />
      </div>

      <div className="birds-container">
        <img ref={bird1Ref} src={Bird1} className="bird bird1" alt="Flying Bird" />
        <img ref={bird2Ref} src={Bird2} className="bird bird2" alt="Flying Bird" />
      </div>

      <div className='text-center position-relative z-index-99'>
        <div className='logo'>
          <img src={Logo} alt="Logo" loading='lazy' />
        </div>
        <h4>presents</h4>
        <div className='logo_two'>
          <img src={LogoTwo} alt="Logo" loading='lazy' />
        </div>
        <div className='btns-group'>
          <button className='btn-skew'>
            <span>Past Participants</span>
          </button>
          <button className='btn-skew'>
            <span>Become a Partner</span>
          </button>
        </div>
        <div className='content'>
          <h2>Ideate. Network. Collaborate.</h2>
          <div className='line'></div>
          <p> <FaCalendarAlt /> 15<sup>th</sup> - 17<sup>th</sup> April 2022</p>
          <p><FaLocationDot /> The Zuri White Sands, Goa</p>
          <Button label={"Request an Invite"} className={"black"} />
        </div>
      </div>

      <div className="beach">
        <img src={BeachImg} alt="Beach" loading='lazy' />
      </div>
    </section>
  );
}
