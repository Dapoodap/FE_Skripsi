
import { Card } from 'react-bootstrap'

function Bni() {
  return (
    <>
    <Card style={{ maxWidth: '100%', backgroundColor: '#FF6600', color: 'white' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>BNI Transfer</Card.Title>
        <hr style={{ backgroundColor: 'white' }} />
        <Card.Text style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          <strong>Nomor Rekening:</strong> 1209962125
        </Card.Text>
        <Card.Text style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          <strong>Atas Nama:</strong> Daffa Radhitya Pratama Wina Putra
        </Card.Text>
        
      </Card.Body>
    </Card>
    </>
  )
}

export default Bni