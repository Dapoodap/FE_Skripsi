import { useState } from "react";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap"
import EditDetailPenghuniModal from "./EditDetailPenghuniModal";

function Buatpengumuman() {
  const [judul, setJudul] = useState('');
  const [isiPengumuman, setIsiPengumuman] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleShow = (index) => {
    setShowModal(true);
    setEditIndex(index);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAnnouncement = { judul, isiPengumuman };
    setAnnouncements([...announcements, newAnnouncement]);
    setJudul('');
    setIsiPengumuman('');
  };
  const handleDelete = (index) => {
    const updatedAnnouncements = [...announcements];
    updatedAnnouncements.splice(index, 1);
    setAnnouncements(updatedAnnouncements);
  };
  const handleEdit = () => {
    // Placeholder untuk logika pengeditan
    console.log(`Mengedit pengumuman ke-${editIndex}`);
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

                  <Button variant="primary" type="submit">
                    Umumkan Pengumuman
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
                  <td>{announcement.judul}</td>
                  <td>{announcement.isiPengumuman}</td>
                  <td>{/* Tambahkan kolom tanggal di sini */}</td>
                  <td>
                    <Button variant="danger" size="sm" className="mx-2" onClick={() => handleDelete(index)}>
                      Hapus
                    </Button>
                    <Button variant="warning" size="sm" className="mx-2 my-2" onClick={() => handleShow(index)}>
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

      {/* Modal Edit */}
      <EditDetailPenghuniModal show={showModal} handleClose={handleClose} handleEdit={handleEdit} />
    </>
  )
}

export default Buatpengumuman