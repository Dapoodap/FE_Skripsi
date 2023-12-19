import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row, Table, Toast } from "react-bootstrap";
import axios from "axios";
import Editpengumumanmodal from "./Editpengumumanmodal";

function Buatpengumuman() {
  const [judul, setJudul] = useState('');
  const [isiPengumuman, setIsiPengumuman] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState();
  const [loadingTable, setLoadingTable] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleShow = (announcement) => {
    setShowModal(true);
    setData(announcement);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditIndex(null);
  };

  function formatDateTime(dateTimeString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
    const formattedDateTime = new Date(dateTimeString).toLocaleString('id-ID', options);
    return formattedDateTime;
  }

  const fetchPengumuman = async () => {
    setLoadingTable(true);
    const token = localStorage.getItem('token');

    try {
      const response = await axios.get(
        'https://be-skripsi-6v25wnffuq-uc.a.run.app/pengumuman',
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setAnnouncements(response.data.Data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingTable(false);
    }
  };

  useEffect(() => {
    fetchPengumuman();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingSubmit(true);

    const token = localStorage.getItem('token');

    try {
      await axios.post(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/pengumuman`,
        {
          judulPengumuman: judul,
          deskripsiPengumuman: isiPengumuman,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setToastMessage('Pengumuman berhasil diumumkan.');
      setShowToast(true);
      setJudul('');
      setIsiPengumuman('');
    } catch (error) {
      console.log(error);
      setToastMessage('Gagal mengumumkan pengumuman. Silakan coba lagi.');
      setShowToast(true);
    } finally {
      setLoadingSubmit(false);
      fetchPengumuman();
    }
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.delete(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/pengumuman/${id}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      alert("sukses hapus");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {
    // Placeholder untuk logika pengeditan
    // Implementasikan logika pengeditan sesungguhnya di sini

    // Tutup modal setelah pengeditan
    handleClose();
  };

  return (
    <>
      <Card className="mb-4" style={{ backgroundColor: '#ECE3CE' }}>
        <Card.Body>
          <Container fluid className="mt-4">
            <Row>
              <Col md={6}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formJudul">
                    <Form.Label>Judul Pengumuman</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Masukkan judul pengumuman"
                      value={judul}
                      onChange={(e) => setJudul(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formIsiPengumuman">
                    <Form.Label>Isi Pengumuman</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Masukkan isi pengumuman"
                      value={isiPengumuman}
                      onChange={(e) => setIsiPengumuman(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" disabled={loadingSubmit}>
                    {loadingSubmit ? 'Mengumumkan...' : 'Umumkan Pengumuman'}
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          {/* Tabel Pengumuman */}
          {loadingTable ? (
            <p>Loading...</p>
          ) : (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Judul</th>
                  <th>Isi Pengumuman</th>
                  <th>Tanggal</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {announcements.map((announcement, index) => (
                  <tr key={index}>
                    <td>{announcement.judulPengumuman}</td>
                    <td>{announcement.deskripsiPengumuman}</td>
                    <td>{formatDateTime(announcement.updatedAt)}</td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        className="mx-2"
                        onClick={() => handleDelete(announcement.id)}
                      >
                        Hapus
                      </Button>
                      <Button
                        variant="warning"
                        size="sm"
                        className="mx-2 my-2"
                        onClick={() => handleShow(announcement)}
                      >
                        Edit
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Card.Body>
      </Card>

      {/* Toast */}
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={5000}
        autohide
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        <Toast.Body>{toastMessage}</Toast.Body>
      </Toast>

      {/* Modal Edit */}
      {showModal ? (
        <Editpengumumanmodal show={showModal} handleClose={handleEdit} index={data} />
      ) : (
        <></>
      )}
    </>
  );
}

export default Buatpengumuman;
