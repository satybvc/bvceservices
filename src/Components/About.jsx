import { Container, Row, Col, Modal } from "react-bootstrap";
import { MdPlayCircleOutline } from "react-icons/md";
import { useState } from "react";
import ReactPlayer from "react-player";
import VideoImg from "../assets/images/video_img.png"
export default function About() {
    const [show, setShow] = useState(false);

    return (
        <section className="about">
            <Container className="content_box">

                <Row>
                    <Col md={7}>
                        <h2> <em>About Intersec</em> </h2>
                        <h1> How it All Started</h1>
                        <p>
                            roperty of IAMAI. Fondly called as the art of  <strong>‘UNCONFERENCING’,</strong> Intersec is a fun-filled meet and greet which isn't just another conference or off-site which is full of speakers and listeners. Here, you get ample time and opportunity to meet and interact with new people and explore a lot of business synergies. So, you see, it’s more focused on conversations than on addresses, speeches or lectures."
                        </p>
                        <p>
                              Attended by more than 60 unique brands in the last two editions, Intersec is a 2 night's and 3 day's residential assembly of Digital and Marketing Heads of brands catering to industries like D2C, FMCG, Retail, E-Commerce, Gaming, BFSI, FinTech, Travel & Hospitality and many more! A space to share 1st hand insights and an experience to handhold and nurture each other to build the strongest, ever-growing professional bonds is what awaits at IAMAI's Intersec!  
                        </p>
                    </Col>

                    <Col md={5} className="my-auto">
                        <div className="video_box" onClick={() => setShow(true)}>
                            <img src={VideoImg} alt="video thumbnail" />
                            <div className="play_icon">
                                <MdPlayCircleOutline size={50} />
                            </div>
                        </div>

                    </Col>
                </Row>

                <Modal show={show} onHide={() => setShow(false)} centered size="xl">
                    <Modal.Body className="p-0">
                        <ReactPlayer url="https://www.youtube.com/watch?v=D0UnqGm_miA" playing controls width={"100%"} height={"450px"} />
                    </Modal.Body>
                </Modal>
            </Container>
        </section>
    )
}
