import React, { useEffect, useState } from "react";
import "../../App.css";
import useEmblaCarousel from "embla-carousel-react";
//import banner from './assets/images/banner.png'
// import logo from './assets/images/logo.png'

const AdsSlider = (props) => {
  const image = props.image;
  const imageStyles = props.imageStyles;
  // console.log('✌️imageStyles --->', imageStyles);
  //const [emblaRef]=useEmblaCarousel({loop:true})
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      // console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi]);

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
            <img style={imageStyles} src={image} alt="" />
          </div>

          <div
            className="embla_slide"
            style={{ flex: "0 0 100%", minWidth: "0" }}
          >
            <img style={imageStyles} src={image} alt="" />
          </div>

          {/* <div className='embla_slide' style={{ flex: '0 0 100%',minWidth: '0'}}>
                <img style={{height:'450px', width:'100%'}} src={image} alt="" />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default AdsSlider;
