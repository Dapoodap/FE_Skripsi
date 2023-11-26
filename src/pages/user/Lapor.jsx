import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function Lapor() {
    const [formData, setFormData] = useState({
        jenisKeluhan: '', // Ganti jenisKeluhan dengan dropdown
        deskripsiKeluhan: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Lakukan logika untuk mengirim data ke server atau melakukan tindakan lain sesuai kebutuhan
        console.log('Data yang akan dikirim:', formData);
      };
  return (
    <>
    
    <Card  className="mb-4 p-3">
    <Form onSubmit={handleSubmit}>
      {/* Ganti jenisKeluhan dengan dropdown */}
      <Form.Group controlId="formJenisKeluhan">
        <Form.Label>Jenis Keluhan</Form.Label>
        <Form.Select
          name="jenisKeluhan"
          value={formData.jenisKeluhan}
          onChange={handleInputChange}
        >
          <option value="" disabled>Pilih Jenis Keluhan</option>
          <option value="Air">Air</option>
          <option value="Listrik">Listrik</option>
          <option value="Kebersihan">Kebersihan</option>
          {/* Tambahkan opsi keluhan lain jika diperlukan */}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="formDeskripsiKeluhan">
        <Form.Label>Deskripsi Keluhan</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Deskripsikan keluhan Anda"
          name="deskripsiKeluhan"
          value={formData.deskripsiKeluhan}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>        
    </Card>
    </>
  )
}

export default Lapor