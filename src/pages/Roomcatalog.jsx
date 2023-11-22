import {Container } from "react-bootstrap"
import Navigation from "../components/Navigation"
import kos from '../assets/kos2.jpeg'
import Cardroomcatalog from "../components/Cardroomcatalog"

function Roomcatalog() {
  return (
    <>
    <Navigation/>
    <Container fluid style={{ backgroundImage: `url(${kos})`,maxWidth:'100%',height:'400px',backgroundSize:'cover',backgroundRepeat:'no-repeat',position:'relative',backgroundPosition:'center center',zIndex:'-2',display:'flex',justifyContent:'center',alignItems:'center',backgroundAttachment:'',marginBottom:'100px'}} >
      <div className="mask" style={{ position:'absolute',backgroundColor:'#ECE3CE',width:'100%',height:'100%',left:'0',top:'0',opacity:'0.6',zIndex:'-1'}}>
      </div>
      <h1 style={{zIndex:'1', fontSize:'45px',fontWeight:'700',letterSpacing:'5px',textAlign:'center'}}>Katalog Kamar</h1>
    </Container>
    <Cardroomcatalog/>
    </>
  )
}

export default Roomcatalog