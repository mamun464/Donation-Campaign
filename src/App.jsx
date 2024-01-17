
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'

function App() {


  return (
    <div className="relative">
      <div className="flex justify-center">
        <Header></Header>
      </div>
      <Outlet></Outlet>


    </div>
  )
}

export default App
