const Footer = () => {
  return (
    <div className="bg-bgShade py-32 px-10" id="contact">
      <div className="mb-20 text-center">
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          Contact me
        </h2>
      </div>
      <div className="mb-5 text-center">
        <button
          className="btn btn-primary font-semibold cursor-pointer
            hover:-translate-y-5 transition-all duration-300"
          id="homebtn"
          style={{ width: "400px" }}
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
              class="fa fa-linkedin-square fa-2x ml-20 hover:-translate-y-3 transition-all duration-300 text-xl"
              aria-hidden="true"
              style={{ padding: "20px" }}
            ></i>
          </a>
          <a href="mailto:sasirdevi@gmail.com" target="blank">
            {" "}
            <i
              class="fa fa-envelope fa-2x ml-20 hover:-translate-y-3 transition-all duration-300 text-xl"
              aria-hidden="true"
            >
              {" "}
            </i>
          </a>
        </button>
      </div>

      <hr />
      <br></br>
      <div className="ml-4 flex flex-col md:flex-row justify-between gap-8">
        <p>Made with 💖 by Sasi</p>
        <div>
          <a href="/" className=" hover:text-slate-500">
            Copyright &copy; 2023 - Sasidevi
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
