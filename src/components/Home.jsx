import profile from "../assets/back.png";
import Typewriter from "typewriter-effect";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {
  return (
    <div className="bg-bgShade" id="home">
      <div className="lg:px-12 px-4 my-32 py-12 flex flex-col md:flex-row-reverse items-center justify-between py-20 gap-4">
        <div className="md:w-1/2 w-full">
          <img src={profile} alt="" className="w-3/4 w-full px-5 py-15" />
          {/* // <img src={profile} alt="" className="w-3/4 w-full px-5 py-15" /> */}
        </div>
        {/* left side */}
        <div className="md:w-1/2 w-full mt-5">
          <p className="text-xl text-headingcolor font-semibold mb-5"></p>
          <h1 className="md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px]  mb-5">
            Hi
            <Typewriter
              options={{
                strings: ["I'm SASIDEVI R", "Full Stack Developer"],
                autoStart: true,
                loop: true,
              }}
            />
            <span className="text-primary">MERN Stack Developer</span>
          </h1>
          <div className="mt-4 ">
            <a
              href="https://drive.google.com/file/d/1dZqTnMBPTlTSea84JH6fHeDVB1svsZfd/view?usp=drive_link"
              target="blank"
            >
              <button
                className="btn btn-primary py-3 "
                id="homebtn"
                style={{ width: "150px" }}
              >
                {" "}
                Resume
              </button>
            </a>
          </div>
        </div>
        {/* rigth side */}
      </div>
    </div>
  );
};

export default Home;
