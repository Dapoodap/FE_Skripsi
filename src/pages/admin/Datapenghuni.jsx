// Datapenghuni.js
import { useEffect, useState } from "react";
import { Button, Card, Table, Spinner } from "react-bootstrap";
import TambahPenghuniModal from "./TambahPenghuniModal";
import EditDetailPenghuniModal from "./EditDetailPenghuniModal";
import axios from "axios";
import { CSVLink } from "react-csv";

function Datapenghuni() {
  const [penghunis, setPenghunis] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [penghuniToEdit, setPenghuniToEdit] = useState();
  const [formatPenghuni, setFormatPenghuni] = useState([]);

  function formatDateTime(dateTimeString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      timeZoneName: "short",
    };
    const formattedDateTime = new Date(dateTimeString).toLocaleString(
      "id-ID",
      options
    );
    return formattedDateTime;
  }

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
        const formattedPenghunis = penghuniResponse.data.Data.map((penghuni) => {
          const dataPembayaranArray = JSON.parse(penghuni.dataPembayaran);

          // Buat objek untuk menyimpan status pembayaran setiap bulan
          const statusPembayaranPerBulan = {
            Januari: 'Belum Lunas',
            Februari: 'Belum Lunas',
            Maret: 'Belum Lunas',
            April: 'Belum Lunas',
            Mei: 'Belum Lunas',
            Juni: 'Belum Lunas',
            Juli: 'Belum Lunas',
            Agustus: 'Belum Lunas',
            September: 'Belum Lunas',
            Oktober: 'Belum Lunas',
            November: 'Belum Lunas',
            Desember: 'Belum Lunas',
          };
          dataPembayaranArray.forEach(bulan => {
            statusPembayaranPerBulan[bulan.bulan] = bulan.status ? 'Lunas' : 'Belum Lunas';
          });
          return {
            ...penghuni,
            // Tambahkan kolom baru untuk menyatukan array BarangBawaan
            AllBarangBawaan: JSON.parse(JSON.parse(penghuni.BarangBawaan)),
            // Pastikan semua properti memiliki nilai yang valid
            Nama: penghuni.nama || "",
            "No. Kamar": penghuni.noKamar || "",
            "Tanggal Masuk": formatDateTime(penghuni.TanggalMasuk) || "",
            "Nomor Telpon": penghuni.noHP || "",
            "Username": penghuni.username || "",
            "Password": penghuni.password || "",
            "Ubah Password": penghuni.isChange ? "TRUE" : "FALSE",
            "BiayaTambahan": penghuni.BiayaTambahan || "",
            ...statusPembayaranPerBulan,
            // ... properti lain
          };
        });

        console.log(formattedPenghunis);
        setFormatPenghuni(formattedPenghunis);
        setPenghunis(penghuniResponse.data.Data);

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
              <>
                <h1>data penghuni</h1>
                <CSVLink
                  data={formatPenghuni}
                  headers={[
                    "Nama",
                    "No. Kamar",
                    "Tanggal Masuk",
                    "Nomor Telpon",
                    "Username",
                    "Password",
                    "Ubah Password",
                    "AllBarangBawaan", // Tambahkan kolom AllBarangBawaan di sini
                    "BiayaTambahan",
                    "Januari",
                    "Februari",
                    "Maret",
                    "April",
                    "Mei",
                    "Juni",
                    "Juli",
                    "Agustus",
                    "September",
                    "Oktober",
                    "November",
                    "Desember",
                    /* tambahkan header lain jika diperlukan */
                  ]}
                  enclosingCharacter={`"`}
                  filename="data-penghuni"
                  className="btn btn-success mb-3"
                >
                  Export Data Penghuni
                </CSVLink>
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
                        <td>{formatDateTime(penghuni.TanggalMasuk)}</td>
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
              </>
            )}
          </div>
        </Card.Body>
        <Button variant="primary" onClick={handleOpenModal}>
          Tambah Data Penghuni
        </Button>
        <TambahPenghuniModal
          show={showModal}
          handleClose={handleCloseModal}
        />
      </Card>
      {showEditModal ? (
        <EditDetailPenghuniModal
          show={showEditModal}
          handleClose={handleCloseEditModal}
          index={penghuniToEdit}
          // penghuni={penghunis[penghuniToEdit]}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Datapenghuni;
