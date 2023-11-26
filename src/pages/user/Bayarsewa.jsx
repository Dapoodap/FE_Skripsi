import { useState } from "react";
import { Button, Card, Form, Tab, Tabs } from "react-bootstrap";
import Dana from "../../components/payment/Dana";
import Bni from "../../components/payment/Bni";

function Bayarsewa() {
    const [activeTab, setActiveTab] = useState(); // Tab aktif awal
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        noHp: '',
        alamat: '', // Ganti alamat dengan dropdown
        bulanSewa: '', // Tambahkan pilihan bulan
        buktiPembayaran: null,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevData) => ({
          ...prevData,
          buktiPembayaran: file,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan logika untuk mengirim data ke server atau melakukan tindakan lain sesuai kebutuhan
        console.log('Data yang akan dikirim:', formData);
      };
      const handleTabChange = (tab) => {
        setActiveTab(tab);
      };
    
  return (
    
   <>
    <Card  className="mb-4 p-3">
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
        <Form.Control
          type="text"
          placeholder="Masukkan nama lengkap"
          name="nama"
          value={formData.nama}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Masukkan alamat email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formNoHp">
        <Form.Label>Nomor HP</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Masukkan nomor HP"
          name="noHp"
          value={formData.noHp}
          onChange={handleInputChange}
        />
      </Form.Group>

      {/* Ganti alamat dengan dropdown */}
      <Form.Group controlId="formAlamat">
        <Form.Label>Bayar Sewa Untuk Bulan</Form.Label>
        <Form.Select
          name="bulanSewa"
          value={formData.bulanSewa}
          onChange={handleInputChange}
        >
          <option value="" disabled>Pilih Alamat</option>
          <option value="Alamat 1">Januari 2023</option>
          <option value="Alamat 2">Februari 2023</option>
          {/* Tambahkan opsi alamat lain jika diperlukan */}
        </Form.Select>
      </Form.Group>

      {/* Tambahkan pilihan bulan */}
      {/* <Form.Group controlId="formBulanSewa">
        <Form.Label>Bulan Sewa</Form.Label>
        <Form.Control
          type="month"
          name="bulanSewa"
          value={formData.bulanSewa}
          onChange={handleInputChange}
        />
      </Form.Group> */}

      <Form.Group controlId="formBuktiPembayaran">
        <Form.Label>Bukti Pembayaran</Form.Label>
        <Form.Control type="file" onChange={handleFileChange} />
      </Form.Group>

      <Button variant="primary" type="submit" className="my-5">
        Submit
      </Button>
    </Form>      
    </Card>
   </>
  )
}

export default Bayarsewa