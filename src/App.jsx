
import HeaderPage from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from "react-router-dom"

const App = () => {


  return (
    <>
      <HeaderPage />
      <Outlet />
      <Footer />

    </>


  )
}

export default App
