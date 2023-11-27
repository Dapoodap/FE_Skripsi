import { useState } from "react";
import { Badge, Button, Card, Table } from "react-bootstrap";

function Reviewlaporan() {
    const [laporanMasuk, setLaporanMasuk] = useState([
        { id: 1, judul: 'Pembayaran Tertunda', status: 'pending', tgl: '2023-01-15' },
        { id: 2, judul: 'Kerusakan Pintu', status: 'resolved', tgl: '2023-02-20' },
        // ... tambahkan data laporan masuk lainnya
      ]);
    
      const handleReview = (id) => {
        // Logika untuk meninjau laporan
        console.log('Review laporan dengan id:', id);
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
            <th>Judul Laporan</th>
            <th>Status</th>
            <th>Tanggal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {laporanMasuk.map((laporan, index) => (
            <tr key={index}>
              <td>{laporan.id}</td>
              <td>{laporan.judul}</td>
              <td>
                {laporan.status === 'pending' ? (
                  <Badge bg="warning" text="dark">
                    Pending
                  </Badge>
                ) : (
                  <Badge bg="success">Resolved</Badge>
                )}
              </td>
              <td>{laporan.tgl}</td>
              <td>
                <Button variant="info" onClick={() => handleReview(laporan.id)}>
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

export default Reviewlaporan