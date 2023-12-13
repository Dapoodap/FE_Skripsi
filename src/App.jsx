import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Homescreen from './pages/Homescreen';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Roomcatalog from './pages/Roomcatalog';
import Contact from './pages/Contact';
import Loginpage from './pages/Loginpage';
import Detail from './pages/Detail';
import BookingForm from './pages/BookingForm';
import DashboardUser from './pages/user/DashboardUser';
import DashboardAdmin from './pages/admin/DashboardAdmin';
import AdminLogin from './pages/admin/AdminLogin';
import PrivateRoutes from './utils/PrivateRoutes';
function App() {

  return (
   <>
   <Routes>
    <Route path='/' element={<Homescreen/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/room' element={<Roomcatalog/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Loginpage/>}/> 
    <Route path='/adminLogin' element={<AdminLogin/>}/> 
    <Route path='/detail/:id' element={<Detail/>}/> 
    <Route path='/booking' element={<BookingForm/>}/> 
    <Route element={<PrivateRoutes/>}>
      <Route path='/user' element={<DashboardUser/>}/> 
      <Route path='/admin' element={<DashboardAdmin/>}/> 
    </Route>
    
   </Routes>
   </>
  )
}

export default App
