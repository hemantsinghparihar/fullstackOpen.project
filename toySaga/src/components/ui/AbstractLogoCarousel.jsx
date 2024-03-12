import React, { useEffect, useState } from "react";
import "../../App.css";
import homeAPI from "../../services/homeService";
import useEmblaCarousel from "embla-carousel-react";
//import imageByIndex from './ImageByIndex'
// import image from './assets/images/logo.png'

const AbstractLogoCarousel = (props) => {
  const { slides, options } = props;
  const [imageData, setImagesData] = useState({});
  console.log("✌️imageData --->", imageData);
  const image = `http://localhost:1337${
    imageData.data
      ? imageData.data[0].attributes.abstractLogo.data[0].attributes.url
      : "loading"
  }`;
  console.log(
    "✌️imageData.data?imageData.data[",
    imageData.data
      ? imageData.data[0].attributes.abstractLogo.data[0].attributes.url
      : "loading"
  );

  const images = [image, image, image, image];

  const imageByIndex = (index) => images[index % images.length];

  const [emblaRef] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  useEffect(() => {
    homeAPI.getLogoCarousel().then((res) => {
      setImagesData(res);
    });
  }, []);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={imageByIndex(index)}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default AbstractLogoCarousel;
