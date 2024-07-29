import {React } from 'react'
import Navbar from "./Navbar";
import Sidebar from "./Side";
import MainContent from './MainContent';



function NavbarSidebar({BreadCrumbs, children}) {
    // const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
        <Navbar BreadCrumbs={BreadCrumbs}/>
        <div className="flex items-start">
          <Sidebar/>
          <MainContent >{children}</MainContent>
        </div>
      </div>
  )
}




export default NavbarSidebar