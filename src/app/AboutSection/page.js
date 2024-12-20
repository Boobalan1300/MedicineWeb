import "@fortawesome/fontawesome-free/css/all.min.css";

export default function AboutComponent() {
  return (
    <>
      <section className="">
        <div className="container about-bg rounded-5 ">
          <div className="row mx-5  ">
            <div className="col-xl-4 col-md-4 col-6  ">
              <div className="d-flex justify-content-around">
                <div className="position-relative">
                  <div className="position-absolute translate-middle top-0 start-50 ">
                    <div className="text-center">
                      <i className="fa-solid fa-flask about-icon"></i>
                    </div>
                  </div>
                  <div className="pt-5  text-white text-center mb-5">
                    <h5>clinically studied</h5>
                    <p className="fs-small px-xl-5 mx-xl-5">
                      All products that we offer have undergone lab and safety
                      tests
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 col-6  ">
              <div className="d-flex justify-content-around">
                <div className="position-relative">
                  <div className="position-absolute translate-middle top-0 start-50 ">
                    <div className="text-center">
                      <i className="fa-solid fa-leaf about-icon"></i>
                    </div>
                  </div>
                  <div className="pt-5  text-white text-center mb-5">
                    <h5>Vegetarian Friendly</h5>
                    <p className="fs-small px-xl-5 mx-xl-5">
                      We have a wide selection of vegetarian products to meet
                      your needs
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 col-6  ">
              <div className="d-flex justify-content-around">
                <div className="position-relative">
                  <div className="position-absolute translate-middle top-0 start-50 ">
                    <div className="text-center">
                      <i className="fa-solid fa-flag about-icon"></i>
                    </div>
                  </div>
                  <div className="pt-5  text-white text-center mb-5">
                    <h5> Made in India</h5>
                    <p className="fs-small px-xl-5 mx-xl-5">
                      Shop local and explore health products made right here in
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 col-6   ">
              <div className="d-flex justify-content-around">
                <div className="position-relative">
                  <div className="position-absolute translate-middle top-0 start-50 ">
                    <div className="text-center">
                      <i className="fa-solid fa-dolly about-icon"></i>
                    </div>
                  </div>
                  <div className="pt-5  text-white text-center mb-5">
                    <h5>Free shipping</h5>
                    <p className="fs-small px-xl-5 mx-xl-5">
                      We deliver to your door with no shipping costs on your
                      orders
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 col-6  ">
              <div className="d-flex justify-content-around">
                <div className="position-relative">
                  <div className="position-absolute translate-middle top-0 start-50 ">
                    <div className="text-center">
                      <i className="fa-solid fa-rotate-left about-icon"></i>
                    </div>
                  </div>
                  <div className="pt-5  text-white text-center mb-5">
                    <h5> No Risk</h5>
                    <p className="fs-small px-xl-5 mx-xl-5 ">
                      We ensure that all products are safe and within their
                      use-by date
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-md-4 col-6  ">
              <div className="d-flex justify-content-around">
                <div className="position-relative">
                  <div className="position-absolute translate-middle top-0 start-50 ">
                    <div className="text-center">
                      <i className="fa-solid fa-recycle about-icon"></i>
                    </div>
                  </div>
                  <div className="pt-5  text-white text-center mb-5">
                    <h5> GMO free</h5>
                    <p className="fs-small px-xl-5 mx-xl-5">
                      Natural, no modified products and derivatives for those
                      who need it
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
