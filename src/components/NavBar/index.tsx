import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="flex flex-wrap items-center justify-between px-2 py-3 bg-slate-100 opacity-75 lg:absolute w-screen top-0 z-50">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex-shrink-0 flex items-center justify-items-center">
            <img className="block h-8 w-auto" src={logo} alt="iConnect" />
            <a className="lg:block px-3 flex items-center h-8 w-auto text-xl font-extrabold inline-block whitespace-nowrap  text-black" href="#pablo">
              iConnect
            </a>
          </div>
          <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <div className={`lg:flex flex-grow items-center${navbarOpen ? ' flex' : ' hidden'}`} id="example-navbar-danger">
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="#pablo">
                <span className="ml-2">About</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="#pablo">
                <span className="ml-2">FAQ</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="#pablo">
                <span className="ml-2">Features</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="px-3 py-2 flex items-center text-xs  font-bold leading-snug text-black hover:opacity-75" href="#pablo">
                <span className="ml-2">Journey</span>
              </a>
            </li>
            <li className="nav-item">
              <span className="ml-2">
                <button className="text-white h-8 text-sm font-bold px-5 bg-primary rounded-sm focus:shadow-outline hover:bg-primary-dark" type="button">
                  Am I eligible?
                </button>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
