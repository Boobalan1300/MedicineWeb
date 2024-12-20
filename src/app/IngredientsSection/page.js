import Image from "next/image";
import Link from "next/link";
import element1 from "../../../public/Assets/h2-b1.jpg.png";
import element2 from "../../../public/Assets/bn2-2.jpg.png";
import element3 from "../../../public/Assets/bn2-3.jpg.png";
import element4 from "../../../public/Assets/bn2-4.jpg.png";
import element5 from "../../../public/Assets/bn2-5.jpg.png";

export default function IngredientsComponent() {
  return (
    <section>
      <div className="container  my-2 ingredient-container">
        <div className="row d-flex justify-content-center p-5">
          <div className=" my-3 col-lg-4 col-md-12   ">
            <div>
              <h6 className="font-blue">Ingredients</h6>
              <h3 className="font-blue">Better Ingredients</h3>
              <p className="fs-small font-grey">
                Only the best when you choose products offered on our platform -
                high-quality ingredients for high quality products!
              </p>
            </div>
          </div>

          <div className=" my-3 col-lg-3 col-md-6">
            <div className="position-relative">
              <Image src={element1} className="w-100 h-100 " alt="vitamin c"  loading="lazy" />
              <div className="position-absolute top-0 start-0 p-4 p-md-3">
                <h5 className="font-blue">Vitamin C</h5>
                <p className="ingredient-font">Vitamin C as ascorbic acid</p>
              </div>
              <div className="position-absolute bottom-0 start-0 p-4 p-md-3">
                <Link href="#">See More</Link>
              </div>
            </div>
          </div>

          <div className=" my-3 col-lg-3 col-md-6 ">
            <div className="position-relative">
              <Image src={element2} className="w-100 h-100 " alt="vitamin B3"  loading="lazy"/>
              <div className="position-absolute top-0 start-0 p-4 p-md-3">
                <h5 className="font-blue">Vitamin B3</h5>
                <p className="ingredient-font">
                  Niacin for healthy<br></br> gut and skin
                </p>
              </div>
              <div className="position-absolute bottom-0 start-0 p-4 p-md-3">
                <Link href="#">See More</Link>
              </div>
            </div>
          </div>

          <div className=" my-3 col-lg-3 col-md-6">
            <div className="position-relative">
              <Image src={element3} className="w-100 h-100 " alt="Magnesium"  loading="lazy" />
              <div className="position-absolute top-0 start-0 p-4 p-md-3">
                <h5 className="font-blue">Magnesium</h5>
                <p className="ingredient-font">
                  Boost energy and <br></br>support muscle function
                </p>
              </div>
              <div className="position-absolute bottom-0 start-0 p-4 p-md-3">
                <Link href="#">See More</Link>
              </div>
            </div>
          </div>

          <div className=" my-3 col-lg-3 col-md-6">
            <div className="position-relative">
              <Image src={element4} className="w-100 h-100 " alt="Hyaluronic Acid"  loading="lazy" />
              <div className="position-absolute top-0 start-0 p-4 p-md-3">
                <h5 className="font-blue"> Hyaluronic Acid</h5>
                <p className="ingredient-font">
                  For smooth,<br></br> supple and soft skin!
                </p>
              </div>
              <div className="position-absolute bottom-0 start-0 p-4 p-md-3">
                <Link href="#">See More</Link>
              </div>
            </div>
          </div>

          <div className=" my-3 col-lg-3 col-md-6">
            <div className="position-relative">
              <Image src={element5} className="w-100 h-100 " alt="Lactobacillus"  loading="lazy" />
              <div className="position-absolute top-0 start-0 p-4 p-md-3">
                <h5 className="font-blue">Lactobacillus</h5>
                <p className="ingredient-font">
                  Invigorate your gut microbiome
                </p>
              </div>
              <div className="position-absolute bottom-0 start-0 p-4 p-md-3">
                <Link href="#">See More</Link>
              </div>
            </div>
          </div>

          <div className=" my-3 col-lg-1 col-md-4 bg-white d-none d-lg-block">
            <h3>...</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
