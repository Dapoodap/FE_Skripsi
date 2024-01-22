import { Badge, Card } from 'react-bootstrap';

function Shopee() {
  return (
    <>
      <Card style={{ maxWidth: '100%', maxHeight: '100%', backgroundColor: '#EE4D2D', color: 'white' }}>
        <Card.Body>
          <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Shopee <Badge className='mx-2' variant="warning">Promo</Badge></Card.Title>
          <hr style={{ backgroundColor: 'white' }} />
          <Card.Text style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            <strong>Shopee ID:</strong> @daffaradhityapwp
          </Card.Text>
          
          <Card.Text style={{ fontSize: '1.2rem' }}>
            <strong>QR Code:</strong>
            <img
              src="https://storage.googleapis.com/kos_dariz_bucket_gambar/shopee.jpeg" 
              alt="QR Code"
              className="img-fluid mt-3 mx-3"
              style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: '200px' }}
            />
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Shopee;
