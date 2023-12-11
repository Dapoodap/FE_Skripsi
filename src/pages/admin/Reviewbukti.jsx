import { useState } from "react";
import { Badge, Button, Card, Table } from "react-bootstrap"
import ReviewBuktiPembayaranModal from "./ReviewBuktiPembayaranModal";

function Reviewbukti() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
    const [buktiPembayaran, setBuktiPembayaran] = useState([
        { id: 1, nomorInvoice: 'INV-001', namaPengirim: 'John Doe', tanggal: '2023-01-15',kategori:'bayar-sewa',status:'pending' },
        { id: 2, nomorInvoice: 'INV-002', namaPengirim: 'Jane Doe', tanggal: '2023-02-20',kategori:'bayar-DP',status:'approve' },
        { id: 3, nomorInvoice: 'INV-004', namaPengirim: 'Jsoee Doe', tanggal: '2023-02-23',kategori:'bayar-DP',status:'decline' },
        // ... tambahkan data bukti pembayaran lainnya
      ]);

      const handleReview = (id) => {
        // Logika untuk meninjau bukti pembayaran
        console.log('Review bukti pembayaran dengan id:', id);
      };
    
  return (
    <>
    <ReviewBuktiPembayaranModal
        show={showModal}
        handleClose={handleCloseModal}
        buktiPembayaran={buktiPembayaran}
      />
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
            <th>Kategori</th>
            <th>Status</th>
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
              <td>{bukti.kategori}</td>
              <td>{(() => {
                    switch (bukti.status) {
                      case 'approve':
                        return (<Badge bg="success" text="dark">Disetujui</Badge>);
                      case 'decline':
                        return (<Badge bg="danger" text="dark">Gagal</Badge>);
                      default:
                        return (<Badge bg="warning" text="dark">Pending</Badge>);
                    }
                  })()
                }</td>
              <td>
                <Button variant="primary" onClick={handleShowModal}>
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