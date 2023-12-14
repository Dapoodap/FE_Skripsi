import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Button, Card, Form, Toast } from "react-bootstrap";

function Lapor() {
  const [iduser, setIduser] = useState('');
  const [token, setToken] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [formData, setFormData] = useState({
    IdPelapor: '',
    JenisKeluhan: '',
    DeskripsiKeluhan: '',
    TanggalLaporan: '', // Add TanggalLaporan in formData
  });

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const token = localStorage.getItem('token');
        setToken(token)
        setIduser(jwtDecode(token).id);
        // Set the IdPelapor in the state
        setFormData((prevData) => ({
          ...prevData,
          IdPelapor: jwtDecode(token).id,
          TanggalLaporan: getCurrentDate(), // Set current date
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserList();
    
  }, []);
  // console.log(token)
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
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    const yyyy = today.getFullYear();

    return `${mm}/${dd}/${yyyy}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can now use formData with the TanggalLaporan included to send data to the server
    console.log('Data yang akan dikirim:', formData);
    // Add your logic to send data using axios
    axios.post('https://be-skripsi-6v25wnffuq-uc.a.run.app/lapor ',formData,{headers: {Authorization: token,},})
      .then(response => {
        console.log(response.data);
        setShowToast(true);
        setFormData({
          IdPelapor: '',
          jenisKeluhan: '',
          deskripsiKeluhan: '',
        });
      })
      .catch(error => {
        console.error(error);
      });
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

        <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
          Submit
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
