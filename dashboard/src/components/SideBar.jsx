import React from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";



function SideBar() {
    return (
        <div className="container-fluid position-absolute d-flex  min-vh-100">
            <div className="sidebar col-auto col-md-3 col-xl-2 px-sm-2 px-0 pt-3 pt-lg-5">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-lg-5 text-white">
                    {/* <Link href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                        <span className="fs-5 d-none pt-5 d-sm-inline">Menu</span>
                    </Link> */}
                    <Nav className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center  align-items-sm-start" id="menu">
                        <Nav>
                            <Link to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className=" bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                            </Link>
                            
                        </Nav>
                        <Nav>
                            <Link to="#" className="nav-link px-0 align-middle">
                                <i className="bi bi-rulers"></i> <span className="ms-1 d-none d-sm-inline">Classes</span>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="bi bi-book"></i> <span className="ms-1 d-none d-sm-inline">Subjects</span>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                                <i className="bi bi-mortarboard-fill"></i> <span className="ms-1 d-none d-sm-inline">Students</span>
                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="#" className="nav-link px-0 align-middle">
                                <i className="bi bi-people"></i> <span className="ms-1 d-none d-sm-inline">Teachers</span>

                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="#" className="nav-link px-0 align-middle">
                                <i className="bi bi-p-circle-fill"></i> <span className="ms-1 d-none d-sm-inline">Guardians</span>

                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="#" className="nav-link px-0 align-middle">
                                <i className="bi bi-person-raised-hand"></i> <span className="ms-1 d-none d-sm-inline">Attendance</span>

                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="#" className="nav-link px-0 align-middle">
                                <i className="bi bi-activity"></i> <span className="ms-1 d-none d-sm-inline">Activites</span>

                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="#" className="nav-link px-0 align-middle">
                                <i className="bi bi-calender"></i> <span className="ms-1 d-none d-sm-inline">Year Calender</span>

                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="#" className="nav-link px-0 align-middle">
                                <i className="bi bi-pencil-square"></i> <span className="ms-1 d-none d-sm-inline">Exam Schedule</span>

                            </Link>
                        </Nav>
                        <Nav>
                            <Link to="#" className="nav-link px-0 align-middle">
                                <i className="bi bi-file-earmark"></i> <span className="ms-1 d-none d-sm-inline">Grades</span>

                            </Link>
                        </Nav>
                        
                        
                    </Nav>
                    {/* <!-- Example single danger button --> */}
                    <DropdownButton id="dropdown-basic-button" className='dropdown mt-5' title="Account">
                        <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Sign-up</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <div className="content-area col p-4 overflow-auto">
                Content area (this is the main homepage content)...
            </div>

        </div>
    );
}

export default SideBar;
