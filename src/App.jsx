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
function App() {

  return (
   <>
   <Routes>
    <Route path='/' element={<Homescreen/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/room' element={<Roomcatalog/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/login' element={<Loginpage/>}/> {/*  */}
    <Route path='/detail' element={<Detail/>}/> {/*  */}
    <Route path='/booking' element={<BookingForm/>}/> 
   </Routes>
   </>
  )
}

export default App
