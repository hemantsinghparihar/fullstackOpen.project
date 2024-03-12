import React, { useEffect, useState } from "react";
import CollabContent from "../components/ui/CollabContent";
import PageTop from "../components/ui/PageTop";

function Collaborate() {
  const [activeLink, setActiveLink] = useState(1);
  console.log("✌️activeLink --->", activeLink);

  useEffect(() => {
    const element = document.getElementById("header");
    element.scrollIntoView(true);
    document.title = "ToySaga || Collaborate";
  }, []);

  return (
    <div>
      <main className="Collaborate-page">
        <PageTop pageTitle={"Collaborate"} />
        <section className="Card-content same-space mb-5">
          <div className="container">
            <div className="CardWrapper">
              <ul
                className="nav nav-tabs justify-content-center"
                role="tablist"
              >
                <li className="nav-item">
                  {/* className="nav-link active"   role="tab"*/}
                  <a
                    className={`nav-link ${activeLink === 1 ? "active" : ""}`}
                    data-bs-toggle="tab"
                    href="#Suppliers"
                    onClick={() => {
                      setActiveLink(1);
                    }}
                  >
                    <i className="fa-solid fa-shop"></i> Suppliers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeLink === 2 ? "active" : ""}`}
                    data-bs-toggle="tab"
                    href="#Distributers"
                    onClick={() => {
                      setActiveLink(2);
                    }}
                  >
                    <i className="fa-solid fa-truck"></i> Distributers
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={`nav-link ${activeLink === 3 ? "active" : ""}`}
                    data-bs-toggle="tab"
                    href="#SuperStockists"
                    onClick={() => {
                      setActiveLink(3);
                    }}
                  >
                    <i className="fa-solid fa-box"></i> Super Stockists
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="Collaborate-Sec same-space">
          <div className="container">
            <div className="tab-content text-center">
              <CollabContent activeLink={activeLink} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Collaborate;
