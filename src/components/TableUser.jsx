import { Card} from 'react-bootstrap'

function Sidebardashboaruser() {

  return (
    <>
   <Card className="mb-4">
              <Card.Body>
                <Card.Title className="font-weight-bold">Status Pembayaran Tiap Bulan</Card.Title>
                {/* Isi dengan data status pembayaran */}
                <table className="table">
                  <thead>
                    <tr>
                      <th>Bulan</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                      <td style={{ backgroundColor:'#4caf50' }}>Juli 2023</td>
                      <td style={{ backgroundColor:'#4caf50' }}>Lunas</td>
                    </tr>
                    <tr>
                      <td >Agustus 2023</td>
                      <td>Belum Lunas</td>
                    </tr>
                    {/* ... */}
                  </tbody>
                </table>
              </Card.Body>
            </Card>
    </>
  )
}

export default Sidebardashboaruser