// Datapenghuni.js
import { useEffect, useState } from "react";
import { Button, Card, Table, Spinner } from "react-bootstrap";
import axios from "axios";
import ModalEditKamar from "./ModalEditKamar";
import {CSVLink} from 'react-csv'

function EditKamar() {
  const [kamars, setKamars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [penghuniToEdit, setPenghuniToEdit] = useState();
  const [formatData, setFormatData] = useState([]);
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
        const kamarResponse = await axios.get(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/kamar`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        const formattedKamar = kamarResponse.data.Data.map(kamar => {
          return {
            ...kamar,
            // Tambahkan kolom baru untuk menyatukan array BarangBawaan
            fasilitasKamar: JSON.parse(kamar.fasilitasKamar),
            // Pastikan semua properti memiliki nilai yang valid
            "No. Kamar": kamar.noKamar || '',  // Ganti dengan properti sebenarnya
            "Tipe Kamar": kamar.tipeKamar || '',  // Ganti dengan properti sebenarnya
            "Rating Kamar": kamar.ratingKamar || '',  // Ganti dengan properti sebenarnya
            "Harga Kamar": kamar.hargaKamar || '',  // Ganti dengan properti sebenarnya
            "status": kamar.statusKamar || '',  // Ganti dengan properti sebenarnya
            // ... properti lain
          };
        });
        setKamars(kamarResponse.data.Data);
        setLoading(false);
        setFormatData(formattedKamar)
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
              <>
              <CSVLink
                data={formatData}
                headers={[
                  "No. Kamar",
                  "fasilitasKamar",
                  "Tipe Kamar",
                  "Rating Kamar",
                  "Harga Kamar",
                  "status",
                  /* tambahkan header lain jika diperlukan */
                ]}
                enclosingCharacter={`"`}
                filename="data-kamar"
                className="btn btn-success mb-3"
              >
                Export Data Penghuni
              </CSVLink>
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
              </>
              
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
