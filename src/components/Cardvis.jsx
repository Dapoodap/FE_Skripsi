import { Card, Container } from "react-bootstrap";
import gbr1 from '../assets/card1.png'
import gbr2 from '../assets/card2.png'
import gbr3 from '../assets/card3.png'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use a CDN link
import { useEffect } from "react";

function Cardvis() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Container style={{padding:'10px',display:'flex',justifyContent:'center',gap:'60px',flexWrap:'wrap'}}>
        <Card data-aos="fade-up" data-aos-anchor-placement="center-bottom" style={{ width: "18rem",border:'2px solid black',position:'relative'}}>
          <Card.Body style={{ height:'220px', padding:'15px 10px 15px 10px '}}>
            <Card.Title>
                <h2 style={{ fontSize:'27px',fontWeight:'600',lineHeight:'28px',letterSpacing:'1px' }}>Keamanan</h2>
            </Card.Title>
            <br />
            <Card.Text>
              <p>Memastikan keselamatan dan keamanan setiap penghuni adalah prioritas utama kami.kami berkomitmen untuk menciptakan lingkungan yang aman dan nyaman.</p>
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src={gbr2} style={{border:'2px solid black',bottom:'0'}} className="img-fluid" />
        </Card>
        <Card data-aos="fade-up" data-aos-anchor-placement="center-bottom" style={{ width: "18rem",border:'2px solid black',position:'relative'}}>
          <Card.Body style={{ height:'220px', padding:'15px 10px 15px 10px '}}>
            <Card.Title>
                <h2 style={{ fontSize:'27px',fontWeight:'600',lineHeight:'28px',letterSpacing:'1px' }}>Kenyamanan</h2>
            </Card.Title>
            <br />
            <Card.Text>
              <p>Menawarkan pengalaman hunian yang unggul. Kami memberikan perhatian terhadap detail dalam setiap aspek dari kos-kosan kami.</p>
            </Card.Text>
            
          </Card.Body>
          <Card.Img variant="bottom" src={gbr3} style={{border:'2px solid black',bottom:'0'}} className="img-fluid" />
        </Card>
        <Card data-aos="fade-up" data-aos-anchor-placement="center-bottom" style={{ width: "18rem",border:'2px solid black',position:'relative'}}>
          <Card.Body style={{ height:'220px', padding:'15px 10px 15px 10px '}}>
            <Card.Title>
                <h2 style={{ fontSize:'27px',fontWeight:'600',lineHeight:'28px',letterSpacing:'1px' }}>Kemudahan</h2>
            </Card.Title>
            <br />
            <Card.Text>
              <p>Mengutamakan kemudahan akses bagi setiap penghuni. Kami bertujuan untuk memberikan gaya hidup praktis dan tanpa <span className="fst-italic">ribet</span> bagi setiap penghuni.</p>
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src={gbr1} style={{border:'2px solid black',bottom:'0'}} className="img-fluid" />
        </Card>
        
      </Container>
    </>
  );
}

export default Cardvis;
