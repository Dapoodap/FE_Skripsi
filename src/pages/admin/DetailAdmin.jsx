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
import { Alert, Badge, Card, Col, Container, ListGroup, Row, Table } from 'react-bootstrap';
  import { Line } from 'react-chartjs-2';

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
    const dataPenghuni = [
        { nama: 'Penghuni 1', email: 'penghuni1@example.com', nomorHP: '08123456789' },
        { nama: 'Penghuni 2', email: 'penghuni2@example.com', nomorHP: '08234567890' },
        // Tambahkan data penghuni lainnya
      ];
      const dataLaporan = [
        { judul: 'David', isi: 'Bu saya mau service AC sudah rusak',status:true,tgl:'20 September 2023'},
        { judul: 'DIO', isi: 'Kmar saya bocor bu',status:false,tgl:'29 September 2023'},
        // Tambahkan data laporan lainnya
      ];
  return (
    <>
        <Card className="mb-4" style={{ backgroundColor: '#ECE3CE' }}>
            <Card.Body>
              {/* Isi dengan informasi penghuni, foto profil, dsb. */}
              <Container fluid className="mt-4">
                <Row>
                  <Col md={12} lg={8}>
                    {/* Sapaan dan penjelasan UserDashboard */}
                    <h1>sHALO, ADMION!</h1>
                    <p>Ini adalah User Dashboard Anda. Temukan informasi penting dan kelola akun Anda di sini.</p>
    
                    {/* List Data Diri Penghuni */}
                    <Card className="mb-4">
                      <Card.Header>Data Diri Penghuni</Card.Header>
                      <Card.Body>
                      <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Nomor HP</th>
                            {/* Tambahkan kolom-kolom lain sesuai kebutuhan */}
                            </tr>
                        </thead>
                        <tbody>
                            {dataPenghuni.map((penghuni, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{penghuni.nama}</td>
                                <td>{penghuni.email}</td>
                                <td>{penghuni.nomorHP}</td>
                                {/* Tambahkan data lain sesuai kebutuhan */}
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
                        <Alert variant="warning">
                          <strong>Pemberitahuan Penting</strong>
                          <p>Halo Penghuni, terdapat pemeliharaan sistem pada hari Minggu, 25 Desember 2023, pukul 08.00-12.00 WIB. Harap bersiap-siap untuk kemungkinan gangguan layanan. Terima kasih.</p>
                        </Alert>
                        {/* Isi dengan konten atau aksi tambahan */}
                        <p>Anda dapat menambahkan konten atau aksi tambahan di sini sesuai kebutuhan Anda.</p>
                      </Card.Body>
                    </Card>
                    <Card className="mb-4">
                      <Card.Header>Laporan Masuk</Card.Header>
                      <Card.Body>
                      <ListGroup variant="flush">
                        {dataLaporan.map((laporan, index) => (
                            <ListGroup.Item key={index}>
                                <strong>{laporan.judul}</strong> {laporan.status ? (<Badge className='mx-2' bg="success">Success</Badge>):(<Badge className='mx-2' bg="warning" text="dark">warning</Badge>)}
                                <p>{laporan.isi}</p>
                                <p>{laporan.tgl}</p>
                            </ListGroup.Item>
                            ))}
                        </ListGroup>
                        {/* <Accordion defaultActiveKey="0">
                          {faqData.map((data, index) => (
                            <Accordion.Item eventKey={index} key={index}>
                              <Accordion.Header>{data.question}</Accordion.Header>
                              <Accordion.Body>{data.answer}</Accordion.Body>
                            </Accordion.Item>
                          ))}
                        </Accordion> */}
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
            </Card>
    </>
  )
}

export default DetailAdmin