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
    client: "Stephen Amon (0000002547)",
    testimonial:
      "I was really impressed with the exceptional service I received. The entire process, from application to disbursement, was smooth and efficient. I highly recommend Accello.",
  },
  {
    client: "Zakari Ibrahim (0000002176)",
    testimonial:
      "I was surprised to know that the deduction percentage for my loan repayments was very reasonable. The deduction percentage was clearly explained to me upfront, and I had no issues with it",
  },

  {
    client: "Najamuddeen Musa (0000002183)",
    testimonial:
      "My experience when I applied for a loan was not a stressful one. From the initial application to the final repayment, I was supported and guided every step of the way.",
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
