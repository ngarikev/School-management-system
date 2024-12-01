import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import SideBar from './components/SideBar'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <Router>
        <Header />
        <SideBar />
        <Routes>

          <Route path='' />
        </Routes>
      </Router>

    </>
  )
}

export default App
