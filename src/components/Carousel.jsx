import { useRef } from "preact/hooks";
import "../css/carousel.css";
const Carousel = ({ children }) => {
  const carouselRef = useRef();
  const handleClick = (id) => {
    if (id === "right") {
      carouselRef.current.scrollLeft += 1000;
    } else if (id === "left") {
      carouselRef.current.scrollLeft -= 1000;
    }
  };
  return (
    <div className="carousel-wrapper">
      <div className="carousel" ref={carouselRef}>
        <button
          className="button left is-link p-1 is-hidden-touch"
          onClick={() => handleClick("left")}
        >
          <p className="is-size-3 has-text-weight-bold">{"\u25C3"}</p>
        </button>
        {children}
        <button
          className="button right is-link p-1 is-hidden-touch"
          onClick={() => handleClick("right")}
        >
          <p className="is-size-3 has-text-weight-bold">{"\u25B9"}</p>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
