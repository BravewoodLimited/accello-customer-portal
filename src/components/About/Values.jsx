import React from 'react'
import img2 from '../../assets/corevalues/img2.svg'
import img3 from '../../assets/corevalues/img3.svg'
import img4 from '../../assets/corevalues/img4.svg'
import img5 from '../../assets/corevalues/img5.svg'
import img1 from '../../assets/corevalues/img1.svg'

function Values() {
    const values = [
        {
          title: "Dedication to Life",
          description: "We consistently take a focused approach while putting in the necessary work to achieve your goals, committing yourself, and following through with it.",
          icon: img1, // You can replace this with an SVG or image
          color: "bg-white border-[#EED813]",
          color2: "bg-[#EED813]",
        },
        {
          title: "Commitment to Community",
          description: "Our involvement and engagement with our community creates more member satisfaction and quality contributions.",
          icon: img2,
          color: "bg-white border-[#D48305]",
          color2: "bg-[#D48305]",
        },
        {
          title: "Respect for Individual Dignity",
          description: "We recognize and prioritize everyone, regardless of their social status, ethnic origin, gender, capacities, or other characteristics.",
          icon: img3,
          color: "bg-white border-[#5FAEDA]",
          color2: "bg-[#5FAEDA]",
        },
        {
          title: "Mutual Trust",
          description: "We ensure that confidence and trust is built so as to enhance a strong relationship with our clients.",
          icon: img4,
          color: "bg-white border-[#37C5BC]",
          color2: "bg-[#37C5BC]",
        },
        {
          title: "Teamwork",
          description: "We work collaboratively together to provide the financial needs of our clients.",
          icon: img5,
          color: "bg-white border-[#D27BF1]",
          color2: "bg-[#D27BF1]",
        },
      ];
    
      return (
        <section className="py-16 bg-[#EBF2FF]">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Core Values</h2>
          <div className="flex justify-evenly gap-y-20 gap-x-20 max-w-4xl mx-auto flex-wrap">
            {values.map((value, index) => (
              <div
                key={index}
                className={`pt-4 pb-4 text-center w-2/5 max-w-[240px] md:w-full border  ${value.color}`}
              >
                <div className={`w-full h-px ${value.color2}`}></div>
                <img src={value.icon}  className='mx-auto mt-4'/>
                <h3 className="text-[16px] font-gilroyBold font-semibold mb-2 mt-2">{value.title}</h3>
                <p className="text-gray-700 font-dmsans text-[12px] mt-8 px-2 pb-1">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Values