import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';

const TambahPenghuniModal = ({ show, handleClose, tambahPenghuni }) => {
  const [postPenghuni,setPostpenghuni] = useState()
  const [nama, setNama] = useState('');
  const [noKamar, setNoKamar] = useState('');
  const [TanggalMasuk, setTanggalMasuk] = useState('');
  const [noHP, setnoHP] = useState('');
  const [alamat, setAlamat] = useState('');
  const [jenisKelamin, setjenisKelamin] = useState('');
  const [BarangBawaan, setBarangBawaan] = useState('');

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
  const handleCheckboxChange = (barang) => {
    // Salin array BarangBawaan ke array baru
    const updatedBarangBawaan = [...BarangBawaan];

    // Periksa apakah barang sudah ada di dalam array
    const isBarangSelected = updatedBarangBawaan.includes(barang);

    // Jika sudah ada, hapus dari array
    if (isBarangSelected) {
      const index = updatedBarangBawaan.indexOf(barang);
      updatedBarangBawaan.splice(index, 1);
    } else {
      // Jika belum ada, tambahkan ke array
      updatedBarangBawaan.push(barang);
    }

    // Perbarui state BarangBawaan
    setBarangBawaan(updatedBarangBawaan);
  };
  const handleTambahPenghuni = async() => {
    try {
      const token = localStorage.getItem('token')
      const BiayaTambahan = BarangBawaan.length * 200000
      const kamaresponse = await axios.put(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/kamar/${noKamar}`,
        {
          statusKamar : 'kosong',
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      const response = await axios.post(
        `https://be-skripsi-6v25wnffuq-uc.a.run.app/penghuni`,
        {
          nama,
          noKamar,
          noHP,
          TanggalMasuk,
          alamat,
          jenisKelamin,
          BiayaTambahan,
          BarangBawaan : JSON.stringify(BarangBawaan)
        },  // Request body diubah menjadi null karena method PUT tidak memerlukan body
        {
          headers: {
            Authorization: token,
          },
        }
      );
      console.log(response.data)
      setPostpenghuni(true);
      setTimeout(() => {
      setPostpenghuni(false);
      handleClose()
      window.location.reload()
      }, 3000);
    

    } catch (error) {
      console.error('Error:', error);
    }
    // Setelah operasi tambah, tutup modal dan reset formulir
    handleClose();
  };
  useState(()=>{
    
  },[])
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
                <option key={kamar.id} value={kamar.noKamar}>
                  Kamar tipe {kamar.tipeKamar} {kamar.noKamar}
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
          <Form.Group controlId="formBarangBawaan">
            <Form.Label>Barang Bawaan</Form.Label>
            <Form.Check
              type="checkbox"
              label="Magic Com"
              checked={BarangBawaan.includes('Magic Com')}
              onChange={() => handleCheckboxChange('Magic Com')}
            />
            <Form.Check
              type="checkbox"
              label="Pemanas Air Minum"
              checked={BarangBawaan.includes('Pemanas Air Minum')}
              onChange={() => handleCheckboxChange('Pemanas Air Minum')}
            />
            <Form.Check
              type="checkbox"
              label="Kulkas Kecil"
              checked={BarangBawaan.includes('Kulkas Kecil')}
              onChange={() => handleCheckboxChange('Kulkas Kecil')}
            />
            <Form.Check
              type="checkbox"
              label="Setrika"
              checked={BarangBawaan.includes('Setrika')}
              onChange={() => handleCheckboxChange('Setrika')}
            />            {/* Tambahkan pilihan barang bawaan sesuai kebutuhan */}
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
