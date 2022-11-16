import React from "react";
import aliImg from "../images/avatar-ali.png";
import anishaImg from "../images/avatar-anisha.png";
import richardImg from "../images/avatar-richard.png";
import shanaiImg from "../images/avatar-shanai.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const reviewsContent = [
  {
    img: anishaImg,
    name: "Anisha Li",
    comment: `
    “Manage has supercharged our team’s workflow. The ability to maintain 
     visibility on larger milestones at all times keeps everyone motivated.”
    `,
  },
  {
    img: aliImg,
    name: "Ali Bravo",
    comment: `
    “We have been able to cancel so many other subscriptions since using 
    Manage. There is no more cross-channel confusion and everyone is much 
    more focused.”
    `,
  },
  {
    img: richardImg,
    name: "Richard Watts",
    comment: `
    “Manage allows us to provide structure and process. It keeps us organized 
    and focused. I can’t stop recommending them to everyone I talk to!”
    `,
  },
  {
    img: shanaiImg,
    name: "Shanai Gough",
    comment: `
    “Their software allows us to track, manage and collaborate on our projects 
    from anywhere. It keeps the whole team in-sync without being intrusive.”
    `,
  },
];

export default function Reviews() {
  const reviewsElements = reviewsContent.map((r, index) => {
    return (
      <SwiperSlide>
        <div key={index} className="review">
          <img src={r.img} alt={r.name} />
          <h3>{r.name}</h3>
          <p>{r.comment}</p>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="reviews">
      <h2>What they’ve said</h2>
      <div className="reviews-container">
        <Swiper centeredSlides={true} spaceBetween={30} slidesPerView={3.1}>
          {reviewsElements}
        </Swiper>
      </div>
      <button className="get-started-btn">Get Started</button>
    </div>
  );
}
