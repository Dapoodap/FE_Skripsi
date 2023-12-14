import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const TambahPenghuniModal = ({ show, handleClose, tambahPenghuni }) => {
  const [nama, setNama] = useState('');
  const [noKamar, setNoKamar] = useState('');
  const [TanggalMasuk, setTanggalMasuk] = useState('');
  const [noHP, setnoHP] = useState('');
  const [alamat, setAlamat] = useState('');
  const [jenisKelamin, setjenisKelamin] = useState('');
  const [BiayaTambahan, setBiayaTambahan] = useState('');
  const [listKamar, setListKamar] = useState([]);

  useEffect(() => {
    const fetchKamar = async () => {
      try {
        const response = await axios.get('https://be-skripsi-6v25wnffuq-uc.a.run.app/kamar');
        const kamarData = response.data.Data;
        setListKamar(kamarData);
      } catch (error) {
        console.error('Error fetching kamar data:', error);
      }
    };

    fetchKamar();
  }, []);

  const handleTambahPenghuni = () => {
    // Lakukan operasi tambah penghuni (misalnya, kirim ke server)
    // ...
    
    // Setelah operasi tambah, tutup modal dan reset formulir
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah Data Penghuni</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formNama">
            <Form.Label>Nama Penghuni</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan nama penghuni"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formNomorKamar">
            <Form.Label>Nomor Kamar</Form.Label>
            <Form.Control
              as="select"
              value={noKamar}
              onChange={(e) => setNoKamar(e.target.value)}
            >
              <option value="">Pilih Nomor Kamar</option>
              {listKamar.map((kamar) => (
                <option key={kamar.id} value={kamar.noKamar} disabled={kamar.statusKamar === 'isi'}>
                  Kamar tipe {kamar.tipeKamar} {kamar.noKamar} {kamar.status === 'isi' && '(Terisi)'}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formnoHP">
            <Form.Label>No Handphone (WA)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Masukkan no hp penghuni"
              value={noHP}
              onChange={(e) => setnoHP(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formAlamat">
            <Form.Label>Alamat KTP</Form.Label>
            <Form.Control
              type="text"
              placeholder="Masukkan alamat sesuai ktp"
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formTanggal">
            <Form.Label>Tanggal Masuk Awal</Form.Label>
            <Form.Control
              type="date"
              placeholder="Masukkan tanggal masuk awal"
              value={TanggalMasuk}
              onChange={(e) => setTanggalMasuk(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formJenisKelamin">
            <Form.Label>Jenis Kelamin</Form.Label>
            <Form.Control
              as="select"
              value={jenisKelamin}
              onChange={(e) => setjenisKelamin(e.target.value)}
            >
              <option disabled>Pilih Jenis Kelamin</option>
              <option value="laki-laki">Laki-laki</option>
              <option value="perempuan">Perempuan</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formtambahan biaya">
            <Form.Label>Tambahan Biaya</Form.Label>
            <Form.Control
              type="number"
              placeholder="Masukkan tambahan biaya"
              value={BiayaTambahan}
              onChange={(e) => setBiayaTambahan(e.target.value)}
            />
          </Form.Group>

          {/* Sisipkan bagian form lainnya sesuai kebutuhan Anda */}
          {/* ... */}

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Tutup
        </Button>
        <Button variant="primary" onClick={handleTambahPenghuni}>
          Tambah Penghuni
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default TambahPenghuniModal;
