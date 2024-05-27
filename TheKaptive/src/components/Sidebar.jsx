import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSolidBinoculars } from "react-icons/bi";
import { IoStatsChartSharp } from "react-icons/io5";
import { TbTableShare, TbReportSearch } from "react-icons/tb";
import AllRoutes from './AllRoutes';
import { useAuth } from './AuthContext';
import Swal from 'sweetalert2';


const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('charts');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {isLoggedIn,setLoggedIn} =useAuth();
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userId");
    setLoggedIn(false)
    navigate("/login")
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Logout successfully"
      });
}

  useEffect(() => {
    // Retrieve the active link from localStorage when the component mounts
    // name = localStorage.getItem('name');
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
    
  }, []);
 const handleNavigation = (path, linkName) => {
        setActiveLink(linkName);
        localStorage.setItem('activeLink', linkName); // Store the active link in localStorage
        navigate(path);
      };
 

  return (
    <div className="main w-full flex">
            <div className="bg-blue-900 lg:w-60 sm:w-90 sm:font-bold md:w-90 min-h-screen w-14 pt-4 transition-all">
        <div className="text-center text-white p-6">
          <h1 className="text-5xl sm:text-xl md:text-4xl font-bold cursor-pointer" onClick={()=>handleNavigation('/')}>PLSE</h1>
        </div>
        <ul className="mt-11">
              {/* Show login and signup links if user is not logged in */}
          {!isLoggedIn.isAuth ? (
            <>
              <li
                className="hover:bg-gray-800 text-white cursor-pointer sm:justify-start md:justify-center lg:justify-start px-4 h-12 flex items-center justify-center"
                onClick={() => handleNavigation('/login', 'login')}
              >
                Login
              </li>
              <li
                className="hover:bg-gray-800 text-white cursor-pointer sm:justify-start md:justify-center lg:justify-start px-4 h-12 flex items-center justify-center"
                onClick={() => handleNavigation('/register', 'signup')}
              >
                Signup
              </li>
            </>
          ):(<>
          <li
            className={`hover:bg-gray-800 cursor-pointer sm:justify-start md:justify-center lg:justify-start px-4 h-12 flex items-center justify-center ${activeLink === 'charts' ? 'bg-gray-800 border-l-4 border-white' : 'text-gray-400'}`}
            onClick={() => handleNavigation('/chart', 'charts')}
          >
            <IoStatsChartSharp style={{ color: 'white' }} />
            <span className={`ml-3 hidden lg:block font-semibold tracking-wide transition-colors ${activeLink === 'charts' ? 'text-white' : 'text-gray-400'}`}>
              Charts
            </span>
          </li>
          <li
            className={`hover:bg-gray-800 cursor-pointer md:justify-center lg:justify-start sm:justify-start px-4 h-12 flex items-center justify-center ${activeLink === 'tables' ? 'bg-gray-800 border-l-4 border-white' : ''}`}
            onClick={() => handleNavigation('/table', 'tables')}
          >
            <TbTableShare style={{ color: 'white' }} />
            <span className={`ml-3 hidden lg:block font-semibold tracking-wide transition-colors ${activeLink === 'tables' ? 'text-white' : 'text-gray-400'}`}>
              Tables
            </span>
          </li>
          <li
            className={`hover:bg-gray-800 cursor-pointer sm:justify-start md:justify-center lg:justify-start px-4 h-12 flex items-center justify-center ${activeLink === 'reports' ? 'bg-gray-800 border-l-4 border-white' : ''}`}
            onClick={() => handleNavigation('/reports', 'reports')}
          >
            <TbReportSearch style={{ color: 'white' }} />
            <span className={`ml-3 hidden lg:block font-semibold tracking-wide transition-colors ${activeLink === 'reports' ? 'text-white' : 'text-gray-400'}`}>
              Reports
            </span>
          </li>
          <li
            className={`hover:bg-gray-800 cursor-pointer sm:justify-start md:justify-center lg:justify-start px-4 h-12 flex items-center justify-center ${activeLink === 'forecast' ? 'bg-gray-800 border-l-4 border-white' : ''}`}
            onClick={() => handleNavigation('/forecast', 'forecast')}
          >
            <BiSolidBinoculars style={{ color: 'white' }} />
            <span className={`ml-3 hidden lg:block font-semibold tracking-wide transition-colors ${activeLink === 'forecast' ? 'text-white' : 'text-gray-400'}`}>
              Forecast
            </span>
          </li> 
          <div className="mb-0">
          <li
            className={`hover:bg-gray-800 cursor-pointer sm:justify-start md:justify-center lg:justify-start px-4 h-12 flex items-center justify-center ${activeLink === 'reports' ? 'bg-gray-800 border-l-4 border-white' : ''}`}
            onClick={() => handleNavigation('/reports', 'reports')}
          >
          
            <span className={`ml-3 hidden lg:block font-semibold tracking-wide transition-colors ${activeLink === 'reports' ? 'text-white' : 'text-gray-400'}`}>
              {isLoggedIn.name}
            </span>
          </li>
          <li
            className="hover:bg-gray-800 cursor-pointer sm:justify-start md:justify-center lg:justify-start px-4 h-12 flex items-center justify-center"
            onClick={handleLogout}
          >
            <span className="ml-3 hidden lg:block font-semibold tracking-wide transition-colors text-gray-400">
              Logout
            </span>
          </li>
        </div>
          </>)}
        </ul>
      </div>
      <section className="flex-1 w-full sm:w-90 bg-opacity-20">
        <div className='shadow-lg m-5 rounded-md'>
         

          <div className='m-5 pb-5'>
            <AllRoutes />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
