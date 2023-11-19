import { Col, Container, Image, Row, } from "react-bootstrap";
import kos from "../assets/kos.jpg";
import Navigation from "./Navigation";
import Cardvis from "./Cardvis";

function Homescreen() {
  return (
    <>
      <Navigation />
      <br />
      <br />
      <Container fluid>
        <Row>
          <Col xs={12} xl={6} md={12} >
            <div className="centred" style={{ height: "100%", padding: "20px",display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <h1 style={{fontFamily:'Sofia, cursive',fontSize:'50px',fontWeight:'500',color:'#7C6A46'}}>Paradise View</h1>
                        <p style={{fontSize:'50px',fontWeight:'700'}}>
                        Hotel for every moment rich in emotion
                        </p>
                        <p style={{fontSize:'15px',fontWeight:'500'}}>Every moment feels like the first time in paradise view</p>
                        <a className="btnEx" href="#" style={{ maxWidth:'300px',textAlign:'center',textDecoration:'none',color:'white',padding:'10px 30px 10px 30px',border:'1px solid black',borderRadius:'30px',backgroundColor:'#7C6A46'}}>
                            Sewa Kamar
                        </a>
            </div>
          </Col>
          <Col xs={12} xl={6} md={12}>
            <Image
              src={kos} rounded
              alt="Placeholder Image"
              className="img-fluid"
              
            />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <h1 style={{fontSize:'55px',fontWeight:'700',color:'#7C6A46'}} className="text-center">Our Mission</h1>
      <h2 style={{fontSize:'40px',fontWeight:'400',color:'black'}} className="text-center">To achieve customer statifaction</h2>
      <br />
      <Cardvis/>
    </>
  );
}

export default Homescreen;
