import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { useEffect, useState } from 'react';
import { Alert, Badge, Card, Col, Container, ListGroup, Modal, Row, Table } from 'react-bootstrap';
  import { Line } from 'react-chartjs-2'
  import axios from 'axios';
  import { jwtDecode } from "jwt-decode";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
function DetailAdmin() {
  const [admin,setAdmin] = useState()
  const [penghunis, setPenghunis] = useState([]);
  const [pengumuman, setPengumuman] = useState([]);
  const [laporans, setLaporans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        const { id } = jwtDecode(token);

        // Fetch admin data
        const adminResponse = await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/admin/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        setAdmin(adminResponse.data.data.username);

        // Fetch all penghuni data
        const penghuniResponse = await axios.get('https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni', {
          headers: {
            Authorization: token,
          },
        });
        setPenghunis(penghuniResponse.data.Data);

        // Fetch pengumuman data
        const pengumumanResponse = await axios.get('https://be-skripsi-6v25wnffuq-uc.a.run.app/pengumuman', {
          headers: {
            Authorization: token,
          },
        });
        setPengumuman(pengumumanResponse.data.Data);
        const laporResponse = await axios.get('https://be-skripsi-6v25wnffuq-uc.a.run.app/lapor', {
          headers: {
            Authorization: token,
          },
        });
        setLaporans(laporResponse.data.Data);
        setLoading(false);
        setShowSpinner(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  // console.log(admin)
  // console.log(penghunis)
  // console.log(pengumuman.mao)
  // console.log(laporans)
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Laporan Keluhan',
            data: [10, 15, 8, 20, 12, 18, 14, 22, 25, 30, 28, 35],
            fill: false,
            borderColor: 'rgba(75,192,192,1)',
          },
        ],
      };
      const  options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
  return (
    <>
    <Modal show={showSpinner} centered backdrop="static" keyboard={false}>
    </Modal>
    {loading ? ( <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div className="spinner-border" role="status">
        {/* <span className="sr-only">Loading...</span> */}
      </div>
    </div>):<Card className="mb-4" style={{ backgroundColor: '#ECE3CE' }}>
            <Card.Body>
              {/* Isi dengan informasi penghuni, foto profil, dsb. */}
              <Container fluid className="mt-4">
                <Row>
                  <Col md={12} lg={8}>
                    {/* Sapaan dan penjelasan UserDashboard */}
                    <h1>HALO, {admin}!</h1>
                    <p>Ini adalah User Dashboard Anda. Temukan informasi penting dan kelola akun Anda di sini.</p>
    
                    {/* List Data Diri Penghuni */}
                    <Card className="mb-4">
                      <Card.Header>Data Diri Penghuni</Card.Header>
                      <Card.Body>
                      <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                            <th>id</th>
                            <th>Nama</th>
                            <th>nomor kamar</th>
                            <th>Nomor HP</th>
                            </tr>
                        </thead>
                        <tbody>
                            {penghunis.map((penghuni, index) => (
                            <tr key={index}>
                                <td>{penghuni.id}</td>
                                <td>{penghuni.nama}</td>
                                <td>{penghuni.noKamar}</td>
                                <td>{penghuni.noHP}</td>
                            </tr>
                            ))}
                        </tbody>
                        </Table>
                      </Card.Body>
                    </Card>
                    <Card className="mb-4">
                      <Card.Header>Statistik keluhan tiap bulan</Card.Header>
                      <Card.Body>
                      <Line options={options} data={data} style={{ maxWidth:'100%' }} />
                      </Card.Body>
                    </Card>
                    
                  </Col>
    
                  {/* Konten di Sebelah Kanan */}
                  <Col md={12} lg={4}>
                    <Card className="mb-4">
                      <Card.Header>Pemberitahuan Terkait Kos</Card.Header>
                      <Card.Body>
                      {pengumuman.map((pengumuman, index) => (
                        <Alert variant="warning" key={index}>
                          <strong>{pengumuman.judulPengumuman}!</strong>
                          <p>{pengumuman.deskripsiPengumuman}</p>
                        </Alert>
                      ))}
                      </Card.Body>
                    </Card>
                    <Card className="mb-4">
                      <Card.Header>Laporan Masuk</Card.Header>
                      <Card.Body>
                        <ListGroup variant="flush">
                          {laporans.map((laporan, index) => (
                            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
                              <div>
                                <strong>{laporan.Penghuni.nama}</strong>
                                <p>{laporan.DeskripsiKeluhan}</p>
                                <p>{laporan.TanggalLaporan}</p>
                              </div>
                              <Badge className='mx-2' bg={laporan.StatusLaporan ? "success" : "warning"}>
                                {laporan.StatusLaporan ? "Success" : "Warning"}
                              </Badge>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
            </Card>}
        
            
    </>
  )
}

export default DetailAdmin