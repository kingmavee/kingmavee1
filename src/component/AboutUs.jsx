export default function AboutUs() {
  return (
    <>
      <div className="sectionTitle d-flex flex-row text-light">

        <h4>About Me</h4>
      </div>
      <div className="row justify-content-center align-items-center text-light">
        <div className="col-lg-7 mt-4">
          <p className="fs-5">
            With a strong passion for football and technology, I specialize in providing professional football scouting assistance and innovative web development solutions.
            I help identify talented players, analyze performance data, and create digital tools that support clubs, coaches, and scouts in making informed decisions.
          </p>
          <p className="fs-5 text">
            Combining my technical skills with a deep understanding of the game, I aim to bridge the gap between sports and technology—delivering modern, data-driven results both on and off the field.
          </p>
          <a
            href="/contact"
            className=" btn btn-lg text-uppercase rounded-0 bi bi-check bg-primary rounded-3 scrollto d-inline-flex align-items-center justify-content-center align-self-center"
          >
            more info

          </a>
        </div>
        <div className="col-lg-5">
          <img src="/mavee.jpg" className="img-fluid rounded" />
        </div>
      </div>
    </>
  );
}
