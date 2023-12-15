import { useEffect, useState } from 'react';
import { Badge, Button, Card, Table } from 'react-bootstrap';
import axios from 'axios';
import ReviewBuktiPembayaranModal from './ReviewBuktiPembayaranModal';
import moment from 'moment';
// import ReviewBuktiPembayaranModal from "./ReviewBuktiPembayaranModal";

function Reviewbukti() {
  const [showModal, setShowModal] = useState(false);
  const [selectedID, setSelectedID] = useState([]);
  const [buktiPembayarandp, setBuktiPembayarandp] = useState([]);
  const [buktiPembayaraninv, setBuktiPembayaraninv] = useState([]); // Pastikan sudah ada state untuk menyimpan data bukti pembayaran

  const handleShowModal = (bukti) => {
    setSelectedID(bukti);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedID(null);
    setShowModal(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Fetch admin data
        const invresponse = await axios.get(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/inv`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const dpresponse = await axios.get(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/dp`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setBuktiPembayaraninv(invresponse.data.Data);
        console.log(dpresponse.data.Data);
        setBuktiPembayarandp(dpresponse.data.Data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {showModal ? <ReviewBuktiPembayaranModal
        show={showModal}
        handleClose={handleCloseModal}
        idinvoice={selectedID}
      />: <></>}
      <Card className="mb-4" style={{ backgroundColor: '#ECE3CE' }}>
        <Card.Body>
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nomor Invoice</th>
                  <th>Nama Pengirim</th>
                  <th>Bulan</th>
                  <th>Kategori</th>
                  <th>Kamar</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {buktiPembayaraninv.map((bukti, index) => (
                  <tr key={index}>
                    {/* Kolom data bukti pembayaran */}
                    <td>{bukti.nomorInvoice}</td>
                    <td>{bukti.nama}</td>
                    <td>{bukti.bulan}</td>
                    <td>Bayar Sewa</td>
                    <td>kamar {bukti.Penghuni.noKamar}</td>
                    <td>
                      {(() => {
                        switch (bukti.status) {
                          case 'approve':
                            return <Badge bg="success" text="dark">Disetujui</Badge>;
                          case 'decline':
                            return <Badge bg="danger" text="dark">Gagal</Badge>;
                          default:
                            return <Badge bg="warning" text="dark">Pending</Badge>;
                        }
                      })()}
                    </td>
                    <td>
                      <Button variant="primary" onClick={() => handleShowModal(bukti.nomorInvoice)}>
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
      <Card className="mb-4" style={{ backgroundColor: '#ECE3CE' }}>
        <Card.Body>
          <div className="table-responsive">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Nomor Invoice</th>
                  <th>Nama Pengirim</th>
                  <th>Tanggal</th>
                  <th>Kategori</th>
                  <th>Kamar</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {buktiPembayarandp.map((bukti, index) => (
                  <tr key={index}>
                    {/* Kolom data bukti pembayaran */}
                    <td>{bukti.nomorInvoice}</td>
                    <td>{bukti.nama}</td>
                    <td>{moment.utc(bukti.tanggal).format('MM/DD/YY')}</td>
                    <td>bayar dp</td>
                    <td>{bukti.noKamar}</td>
                    <td>
                      {(() => {
                        switch (bukti.status) {
                          case 'approve':
                            return <Badge bg="success" text="dark">Disetujui</Badge>;
                          case 'decline':
                            return <Badge bg="danger" text="dark">Gagal</Badge>;
                          default:
                            return <Badge bg="warning" text="dark">Pending</Badge>;
                        }
                      })()}
                    </td>
                    <td>
                    <Button variant="primary" onClick={() => handleShowModal(bukti.nomorInvoice)}>
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
  );
}

export default Reviewbukti;
