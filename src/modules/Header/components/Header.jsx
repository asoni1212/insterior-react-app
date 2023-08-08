import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Header extends React.Component {

  render() {
    const listOfNavOption = ['Home','Profile', 'AboutUs'];
    return <>
      <header>
        <div className="px-3 py-2 int-header-bg-color">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                <img src="asset/logo/insterior-logo-trans.png" className='logo' alt="Logo" ></img>
              </a>

              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">

                {listOfNavOption.map((item, i) => {
                  return <> <li>
                    <NavLink  to={'/' + item.toLowerCase()  } className="nav-link int-header-nav-text">
                      {/* <svg className="bi d-block mx-auto mb-1" width="24" height="24"><use xlink:href="#home"></use></svg> */}
                      {item}
                    </NavLink >
                  </li></>
                })}

              </ul>
            </div>
          </div>
        </div>
       
      </header>
    </>
  }
}
export default Header;