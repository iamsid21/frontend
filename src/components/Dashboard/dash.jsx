import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dash.css";
import { useAuth } from "../../contexts/authContext";


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [allSec, setAllSec] = useState(0);
  const [matSec, setMatSec] = useState(0);

  const [isManager, setIsManager] = useState(false);


  const {
    currentUser,
    login,
    googleSignIn,
    logout,
    getAdditionalUserInfoGoogle,
  } = useAuth();
    
  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      const res = await logout();
      // console.log(res)
      console.log("user signed out");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataManager = async () => {
    try {
      const res = await axios.get(
        "http://localhost:9006/security/getAllSecurities"
      ).then((res)=>{
        setData(res.data.result);
        // console.log(res.data.result);
      })
      
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:9006/security/getAllSecuritiesByUserId",
        {userId: currentUser.uid}
      ).then((res)=>{
        setData(res.data.result);
      })
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCountManager = async () => {
    
    try {
        axios.get(
          "http://localhost:9006/security/getCountOfAllSecurities"
        ).then((cntAll)=>{
          setAllSec(cntAll.data.result[0].count);
        })

        axios.get(
            "http://localhost:9006/security/getCountOfAllMaturedSecurities",
          ).then((cntMat)=>{
            setMatSec(cntMat.data.result[0].count);
          })
        
      } catch (error) {
        console.log(error);
      } 
  };

  const fetchCountUser = async () => {
    try {
        axios.post(
          "http://localhost:9006/security/getCountOfAllSecuritiesByUserId",
          {userId: currentUser.uid}
        ).then((cntAll)=>{
          setAllSec(cntAll.data.result[0].count);
        })

        axios.post(
            "http://localhost:9006/security/getCountOfMaturedBonds",
            {userId: currentUser.uid}
          ).then((cntMat)=>{
            setMatSec(cntMat.data.result[0].count);
          })
      } catch (error) {
        console.log(error);
      } 
  };

  useEffect(() => {
    console.log(currentUser.email, currentUser.uid)
    if(currentUser.email=='manager@gmail.com') {
        setIsManager(true)
        fetchDataManager();
        fetchCountManager();
    }
    else {
        fetchDataUser();
        fetchCountUser();
    }
    
  }, []);

  if (data == undefined) {
    return null;
  } else {
    return (
      <>
        <div class="d-flex flex-column h-auto flex-lg-row bg-surface-secondary">
          <nav
            class="navbar show navbar-vertical navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
            id="navbarVertical"
          >
            <div class="container-fluid">
              <div class="collapse navbar-collapse" id="sidebarCollapse">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="bi bi-house"></i> All Securities
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="bi bi-chat"></i> Running Securities
                      <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                        {allSec-matSec}
                      </span>
                    </a>
                    </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="bi bi-chat"></i> Matured Securities
                      <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                        {matSec}
                      </span>
                    </a>
                  </li>
                  
                </ul>
                {/* <!-- Divider --> */}
                <hr class="navbar-divider my-10 opacity-20" />
                

                <div class="mt-auto"></div>

                <ul class="navbar-nav">
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      <i class="bi bi-person-square"></i> Account
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/" onClick={handleSignOut}>
                      <i class="bi bi-box-arrow-left"></i> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div class="h-screen flex-grow-1 overflow-y-lg-auto">
            <header class="bg-surface-primary border-bottom pt-6">
              <div class="container-fluid">
                <div class="mb-npx">
                  <div class="row align-items-center">
                    <div class="col-sm-6 col-12 mb-4 mb-sm-0">
                      <h1 class="h2 mb-0 ls-tight">Securities</h1>
                    </div>
                    <div class="col-sm-6 col-12 text-sm-end">
                      <div class="mx-n1">
                        <a
                          href="#"
                          class="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                        >
                          <span class=" pe-2">
                            <i class="bi bi-pencil"></i>
                          </span>
                          <span>Edit</span>
                        </a>
                        <a
                          href="#"
                          class="btn d-inline-flex btn-sm btn-primary mx-1"
                        >
                          <span class=" pe-2">
                            <i class="bi bi-plus"></i>
                          </span>
                          <span>Create</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul class="nav nav-tabs mt-4 overflow-x border-0">
                    {/* <li class="nav-item ">
                      <a href="#" class="nav-link active">
                        All files
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link font-regular">
                        Shared
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="#" class="nav-link font-regular">
                        File requests
                      </a>
                    </li> */}
                  </ul>
                </div>
              </div>
            </header>

            <main class="py-6 bg-surface-secondary">
              <div class="container-fluid">
                <div class="row g-6 mb-6">
                  <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card shadow border-0">
                      <div class="card-body">
                        <div class="row">
                          <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                              All Securities
                            </span>
                          </div>
                          {/* <div class="col-auto">
                            <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                              <i class="bi bi-credit-card"></i>
                            </div>
                          </div> */}
                        </div>
                        <h1 class="font-bolder text-primary">
                          {allSec}
                        </h1>
                      </div>
                    </div>
                  </div>
                  
                          
                  <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card shadow border-0">
                      <div class="card-body">
                        <div class="row">
                          <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                              Active Securities
                            </span>
                          </div>
                        </div>
                        <h1 class="font-bolder text-success">
                          {allSec - matSec}
                        </h1>
                      </div>
                    </div>
                  </div>
                

                  <div class="col-xl-3 col-sm-6 col-12">
                    <div class="card shadow border-0">
                      <div class="card-body">
                        <div class="row">
                          <div class="col">
                            <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                              Matured Securities
                            </span>
                          </div>
                        </div>
                        <h1 class="font-bolder text-danger">
                          {matSec}
                        </h1>
                      </div>
                    </div>
                  </div>


                  
                </div>
                <div class="card shadow border-0 mb-7">
                  <div class="card-header">
                    <h5 class="mb-0">All Securities</h5>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-hover table-nowrap">
                      <thead class="thead-light">
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">ISIN</th>
                          <th scope="col">CUSIP</th>
                          <th scope="col">Issuer</th>
                          <th scope="col">Maturity Date</th>
                          <th scope="col">Coupon</th>
                          <th scope="col">Type</th>
                          <th scope="col">Face Value</th>
                          <th scope="col">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data?.map((sec) => {
                              return (
                                <tr>
                                  <td>
                                    <div class="text-heading font-semibold" href="#">
                                      {sec.security_id}
                                    </div>
                                  </td>
                                  <td>
                                    <div href="#">{sec.security_ISIN}</div>
                                  </td>
                                  <td>
                                    <div href="#">{sec.security_CUSIP}</div>
                                  </td>
                                  <td>
                                    <div href="#">{sec.security_Issuer}</div>
                                  </td>
                                  <td>
                                    <div href="#">
                                      {sec.security_MaturityDate}
                                    </div>
                                  </td>
                                  <td>
                                    <div href="#">{sec.security_Coupon}</div>
                                  </td>
                                  <td>
                                    <div href="#">{sec.security_Type}</div>
                                  </td>
                                  <td>
                                    <div href="#">{sec.security_FaceValue}</div>
                                  </td>
                                  <td>
                                    <div href="#">{sec.security_Status}</div>
                                  </td>
                                </tr>
                              );
                            })
                            }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
