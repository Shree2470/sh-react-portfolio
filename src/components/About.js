import React from 'react'

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-0">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Hey guys this is SHREERAM R.K.B here and I did my schooling on Dharani.Matriculation.Higher.Secondary.School,
          Dharani Nagar, Vasudevanallur, Tenkasi District, TamilNadu. Then I did my graduation on PSR.ENGINEERING.COLLEGE, SIVAKASI.
          So now I'm currently working in RAPIDQUBE DIGITAL SOLUTIONS, Shollinganallur. I'm working in Development Domain with a role of
          ASSOCIATE DIGITAL ENGINEER
        </p>
        <br />
      </div>
    </div>
  )
}

export default About