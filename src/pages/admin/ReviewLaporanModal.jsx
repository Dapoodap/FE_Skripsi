import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ReviewLaporanModal({ show, handleClose, laporanid }) {
  const [laporan, setLaporan] = useState();
  
  // const handleBalasanChange = (event) => {
  //   setBalasan(event.target.value);
  // };
  console.log(laporanid)
useEffect(()=>{
  const fetchLaporan = async () =>{
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`https://be-skripsi-6v25wnffuq-uc.a.run.app/lapor/${laporanid}`, {
        headers: {
          Authorization: token,
        },
      });
      setLaporan(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
  fetchLaporan()
},[])
console.log(laporan)
  const handleSubmit = () => {
    // Proses pengiriman balasan dan pembaruan status ke server
    // Misalnya, Anda bisa menggunakan fungsi handleSolved yang dilewatkan dari parent component
    // handleSolved(laporan.id, balasan);

    // Tutup modal setelah submit
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Review Laporan</Modal.Title>
      </Modal.Header>
      {laporan ? (<Modal.Body>
        <p><strong>Judul Laporan: {laporan.JenisKeluhan}</strong> </p>
        <p><strong>Isi Laporan:</strong></p>
        <p><strong>{laporan.DeskripsiKeluhan}</strong></p>

        {/* Form untuk memberi balasan */}
        <Form.Group controlId="balasan">
          <Form.Label>Balasan</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Masukkan balasan Anda"
            // value={balasan}
            // onChange={handleBalasanChange}
          />
        </Form.Group>
      </Modal.Body>):<>Loading ...</>}
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="success" onClick={handleSubmit}>
          Selesaikan dan Kirim Balasan
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReviewLaporanModal;
