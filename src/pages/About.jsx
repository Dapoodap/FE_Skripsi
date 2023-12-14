import { Button, Card, Col, Container, Row } from "react-bootstrap"
import Navigation from "../components/Navigation"
// 
function About() {
  return (
    <>
    <Navigation/>
    <Container className="mt-5">
      {/* Section 1: Tentang Kami */}
      <Row className="mb-5">
        <Col>
          <Card className="d-flex">
            <Card.Body className="text-right">
              <h2 className="text-primary mb-4">Tentang Kami</h2>
              <p className="lead">
                Selamat datang di Kos Dariz! Kami menyediakan pengelolaan kos yang nyaman dan aman untuk Anda tinggali.
              </p>
              <p className="lead">
                Kos Dariz dilengkapi dengan fasilitas modern dan menyediakan berbagai pilihan pembayaran yang mudah dan nyaman.
              </p>
            </Card.Body>
            {/* Gambar atau ikon bisa diletakkan di sini */}
          </Card>
        </Col>
      </Row>

      {/* Section 2: Pembayaran */}
      <Row className="mb-5">
        <Col>
          <Card className="d-flex">
            {/* Gambar atau ikon bisa diletakkan di sini */}
            <Card.Body className="text-left order-2">
              <h2 className="text-danger mb-4">Pembayaran</h2>
              <p className="lead">
                Kami menerima berbagai metode pembayaran termasuk transfer bank, kartu kredit, dan e-wallet.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Section 3: Chatbot Telegram */}
      <Row className="mb-5">
        <Col>
          <Card className="d-flex">
            <Card.Body className="text-right">
              <h2 className="text-warning mb-4">Chatbot Telegram</h2>
              <p className="lead">
                Gunakan chatbot Telegram kami untuk mendapatkan informasi lebih lanjut atau mengajukan pertanyaan. Klik tombol di bawah ini untuk terhubung!
              </p>
              <Button variant="primary" href="https://t.me/KosDarizBot" target="_blank" rel="noopener noreferrer">
                Chatbot Telegram
              </Button>
            </Card.Body>
            {/* Gambar atau ikon bisa diletakkan di sini */}
          </Card>
        </Col>
      </Row>

      {/* Section 4: Fasilitas */}
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h2 className="text-success mb-4">Fasilitas</h2>
              <p className="lead">
                Lihat galeri gambar di bawah untuk melihat fasilitas modern yang kami sediakan.
              </p>
              {/* Tambahkan galeri gambar fasilitas di sini */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default About