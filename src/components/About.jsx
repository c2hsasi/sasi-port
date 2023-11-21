import proPic from "../assets/profile1.png";
const About = () => {
  return (
    <div className="lg:mx-16 mx-4" id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2">
          <img src={proPic} alt="" className="w-full sm:w-10/12" />
        </div>
        <div className="sm:w-1/2">
          <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
            About me
          </h2>
          <br />
          <p className="text-xl text-headingcolor font-semibold mb-5 text-primary">
            I AM SASIDEVI R
          </p>
          <p className="mt-8 mb-8 text-justify">
            Aspiring Full Stack Developer with a passion for technology and a
            drive to excel in both front-end and back-end development. I am
            committed to delivering high-quality, scalable solutions and thrive
            in an environment that encourages innovation and professional
            development.
            <br />
            <br />
            Looking for an opportunity that values creativity, diversity, and
            continuous improvement. I aim to contribute to cutting-edge
            projects, learn from talented peers, and advance my career while
            crafting exceptional digital experiences.
          </p>

          <button
            className="btn btn-primary py-3 font-semibold cursor-pointer
            hover:-translate-y-5 transition-all duration-300"
            id="homebtn"
            style={{ width: "250px" }}
          >
            Get In Touch<br></br>
            <a href="https://github.com/c2hsasi" target="blank">
              <i
                class="fa fa-github fa-2x hover:-translate-y-3 transition-all duration-300 text-xl"
                aria-hidden="true"
              ></i>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/sasi-devi-56a86b220/"
              target="blank"
            >
              {" "}
              <i
                class="fa fa-linkedin-square fa-2x  hover:-translate-y-3 transition-all duration-300 text-xl"
                aria-hidden="true"
                style={{ padding: "30px" }}
              ></i>
            </a>
            <a href="mailto:sasirdevi@gmail.com" target="blank">
              {" "}
              <i
                class="fa fa-envelope fa-2x  hover:-translate-y-3 transition-all duration-300 text-xl"
                aria-hidden="true"
              >
                {" "}
              </i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
