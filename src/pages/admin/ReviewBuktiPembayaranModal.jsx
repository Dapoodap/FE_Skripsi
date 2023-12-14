import React, { useEffect, useState } from 'react';
import { Modal, Button, Form, ToastContainer, Toast } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import gbr from '../../assets/kos.jpg'
import ReactImageZoom from 'react-image-zoom';
import axios from 'axios';

function ReviewBuktiPembayaranModal({ show, handleClose, idinvoice }) {
  const [sewa,setSewa] = useState()
  const [dp,setDp] = useState()
  // console.log(sewa)


  useEffect(()=>{
    const fetchInv = async () =>{
      const token = localStorage.getItem('token');
      try {
        const sewaResponse = await axios.get(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/inv/${idinvoice}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setSewa(sewaResponse.data.data)
        console.log(sewaResponse.data)
      } catch (error) {
        const dpResponse = await axios.get(
          `https://be-skripsi-6v25wnffuq-uc.a.run.app/dp/${idinvoice}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        console.log(dpResponse.data.data)
      }
    }
    fetchInv()
  },[])
  const handleApprove = () => {
    // Logika untuk menyetujui pembayaran
    // Misalnya, mengirim permintaan ke server untuk mengubah status pembayaran menjadi disetujui
    // Setelah berhasil, tampilkan toast sukses
    toast.success('Bukti pembayaran disetujui!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    handleClose();
  };

  const handleDecline = () => {
    // Logika untuk menolak pembayaran
    // Misalnya, mengirim permintaan ke server untuk mengubah status pembayaran menjadi ditolak
    // Setelah berhasil, tampilkan toast sukses
    toast.error('Bukti pembayaran ditolak!', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Review Bukti Pembayaran</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {sewa != undefined ? <Form>
            {/* Tampilkan detail bukti pembayaran */}
            {/* Misalnya: */}
            <Form.Group controlId="kategori">
              <Form.Label>Kategori Pembayaran Sewa</Form.Label>
              {/* <Form.Control type="text" value={buktiPembayaran.kategori} readOnly /> */}
            </Form.Group>
            <Form.Group controlId="bukti">
              <Form.Label>Bukti Pembayaran</Form.Label>
              <ReactImageZoom
                {...{
                    width: 300,
                    height: 300,
                    zoomWidth: 300,
                    img: sewa.gambar ,// Ganti dengan URL gambar dari database
                    zoomPosition: 'original',
                }}
                />
            </Form.Group>

            {/* Pilihan status pembayaran */}
          </Form> : <Form>
            {/* Tampilkan detail bukti pembayaran */}
            {/* Misalnya: */}
            <Form.Group controlId="kategori">
              <Form.Label>Kategori Pembayaran DP</Form.Label>
              {/* <Form.Control type="text" value={buktiPembayaran.kategori} readOnly /> */}
            </Form.Group>
            <Form.Group controlId="bukti">
              <Form.Label>Bukti Pembayaran</Form.Label>
              <ReactImageZoom
                {...{
                    width: 300,
                    height: 300,
                    zoomWidth: 300,
                    img: gbr ,// Ganti dengan URL gambar dari database
                    zoomPosition: 'original',
                }}
                />
            </Form.Group>

            {/* Pilihan status pembayaran */}
          </Form>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleApprove}>
            Approve
          </Button>
          <Button variant="danger" onClick={handleDecline}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Toast container untuk menampilkan pesan sukses atau error */}
      <ToastContainer />
    </>
  );
}

export default ReviewBuktiPembayaranModal;
