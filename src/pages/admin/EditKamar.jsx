// Datapenghuni.js
import { useEffect, useState } from "react";
import { Button, Card, Table, Spinner } from "react-bootstrap";
import axios from "axios";
import ModalEditKamar from "./ModalEditKamar";

function EditKamar() {
  const [kamars, setKamars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [penghuniToEdit, setPenghuniToEdit] = useState();
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
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/kamar`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setKamars(penghuniResponse.data.Data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
                <span className="sr-only"></span>
              </Spinner>
            ) : (
              
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>No. Kamar</th>
                    <th>Tipe Kamar</th>
                    <th>Fasilitas Kamar</th>
                    <th>Rating Kamar</th>
                    <th>Harga Kamar</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {kamars.map((kamar, index) => (
                    <tr key={index}>
                      <td>{kamar.noKamar}</td>
                      <td>{kamar.tipeKamar}</td>
                      <td>
                        {JSON.parse(kamar.fasilitasKamar).join(', ')}
                    </td>
                      <td>{kamar.ratingKamar}</td>
                      <td>{kamar.hargaKamar}</td>
                      <td>
                        <Button
                          variant="info"
                          onClick={() => handleOpenEditModal(kamar)}
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
      </Card>
      {showEditModal ? (<ModalEditKamar
        show={showEditModal}
        handleClose={handleCloseEditModal}
        data={penghuniToEdit}
        // penghuni={penghunis[penghuniToEdit]}
      />):(<></>)}
    </>
  );
}

export default EditKamar;
