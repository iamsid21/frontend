import React from "react";
import "./Dash.css";

const Dashboard = () => {
  return (
    <>
      <div class="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
        <nav
          class="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
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
                    <i class="bi bi-bar-chart"></i> Expired Securities
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-chat"></i> Matured Securities
                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                      6
                    </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-bookmarks"></i> Books
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-people"></i> Users
                  </a>
                </li>
              </ul>
              {/* <!-- Divider --> */}
              <hr class="navbar-divider my-5 opacity-20" />
              <ul class="navbar-nav mb-md-4">
                <li>
                  <div
                    class="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
                    href="#"
                  >
                    Contacts
                    <span class="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">
                      13
                    </span>
                  </div>
                </li>
                <li>
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        <img
                          alt="Image Placeholder"
                          src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                          class="avatar rounded-circle"
                        />
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span class="d-block text-sm font-semibold">
                        Marie Claire
                      </span>
                      <span class="d-block text-xs text-muted font-regular">
                        Paris, FR
                      </span>
                    </div>
                    <div class="ms-auto">
                      <i class="bi bi-chat"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        <span class="avatar bg-soft-warning text-warning rounded-circle">
                          JW
                        </span>
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span class="d-block text-sm font-semibold">
                        Michael Jordan
                      </span>
                      <span class="d-block text-xs text-muted font-regular">
                        Bucharest, RO
                      </span>
                    </div>
                    <div class="ms-auto">
                      <i class="bi bi-chat"></i>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="nav-link d-flex align-items-center">
                    <div class="me-4">
                      <div class="position-relative d-inline-block text-white">
                        <img
                          alt="..."
                          src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                          class="avatar rounded-circle"
                        />
                        <span class="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle"></span>
                      </div>
                    </div>
                    <div>
                      <span class="d-block text-sm font-semibold">
                        Heather Wright
                      </span>
                      <span class="d-block text-xs text-muted font-regular">
                        London, UK
                      </span>
                    </div>
                    <div class="ms-auto">
                      <i class="bi bi-chat"></i>
                    </div>
                  </a>
                </li>
              </ul>

              <div class="mt-auto"></div>

              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-person-square"></i> Account
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
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
                    <h1 class="h2 mb-0 ls-tight">Application</h1>
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
                  <li class="nav-item ">
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
                  </li>
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
                            Budget
                          </span>
                          <span class="h3 font-bold mb-0">$750.90</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                            <i class="bi bi-credit-card"></i>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                          <i class="bi bi-arrow-up me-1"></i>13%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            New projects
                          </span>
                          <span class="h3 font-bold mb-0">215</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-primary text-white text-lg rounded-circle">
                            <i class="bi bi-people"></i>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                          <i class="bi bi-arrow-up me-1"></i>30%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Total hours
                          </span>
                          <span class="h3 font-bold mb-0">1.400</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-info text-white text-lg rounded-circle">
                            <i class="bi bi-clock-history"></i>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-danger text-danger me-2">
                          <i class="bi bi-arrow-down me-1"></i>-5%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-sm-6 col-12">
                  <div class="card shadow border-0">
                    <div class="card-body">
                      <div class="row">
                        <div class="col">
                          <span class="h6 font-semibold text-muted text-sm d-block mb-2">
                            Work load
                          </span>
                          <span class="h3 font-bold mb-0">95%</span>
                        </div>
                        <div class="col-auto">
                          <div class="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i class="bi bi-minecart-loaded"></i>
                          </div>
                        </div>
                      </div>
                      <div class="mt-2 mb-0 text-sm">
                        <span class="badge badge-pill bg-soft-success text-success me-2">
                          <i class="bi bi-arrow-up me-1"></i>10%
                        </span>
                        <span class="text-nowrap text-xs text-muted">
                          Since last month
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card shadow border-0 mb-7">
                <div class="card-header">
                  <h5 class="mb-0">Applications</h5>
                </div>
                <div class="table-responsive">
                  <table class="table table-hover table-nowrap">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Date</th>
                        <th scope="col">Company</th>
                        <th scope="col">Offer</th>
                        <th scope="col">Meeting</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            class="avatar avatar-sm rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Robert Fox
                          </a>
                        </td>
                        <td>Feb 15, 2021</td>
                        <td>
                          <img
                            alt="..."
                            src="https://preview.webpixels.io/web/img/other/logos/logo-1.png"
                            class="avatar avatar-xs rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Dribbble
                          </a>
                        </td>
                        <td>$3.500</td>
                        <td>
                          <span class="badge badge-lg badge-dot">
                            <i class="bg-success"></i>Scheduled
                          </span>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>
                          <button
                            type="button"
                            class="btn btn-sm btn-square btn-neutral text-danger-hover"
                          >
                            <i class="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1610271340738-726e199f0258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            class="avatar avatar-sm rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Darlene Robertson
                          </a>
                        </td>
                        <td>Apr 15, 2021</td>
                        <td>
                          <img
                            alt="..."
                            src="https://preview.webpixels.io/web/img/other/logos/logo-2.png"
                            class="avatar avatar-xs rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Netguru
                          </a>
                        </td>
                        <td>$2.750</td>
                        <td>
                          <span class="badge badge-lg badge-dot">
                            <i class="bg-warning"></i>Postponed
                          </span>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>
                          <button
                            type="button"
                            class="btn btn-sm btn-square btn-neutral text-danger-hover"
                          >
                            <i class="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1610878722345-79c5eaf6a48c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            class="avatar avatar-sm rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Theresa Webb
                          </a>
                        </td>
                        <td>Mar 20, 2021</td>
                        <td>
                          <img
                            alt="..."
                            src="https://preview.webpixels.io/web/img/other/logos/logo-3.png"
                            class="avatar avatar-xs rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Figma
                          </a>
                        </td>
                        <td>$4.200</td>
                        <td>
                          <span class="badge badge-lg badge-dot">
                            <i class="bg-success"></i>Scheduled
                          </span>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>
                          <button
                            type="button"
                            class="btn btn-sm btn-square btn-neutral text-danger-hover"
                          >
                            <i class="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1612422656768-d5e4ec31fac0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            class="avatar avatar-sm rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Kristin Watson
                          </a>
                        </td>
                        <td>Feb 15, 2021</td>
                        <td>
                          <img
                            alt="..."
                            src="https://preview.webpixels.io/web/img/other/logos/logo-4.png"
                            class="avatar avatar-xs rounded-circle me-2"
                          />
                          <a class="text-heading font-semibold" href="#">
                            Mailchimp
                          </a>
                        </td>
                        <td>$3.500</td>
                        <td>
                          <span class="badge badge-lg badge-dot">
                            <i class="bg-dark"></i>Not discussed
                          </span>
                        </td>
                        <td class="text-end">
                          <a href="#" class="btn btn-sm btn-neutral">
                            View
                          </a>
                          <button
                            type="button"
                            class="btn btn-sm btn-square btn-neutral text-danger-hover"
                          >
                            <i class="bi bi-trash"></i>
                          </button>
                        </td>
                      </tr>
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
};

export default Dashboard;
