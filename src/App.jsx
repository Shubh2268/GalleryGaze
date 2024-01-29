import Home from './pages/Home'
import ImageDetail from './pages/ImageDetail'
import { Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/imgdetail' element={<ImageDetail />} />
      </Routes>
    </div>
  )
}

export default App
