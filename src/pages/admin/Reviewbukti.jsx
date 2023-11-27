import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap"

function Reviewbukti() {
    const [buktiPembayaran, setBuktiPembayaran] = useState([
        { id: 1, nomorInvoice: 'INV-001', namaPengirim: 'John Doe', tanggal: '2023-01-15' },
        { id: 2, nomorInvoice: 'INV-002', namaPengirim: 'Jane Doe', tanggal: '2023-02-20' },
        // ... tambahkan data bukti pembayaran lainnya
      ]);

      const handleReview = (id) => {
        // Logika untuk meninjau bukti pembayaran
        console.log('Review bukti pembayaran dengan id:', id);
      };
    
  return (
    <>
        <Card className="mb-4" style={{ backgroundColor: '#ECE3CE' }}>
            <Card.Body>
              {/* Isi dengan informasi penghuni, foto profil, dsb. */}
              <div className="table-responsive">
              <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nomor Invoice</th>
            <th>Nama Pengirim</th>
            <th>Tanggal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {buktiPembayaran.map((bukti, index) => (
            <tr key={index}>
              <td>{bukti.id}</td>
              <td>{bukti.nomorInvoice}</td>
              <td>{bukti.namaPengirim}</td>
              <td>{bukti.tanggal}</td>
              <td>
                <Button variant="info" onClick={() => handleReview(bukti.id)}>
                  Review
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
                </Table>
    </div>
            </Card.Body>
        </Card>
    </>
  )
}

export default Reviewbukti

{/*  */}