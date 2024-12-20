import Image from "next/image";
import image1 from "../../../public/Assets/blog1-450x580.jpg.png";
import image2 from "../../../public/Assets/blog2-450x580.jpg.png";

export default function LatestNewsComponent() {
  return (
    <>
      <section>
        <div className="text-center mb-5">
          <h6 className="font-blue">OUR Blog</h6>
          <h3 className="font-blue">Latest News</h3>
        </div>
        <div className="container ">
          <div className="row ">
            <div className="col-lg-3 col-md-3 col-6  text-center">
              <div className="d-flex flex-column ">
                <div className=" position-relative p-3">
                  <Image
                    src={image1}
                    className="rounded spanning-row"
                    alt="news1"
                    loading="lazy"
                    priority={false}
                  />
                  <div className="position-absolute top-0 start-0 translate-middle mt-5 mx-5 ">
                    <p>
                      <span className=" rounded-end-css"> 20 Apr</span>
                    </p>
                  </div>

                  <div className="position-absolute top-0 start-0  mt-5 mx-5 ">
                    <p className="news-font">
                      For smooth supple and soft skin!
                    </p>
                  </div>
                </div>

                <div className=" position-relative p-3">
                  <Image
                    src={image2}
                    className="rounded single-row"
                    alt="news2"
                    loading="lazy"
                    priority={false}
                  />
                  <div className="position-absolute top-0 start-0 translate-middle mt-5 mx-5">
                    <p>
                      <span className=" rounded-end-css"> 20 Apr</span>
                    </p>
                  </div>

                  <div className="position-absolute top-0 start-0  mt-5 mx-5 ">
                    <p className="news-font">
                      For smooth supple and soft skin!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6  text-center">
              <div className=" position-relative p-3">
                <Image
                  src={image2}
                  className="rounded single-row"
                  alt="news3"
                  loading="lazy"
                  priority={false}
                />
                <div className="position-absolute top-0 start-0 translate-middle mt-5 mx-5 ">
                  <p>
                    <span className=" rounded-end-css"> 20 Apr</span>
                  </p>
                </div>

                <div className="position-absolute top-0 start-0  mt-5 mx-5 ">
                  <p className="news-font">For smooth supple and soft skin!</p>
                </div>
              </div>
              <div className="d-flex flex-column ">
                <div className=" position-relative p-3">
                  <Image
                    src={image1}
                    className="rounded spanning-row"
                    alt="news4"
                    loading="lazy"
                    priority={false}
                  />
                  <div className="position-absolute top-0 start-0 translate-middle mt-5 mx-5">
                    <p>
                      <span className=" rounded-end-css"> 20 Apr</span>
                    </p>
                  </div>

                  <div className="position-absolute top-0 start-0  mt-5 mx-5 ">
                    <p className="news-font">
                      For smooth supple and soft skin!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6  text-center">
              <div className="d-flex flex-column ">
                <div className=" position-relative p-3">
                  <Image
                    src={image1}
                    className="rounded spanning-row"
                    alt="news5"
                    loading="lazy"
                    priority={false}
                  />
                  <div className="position-absolute top-0 start-0 translate-middle mt-5 mx-5 ">
                    <p>
                      <span className=" rounded-end-css"> 20 Apr</span>
                    </p>
                  </div>

                  <div className="position-absolute top-0 start-0  mt-5 mx-5 ">
                    <p className="news-font">
                      For smooth supple and soft skin!
                    </p>
                  </div>
                </div>

                <div className=" position-relative p-3">
                  <Image
                    src={image2}
                    className="rounded single-row"
                    alt="news6"
                    loading="lazy"
                    priority={false}
                  />
                  <div className="position-absolute top-0 start-0 translate-middle mt-5 mx-5 ">
                    <p>
                      <span className=" rounded-end-css"> 20 Apr</span>
                    </p>
                  </div>

                  <div className="position-absolute top-0 start-0  mt-5 mx-5 ">
                    <p className="news-font">
                      For smooth supple and soft skin!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-3 col-6  text-center">
              <div className=" position-relative p-3">
                <Image
                  src={image2}
                  className="rounded single-row"
                  alt="news7"
                  loading="lazy"
                  priority={false}
                />
                <div className="position-absolute top-0 start-0 translate-middle mt-5 mx-5 ">
                  <p>
                    <span className=" rounded-end-css"> 20 Apr</span>
                  </p>
                </div>

                <div className="position-absolute top-0 start-0  mt-5 mx-5 ">
                  <p className="news-font">For smooth supple and soft skin!</p>
                </div>
              </div>
              <div className="d-flex flex-column ">
                <div className=" position-relative p-3">
                  <Image
                    src={image1}
                    className="rounded spanning-row"
                    alt="news8"
                    loading="lazy"
                    priority={false}
                  />
                  <div className="position-absolute top-0 start-0 translate-middle mt-5 mx-5">
                    <p>
                      <span className=" rounded-end-css"> 20 Apr</span>
                    </p>
                  </div>

                  <div className="position-absolute top-0 start-0  mt-5 mx-5 ">
                    <p className="news-font">
                      For smooth supple and soft skin!
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
