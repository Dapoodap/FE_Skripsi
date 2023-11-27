import { useState } from "react";
import { Button, Card, Table } from "react-bootstrap"

function Datapenghuni() {
    const [penghuni, setPenghuni] = useState([
        { nomorKamar: '101', nama: 'John Doe', tanggalMasuk: '2023-01-01' },
        { nomorKamar: '102', nama: 'Jane Doe', tanggalMasuk: '2023-02-01' },
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
            <th>No. Kamar</th>
            <th>Nama Penghuni</th>
            <th>Tanggal Masuk</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {penghuni.map((penghuni, index) => (
            <tr key={index}>
              <td>{penghuni.nomorKamar}</td>
              <td>{penghuni.nama}</td>
              <td>{penghuni.tanggalMasuk}</td>
              <td>
                <Button variant="primary" onClick={() => handleEdit(index)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
            </Card.Body>
        </Card>
    </>
  )
}

export default Datapenghuni