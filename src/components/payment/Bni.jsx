
import { Card } from 'react-bootstrap'

function Bni() {
  return (
    <>
    <Card style={{ maxWidth: '100%', backgroundColor: '#4CAF50', color: 'white' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>BNI Virtual Account</Card.Title>
        <hr style={{ backgroundColor: 'white' }} />
        <Card.Text style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          <strong>Nomor Rekening:</strong> 1234 5678 9012 3456
        </Card.Text>
        <Card.Text style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
          <strong>Atas Nama:</strong> PT. Contoh Pembayaran
        </Card.Text>
        <Card.Text style={{ fontSize: '1.2rem' }}>
          <strong>Berlaku Hingga:</strong> 31 Desember 2023
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  )
}

export default Bni