const skills = [
  {
    id: 1,
    image: "src/assets/tech/html.png",
  },
  {
    id: 2,
    image: "src/assets/tech/css.png",
  },
  {
    id: 3,
    image: "src/assets/tech/javascript.png",
  },
  {
    id: 4,
    image: "src/assets/tech/bootstrap.png",
  },
  {
    id: 5,
    image: "src/assets/tech/reactjs.png",
  },
  {
    id: 6,
    image: "src/assets/tech/redux.png",
  },
  {
    id: 7,
    image: "src/assets/tech/mongodb.png",
  },
  {
    id: 8,
    image: "src/assets/tech/mysql.png",
  },
  {
    id: 9,
    image: "src/assets/tech/npm.png",
  },
  {
    id: 10,
    image: "src/assets/tech/nodejs.png",
  },
  {
    id: 11,
    image: "src/assets/tech/postman.png",
  },
  {
    id: 12,
    image: "src/assets/tech/git.png",
  },
  {
    id: 13,
    image: "src/assets/tech/netlify.png",
  },
  {
    id: 14,
    image: "src/assets/tech/render.png",
  },
  {
    id: 15,
    image: "src/assets/tech/Express.png",
  },
  {
    id: 16,
    image: "src/assets/tech/Node-mailer2.png",
  },
  {
    id: 17,
    image: "src/assets/tech/Jwt.png",
  },
  {
    id: 18,
    image: "src/assets/tech/Aws.png",
  },
  {
    id: 19,
    image: "src/assets/tech/Ms-office.png",
  },
  {
    id: 20,
    image: "src/assets/tech/c.png",
  },
  {
    id: 21,
    image: "src/assets/tech/c++.png",
  },
];

const Skills = () => {
  return (
    <div className="lg:mx-10 mx-4 py-12 " id="skills">
      <div className="mb-10">
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          My Skills
        </h2>
        <br />
        <p className="text-xl text-headingcolor font-semibold mb-5">
          My Expertise
        </p>
      </div>

      {/* skill card */}
      <div className=" grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="bg-bgShade p-2 rounded-lg cursor-pointer hover:-translate-y-5 transition-all duration-300"
          >
            <img
              src={skill.image}
              alt=""
              className="w-20 h-21 rounded-lg shadow-md mb-1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
