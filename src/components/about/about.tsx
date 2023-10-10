import React from "react";
import { Images } from "../assests/assets";
import "../about/about.css";

export default function about() {
  return (
    // product section
    <>
      <section id="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center text-center">
              <img src={Images.Table} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center text-center">
              <img src={Images.chair} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center text-center">
              <img src={Images.sofa} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center text-center">
              <img src={Images.cot} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center text-center">
              <img src={Images.wardrobe} alt="" />
            </div>
            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center text-center">
              <img src={Images.fullset} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ///////////////////////////// product section */}
      <section className="about">
        <div className="container">
          <div className="row content">
            
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                itaque, dolore odio dolorem, vel quidem delectus laborum error
                nemo sit temporibus? Non sint consequuntur, nisi tempora impedit
                voluptatem pariatur perspiciatis!
              </p>
            <ul>
              <li>
                <i className="fa fa-check"></i>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit </p>
              </li>
              <li>
                <i className="fa fa-check"></i>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit </p>
              </li>
              <li>
                <i className="fa fa-check"></i>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit </p>
              </li>
            </ul>
            <p className="font-italian">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              at pariatur nostrum. Omnis, voluptatibus commodi. Ipsum eveniet
              nesciunt fugiat sint quae illum est amet? Accusamus adipisci
              repudiandae sapiente aspernatur illo.
            </p>
            </div>
            <div className="col-lg-6">
              <h2>Lorem ipsum dolor, sit</h2>
              <h3>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam .
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* ///////////////////////////// product section end */}

      {/* worklist//////////////////////////// */}
      <section className="list">
        <div className="container">
            <div className="row counters">

            <div className="col-lg-3 col-6 text-center">
                <span>1000+</span>
                <p>Clients</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
                <span>100+</span>
                <p>Wood Works</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
                <span>24 x 7</span>
                <p>Support</p>
            </div>
            <div className="col-lg-3 col-6 text-center">
                <span>50+</span>
                <p>Workers</p>
            </div>
            </div>
        </div>
      {/* worklist end//////////////////////////// */}

      </section>
    </>
  );
}
