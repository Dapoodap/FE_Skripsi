import { Badge, Card } from 'react-bootstrap'

function Dana() {
  return (
    <>
    <Card style={{ maxWidth: '100%',maxHeight:'100%', backgroundColor: '#1185de', color: 'white' }}>
      <Card.Body>
        <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Dana E-Wallet <Badge className='mx-2' variant="warning">Baru</Badge></Card.Title>
        <hr style={{ backgroundColor: 'white' }} />
        <Card.Text style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
        <strong>Nomor Telepon Dana Usaha:</strong> 231131231
        </Card.Text>
        <Card.Text style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            <strong>Atas Nama:</strong> Daffa Radhitya
        </Card.Text>
        <Card.Text style={{ fontSize: '1.2rem' }}>
        <strong >QR Code:</strong>
         
         <img 
           src="https://via.placeholder.com/150" 
           alt="QR Code"
           className="img-fluid mt-3 mx-3"
           style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
         />
        </Card.Text>
      </Card.Body>
    </Card>
    {/* <Card className="mb-4" style={{ maxWidth: '100%', border: 'none', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
      <Card.Body>
        <Card.Title className="font-weight-bold mb-4 text-info">
          Dana E-Wallet <Badge variant="warning">Baru</Badge>
        </Card.Title>
        <div className="mb-3 text-muted">
          <strong>ID Pengguna Dana:</strong> @contoh_dana
        </div>
        <div className="mb-3 text-muted">
          <strong>Nomor Telepon Dana Usaha:</strong> 231131231
        </div>
        <div>
          <strong>QR Code:</strong>
         
          <img
            src="https://via.placeholder.com/150" 
            alt="QR Code"
            className="img-fluid mt-3"
            style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          />
        </div>
      </Card.Body>
    </Card> */}
    </>
  )
}

export default Dana