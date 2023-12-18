import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import {
  Accordion,
  Alert,
  Badge,
  Card,
  Col,
  Container,
  ListGroup,
  Modal,
  Row,
  Table,
} from "react-bootstrap";

function UserDetail() {
  const [greeting, setGreeting] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [user, setUser] = useState([]);
  const [kamar, setKamar] = useState([]);
  const [laporan, setLaporan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true);
  const [peng, setPEngu] = useState([]);

  useEffect(() => {
    updateGreeting();
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      updateGreeting();
    }, 1000 * 60); // Update every minute

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const id = jwtDecode(token).id;

        const userResponse = await axios.get(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/${id}`,{headers: {Authorization: token,},}
        );
        const penguResponse = await axios.get(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/pengumuman`,{headers: {Authorization: token,},}
        );

        setPEngu(penguResponse.data.Data)
        setUser(userResponse.data.data);
        setKamar(userResponse.data.data.Kamar);
        setLaporan(userResponse.data.data.Laporans);
        console.log(userResponse.data.data.Laporans);
        setLoading(false);
        setShowSpinner(false); // Hide the spinner modal // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const updateGreeting = () => {
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting("Selamat Pagi");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Selamat Siang");
    } else {
      setGreeting("Selamat Malam");
    }
  };
  function formatISODate(isoDateString) {
    const isoDate = new Date(isoDateString);
  
    const year = isoDate.getFullYear();
    const month = (isoDate.getMonth() + 1).toString().padStart(2, '0');
    const day = isoDate.getDate().toString().padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  const faqData = [
    {
      question: "Bagaimana cara mengganti foto profil?",
      answer:
        'Anda dapat mengganti foto profil di halaman Pengaturan Akun. Pilih opsi "Ganti Foto Profil" dan ikuti petunjuknya.',
    },
    {
      question: "Bagaimana cara mengubah kata sandi?",
      answer:
        'Untuk mengubah kata sandi, masuk ke halaman Pengaturan Akun dan pilih opsi "Ganti Kata Sandi". Isi formulir dengan informasi yang diminta.',
    },
    {
      question: "Apakah ada batasan jumlah posting yang dapat saya buat?",
      answer:
        "Tidak, saat ini tidak ada batasan jumlah posting yang dapat Anda buat. Silakan berbagi pengalaman dan cerita Anda sebanyak yang Anda inginkan!",
    },
    // Add more FAQ items as needed
  ];

  return (
    <>
    <Modal show={showSpinner} centered backdrop="static" keyboard={false}>
    
      </Modal>
      <Card className="mb-4" style={{ backgroundColor: "#ECE3CE" }}>
        <Card.Body>
          <Container fluid className="mt-4">
            {loading ? (
              // Show spinner while data is being fetched
              <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
            ) : (
              <>
              <Row>
                <Col md={12} lg={8}>
                  <h1>
                    {greeting}, {user.nama}!
                  </h1>
                  <p>
                    Ini adalah User Dashboard Anda. Temukan informasi penting
                    dan kelola akun Anda di sini.
                  </p>

                  <Card className="mb-4">
                    <Card.Header>Data Diri Penghuni</Card.Header>
                    <Card.Body>
                      <ListGroup>
                        <ListGroup.Item>
                          Nama : {user.nama}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Nomor HP : {user.noHP}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Alamat : {user.alamat}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Kamar : kamar {kamar.tipeKamar} nomor {kamar.noKamar}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Jenis Kelamin : {user.jenisKelamin}
                        </ListGroup.Item>
                      </ListGroup>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={12} lg={4}>
                  <Card className="mb-4">
                    <Card.Header>
                      Pemberitahuan Terkait Kos
                    </Card.Header>
                    <Card.Body>
                    
                      {peng.map((data, index) => (
                        <div key={index}>
                          <Alert variant="warning">
                          <strong>{data.judulPengumuman}</strong>
                          <p>{data.deskripsiPengumuman}</p>
                        </Alert>
                        </div>
                      ))}
                    
                    </Card.Body>
                  </Card>
                  <Card className="mb-4">
                    <Card.Header>FAQ - Pertanyaan Umum</Card.Header>
                    <Card.Body>
                      <Accordion defaultActiveKey="0">
                        {faqData.map((data, index) => (
                          <Accordion.Item eventKey={index} key={index}>
                            <Accordion.Header>
                              {data.question}
                            </Accordion.Header>
                            <Accordion.Body>{data.answer}</Accordion.Body>
                          </Accordion.Item>
                        ))}
                      </Accordion>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <Row>
              <Col>
                <Card>
                  <Card.Header>Laporan Penghuni</Card.Header>
                  <Card.Body>
                    {laporan.length === 0 ? (
                      <p>Tidak ada laporan yang dibuat.</p>
                    ) : (
                      <Table striped bordered responsive>
                        <thead>
                          <tr>
                            <th>No</th>
                            <th>Tanggal Laporan</th>
                            <th>Jenis Keluhan</th>
                            <th>Deskripsi</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        {/* lapor.TanggalLaporan */}
                        <tbody>
                          
                          {laporan.map((lapor, index) => (
                            <tr key={index}>
                              <td>{lapor.id}</td>
                              <td>{formatISODate(lapor.TanggalLaporan)}</td>
                              <td>{lapor.JenisKeluhan}</td>
                              <td>{lapor.DeskripsiKeluhan}</td>
                              <td>{lapor.StatusLaporan ? (<Badge className='mx-2' bg="success">Solved</Badge>):(<Badge className='mx-2' bg="warning" text="dark">Pending</Badge>)}</td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
              </>
            )}

            
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default UserDetail
