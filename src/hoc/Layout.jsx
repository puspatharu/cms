
import Toolbar from '../components/navigation/Toolbar'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/navigation/Sidebar'
function Layout() {
  return (
   
      <div className='grid w-screen h-screen overflow-clip  lg:grid-cols-12'>
        <div className='lg:col-span-2 hidden lg:flex overflow-y-scroll bg-secondary'>
          <Sidebar />
        </div>


        <div className=' lg:col-span-10 h-full overflow-y-scroll '>
          <Toolbar />
          <div className='h-full overflow-y-scroll'>
            <Outlet />
          </div>
        </div>
      </div>
  
  )
}

export default Layout