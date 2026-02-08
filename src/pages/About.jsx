import "./About.css";
import myPhoto from "../assets/JVDpic.jpeg";

function About() {
  return (
    <div className="about-container">
      
      {/* LEFT SIDE — IMAGE */}
      <div className="about-left">
        <img src={myPhoto} alt="Mohd Javed Khan" className="about-photo" />
      </div>

      {/* RIGHT SIDE — TEXT CONTENT */}
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <h2 className="about-name">Mohd Javed Khan</h2>

        {/* SECTION: PROFESSIONAL SUMMARY */}
        <h3 className="about-section-title">Professional Summary</h3>
        <p className="about-description">
          I am an IT professional with 17 years of experience managing IT service desks,
          optimizing service levels, and ensuring seamless operations in fast-paced,
          mission-critical environments. My expertise spans ITIL-based service management,
          team supervision, preventive maintenance planning, and driving operational
          efficiency across diverse technology landscapes.
        </p>

        <div className="about-divider"></div>

        {/* SECTION: INFRASTRUCTURE & SERVICE MANAGEMENT */}
        <h3 className="about-section-title">IT Infrastructure & Service Management</h3>
        <p className="about-description">
          Throughout my career in Saudi Arabia, I have managed enterprise IT infrastructure
          including networks, desktop systems, printers, CCTV, public-address systems,
          access control, and communication platforms. I specialize in ensuring that all IT
          requests, service tickets, and incident cases meet SLA standards using Assyst ITSM,
          minimizing disruptions and maintaining high service reliability.
        </p>

        <div className="about-divider"></div>

        {/* SECTION: HEALTHCARE EXPERIENCE */}
        <h3 className="about-section-title">Healthcare Sector Experience</h3>
        <p className="about-description">
          I have played a key role in accreditation readiness and compliance, supporting
          institutions in achieving CBAHI, JCIA, AABB, CHI, and other regulatory standards.
          I have also contributed to IT commissioning for major healthcare projects under
          the Dr. Sulaiman Al Habib Medical Group in Saudi Arabia, including Rayan Hospital,
          Takhassusi Hospital, Suwaidi, Khobar, and Sahafa Hospital.
        </p>

        <div className="about-divider"></div>

        {/* SECTION: CERTIFICATIONS */}
        <h3 className="about-section-title">Certifications</h3>
        <p className="about-description">
          I hold multiple industry-recognized certifications—ITIL, CCNA, CCNP, and MCP—which
          strengthen my capabilities in IT service management, networking, and enterprise
          infrastructure. These credentials reflect my commitment to building robust,
          scalable, and secure IT environments aligned with organizational goals.
        </p>

        <div className="about-divider"></div>

        {/* SECTION: CURRENT STUDIES */}
        <h3 className="about-section-title">Current Studies</h3>
        <p className="about-description">
          I am currently pursuing the Digital Health Engineering Technology program at
          Centennial College in Toronto, expanding my technical foundation to support the
          evolving digital health ecosystem. I am passionate about service improvement,
          customer satisfaction, and implementing strategic technology solutions that
          enhance efficiency, governance, and reliability.
        </p>

        <a href="/resume.pdf" className="about-resume" target="_blank">
          Download My Resume (PDF)
        </a>
      </div>
    </div>
  );
}

export default About;