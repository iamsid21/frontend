import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dash.css";
import { useAuth } from "../../contexts/authContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [allSec, setAllSec] = useState(0);
  const [matSec, setMatSec] = useState(0);

  const [isManager, setIsManager] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setisOpen] = useState(false);
  const [trades, settrades] = useState([]);

  const [dialog, setDialog] = useState(0);

  const arr = ["All Securities", "Active Securities", "Matured Securities"];

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
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataManager = async () => {
    try {
      const res = await axios
        .get("http://localhost:9006/security/getAllSecurities")
        .then((res) => {
          setData(res.data.result);
          // console.log(res.data.result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDataUser = async () => {
    try {
      const res = await axios
        .post("http://localhost:9006/security/getAllSecuritiesByUserId", {
          userId: currentUser.uid,
        })
        .then((res) => {
          setData(res.data.result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCountManager = async () => {
    try {
      axios
        .get("http://localhost:9006/security/getCountOfAllSecurities")
        .then((cntAll) => {
          setAllSec(cntAll.data.result[0].count);
        });

      axios
        .get("http://localhost:9006/security/getCountOfAllMaturedSecurities")
        .then((cntMat) => {
          setMatSec(cntMat.data.result[0].count);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCountUser = async () => {
    try {
      axios
        .post(
          "http://localhost:9006/security/getCountOfAllSecuritiesByUserId",
          { userId: currentUser.uid }
        )
        .then((cntAll) => {
          setAllSec(cntAll.data.result[0].count);
        });

      axios
        .post("http://localhost:9006/security/getCountOfMaturedBonds", {
          userId: currentUser.uid,
        })
        .then((cntMat) => {
          setMatSec(cntMat.data.result[0].count);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchManagerTrades = async (secId) => {
    try {
      axios
        .post("http://localhost:9006/security/getAllTradesForSecurity", {
          securityId: secId,
        })
        .then((res) => {
          // setTrade(cnt)
          console.log(res.data.result);
          settrades(res.data.result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserTrades = async (secId) => {
    try {
      axios
        .post("http://localhost:9006/security/getAllTradesForUsersSecurity", {
          userId: currentUser.uid,
          securityId: secId,
        })
        .then((res) => {
          // setTrade(cnt)
          console.log(res.data.result);
          settrades(res.data.result);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTrades = (secId) => {
    if (isManager) fetchManagerTrades(secId);
    else fetchUserTrades(secId);
  };

  useEffect(() => {
    console.log(currentUser.email, currentUser.uid);
    if (currentUser.email == "manager@gmail.com") {
      setIsManager(true);
      fetchDataManager();
      fetchCountManager();
    } else {
      fetchDataUser();
      fetchCountUser();
    }
  }, []);

  if (data == undefined) {
    return null;
  } else {
    return (
      <>
        <div className="d-flex flex-column h-auto flex-lg-row bg-surface-secondary">
          <nav
            className="navbar show navbar-vertical navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
            id="navbarVertical"
          >
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="sidebarCollapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-house"></i> All Securities
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-chat"></i> Running Securities
                      <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                        {allSec - matSec}
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-chat"></i> Matured Securities
                      <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                        {matSec}
                      </span>
                    </a>
                  </li>
                </ul>
                {/* <!-- Divider --> */}
                <hr className="navbar-divider my-10 opacity-20" />

                <div className="mt-auto"></div>

                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-person-square"></i> Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/" onClick={handleSignOut}>
                      <i className="bi bi-box-arrow-left"></i> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="h-screen flex-grow-1 overflow-y-lg-auto">
            <header className="bg-surface-primary border-bottom pt-6">
              <div className="container-fluid">
                <div className="mb-npx">
                  <div className="row align-items-center">
                    <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                      <h1 className="h2 mb-0 ls-tight">Securities</h1>
                    </div>
                    <div className="col-sm-6 col-12 text-sm-end">
                      <div className="mx-n1">
                        <a
                          href="#"
                          className="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                        >
                          <span className=" pe-2">
                            <i className="bi bi-pencil"></i>
                          </span>
                          <span>Edit</span>
                        </a>
                        <a
                          href="#"
                          className="btn d-inline-flex btn-sm btn-primary mx-1"
                        >
                          <span className=" pe-2">
                            <i className="bi bi-plus"></i>
                          </span>
                          <span>Create</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <ul className="nav nav-tabs mt-4 overflow-x border-0"></ul>
                </div>
              </div>
            </header>

            <main className="py-6 bg-surface-secondary">
              <div className="container-fluid">
                <div className="row g-6 mb-6">
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div
                      className="card shadow border-0 cursor-pointer"
                      onClick={() => setDialog(0)}
                    >
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              All Securities
                            </span>
                          </div>
                          {/* <div className="col-auto">
                            <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                              <i className="bi bi-credit-card"></i>
                            </div>
                          </div> */}
                        </div>
                        <h1 className="font-bolder text-primary">{allSec}</h1>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-sm-6 col-12">
                    <div
                      className="card shadow border-0  cursor-pointer"
                      onClick={() => setDialog(1)}
                    >
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Active Securities
                            </span>
                          </div>
                        </div>
                        <h1 className="font-bolder text-success">
                          {allSec - matSec}
                        </h1>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-sm-6 col-12">
                    <div
                      className="card shadow border-0 cursor-pointer"
                      onClick={() => setDialog(2)}
                    >
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Matured Securities
                            </span>
                          </div>
                        </div>
                        <h1 className="font-bolder text-danger">{matSec}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card shadow border-0 mb-7">
                  <div className="card-header">
                    <h5 className="mb-0">{arr[dialog]}</h5>
                  </div>
                  <div className="table-responsive">
                    <table className="table table-hover table-nowrap">
                      <thead className="thead-light">
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
                          if (dialog == 0)
                            return (
                              <tr
                                onClick={() => {
                                  fetchTrades(sec.security_id);
                                  setisOpen(true);
                                }}
                                className="cursor-pointer"
                                data-toggle="modal"
                                data-target="#myModal"
                              >
                                <td>
                                  <div
                                    className="text-heading font-semibold"
                                    href="#"
                                  >
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
                          else if (dialog == 1) {
                            return <>
                            {sec.security_Status == "Active" ? 
                            <tr
                            onClick={() => {
                              fetchTrades(sec.security_id);
                              setisOpen(true);
                            }}
                            className="cursor-pointer"
                            data-toggle="modal"
                            data-target="#myModal"
                          >
                            <td>
                              <div
                                className="text-heading font-semibold"
                                href="#"
                              >
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
                          </tr> : <></>}</>;
                          }
                          else  {
                            return <>
                            {sec.security_Status == "Inactive" ? 
                            <tr
                            onClick={() => {
                              fetchTrades(sec.security_id);
                              setisOpen(true);
                            }}
                            className="cursor-pointer"
                            data-toggle="modal"
                            data-target="#myModal"
                          >
                            <td>
                              <div
                                className="text-heading font-semibold"
                                href="#"
                              >
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
                          </tr> : <></>}</>;
                          }
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>

            {/* <!-- The Modal --> */}
            <div
              className="modal"
              id="myModal"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  {/* <!-- Modal Header --> */}
                  <div className="modal-header">
                    <h4 className="modal-title">Modal Heading</h4>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      onClick={() => {
                        setisOpen(false);
                      }}
                    >
                      &times;
                    </button>
                  </div>

                  {/* <!-- Modal body --> */}
                  <div className="modal-body">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          {/* <th>Id</th> */}
                          <th>BookID</th>
                          <th>Buy/Sell</th>
                          <th>Counter Party ID</th>
                          <th>Trade Price</th>
                          <th>Trade Quantity</th>
                          <th>Trade Security Id</th>
                          <th>Trade Settlement Date</th>
                          <th>Trade Status</th>
                          <th>Trade Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {trades ? (
                          trades.map((res) => {
                            return (
                              <tr>
                                <td>
                                  <div href="#">{res.trade_bookid}</div>
                                </td>
                                <td>
                                  <div href="#">{res.trade_buy_sell}</div>
                                </td>
                                <td>
                                  <div href="#">{res.trade_counterpartyid}</div>
                                </td>
                                <td>
                                  <div href="#">{res.trade_price}</div>
                                </td>
                                <td>
                                  <div href="#">{res.trade_quantity}</div>
                                </td>
                                <td>
                                  <div href="#">{res.trade_securityid}</div>
                                </td>
                                <td>
                                  <div href="#">{res.trade_settlementdate}</div>
                                </td>
                                <td>
                                  <div href="#">{res.trade_status}</div>
                                </td>
                                <td>
                                  <div href="#">{res.trade_tradedate}</div>
                                </td>
                              </tr>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* <!-- Modal footer --> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-dismiss="modal"
                      onClick={() => {
                        setisOpen(false);
                      }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
