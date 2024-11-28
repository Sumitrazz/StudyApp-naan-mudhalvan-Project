

import React from 'react'
// import b3 from '../../../public/images/blog/b3.webp'
import b3 from '../../assets/Images/b3.webp'

import "./AboutEducation.css";

const AboutEducation = () => {
  const homeAbout = [
    {
      cover: "./images/example1.webp",
      title: "Flexible Learning",
      desc: "Learn at your own pace with access to materials anytime, anywhere.",
    },
    // Add more items as needed
  ];

  const awrapper = [
    {
      cover: "./images/awrapper1.webp",
      data: "Expert Instructors",
      title: "Learn from the best in the industry",
    },
    // Add more items as needed
  ];

  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            {/* <img src="./images/about.webp" alt="About Us" /> */}
          </div>
          <div className="right row">
            <div className="heading">
              <h3>LEARN ANYTHING</h3>
              <h1>Benefits of Online Learning Expertise</h1>
            </div>
            <div className="items">
              {homeAbout.map((val, index) => (
                <div className="item flexSB" key={index}>
                  <div className="img">
                    <img src={b3} alt="Cover" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="awrapper">
        <div className="container grid">
          {awrapper.map((val, index) => (
            <div className="box flex" key={index}>
              <div className="img">
                 {/* <img src={b3} alt="Awrapper Cover" height={100}/> */}
              </div>
              <div className="text">
                <h1>{val.data}</h1>
                <h3>{val.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

 


export default AboutEducation
