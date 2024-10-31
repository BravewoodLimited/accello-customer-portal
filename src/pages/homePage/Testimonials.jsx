import React from "react";
import star from "../../assets/imgs/star.svg";
import "@splidejs/splide/css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const Testimonial = ({ testimony, client }) => {
  return (
    <div className="">
      <div className="flex items-center gap-3  w-full justify-center">
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <p className="font-dmsans text-[1.2rem] text-[#4D4D4D] leading-[32.38px]">
        {testimony}
      </p>
      <span className="text-right text-[#5E5E5E]">{client}</span>
    </div>
  );
};

const values = [
  {
    client: "Yahaya Saidu (0000002073)",
    testimonial:
      "Although the disbursement took a little long, I like the fact that they call their customers after a loan has been disbursed to get feedback. This gives customers the chance to voice their dissatisfaction or commendation where needed.",
  },
  {
    client: "Tijani Pamela (0000002482)",
    testimonial:
      "The time frame between applying and getting the loan was short, to my surprise. I thought it was going to take longer. Great one from the team!",
  },
  {
    client: "Abdullahi Musa (0000003121)",
    testimonial:
      "I was pleased with the smooth application process. Customer support was very responsive and helped me every step of the way.",
  },
  {
    client: "Chinwe Okeke (0000001785)",
    testimonial:
      "The loan terms were clearly explained, and I appreciate the transparency. No hidden fees, which is rare these days. Thanks for the great service!",
  },
  {
    client: "Emeka Udo (0000001967)",
    testimonial:
      "I had some doubts initially, but the team reassured me throughout the process. Disbursement was quick, and I will recommend this service to others.",
  },
  {
    client: "Aisha Bello (0000003042)",
    testimonial:
      "Excellent service! The staff was very professional, and they answered all my questions. I felt supported throughout the loan application.",
  },
  {
    client: "Ibrahim Sule (0000002559)",
    testimonial:
      "From start to finish, everything went smoothly. I like how the company follows up to ensure customer satisfaction after disbursement.",
  },
  {
    client: "Ngozi Eze (0000001789)",
    testimonial:
      "I appreciate the fast disbursement and the clear communication throughout the process. Keep up the good work!",
  },
  {
    client: "John Doe (0000003210)",
    testimonial:
      "The experience was great. I applied in the morning and got my loan by the afternoon. Such efficiency is commendable!",
  },
  {
    client: "Mary Ann (0000003874)",
    testimonial:
      "I was worried about the application process, but it turned out to be very straightforward. The team was very helpful.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-[#F9F9FB] py-10">
      <div className="flex flex-col items-center  ">
        <h2 className="text-bold text-center text-[40px] font-NexaBold">
          What Our Clients Say
        </h2>
        <div className="w-[250px] bg-[#D99224] h-1 mt-1"></div>
      </div>

      <div className="mt-14  w-full">
        <Splide
          options={{
            type: "loop",
            drag: "free",
            pagination: false,
            arrows: false,
            autoplay: true,
            perPage: 4,
            speed: 1500, // Adjusted for smoother scrolling
            waitForTransition: true, // Prevents skipping frames
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: true,
              rewind: true,
              speed: 0.5,
            },
          }}
          extensions={{ AutoScroll }}
          aria-label="My Favorite Images"
        >
          {values.map((item, index) => (
            <SplideSlide
              key={index}
              className="flex flex-col w-full gap-4 mx-4 bg-white shadow-[0px 4px 10px_0px_rgba(0,_0,_0,_0.5)]  flex flex-col gap-8 p-4 lg:p-8 rounded-[15px]    min-w-[240px]"
            >
              <div className="flex items-center gap-2  w-full justify-center">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
              <p className="font-dmsans text-[1.2rem] text-[#4D4D4D] leading-[32.38px]">
                {item.testimonial}
              </p>
              <span className="text-right text-[#5E5E5E]">{item.client}</span>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
