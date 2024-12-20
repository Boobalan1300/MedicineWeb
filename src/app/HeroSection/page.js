import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Logo from "../../../public/Assets/logo.png";
import HeaderImg from "../../../public/Assets/f2-1.png.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AboutComponent from "../AboutSection/page";

export default function Home() {
  return (
    <>
    <div className="mx-5 my-2">
    <Image src={Logo} width={170} height={40} alt="logo"   loading="lazy" priority={false} />
    </div>
      <div className="px-3 my-5">
        <div className="container-fluid rounded Header-Container position-relative">
          <div className="">
            <h1 className="text-center pt-5 title-font">Essential Vitamins</h1>

            <div className="container max-width-content d-flex justify-content-around">
              <div className="row">
                <div className="order-xl-1 order-2 col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex flex-column justify-content-center text-lg-start text-center">
                  <p className="font-grey">Online Medical Supplies</p>
                  <h4 className="font-blue">Get Your Vitamins & Minerals</h4>
                  <div className="text-lg-start text-center">
                    <button className="button-blue">Explore</button>
                  </div>
                </div>

                <div className="order-xl-2 order-1 text-center col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 mb-5">
                  <div>
                    <Image
                      src={HeaderImg}
                      width={200}
                      height={200}
                      loading="lazy"
                      priority={false}
                      alt="Probiotics Image"
                    />
                  </div>
                </div>

                <div className="order-xl-3 order-3 col-xl-4 col-lg-6 col-md-6 col-sm-12 pt-5">
                  <div className="row my-2">
                    <div className="col-2 text-center">
                      <i className="fa-solid fa-pills responsive-icon"></i>
                    </div>
                    <div className="col-7 text-start ">
                      <h5 className="font-blue">Vitamins</h5>
                      <p className="fs-small font-grey ">
                        Increased Vitamins and minerals in your diet
                      </p>
                    </div>
                  </div>

                  <div className="row my-2">
                    <div className="col-2 text-center">
                      <i className="fa-solid fa-weight-scale responsive-icon"></i>
                    </div>
                    <div className="col-7 text-start">
                      <h5 className="font-blue">Weight Loss</h5>
                      <p className="fs-small font-grey">
                        Weight Loss Find scientifically proven solutions
                      </p>
                    </div>
                  </div>

                  <div className="row my-2">
                    <div className="col-2 text-center">
                      <i className="fa-solid fa-bowl-food responsive-icon"></i>
                    </div>
                    <div className="col-7 text-start">
                      <h5 className="font-blue">Functional Foods</h5>
                      <p className="fs-small font-grey">
                        Functional Foods From protein powders to baby formula
                      </p>
                    </div>
                  </div>
                </div>
                <div className="position-absolute top-100 start-50 translate-middle ">
                  <AboutComponent />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
