import Header from "./components/Header";
import Footer from './components/Footer';
import Portfolio from './components/pages/Portfolio';
import About from './components/pages/About';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import FunLines from "./components/FunLines";



const App = () => {
  return (
    <BrowserRouter>
    <div className="d-flex">
      <Header />
      <Navigation/>
    </div>
    <FunLines />
      <Routes>
        <Route path='/' element={<About />}></Route>
        <Route path='/resume' element={<Resume />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/Portfolio' element={<Portfolio />}></Route>
      </Routes>
      <Footer />
    <FunLines />
    </BrowserRouter>
  )

}
export default App