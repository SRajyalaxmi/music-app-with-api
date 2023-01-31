import Home from './HomePage/Home'
import {Route,Routes} from 'react-router-dom'
import Login from './Header/Login'
import Signup from './Header/signup'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />         
        </Routes>
    </div>
  )
}

export default App

