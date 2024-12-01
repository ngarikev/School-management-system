import React from 'react';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function Header() {
  return (
    <header className="p-2 position-fixed w-100 top-0">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            {/* Logo or brand here */}
            School <span><AccountBalanceIcon /></span>
          </a>

          {/* <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input type="search" className="form-control form-control" placeholder="Search..." aria-label="Search" />
          </form> */}
        </div>
      </div>
    </header>
  );
}

export default Header;
