import {FaBars, FaTwitter} from 'react-icons/fa'
const NavBar = () => {
  return (
    <nav className='px-24 py-4 flex justify-between items-center border-b '>
      <h1 className="font-Neue text-main-white text-3xl">WEB THREE</h1>
      <div className="links flex gap-4">
        <h2 className='text-xl'><a href="#">HOME</a></h2>
        <h2 className='text-xl'><a href="#">SERVICES</a></h2>
        <h2 className='text-xl'><a href="#">PARTNERS</a></h2>
        <h2 className='text-xl'><a href="#">CLIENTS</a></h2>
        <h2 className='text-xl'><a href="#">CONTACT</a></h2>
      </div>
      <div className="menu flex gap-6">
        <FaBars className='text-main-green cursor-pointer text-2xl'/>
        <FaTwitter className='text-main-green cursor-pointer text-2xl'/>
      </div>
    </nav>
  )
}

export default NavBar
