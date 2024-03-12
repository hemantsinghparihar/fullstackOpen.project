import React, { useEffect, useState } from "react";
// import InstitutionCSR from "../services/instituteCSR";
import institutionAndCSR from "../services/instituteCSR";
//import download from "../assets/images/Download.png";
import { useForm } from "react-hook-form";
import Form from "../components/ui/Form";
import PageTop from "../components/ui/PageTop";

function CSR() {
  const [csr, setCSR] = useState({});
  console.log("✌️csr --->", csr);
  useEffect(() => {
    const element = document.getElementById("header");
    element.scrollIntoView(true);
    document.title = "ToySaga || CSR";
  }, []);
  useEffect(() => {
    institutionAndCSR.getInstitutionCSR().then((res) => {
      setCSR(res);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <main className="Institution-page">
        <PageTop pageTitle={"CSR"}/>

      <section className="Card-content same-space mb-5">
        <div className="container">
          <div className="CardWrapper">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                {/* <div className="Collaborate-form">
                  <form action="#" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-title">
                      <h5>Fill the form</h5>
                    </div>
                    <div className="inputGroup">
                      <input
                        type="text"
                        className="inputField"
                        placeholder="Full Name"
                        name="fullName"
                        {...register("fullName", {
                          required: true,
                          minLength: 4,
                        })}
                      />
                      {errors.fullName?.type == "required" && (
                        <span>fullName is required</span>
                      )}
                    </div>
                    <div className="inputGroup">
                      <input
                        type="email"
                        className="inputField"
                        placeholder="Email"
                        name="email"
                        {...register("email", { required: true })}
                      />
                      {errors.email?.type == "required" && (
                        <span>email is required</span>
                      )}
                    </div>
                    <div className="inputGroup">
                      <input
                        type="tel"
                        className="inputField"
                        placeholder="Phone No"
                        name="number"
                        {...register("number", { required: true })}
                      />
                      {errors.number?.type == "required" && (
                        <span>number is required</span>
                      )}
                    </div>
                    <div className="inputGroup">
                      <textarea
                        className="inputField"
                        placeholder="Message"
                        name="message"
                        {...register("message", { required: true })}
                      ></textarea>
                      {errors.message?.type == "required" && (
                        <span>message is required</span>
                      )}
                    </div>
                    <button className="radiusBtn fillBtn">Submit Now</button>
                  </form>
                </div> */}
                <Form action={"#"} />
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="DownloadPdf">
                  <div className="DownloadPdfContent">
                    <span className="DownloadPdfIcon">
                      {/* <img src={download} alt=""/> */}
                      <img
                        src={`http://localhost:1337${
                          csr.data
                            ? csr.data[0].attributes.image.data[0].attributes
                                .url
                            : "loading"
                        }`}
                        alt=""
                      />
                    </span>
                    <h5>{csr.data ? csr.data[0].attributes.heading : ""}</h5>
                    <p>{csr.data ? csr.data[0].attributes.text : ""}</p>
                   
                  </div>

                  <button className="radiusBtn">DOWNLOAD PDF</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default CSR;
