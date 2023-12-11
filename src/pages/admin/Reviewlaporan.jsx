import { useState } from "react";
import { Badge, Button, Card, Table } from "react-bootstrap";
import ReviewLaporanModal from "./ReviewLaporanModal";

function Reviewlaporan() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedLaporan, setSelectedLaporan] = useState(null);

  const handleOpenReviewModal = (laporan) => {
    setSelectedLaporan(laporan);
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setSelectedLaporan(null);
    setShowReviewModal(false);
  };
    const [laporanMasuk] = useState([
        { id: 1,jenis:'pembayaran', status: 'pending', tgl: '2023-01-15' },
        { id: 2,jenis:'infrastruktur', status: 'resolved', tgl: '2023-02-20' },
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
            <th>Jenis Laporan</th>
            <th>Status</th>
            <th>Tanggal</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {laporanMasuk.map((laporan, index) => (
            <tr key={index}>
              <td>{laporan.id}</td>
              <td>{laporan.jenis}</td>
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
                <Button variant="info" onClick={() => handleOpenReviewModal(laporan)}>
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
        <ReviewLaporanModal
          show={showReviewModal}
          handleClose={handleCloseReviewModal}
          laporan={selectedLaporan}
          handleSolved={(laporanId, balasan) => {
            // Logika untuk mengirimkan balasan dan mengubah status laporan ke "solved"
            console.log(`Mengirim balasan "${balasan}" untuk laporan dengan ID ${laporanId}`);
            // Anda dapat memanggil fungsi atau metode yang sesuai di sini
            // untuk mengirimkan data ke server atau melakukan pembaruan di sisi klien.
          }}
        />
    </>
  )
}

export default Reviewlaporan