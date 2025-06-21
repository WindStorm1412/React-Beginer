
import HeaderPage from './components/layout/header'
import Footer from './components/layout/footer'
import { Outlet } from "react-router-dom"
import { getAccountAPI } from './services/api.services'
import { useContext, useEffect } from 'react'
import { AuthContext } from './components/context/auth.context'

const App = () => {
  const { setUser } = useContext(AuthContext);
  useEffect(() => {
    fetchUserInfo()
  }, [])
  const fetchUserInfo = async () => {
    const res = await getAccountAPI()
    if (res.data) {
      setUser({
        id: res.data.user.id,
        fullName: res.data.user.fullName,
        email: res.data.user.email,
        phone: res.data.user.phone,
        avatar: res.data.user.avatar,
        role: res.data.user.role
      })
    }

  }


  return (
    <>
      <HeaderPage />
      <Outlet />
      <Footer />

    </>


  )
}

export default App
