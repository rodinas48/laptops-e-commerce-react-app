
import "./Slider.css";
function Slider() {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://businessmirror.com.ph/wp-content/uploads/2021/01/top01-011621.jpg"
              className="d-block mx-auto"
              alt="slide1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://media.licdn.com/dms/image/C4E12AQFB0yVPfWFdoQ/article-cover_image-shrink_720_1280/0/1645169409014?e=2147483647&v=beta&t=HGYbtuUNYIFtU4zYcs9WKs45zn9uMcwcSB5n2SfNb2A"
              className="d-block mx-auto"
              alt="slide2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.retrocube.com/blog/wp-content/uploads/2021/09/how-ecommerce-companies-can-care-for-their-customers-5eb56dfe6c64e-1520x800.png"
              className="d-block mx-auto"
              alt="slide3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
export default Slider;