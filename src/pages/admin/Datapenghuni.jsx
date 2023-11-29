import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap"
import TambahPenghuniModal from "./TambahPenghuniModal";
import EditDetailPenghuniModal from "./EditDetailPenghuniModal";

function Datapenghuni() {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const [penghuniToEdit, setPenghuniToEdit] = useState();

  const handleOpenEditModal = (index) => {
    console.log(index)
    setPenghuniToEdit(index)
    setShowEditModal(true);
  };
  const handleCloseEditModal = () => setShowEditModal(false);
    const [penghuni] = useState([
        {  nama: 'John Doe',nomorKamar: '101', tanggalMasuk: '2023-01-01',hp:'0085678993',username:'dapos',password:'dopos2123' },
        {  nama: 'Jane Doe',nomorKamar: '101', tanggalMasuk: '2023-02-01',hp:'0085678993',username:'rekon',password:'dopos4223' },
        // ... tambahkan data penghuni lainnya
      ]);
    
      const handleEdit = (index) => {
        // Logika untuk menghandle pengeditan data
        console.log('Edit data penghuni ke-', index);
      };
  return (
    <>
        <Card className="mb-4" style={{ backgroundColor: '#ECE3CE' }}>
            <Card.Body>
              {/* Isi dengan informasi penghuni, foto profil, dsb. */}
              <div className="table-responsive">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Nama Penghuni</th>
                      <th>No. Kamar</th>
                      <th>Tanggal Masuk</th>
                      <th>Nomor Telpon</th>
                      <th>Username</th>
                      <th>Password</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {penghuni.map((penghuni, index) => (
                      <tr key={index}>
                        <td>{penghuni.nama}</td>
                        <td>{penghuni.nomorKamar}</td>
                        <td>{penghuni.tanggalMasuk}</td>
                        <td>{penghuni.hp}</td>
                        <td>{penghuni.username}</td>
                        <td>{penghuni.password}</td>
                        <td>
                          <Button variant="info" onClick={() => handleOpenEditModal(index)}>
                            Edit
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card.Body>
            <Button variant="primary" onClick={handleOpenModal}>
              Tambah Data Penghuni
            </Button>
            <TambahPenghuniModal show={showModal} handleClose={handleCloseModal} />
        </Card>
        <EditDetailPenghuniModal
        show={showEditModal}
        handleClose={handleCloseEditModal}
        index={penghuniToEdit}
      />
    </>
  )
}

export default Datapenghuni