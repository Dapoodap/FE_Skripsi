import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import gbr from "../assets/kos.jpg";
import { useNavigate } from "react-router-dom";

function Cardroomcatalog() {
  const nav = useNavigate()
  const sewaKamar = () =>{
    nav('/detail')
  }
  return (
    <>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          alignItems: "center",
        }}
      >
          
    <Card style={{ maxWidth: '900px', height: 'fit-content' }} className="mx-0">
      <Row  className="align-items-center flex-column flex-md-row mx-0">
        <Col xs={12} md={6} lg={4}>
          <Card.Img
            variant="top"
            src={gbr}
            alt="Card Image"
            style={{ height: '240px', objectFit: 'cover' }}
          />
        </Col>
        <Col xs={12} md={6} lg={8} className="position-relative" >
          <Card.Body >
            <Card.Title style={{ fontSize:'30px',fontWeight:'600',letterSpacing:'0.2px',width:'65%'}}>Kamar Tipe Eksklusif No 1</Card.Title>
            <Card.Text style={{ fontSize:'15px',fontWeight:'400',letterSpacing:'0.26px'}}>
                    This is a simple card with an image on the left and description
                    in the middle. Adjust the content as needed. This is a simple card with an image on the left and description
                    in the middle. Adjust the content as needed.
            </Card.Text>
            <strong>Rp.1.200.000/Bulan</strong>
            <br />
            <br />
            <Button onClick={sewaKamar} variant="info">Book Now</Button>
          </Card.Body>
          <div className="position-absolute top-0 end-0 p-3">
            <Badge bg="warning">4.5 Stars</Badge>
          </div>
          
        </Col>
        
      </Row>
    </Card>
      </Container>
    </>
  );
}

export default Cardroomcatalog;
