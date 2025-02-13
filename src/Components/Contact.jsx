import { Container, Row, Col } from 'react-bootstrap'
import BgImg from '../assets/images/contact_text_bg.webp'
import HangerImg from '../assets/images/hanger-icon.png'
import { FaFacebookSquare, FaTwitterSquare, FaInstagram, } from "react-icons/fa";

import { MdEmail, MdPhone } from "react-icons/md";

import Button from './Button';

export default function Contact() {
    return (
        <section className="contact">
            <div className='hanger'>
                <img src={HangerImg} alt="Hanger Icon" />
            </div>
            <Container className='contact_content text-center'>

                <Button className={"black"} label={"View More"} />
                <h2 className='head'> Contact us </h2>
                <div className='contact_box'>
                    <Row>
                        <Col md={6} className='pe-md-0'>
                            <Row>
                                <Col>
                                    <h2> FOR PARTICIPATION</h2>
                                </Col>
                            </Row>
                            <hr className="hr" />
                            <Row>
                                <Col>
                                    <h3> VIVEK SHETH </h3>
                                    <p>
                                        <span><MdPhone /> +91 80826 67585  </span>
                                        <span><MdEmail /> vivek@iamai.in</span>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                        <Col className='w-100 bg-white pt-1 my-3 d-md-none'> </Col>
                        <Col md={6} className='ps-md-0'>
                            <Row>
                                <Col>
                                    <h2> FOR PARTNERSHIP OPPORTUNITY</h2>
                                </Col>
                            </Row>
                            <hr className="hr" />
                            <Row>
                                <Col>
                                    <h3> SIDDHARTHA SENGUPTA </h3>
                                    <p>
                                        <span><MdPhone /> +91 97681 31042  </span>
                                        <span><MdEmail />  siddhartha@iamai.in</span>
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Row className='copyright'>
                    <Col sm={6} className='text-center text-sm-start mb-2 mb-sm-0'>
                        <p>Copyright © {new Date().getFullYear()} Intersec. All rights reserved.  </p>
                    </Col>
                    <Col sm={6} className='text-center text-sm-end'>
                        <div className='social_icon'>
                            <FaFacebookSquare />
                            <FaTwitterSquare />
                            <FaInstagram />
                        </div>
                    </Col>
                </Row>
            </Container>

            <div className="curve_bg">
                <img src={BgImg} alt="Curved bg" />
            </div>
        </section>
    )
}
