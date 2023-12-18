import { Badge, Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Cardroomcatalog() {
  const [kamarList, setKamarList] = useState([]);
  const [loading, setLoading] = useState(true);

  function formatCurrency(number) {
    const formattedNumber = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  
    return formattedNumber.replace(/IDR/g, 'Rp.');
  }

  useEffect(() => {
    const fetchKamarList = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://be-skripsi-6v25wnffuq-uc.a.run.app/kamar', {
          headers: {
            Authorization: token,
          },
        });

        setKamarList(response.data.Data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchKamarList();
  }, []);

  const nav = useNavigate();

  const sewaKamar = (kamar) => {
    nav(`/detail/${kamar.noKamar}`);
  };

  return (
    <>
      {loading ? (
        <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "center",
          }}
        >
          {kamarList.map((kamar) => (
            <Card key={kamar.noKamar} style={{ width: '100%', maxWidth: '900px', marginBottom: '20px' }} className="mx-0">
              <Row className="align-items-center flex-column flex-md-row mx-0">
              <Col xs={12} md={6} lg={4}>
              <Card.Img
                variant="top"
                src={JSON.parse(kamar.gambarKamar)[0]}
                alt="Card Image"
                style={{ height: '240px', objectFit: 'cover' }}
              />
            </Col>
            <Col xs={12} md={6} lg={8} className="position-relative">
              <Card.Body style={{ minHeight: '240px' }}>
                <Card.Title style={{ fontSize: '30px', fontWeight: '600', letterSpacing: '0.2px', width: '65%' }}>
                  Kamar Tipe {kamar.tipeKamar} No {kamar.noKamar}
                </Card.Title>
                <Card.Text style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '0.26px' }}>
                  {kamar.deskripsiKamar.slice(0, 107)} ...
                </Card.Text>
                <strong>{formatCurrency(kamar.hargaKamar)}/Bulan</strong>
                <br />
                <br />
                {/* {saya mau if disini} */}
                {kamar && kamar.statusKamar === 'isi' ? (
                  <Button disabled variant="info">
                    Kamar sudah penuh
                  </Button>
                ) : (
                  <Button onClick={() => sewaKamar(kamar)} variant="info">
                    Lihat Kamar
                  </Button>
                )}

                
              </Card.Body>
              <div className="position-absolute top-0 end-0 p-3">
                <Badge bg="warning">{kamar.ratingKamar} Stars</Badge>
              </div>
            </Col>
              </Row>
            </Card>
          ))}
        </Container>
      )}
    </>
  );
}

export default Cardroomcatalog;
