import './App.css'
import About_page from './pages/About_us_page'
import Contact_page from './pages/Contact_page'
import Events_page from './pages/Events_page'
import Home_page from './pages/Home_page'
import { BrowserRouter, Routes, Route } from 'react-router'
import Register_page from './pages/Register_page'
import Layout from './components/Layout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home_page />} />
            <Route path="/about" element={<About_page />} />
            <Route path="/contact" element={<Contact_page />} />
            <Route path="/events" element={<Events_page />} />
            <Route path="/register" element={<Register_page />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
