import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

function Sidebardashboaruser() {
  const [user, setUser] = useState([]);
  const [dataPembayaran, setDataPembayaran] = useState([]);
  const [tanggalMasuk, setTanggalMasuk] = useState('');
  const [loading, setLoading] = useState(true);
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const token = localStorage.getItem('token');
        const id = jwtDecode(token).id;
        const userResponse = await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni/${id}`,{headers: {Authorization: token,},}
        );
        
        setUser(userResponse.data.data);
        setDataPembayaran(JSON.parse(JSON.parse(userResponse.data.data.dataPembayaran)));
        setLoading(false);
        setShowSpinner(false); 
        const dateObject = new Date(userResponse.data.data.TanggalMasuk);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObject.toLocaleDateString('id-ID', options);
        setTanggalMasuk(formattedDate);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserList();
  }, []);

  return (
    <Card className="mb-4">
      <Card.Body>

        <Card.Title className="font-weight-bold mb-4">Status Pembayaran Tiap Bulan, per tahun {new Date().getFullYear()}</Card.Title>
        <h4 className="mb-3">Pembayaran sewa pertama pada: {tanggalMasuk}</h4>
        {loading ? (
          <>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </button>
          </>
        ):(
          <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Bulan</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(dataPembayaran) && dataPembayaran.map((item, index) => (
              <tr key={index}>
                <td style={{ backgroundColor: item.status ? '#4caf50' : '#ff9800' }}>{item.bulan}</td>
                <td style={{ backgroundColor: item.status ? '#4caf50' : '#ff9800' }}>{item.status ? 'Lunas' : 'Belum Lunas'}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        )}
        
      </Card.Body>
    </Card>
  );
}

export default Sidebardashboaruser;
