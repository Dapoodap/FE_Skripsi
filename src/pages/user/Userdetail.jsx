import { useEffect, useState } from "react";
import { Accordion, Alert, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

function UserDetail() {
  const faqData = [
    {
      question: 'Bagaimana cara mengganti foto profil?',
      answer: 'Anda dapat mengganti foto profil di halaman Pengaturan Akun. Pilih opsi "Ganti Foto Profil" dan ikuti petunjuknya.',
    },
    {
      question: 'Bagaimana cara mengubah kata sandi?',
      answer: 'Untuk mengubah kata sandi, masuk ke halaman Pengaturan Akun dan pilih opsi "Ganti Kata Sandi". Isi formulir dengan informasi yang diminta.',
    },
    {
      question: 'Apakah ada batasan jumlah posting yang dapat saya buat?',
      answer: 'Tidak, saat ini tidak ada batasan jumlah posting yang dapat Anda buat. Silakan berbagi pengalaman dan cerita Anda sebanyak yang Anda inginkan!',
    },
    // Tambahkan pertanyaan dan jawaban lain sesuai kebutuhan
  ];

  const adminNotification = {
    title: 'Pemberitahuan Penting',
    message: 'Halo Penghuni, terdapat pemeliharaan sistem pada hari Minggu, 25 Desember 2023, pukul 08.00-12.00 WIB. Harap bersiap-siap untuk kemungkinan gangguan layanan. Terima kasih.',
  };

  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    updateGreeting();
    const interval = setInterval(() => {
      setCurrentTime(new Date());
      updateGreeting();
    }, 1000 * 60); // Perbarui setiap menit

    // Bersihkan interval pada unmount komponen
    return () => clearInterval(interval);
  }, []);

  const updateGreeting = () => {
    const currentHour = currentTime.getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Selamat Pagi');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Selamat Siang');
    } else {
      setGreeting('Selamat Malam');
    }
  };

  return (
    <>
      <Card className="mb-4" style={{ backgroundColor: '#ECE3CE' }}>
        <Card.Body>
          {/* Isi dengan informasi penghuni, foto profil, dsb. */}
          <Container fluid className="mt-4">
            <Row>
              <Col md={12} lg={8}>
                {/* Sapaan dan penjelasan UserDashboard */}
                <h1>{greeting}, penghuni!</h1>
                <p>Ini adalah User Dashboard Anda. Temukan informasi penting dan kelola akun Anda di sini.</p>

                {/* List Data Diri Penghuni */}
                <Card className="mb-4">
                  <Card.Header>Data Diri Penghuni</Card.Header>
                  <Card.Body>
                    <ListGroup>
                      <ListGroup.Item>Nama: [Nama Penghuni]</ListGroup.Item>
                      <ListGroup.Item>Email: [Email Penghuni]</ListGroup.Item>
                      <ListGroup.Item>Nomor HP: [Nomor HP Penghuni]</ListGroup.Item>
                      {/* Tambahkan informasi lain sesuai kebutuhan */}
                    </ListGroup>
                  </Card.Body>
                </Card>
              </Col>

              {/* Konten di Sebelah Kanan */}
              <Col md={12} lg={4}>
                <Card className="mb-4">
                  <Card.Header>Pemberitahuan Terkait Kos</Card.Header>
                  <Card.Body>
                    <Alert variant="warning">
                      <strong>{adminNotification.title}</strong>
                      <p>{adminNotification.message}</p>
                    </Alert>
                    {/* Isi dengan konten atau aksi tambahan */}
                    <p>Anda dapat menambahkan konten atau aksi tambahan di sini sesuai kebutuhan Anda.</p>
                  </Card.Body>
                </Card>
                <Card className="mb-4">
                  <Card.Header>FAQ - Pertanyaan Umum</Card.Header>
                  <Card.Body>
                    <Accordion defaultActiveKey="0">
                      {faqData.map((data, index) => (
                        <Accordion.Item eventKey={index} key={index}>
                          <Accordion.Header>{data.question}</Accordion.Header>
                          <Accordion.Body>{data.answer}</Accordion.Body>
                        </Accordion.Item>
                      ))}
                    </Accordion>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default UserDetail;
