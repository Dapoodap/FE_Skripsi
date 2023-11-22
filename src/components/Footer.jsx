import { Col, Container, Row } from "react-bootstrap"

function Footer() {
  return (
    <>
        <footer>
            <Container style={{maxWidth:'100%',padding:'15px',marginTop:'20px',backgroundColor:'#24AB70'}}>
                <Row>
                    <Col md={4} sm={12} className="mb-4 mb-md-0">
                        <h1  style={{ fontSize:'50px', fontWeight:'500'}}>Dariz's Kos Website</h1>
                        <p style={{ fontSize:'20px', fontWeight:'500'}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Vivamus at erat ac mi eleifend lacinia.
                        </p>
                    </Col>
                    <Col md={4} sm={12} className="mb-4 mb-md-0">
                        <div  style={{ width:'fit-content',margin:'auto' }}>
                        <h1 style={{ fontSize:'50px', fontWeight:'500'}}>Content</h1>
                        <ul className="list-unstyled">
                            <li><a style={{color:'black',fontSize:'21px',marginBottom:'20px'}} href="#">About Us</a></li>
                            <li><a style={{color:'black',fontSize:'21px',marginBottom:'20px'}} href="#">Contact Us</a></li>
                            <li><a style={{color:'black',fontSize:'21px',marginBottom:'20px'}} href="#">Privacy Policy</a></li>
                        </ul>

                        </div>
                    </Col>
                    <Col md={4} sm={12}>
                        <h1 style={{ fontSize:'50px', fontWeight:'500'}}>Location</h1>
                        <p style={{ fontSize:'20px', fontWeight:'500'}}>Jalan Sumurboto Barat 3 No 4</p>
                        <iframe
              style={{
                border: "1px solid black",
                maxWidth: "1000px"
              }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.621156544238!2d110.42300927483669!3d-7.053723692948588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708bff7a04ff7f%3A0xee45cd932fe9ef5e!2sWisma%20Kos%20Dariz!5e0!3m2!1sid!2sid!4v1700371066186!5m2!1sid!2sid"
            ></iframe>
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
  )
}

export default Footer