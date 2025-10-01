import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import adi1 from "../assets/gallery/adi1.jpeg";
import adi2 from "../assets/gallery/adi2.jpeg";
import adi from "../assets/gallery/adi.jpeg";
import nag2 from "../assets/gallery/nag2.jpeg";
import adi4 from "../assets/gallery/adi4.jpeg";
import pic3 from "../assets/gallery/pic3.jpg";
import fear from "../assets/gallery/fear.jpeg";
import interview from "../assets/gallery/interview.jpeg";
import class_college_1 from "../assets/gallery/class_college_1.jpeg";
import class_college_2 from "../assets/gallery/class_college_2.jpeg";
import class_college_3 from "../assets/gallery/class_college_3.jpeg";
import class_college_4 from "../assets/gallery/class_college_4.jpeg";
import rmsit1 from "../assets/gallery/rmsit1.jpg";
import rmsit2 from "../assets/gallery/rmsit2.jpg";
import rmsit3 from "../assets/gallery/rmsit3.jpg";
import rmsit4 from "../assets/gallery/rmsit4.jpg";
import rmsit5 from "../assets/gallery/rmsit5.jpg";




const captionStyle = {
  padding: "15px 20px",
  background: "linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2))",
  color: "#fff",
  position: "absolute",
  bottom: "10%",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "1.2rem",  // Adjusted for responsiveness
  fontWeight: "500",
  letterSpacing: "0.5px",
  textAlign: "center",
  borderRadius: "8px",
  width: "80%",
  maxWidth: "600px",
};

const slideStyle = {
  position: "relative",
  width: "",
  height: "75vh",  // Adjust height to be responsive
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "12px",
  overflow: "hidden",
};

const imageStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const slideImages = [
  {
    url: adi1,
    caption: "MoU between Edu-pie Global and Aditya College of Engineering and Technology",
  },
  {
    url: adi2,
    caption: "",
  },
  {
    url: nag2,
    caption: "Class in progress in Nagarjuna Degree College",
  },
  {
    url: adi,
    caption: "Reinventing Ourselves in this VUCA World, a talk by Dr. Pramod Pathak at Aditya College of Engineering and Technology",
  },
  {
    url: adi4,
    caption: "",
  },
  {
    url: fear,
    caption: "Overcome stage fear",
  },
  {
    url: pic3,
    caption: "",
  },
  {
    url:interview ,
    caption: "",
  },{
    url: class_college_1,
    caption: "",
  },{
    url: class_college_2,
    caption: "",
  },{
    url: class_college_3,
    caption: "",
  },{
    url: class_college_4,
    caption: "",
  },{
    url: rmsit1,
    caption: "",
  },{
    url: rmsit2,
    caption: "",
  },{
    url: rmsit3,
    caption: "",
  },{
    url: rmsit4,
    caption: "",
  },{
    url: rmsit5,
    caption: "",
  },
  
];

const ImageSlider = () => {
  return (
    <div
      className=""
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Slide
        arrows={true}
        pauseOnHover={true}
        duration={5000}
        transitionDuration={1000}
        infinite={true}
        autoplay={true}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} style={slideStyle}>
            <img
              src={slideImage.url}
              alt={slideImage.caption}
              style={imageStyle}
              loading="lazy"
            />
            <div style={captionStyle}>{slideImage.caption}</div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default ImageSlider;

