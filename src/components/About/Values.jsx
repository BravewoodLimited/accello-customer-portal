import React from 'react'
import Rocket from '../../assets/Landing/rocket.png'
import Thunder from '../../assets/Landing/Difference/thunder.svg'
import Trophy from '../../assets/Landing/Difference/cash.svg'
import Tele from '../../assets/Landing/Difference/shield.svg'
import User from '../../assets/Landing/Difference/web.svg'

function Values() {
    const values = [
        {
          title: "Dedication to Life",
          description: "We consistently take a focused approach while putting in the necessary work to achieve your goals, committing yourself, and following through with it.",
          icon: "⚡", // You can replace this with an SVG or image
          color: "bg-yellow-100 border-yellow-300",
        },
        {
          title: "Commitment to Community",
          description: "Our involvement and engagement with our community creates more member satisfaction and quality contributions.",
          icon: "👥",
          color: "bg-orange-100 border-orange-300",
        },
        {
          title: "Respect for Individual Dignity",
          description: "We recognize and prioritize everyone, regardless of their social status, ethnic origin, gender, capacities, or other characteristics.",
          icon: "🏅",
          color: "bg-blue-100 border-blue-300",
        },
        {
          title: "Mutual Trust",
          description: "We ensure that confidence and trust is built so as to enhance a strong relationship with our clients.",
          icon: "🌍",
          color: "bg-teal-100 border-teal-300",
        },
        {
          title: "Teamwork",
          description: "We work collaboratively together to provide the financial needs of our clients.",
          icon: "🤝",
          color: "bg-purple-100 border-purple-300",
        },
      ];
    
      return (
        <section className="py-16 bg-[#EBF2FF]">
          <h2 className="text-3xl font-semibold text-center mb-8">Our Core Values</h2>
          <div className="flex justify-evenly gap-8 max-w-6xl mx-auto flex-wrap">
            {values.map((value, index) => (
              <div
                key={index}
                className={`p-6 text-center w-2/5 md:w-3/12 border-t-4 rounded-lg ${value.color}`}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      );
}

export default Values