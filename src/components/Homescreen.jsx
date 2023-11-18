    import { Col, Container, Row } from 'react-bootstrap'
    import Navigation from './Navigation'

    function Homescreen() {
    return (
        <>
            <Navigation/>
            <Container >
                <Row > 
                    <Col sm={12} md={6} style={{ border:'1px solid black',padding:'20px'}}>
                        <h1 style={{fontFamily:'Sofia, cursive',fontSize:'50px',fontWeight:'500',color:'#7C6A46'}}>Paradise View</h1>
                        <p style={{fontSize:'50px',fontWeight:'700'}}>
                        Hotel for every moment rich in emotion
                        </p>
                        <p style={{marginTop:'-10px',fontSize:'15px',fontWeight:'500'}}>Every moment feels like the first time in paradise view</p>
                        <a href="#" style={{ textDecoration:'none',color:'black',padding:'10px 30px 10px 30px',border:'1px solid black'}}>
                            Sewa Kamar
                        </a>
                    </Col >
                    <Col style={{ border:'1px solid black',padding:'20px'}}>2</Col >
                </Row>
            </Container>
        </>
    )
    }

    export default Homescreen