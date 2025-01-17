import React from "react";
import bannerImg from "../../assets/website/pattern.jpeg";
import img1 from "../../assets/website/app_store.png";
import img2 from "../../assets/website/play_store.png";

const Banner = () => {
  const styleImg = {
    backgroundImage: `url(${bannerImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
  };
  return (
    <div>
      <div className="container">
        <div
          className="rounded-xl flex flex-col justify-center items-center gap-5"
          style={styleImg}
        >
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="font-serif font-bold text-4xl"
          >
            Get Started with our app
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="text-center px-40"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iure
            enim dolorum fugit esse reiciendis!
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="flex gap-4"
          >
            <img
              src={img2}
              alt=""
              className="h-[70px] w-[200px] cursor-pointer"
            />
            <img
              src={img1}
              alt=""
              className="h-[70px] w-[200px] cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
