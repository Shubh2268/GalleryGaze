import Footer from './components/Footer';
import Home from './pages/Home'
import ImageDetail from './pages/ImageDetail'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className='bg-gray-200'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/imgdetail' element={<ImageDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
