import React, { useEffect, useState } from "react";
import "../../App.css";
import useEmblaCarousel from "embla-carousel-react";
import testimonial from "../../services/testimonialService";
//import banner from "./assets/images/banner.png";
import quate from "../../assets/images/quate.png";

const Testimonial = () => {
  const [testimonialContent, setTestimonial] = useState({});
  console.log("✌️testimonial --->", testimonialContent);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
    }
  }, [emblaApi]);
  useEffect(() => {
    testimonial.getTestimonials().then((res) => {
      setTestimonial(res);
    });
  }, []);

  return (
    <div>
      <div className="embla1" style={{ overflow: "hidden" }} ref={emblaRef}>
        <div className="embla_container" style={{ display: "flex" }}>
          {/* <div className='embla_slide' style={{ flex: '0 0 100%',minWidth: '0'}}>
                <img style={{height:'450px', width:'100%'}} src={image} alt="" />
            </div> */}
          <div
            className="embla_slide"
            style={{ flex: "0 0 100%", minWidth: "0" }}
          >
            <div className="TestimonialItem">
              <div className="TestimonialContent">
                <p>
                  {testimonialContent.data
                    ? testimonialContent.data[1].attributes.testimonialContent
                    : "loading"}
                </p>
                {/* <p>“ I’m always impressed by the wide range of toys this store has to offer. It’s my
                                               go-to for all things playtime! The customer service at this toy shop is
                                               exceptional. They went above and beyond to help me find the
                                               perfect toy ”
                                            </p> */}
                <div className="TestProfile">
                  <div className="TestProfileImg">
                    <img
                      src={`http://localhost:1337${
                        testimonialContent.data
                          ? testimonialContent.data[1].attributes.image.data
                              .attributes.url
                          : "loading"
                      }`}
                      alt=""
                    />
                    {/* <img src={banner} alt=""/> */}
                  </div>
                  <div className="TestNameWrapper">
                    <p>
                      {testimonialContent.data
                        ? testimonialContent.data[1].attributes.name
                        : "loading"}
                    </p>
                    {/* <p>Zina Doicm</p> */}
                    <span>
                      {testimonialContent.data
                        ? testimonialContent.data[1].attributes.designation
                        : "loading"}
                    </span>
                  </div>
                </div>
                <div className="quate">
                  <img src={quate} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="embla_slide"
            style={{ flex: "0 0 100%", minWidth: "0" }}
          >
            <div className="TestimonialItem">
              <div className="TestimonialContent">
                <p>
                  {testimonialContent.data
                    ? testimonialContent.data[0].attributes.testimonialContent
                    : "loading"}
                </p>
                {/* <p>“ I’m always impressed by the wide range of toys this store has to offer. It’s my
                                               go-to for all things playtime! The customer service at this toy shop is
                                               exceptional. They went above and beyond to help me find the
                                               perfect toy ”
                                            </p> */}
                <div className="TestProfile">
                  <div className="TestProfileImg">
                    <img
                      src={`http://localhost:1337${
                        testimonialContent.data
                          ? testimonialContent.data[0].attributes.image.data
                              .attributes.url
                          : "loading"
                      }`}
                      alt=""
                    />
                    {/* <img src={banner} alt=""/> */}
                  </div>
                  <div className="TestNameWrapper">
                    <p>
                      {testimonialContent.data
                        ? testimonialContent.data[1].attributes.name
                        : "loading"}
                    </p>
                    {/* <p>Zina Doicm</p> */}

                    <span>
                      {testimonialContent.data
                        ? testimonialContent.data[0].attributes.designation
                        : "loading"}
                    </span>
                  </div>
                </div>
                <div className="quate">
                  <img src={quate} alt="" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className='embla_slide' style={{ flex: '0 0 100%',minWidth: '0'}}>
                <img style={{height:'450px', width:'100%'}} src={image} alt="" />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
