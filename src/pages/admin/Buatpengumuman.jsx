import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row, Table } from "react-bootstrap"
import EditDetailPenghuniModal from "./EditDetailPenghuniModal";
import axios from "axios";
import Editpengumumanmodal from "./Editpengumumanmodal";

function Buatpengumuman() {
  const [judul, setJudul] = useState('');
  const [isiPengumuman, setIsiPengumuman] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [data, setData] = useState();

  const handleShow = (announcement) => {
    setShowModal(true);
    setData(announcement);
  };

  const handleClose = () => {
    setShowModal(false);
    setEditIndex(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    try {
      await axios.post(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/pengumuman`,
        {
          judulPengumuman : judul,
          deskripsiPengumuman : isiPengumuman
        },  // Request body diubah menjadi null karena method PUT tidak memerlukan body
        {
          headers: {
            Authorization: token,
          },
        }
      );
      alert('suksesk isi pengumuman')
      window.location.reload();
    } catch (error) {
      console.log(error)
    }
  };
  useEffect(()=>{
    const fetchPengumuman = async () =>{
      const token = localStorage.getItem('token')
      try {
        const response = await axios.get(
          'https://be-skripsi-6v25wnffuq-uc.a.run.app/pengumuman',  // Request body set to null for a POST request
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setAnnouncements(response.data.Data)
        // console.log(response.data.Data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchPengumuman()
  },[])
  const handleDelete = async (id) => {
    const token = localStorage.getItem('token')
    try {
      const response = await axios.delete(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/pengumuman/${id}`,  // Request body set to null for a POST request
        {
          headers: {
            Authorization: token,
          },
        }
      );
      // console.log(response.data)
      alert("sukses hapus")
      window.location.reload();
    } catch (error) {
      console.log(error)
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
                  <td>{announcement.judulPengumuman}</td>
                  <td>{announcement.deskripsiPengumuman}</td>
                  <td>{/* Tambahkan kolom tanggal di sini */}</td>
                  <td>
                    <Button variant="danger" size="sm" className="mx-2" onClick={() => handleDelete(announcement.id)}>
                      Hapus
                    </Button>
                    <Button variant="warning" size="sm" className="mx-2 my-2" onClick={() => handleShow(announcement)}>
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
      {showModal ? (<Editpengumumanmodal
        show={showModal}
        handleClose={handleEdit}
        index={data}
        // penghuni={penghunis[penghuniToEdit]}
      />):(<></>)}
    </>
  )
}

export default Buatpengumuman