
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header = () => {
const navigate = useNavigate();
  const handleLogin = ()=>{
    navigate('/auth')
  }
  const handleLogout = ()=>{
    console.log("logout")
  }
  
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
  return (
    <header className="p-6 flex justify-between items-center bg-black bg-opacity-90 text-white shadow-lg">
    <h1 className="text-4xl font-extrabold text-cyan-400">Kisan Bond</h1>
    <nav className="space-x-6">
      <a href="#" className="text-lg hover:text-cyan-300 transition">Home</a>
      <a href="#" className="text-lg hover:text-cyan-300 transition">About</a>
      <a href="#" className="text-lg hover:text-cyan-300 transition">Marketplace</a>
      <a href="#" className="text-lg hover:text-cyan-300 transition">Contact</a>
     {isLoggedIn ? (
       <a href="#" className="text-lg hover:text-cyan-300 transition"
       onSubmit={handleLogout}>Logout</a>
     ):
     <a href="#" className="text-lg hover:text-cyan-300 transition"
     onSubmit={handleLogin}>Login</a>}
    </nav>
  </header>
  )
}

export default Header;
