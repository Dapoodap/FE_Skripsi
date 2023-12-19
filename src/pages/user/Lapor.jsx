import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Button, Card, Form, Toast, Spinner } from "react-bootstrap";

function Lapor() {
  const [iduser, setIduser] = useState('');
  const [token, setToken] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    IdPelapor: '',
    JenisKeluhan: '',
    DeskripsiKeluhan: '',
    TanggalLaporan: '',
  });

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const token = localStorage.getItem('token');
        setToken(token)
        setIduser(jwtDecode(token).id);
        setFormData((prevData) => ({
          ...prevData,
          IdPelapor: jwtDecode(token).id,
          TanggalLaporan: getCurrentDate(),
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserList();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const getCurrentDate = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://be-skripsi-6v25wnffuq-uc.a.run.app/lapor', formData, {
        headers: {
          Authorization: token,
        },
      });

      if (response.status !== 201) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setShowToast(true);
      setLoading(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    }
  };

  return (
    <Card className="mb-4 p-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formJenisKeluhan">
          <Form.Label>Jenis Keluhan</Form.Label>
          <Form.Select
            name="JenisKeluhan"
            value={formData.JenisKeluhan}
            onChange={handleInputChange}
          >
            <option value="" disabled>Pilih Jenis Keluhan</option>
            <option value="Air">Air</option>
            <option value="Listrik">Listrik</option>
            <option value="Kebersihan">Kebersihan</option>
            <option value="Wifi">Wifi</option>
            <option value="Pembayaran">Pembayaran</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="formDeskripsiKeluhan">
          <Form.Label>Deskripsi Keluhan</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Deskripsikan keluhan Anda"
            name="DeskripsiKeluhan"
            value={formData.DeskripsiKeluhan}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formTanggalLaporan">
          <Form.Label>Tanggal Laporan</Form.Label>
          <Form.Control type="text" readOnly value={formData.TanggalLaporan} />
        </Form.Group>

        <Button variant="primary" type="submit" style={{ marginTop: '10px' }} disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
        </Button>
      </Form>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        delay={3000}
        autohide
        style={{ position: 'absolute', top: 0, right: 0 }}
      >
        <Toast.Header>
          <strong className="me-auto">Laporan</strong>
        </Toast.Header>
        <Toast.Body>Laporan baru ditambahkan!</Toast.Body>
      </Toast>
    </Card>
  );
}

export default Lapor;
