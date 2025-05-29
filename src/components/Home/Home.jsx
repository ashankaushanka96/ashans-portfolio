import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../../assets/img/sre-png-4.png";
import "./Home.css";
import TrackVisibility from "react-on-screen";

export const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Site Reliability Engineer", "DevOPS Engineer"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.slice(0, text.length - 1)
        : fullText.slice(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prev) => prev / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
        setDelta(500);
      }
    }, delta);

    return () => clearInterval(ticker);
  }, [text, loopNum, isDeleting, delta]);

  return (
    <section className="Home" id="home">
      <Container>
        <Row>
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInLeft" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>Hi! I'm Ashan, </h1>
                  <h1>{text}</h1>
                  <p>
                    Highly motivated Site Reliability Engineer with extensive
                    experience in optimizing system performance, automating
                    infrastructure, and developing innovative solutions using
                    generative AI, machine learning (ML), and deep learning
                    (DL). Proven expertise in designing and managing cloud
                    architectures, particularly on AWS, and implementing robust
                    monitoring tools to ensure system reliability and
                    efficiency. Seeking a challenging role in a forward-thinking
                    organization where I can leverage my skills to drive
                    operational excellence and advance my career.
                  </p>
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeInRight" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
