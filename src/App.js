import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header, Footer } from './components'
import { Home, About, Projects, Contact } from './pages'

function App() {
  return (
    <>
      <Router>
        <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>

        <Footer />
      </Router>
    </>
  )
}

export default App;
