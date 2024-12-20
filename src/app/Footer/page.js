import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Logo from "../../../public/Assets/logo.png";
export default function FooterComponent() {
  return (
    <>
      <section className="footer-section ">
        <div className="container-fluid  my-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
              <div className=" bg-contact rounded my-2 mx-3">
                <div className="row ">
                  <div className="col-3   d-flex justify-content-end align-items-center">
                    <i className="fa-solid fa-square-phone fs-1 text-white"></i>
                  </div>
                  <div className="col-9 text-white ">
                    <p className="mb-0 mt-2 text-start">Phone Number</p>
                    <p className="bold mb-2"> +974 3118 1843</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
              <div className="bg-contact rounded my-2 mx-3">
                <div className="row">
                  <div className="col-3   d-flex justify-content-end align-items-center">
                    <i className="fa-solid fa-envelope fs-1  text-white"></i>
                  </div>
                  <div className="col-9  text-white">
                    <p className="mb-0 mt-2 text-start"> Email Address</p>
                    <p className="bold mb-2"> Elbrithcqhr@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-sm-6 mt-3">
              <div className=" bg-contact rounded my-2 mx-3">
                <div className="row ">
                  <div className="col-3  d-flex justify-content-end align-items-center">
                    <i className="fa-solid fa-location-dot fs-1  text-white"></i>
                  </div>
                  <div className="col-9 text-white ">
                    <p className="mb-0 mt-2 text-start">Office Location</p>
                    <p className="bold mb-2"> Ambassador Street, Zone 61,</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-5">
          <div className=" mx-5">
            <div className="row mx-4">
              <div className="col-lg-4 col-md-6 text-center">
                <div className=" mb-2 mx-4 text-start">
                  <Image src={Logo} width={200} height={50} alt="logo"   loading="lazy"
                    priority={false} />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 text-start">
                <div className=" mb-2  mx-4 text-white ">
                  <small className="fs-small">
                    Your health, physical and emotional well-being is important
                    to us. We are always by your side and have made it even
                    easier for you to find the necessary vitamins
                  </small>
                </div>
              </div>

              <div className="text-center  text-white">
                <div className="col-lg-6 my-4">
                  @ Elbrit Life Sciences Private Limited. C20, BKC, G Block,
                  Mumbai 400051
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
