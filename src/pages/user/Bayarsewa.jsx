import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Card, Form, Tab, Tabs, Toast, Spinner } from 'react-bootstrap';
import Dana from '../../components/payment/Dana';
import Bni from '../../components/payment/Bni';
import { jwtDecode } from 'jwt-decode';

function Bayarsewa() {
  const [activeTab, setActiveTab] = useState();
  const [showToast, setShowToast] = useState(false);
  const [showErrorToast, setShowErrorToast] = useState(false);
  const [loading, setLoading] = useState(false); // State untuk menangani loading
  const [nama, setNama] = useState('');
  const [bulan, setBulan] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Aktifkan loading

    const formData = new FormData();
    formData.append('nama', nama);
    formData.append('bulan', bulan);
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      const id = jwtDecode(token).id;
    
      if (bulan) {
        const response = await axios.post(`https://be-skripsi-6v25wnffuq-uc.a.run.app/inv/${id}`, formData, {
          headers: {
            Authorization: token,
           
          },
        });
    
        if (response.status !== 201) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      } else {
        alert('Pilih bulan');
      }
    
      setShowToast(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      setShowErrorToast(true);
      console.error('Error:', error);
    } finally {
      setLoading(false); // Matikan loading
      setBulan(''); // Bersihkan form bulan
      setFile(null); // Reset nilai file
    }
  };

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const token = localStorage.getItem('token');
        const id = jwtDecode(token).id;
        const userResponse = await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/${id}`, {
          headers: {
            Authorization: token,
          },
        });
        setNama(userResponse.data.data.nama);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserList();
  }, []);

  const handleImage = async (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Card className="mb-4 p-3">
        <div className="bg-light p-4 rounded">
          <h2 className="text-center mb-4">Pembayaran Sewa</h2>
          <Tabs activeKey={activeTab} onSelect={(tab) => handleTabChange(tab)}>
            <Tab eventKey="ComponentA" title="Dana">
              <Dana />
            </Tab>
            <Tab eventKey="ComponentB" title="BNI">
              <Bni />
            </Tab>
          </Tabs>
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNama">
            <Form.Label>Nama</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama lengkap" name="nama" disabled value={nama} onChange={(e) => setNama(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formBulanSewa">
            <Form.Label>Bayar Sewa Untuk Bulan</Form.Label>
            <Form.Select name="bulanSewa" value={bulan} onChange={(e) => setBulan(e.target.value)}>
              <option value="">Pilih Bulan</option>
              <option value="Januari">Januari</option>
              <option value="Februari">Februari</option>
              <option value="Maret">Maret</option>
              <option value="April">April</option>
              <option value="Mei">Mei</option>
              <option value="Juni">Juni</option>
              <option value="Juli">Juli</option>
              <option value="Agustus">Agustus</option>
              <option value="September">September</option>
              <option value="Oktober">Oktober</option>
              <option value="November">November</option>
              <option value="Desember">Desember</option>
              {/* ... (add other months) */}
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formBuktiPembayaran">
            <Form.Label>Bukti Pembayaran</Form.Label>
            <Form.Control type="file" name="file" onChange={handleImage} />
          </Form.Group>

          <Button variant="primary" type="submit" className="my-5" disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : 'Submit'}
          </Button>
        </Form>
      </Card>
      <Toast
        show={showToast}
        onClose={() => setShowToast(false)}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>Pembayaran {bulan} berhasil dikirim, silahkan tunggu admin meninjau.</Toast.Body>
      </Toast>
      <Toast
        show={showErrorToast}
        onClose={() => setShowErrorToast(false)}
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
        }}
      >
        <Toast.Header>
          <strong className="me-auto">Notification</strong>
        </Toast.Header>
        <Toast.Body>Terjadi kesalahan. Silahkan coba lagi atau hubungi admin jika masalah berlanjut.</Toast.Body>
      </Toast>
    </>
  );
}

export default Bayarsewa;
