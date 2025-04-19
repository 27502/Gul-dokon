import { Carousel } from "antd";
import "./HeroCarousel.css";
import slide1 from "../../assets/images/slide1.png";
import slide2 from "../../assets/images/slide2.png";
import slide3 from "../../assets/images/slide3.png";

const slides = [
  {
    title: "Let’s Make a Better Planet",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants.",
    image: slide1,
  },
  {
    title: "Discover Nature's Beauty",
    desc: "Find perfect greenery for your home and office, only from us.",
    image: slide2,
  },
  {
    title: "Fresh Air, Fresh Mind",
    desc: "Bring home your favorite plants and improve your well-being.",
    image: slide3,
  },
];

const HeroCarousel = () => {
  return (
    <Carousel autoplay dots={false}>
      {slides.map((slide, index) => (
        <div className="carousel-slide" key={index}>
          <div className="carousel-container">
            <div className="carousel-text">
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
              <button className="carousel-button">SHOP NOW</button>
            </div>
            <div className="carousel-image-wrapper">
              <img src={slide.image} alt={`slide-${index}`} className="carousel-image" />
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
