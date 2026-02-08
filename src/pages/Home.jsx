import "./Home.css";
import logo from "../assets/mjk-logo.png"; // your actual logo file

function Home() {
  return (
    <div className="home-hero">

      {/* LEFT SIDE — TEXT CONTENT */}
      <div className="hero-left">
        <h1 className="home-title">Mohd Javed Khan</h1>

        <p className="home-subtitle">
          Experienced Healthcare IT Professional (15+ years), currently pursuing
          Digital Health Engineering Technology to deepen my expertise and expand
          my impact in the evolving digital health landscape.
        </p>

        <p className="home-tagline">
          Building, learning, and improving — one project at a time.
        </p>

        <p className="home-tagline">
          Every step forward is a commitment to becoming better than yesterday.
        </p>

        <a href="/projects" className="home-button">View My Projects</a>
      </div>

      {/* RIGHT SIDE — LOGO IMAGE */}
      <div className="hero-right">
        <div className="hero-illustration">
          <img
            src={logo}
            alt="MJK Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              borderRadius: "10px"
            }}
          />
        </div>
      </div>

    </div>
  );
}

export default Home;