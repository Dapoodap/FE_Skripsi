import { useEffect, useState } from "react";
import { Badge, Button, Card, Table } from "react-bootstrap";
import ReviewLaporanModal from "./ReviewLaporanModal";
import axios from "axios";
import moment from "moment";

function Reviewlaporan() {
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedLaporan, setSelectedLaporan] = useState(null);
  const [laporans,setLaporans] = useState([]);

  const handleOpenReviewModal = (id) => {
    setSelectedLaporan(id);
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setSelectedLaporan(null);
    setShowReviewModal(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userResponse = await axios.get(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/lapor`,{headers: {Authorization: token,},}
        );
        setLaporans(userResponse.data.Data);
        // setLoading(false);
        // setShowSpinner(false); // Hide the spinner modal // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

    
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
            <th>Kamar</th>
            <th>Tanggal</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {laporans.map((laporan, index) => (
            <tr key={index}>
              <td>{laporan.id}</td>
              <td>{laporan.JenisKeluhan}</td>
              <td>{laporan.Penghuni.noKamar}</td>
              <td>{moment.utc(laporan.TanggalLaporan).format('MM/DD/YYYY')}</td>
              <td>
                {!laporan.StatusLaporan ? (
                  <Badge bg="warning" text="dark">
                    Pending
                  </Badge>
                ) : (
                  <Badge bg="success">Diatasi</Badge>
                )}
              </td>
              <td>
                <Button variant="info" onClick={() => handleOpenReviewModal(laporan.id)}>
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
       {showReviewModal ?  <ReviewLaporanModal
          show={showReviewModal}
          handleClose={handleCloseReviewModal}
          laporanid={selectedLaporan}
          // handleSolved={(laporanId, balasan) => {
          //   // Logika untuk mengirimkan balasan dan mengubah status laporan ke "solved"
          //   console.log(`Mengirim balasan "${balasan}" untuk laporan dengan ID ${laporanId}`);
          //   // Anda dapat memanggil fungsi atau metode yang sesuai di sini
          //   // untuk mengirimkan data ke server atau melakukan pembaruan di sisi klien.
          // }}
        />:<></>}
    </>
  )
}

export default Reviewlaporan