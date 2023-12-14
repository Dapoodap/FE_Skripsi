// Datapenghuni.js
import { useEffect, useState } from "react";
import { Button, Card, Table, Spinner } from "react-bootstrap";
import TambahPenghuniModal from "./TambahPenghuniModal";
import EditDetailPenghuniModal from "./EditDetailPenghuniModal";
import axios from "axios";

function Datapenghuni() {
  const [penghunis, setPenghunis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [penghuniToEdit, setPenghuniToEdit] = useState();

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleOpenEditModal = (penghuni) => {
    setPenghuniToEdit(penghuni);
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => setShowEditModal(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Fetch admin data
        const penghuniResponse = await axios.get(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setPenghunis(penghuniResponse.data.Data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (index) => {
    // Logika untuk menghandle pengeditan data
    // console.log('Edit data penghuni ke-', index);
  };

  return (
    <>
      <Card className="mb-4" style={{ backgroundColor: "#ECE3CE" }}>
        <Card.Body>
          <div className="table-responsive">
            {loading ? (
              <Spinner
                animation="border"
                role="status"
                className="spinner"
                style={{ margin: "20px auto", display: "block" }}
              >
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>Nama Penghuni</th>
                    <th>No. Kamar</th>
                    <th>Tanggal Masuk</th>
                    <th>Nomor Telpon</th>
                    <th>Username</th>
                    <th>Password</th>
                    <th>Ubah Password</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {penghunis.map((penghuni, index) => (
                    <tr key={index}>
                      <td>{penghuni.nama}</td>
                      <td>{penghuni.noKamar}</td>
                      <td>{penghuni.TanggalMasuk}</td>
                      <td>{penghuni.noHP}</td>
                      <td>{penghuni.username}</td>
                      <td>{penghuni.password}</td>
                      <td>{"" + penghuni.isChange}</td>
                      <td>
                        <Button
                          variant="info"
                          onClick={() => handleOpenEditModal(penghuni)}
                        >
                          Edit
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </div>
        </Card.Body>
        <Button variant="primary" onClick={handleOpenModal}>
          Tambah Data Penghuni
        </Button>
        <TambahPenghuniModal show={showModal} handleClose={handleCloseModal} />
      </Card>
      {showEditModal ? (<EditDetailPenghuniModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        index={penghuniToEdit}
        // penghuni={penghunis[penghuniToEdit]}
      />):(<></>)}
    </>
  );
}

export default Datapenghuni;
