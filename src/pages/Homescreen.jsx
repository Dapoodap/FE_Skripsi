import { Card, Col, Container, Image, Row } from "react-bootstrap";
import kos from "../assets/kos2.jpeg";
import Navigation from "../components/Navigation";
import Cardvis from "../components/Cardvis";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use a CDN link
import { useEffect } from "react";
import wifi from "../assets/wi-fi.png";
import flash from "../assets/flash.png";
import idea from "../assets/idea.png";
import laundry from "../assets/laundry.png";
import kitchen from "../assets/kitchen.png";
import parking from "../assets/parked-car.png";


function Homescreen() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Navigation />
      <br />
      <br />
      <Container fluid style={{ overflow: "hidden" }}>
        <Row>
          <Col xs={12} xl={6} md={12} data-aos="fade-right" > 
            <div
              className="centred"
              style={{
                height: "100%",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h1
                style={{
                  fontFamily: "Sofia, cursive",
                  fontSize: "50px",
                  fontWeight: "500",
                  color: "#7C6A46",
                }}
              >
                Paradise View
              </h1>
              <p style={{ fontSize: "50px", fontWeight: "700" }}>
                Hotel for every moment rich in emotion
              </p>
              <p style={{ fontSize: "15px", fontWeight: "500" }}>
                Every moment feels like the first time in paradise view
              </p>
              <a
                className="btnEx"
                href="#"
                style={{
                  maxWidth: "300px",
                  textAlign: "center",
                  textDecoration: "none",
                  color: "white",
                  padding: "10px 30px 10px 30px",
                  border: "1px solid black",
                  borderRadius: "30px",
                  backgroundColor: "#7C6A46",
                }}
              >
                Sewa Kamar
              </a>
            </div>
          </Col>
          <Col xs={12} xl={6} md={12} data-aos="fade-left">
            <Image
              src={kos}
              rounded
              alt="Placeholder Image"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <div data-aos="zoom-in-up" style={{ marginTop: "20px" }}>
        <h1
          style={{ fontSize: "55px", fontWeight: "700", color: "#7C6A46" }}
          className="text-center"
        >
          Our Mission
        </h1>
        <h2
          style={{ fontSize: "40px", fontWeight: "400", color: "black" }}
          className="text-center"
        >
          To achieve customer statifaction
        </h2>
      </div>
      <br />
      <Cardvis />
      <br />
      <br />
      <br />
      <br />
      <Container
        fluid
        style={{
          backgroundColor: "#24AB70",
          marginTop: "20px",
          overflow: "hidden",
        }}
      >
        <Row>
          <Col
            xs={12}
            xl={6}
            md={12}
            data-aos="fade-right"
            style={{ padding: "20px" }}
          >
            <div
              className="centred"
              style={{
                height: "100%",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <p style={{ fontSize: "55px", fontWeight: "700" }}>
                Wisma Kos DARIZ
              </p>
              <p style={{ fontSize: "25px", fontWeight: "500" }}>
                Terletak di pusat wilayah tembalang, Kota Semarang dan
                terjangkau dari kampus Universitas Diponegoro Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Nostrum, odit?
              </p>
              <a
                className="btnEx"
                href="#"
                style={{
                  maxWidth: "300px",
                  textAlign: "center",
                  textDecoration: "none",
                  color: "white",
                  padding: "10px 30px 10px 30px",
                  border: "1px solid black",
                  borderRadius: "30px",
                  backgroundColor: "#7C6A46",
                }}
              >
                Baca lebih lengkap
              </a>
            </div>
          </Col>
          <Col
            xs={12}
            xl={6}
            md={12}
            data-aos="fade-left"
            style={{ padding: "20px", textAlign: "center" }}
          >
            <iframe
              style={{
                border: "1px solid black",
                width: "100%",
                height: "450px",
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.621156544238!2d110.42300927483669!3d-7.053723692948588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708bff7a04ff7f%3A0xee45cd932fe9ef5e!2sWisma%20Kos%20Dariz!5e0!3m2!1sid!2sid!4v1700371066186!5m2!1sid!2sid"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <div data-aos="zoom-in-up" style={{ marginTop: "20px" }}>
        <h1
          style={{ fontSize: "55px", fontWeight: "700", color: "#7C6A46" }}
          className="text-center"
        >
          Our Facilities
        </h1>
        <h2
          style={{ fontSize: "40px", fontWeight: "400", color: "black" }}
          className="text-center"
        >
          To achieve customer statifaction
        </h2>
      </div>
      <Container style={{ overflow:'hidden' }}>
        <Container data-aos="fade-up" 
          style={{
            padding: "30px",
            display: "flex",
            justifyContent: "center",
            flexWrap:'wrap',
            gap:"80px",
          }}
        >
          <Card 
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color:'#7C6A46'
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:'column'
              }}
            >
              <img src={wifi} width={40} alt="" />
              <p style={{ marginTop:'15px', fontWeight:'600',fontSize:'15px' }}>Free WiFi</p>
            </Card.Body>
          </Card>
          <Card 
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color:'#7C6A46'
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:'column'
              }}
            >
              <img src={laundry} width={40} alt="" />
              <p style={{ marginTop:'15px', fontWeight:'600',fontSize:'15px' }}>Laundry</p>
            </Card.Body>
          </Card>
          <Card 
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color:'#7C6A46'
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:'column'
              }}
            >
              <img src={idea} width={40} alt="" />
              <p style={{ marginTop:'15px', fontWeight:'600',fontSize:'15px' }}>24/7 Light</p>
            </Card.Body>
          </Card>
        </Container>
        <Container data-aos="fade-up" 
          style={{
            padding: "30px",
            display: "flex",
            justifyContent: "center",
            flexWrap:'wrap',
            gap:"80px"
          }}
        >
          <Card 
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color:'#7C6A46'
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:'column'
              }}
            >
              <img src={parking} width={40} alt="" />
              <p style={{ marginTop:'15px', fontWeight:'600',fontSize:'15px' }}>Parking Space</p>
            </Card.Body>
          </Card>
          <Card
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color:'#7C6A46'
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:'column'
              }}
            >
              <img src={kitchen} width={40} alt="" />
              <p style={{ marginTop:'15px', fontWeight:'600',fontSize:'15px' }}>Kitchen</p>
            </Card.Body>
          </Card>
          <Card
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color:'#7C6A46'
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection:'column'
              }}
            >
              <img src={flash} width={40} alt="" />
              <p style={{ marginTop:'15px', fontWeight:'600',fontSize:'15px' }}>Electricty Include</p>
            </Card.Body>
          </Card>
        </Container>
      </Container>
    </>
  );
}

export default Homescreen;
