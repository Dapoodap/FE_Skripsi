import {
  Card,
  Carousel,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
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
import xample from "../assets/xample.jpg";
import Footer from "../components/Footer";
import kmr1 from "../assets/kmr1.jpeg"
import kmr2 from "../assets/kmr2.jpeg"
import kmr3 from "../assets/kmr3.jpeg"



function Homescreen() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  
  return (
    <>
      <Navigation />
      <br />
      <br />
      <Container className="py-4 px-3" fluid style={{ overflow: "hidden" }}>
        <Row>
          <Col xs={12} xl={6} md={12} data-aos="fade-right">
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
                  fontSize: "55px",
                  fontWeight: "500",
                  color: "#7C6A46",
                }}
              >
                Wisma Kos Dariz
              </h1>
              <p style={{ fontSize: "50px", fontWeight: "700" }}>
                Tempat Luas Bebas Stress, Kos Tanpa Kompromi
              </p>
              <p style={{ fontSize: "20px", fontWeight: "500" }}>
                Temukan Fasilitas Terbaik di Wisma Kos Dariz
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
          Misi Kami
        </h1>
        <h2
          style={{ fontSize: "40px", fontWeight: "400", color: "black" }}
          className="text-center"
        >
          Untuk mempertahankan kepuasan penyewa
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
          padding:'50px',
          backgroundColor: "#ECE3CE",
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
            <div className="wrapper" style={{ border:'0.5px solid #94d6a6', borderRadius:'0 0 100px 0 ',maxWidth:'365px',height:'500px',margin:'auto',position:'relative'}}>
              <img src={ xample } style={{ width:'100%',height:'100%',objectFit:'cover',borderRadius:'0 0 100px 0 ',position:'absolute',bottom:'-20px',left:'20px'}} alt="" />
            </div>
            
          </Col>
          <Col
            xs={12}
            xl={6}
            md={12}
            data-aos="fade-left"
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
              Rasakan kemudahan pembayaran sewa dan uang muka dengan <span className="fst-italic">chatbot</span> kami. Temukan info lebih lanjut di bagian Tentang!
              dan coba pengalaman yang lancar dan efisien dalam menyewa kamar.
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
        </Row>
      </Container>
      <br />
      <br />
      <div data-aos="zoom-in-up" style={{ marginTop: "20px" }}>
        <h1
          style={{ fontSize: "55px", fontWeight: "700", color: "#7C6A46" }}
          className="text-center"
        >
          Fasilitas Kami
        </h1>
        <h2
          style={{ fontSize: "40px", fontWeight: "400", color: "black" }}
          className="text-center"
        >
          Keunggulan Fasilitas, Untuk Penghuni
        </h2>
      </div>
      <Container style={{ overflow: "hidden" }}>
        <Container
          data-aos="fade-up"
          style={{
            padding: "30px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "80px",
          }}
        >
          <Card
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color: "#7C6A46",
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={wifi} width={40} alt="" />
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Free WiFi
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color: "#7C6A46",
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={laundry} width={40} alt="" />
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Laundry
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color: "#7C6A46",
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={idea} width={40} alt="" />
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                24/7 Listrik
              </p>
            </Card.Body>
          </Card>
        </Container>
        <Container
          data-aos="fade-up"
          style={{
            padding: "30px",
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "80px",
          }}
        >
          <Card
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color: "#7C6A46",
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={parking} width={40} alt="" />
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Lahan Parkir
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color: "#7C6A46",
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={kitchen} width={40} alt="" />
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Dapur Umum
              </p>
            </Card.Body>
          </Card>
          <Card
            style={{
              height: "10rem",
              width: "10rem",
              border: "none",
              backgroundColor: "#EDEDED",
              color: "#7C6A46",
            }}
          >
            <Card.Body
              style={{
                padding: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={flash} width={40} alt="" />
              <p
                style={{
                  marginTop: "15px",
                  fontWeight: "600",
                  fontSize: "15px",
                }}
              >
                Termasuk Listrik
              </p>
            </Card.Body>
          </Card>
        </Container>
      </Container>
      <br />
      <br />
      {/* <Container fluid style={{ border:'1px solid black',margin:'auto'}}>
        <Container style={{ border:'1px solid black'}}>
          <Row >
            <Col
              xs={12}
              md={4}
              style={{ marginBottom:'10px',marginTop:'20px'}}
            >
              <Card
                style={{
                  width: "100%",
                  border: "2px solid black",
                  position: "relative",
                }}
              >
                <Card.Body
                  style={{ height: "220px", padding: "15px 10px 15px 10px " }}
                >
                  <Card.Title>
                    <h2
                      style={{
                        fontSize: "27px",
                        fontWeight: "600",
                        lineHeight: "28px",
                        letterSpacing: "1px",
                      }}
                    >
                      Kenyamanan
                    </h2>
                  </Card.Title>
                  <br />
                  <Card.Text>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Laborum et accusamus minima necessitatibus, at magnam ea
                      delectus expedita quae temporibus!
                    </p>
                  </Card.Text>
                </Card.Body>
                <Card.Img
                  variant="bottom"
                  src={xample}
                  style={{ border: "2px solid black", bottom: "0" }}
                  className="img-fluid"
                />
              </Card>
            </Col>
            <Col
              xs={12}
              md={6}

            >
              <Container >
                <Row style={{ marginBottom:'10px',marginTop:'20px'}} >
                  <Col
                  md={2}
                  xs={12} >
                  </Col>
                  <Col
                    xs={12}
                    md={8}
                   
                  >
                    <Card
                      style={{
                        width: "100%",
                        border: "2px solid black",
                        position: "relative",
                      }}
                    >
                       <Card.Img
                        sty
                        variant="bottom"
                        src={xample}
                        style={{ border: "2px solid black", bottom: "0",height:'210px',objectFit:'cover'}}
                        className="img-fluid"
                      />
                      <Card.Body
                        style={{
                          height: "210px",
                          padding: "15px 10px 15px 10px ",
                        }}
                      >
                        <Card.Title>
                          <h2
                            style={{
                              fontSize: "27px",
                              fontWeight: "600",
                              lineHeight: "28px",
                              letterSpacing: "1px",
                            }}
                          >
                            Kenyamanan
                          </h2>
                        </Card.Title>
                        <br />
                        <Card.Text>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laborum et accusamus minima necessitatibus, at
                            magnam ea delectus expedita quae temporibus!
                          </p>
                        </Card.Text>
                      </Card.Body>
                     
                    </Card>
                  </Col>
                  
                </Row>
                <Row >
                <Col
                  md={2} 
                  xs={12}>
                  </Col>
                  <Col
                    xs={12}
                    md={8}
                  
                  >
                    <Card
                      style={{
                        width: "100%",
                        border: "2px solid black",
                        position: "relative",
                      }}
                    >
                      <Card.Img
                        sty
                        variant="bottom"
                        src={xample}
                        style={{ border: "2px solid black", bottom: "0",height:'210px',objectFit:'cover'}}
                        className="img-fluid"
                      />
                      <Card.Body
                        style={{
                          height: "210px",
                          padding: "15px 10px 15px 10px ",
                        }}
                      >
                        <Card.Title>
                          <h2
                            style={{
                              fontSize: "27px",
                              fontWeight: "600",
                              lineHeight: "28px",
                              letterSpacing: "1px",
                            }}
                          >
                            Kenyamanan
                          </h2>
                        </Card.Title>
                        <br />
                        <Card.Text>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Laborum et accusamus minima necessitatibus, at
                            magnam ea delectus expedita quae temporibus!
                          </p>
                        </Card.Text>
                      </Card.Body>
                      
                    </Card>
                  </Col>
                  
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container> */}

      
      <Container fluid style={{ backgroundColor:'#cdc299',padding:'20px',overflow:'hidden' }}>
      <div data-aos="zoom-in-up" style={{ margin: "20px" }}>
        <h1
          style={{ fontSize: "55px", fontWeight: "700" }}
          className="text-center"
        >
          Tipe Kamar Kami
        </h1>
        <h2
          style={{ fontSize: "40px", fontWeight: "400", color: "black" }}
          className="text-center"
        >
          Pilih sesuai kebutuhan dan kenymanan anda
        </h2>
      </div>
        <Row >
          <Col xs={12} md={6} className="d-none d-xl-block" style={{padding:'10px'}}>
            <div className="flexcontainer" style={{ display:'flex',flexWrap:'wrap-reverse',gap:'3px',margin:'auto',width:'fit-content'}}>
              <div className="left_wrapper" style={{ maxWidth:'331px',maxHeight:'500px',marginBottom:'27px'}}>
                <img data-aos="zoom-out-right" style={{ width:'100%',height:'100%',objectFit:'cover',borderRadius:'20px' }} src={kmr1} alt="" />
              </div>
              <div className="right_wrapper" style={{display:'flex',flexDirection:'column',gap:'14px',marginTop:'27px'}}>
              <div style={{ maxWidth:'190px',height:'222px'}} className="wrapper" >
              <img data-aos="zoom-out-right" style={{ width:'100%',height:'100%',objectFit:'cover',borderRadius:'20px'}} src={kmr2} alt="" />
              </div>
               <div style={{ maxWidth:'190px',height:'222px'}} className="wrapper" >
               <img data-aos="zoom-out-right" style={{ width:'100%',height:'100%',objectFit:'cover',borderRadius:'20px' }} src={kmr3} alt="" /></div>   
              </div>
            </div>
          </Col>
          <Col md={12} className="d-xl-none" >
          {/* Galeri Gambar */}
          <Carousel data-aos="zoom-out-right">
            <Carousel.Item>
              <Image src={kmr1}fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={kmr2} fluid />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={kmr3} fluid />
            </Carousel.Item>
            {/* Tambahkan gambar lainnya sesuai kebutuhan */}
          </Carousel>
        </Col>
          <Col xs={12} md={12} xl={6}  style={{padding:'10px'}}>
          <div
          data-aos="zoom-out-left"
              className="centred"
              style={{
                height: "100%",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {/* <p style={{ fontSize: "45px", fontWeight: "700" }}>
                Wisma Kos DARIZ
              </p> */}
              <p style={{ fontSize: "25px", fontWeight: "500" }}>
              Temukan kenyamanan tanpa batas dengan katalog kamar kami yang menawarkan tiga tipe berbeda. Dari kamar ekonomis hingga suite mewah, setiap ruangan memiliki fasilitas uniknya sendiri.
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
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default Homescreen;
