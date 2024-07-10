// components/navbar/NavBar.js
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css";
import ConstructionPopUp from '../constructionPopUp/ConstructionPopUp';
export default function NavBar() {
  useEffect(() => {
    // Ensure Bootstrap JS is loaded
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  const router = useRouter();

  const navigate = (url) => {
    router.push(url);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" href="/">
          <Image
            src="/assets/images/waterscapesnglogo.png"
            width="140"
            height="90"
            alt="Waterscapesng Logo"
          />
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/services">
                SERVICES
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/contact">
                CONTACT
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PORTFOLIO
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li>
                  <Link className="dropdown-item" href="/portfolio/custom-designed-pools">
                    CUSTOM-DESIGNED-POOLS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/portfolio/swimming-pools-under-construction">
                    SWIMMING-POOLS-UNDER-CONSTRUCTION
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SWIMMING-POOL-PRODUCTS
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink2">
                <li>
                  <Link className="dropdown-item" href="/SWIMMING-POOL-PRODUCTS/FOUNTAIN-NOZZLES">
                    FOUNTAIN NOZZLES
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/SWIMMING-POOL-PRODUCTS/SWIMMING-POOL-ACCESSORIES">
                    SWIMMING-POOL-ACCESSORIES
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/SWIMMING-POOL-PRODUCTS/SWIMMING-POOL-CHEMICALS">
                    SWIMMING-POOL-CHEMICALS
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/SWIMMING-POOL-PRODUCTS/SWIMMING-POOL-EQUIPMENT">
                    SWIMMING POOL EQUIPMENT
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/SWIMMING-POOL-PRODUCTS/SWIMMING-POOL-TILES">
                    SWIMMING POOL TILES
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <button
            className="btn btn-success btn-outline-primary"
            type="submit"
            onClick={() => navigate('/contact')}
          >
            <div className="reqquote">
              <span className="text-white text-bold">Request A Quote</span>
            </div>
          </button>
        </div>
      </div>
      <ConstructionPopUp />
    </nav>
  );
}
