// pages/index.js (Example)
import Image from "next/image";
import colors from "../styles/color.ts";          // Your color object
import { Poppins, Oswald } from "next/font/google";
import styles from "../styles/home/home.module.css"; // Import the CSS module
import "../styles/globals.css";                // Global resets or variables

// Remove bootstrap import
// import 'bootstrap/dist/css/bootstrap.min.css';

// Configure fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-poppins",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-oswald",
});

export default function Home() {
  return (
    <div
      className={`${poppins.variable} ${oswald.variable} ${styles.container}`}
      style={{ 
        backgroundColor: colors.background, 
        color: colors.text 
      }}
    >
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle} 
            // style={{ border-bottom-color: colors.accent}}
        >
          Ashwin Kumar Uma Sankar
        </h1>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a 
                href="#" 
                className={styles.navLink} 
                style={{ color: colors.text }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                className={styles.navLink}
                style={{ color: colors.text }}
              >
                About Me
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={styles.navLink}
                style={{ color: colors.text }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className={styles.paddingGapper2}>              
      </section>

      {/* Main Hero Section */}
      <main className={styles.hero}>
        <section className={styles.heroRow}>
          {/* Left Content */}
          <div className={styles.heroLeft}>
            <h2 
              className={styles.heroTitle} 
              >
              <span style={{ color: colors.accent }}>
              SOFTWARE
            </span> <br />
              <span style={{ color: colors.primary }}>
                DEVELOPER
              </span>
            </h2>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
              <button
                className={styles.btnPrimary}
                style={{
                  backgroundColor: colors.primary,
                  color: colors.text,
                }}
              >
                Hire me
              </button>
              <button
                className={styles.btnSecondary}
                style={{
                  backgroundColor: colors.dark_accent,
                  color: colors.accent,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Download CV
                <span style={{ marginLeft: "0.5rem" }}>⬇</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/assets/itachi-hero.png"
              alt="Developer Illustration"
              width={384}
              height={450}
            />
            <div className={styles.doodles}>
              <Image
                src="/assets/doodlesHero.svg"
                alt="Background Doodles"
                width={300}
                height={300}
              />
            </div>
          </div>
      
      <div className={styles.scrollArrowWrapper}>
      <a href="#about" className={styles.scrollArrow}>
        <span>⬇</span>
      </a>
      </div>
      
        </section>

        <section className={styles.paddingGapper1}>              
        </section>

        {/* About Me Section */}
        <section
  id="about"
  className={styles.aboutSection}
>
  <div className={styles.aboutContent}>
    {/* Text Content */}
    <div className={styles.aboutText}>
      <h3 className={styles.aboutTitle}>
        About <span style={{ color: colors.primary }}>me</span>
      </h3>
      <p className={styles.aboutParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
      </p>
    </div>

    {/* Image Content */}
    <div className={styles.aboutImageWrapper}>
      <Image
        src="/assets/itachi-laptop.png"
        alt="About Me Illustration"
        width={475}
        height={468}
        className={styles.aboutImage}
      />
    </div>
  </div>
</section>

{/* Projects Section */}
<section id="projects" className={styles.projectsSection}>
  <h2 className={styles.projectsTitle}>Projects</h2>
  <p className={styles.projectsSubtitle}>
    Check out more amazing projects on my{" "}
    <a href="https://github.com/your-profile" className={styles.projectsLink}>
      GitHub
    </a>
  </p>

  {/* Project Card */}
  <div className={styles.projectCard}>
    <div className={styles.projectInfo}>
      <h3 className={styles.projectName}>Virtual Sync</h3>
      <p className={styles.projectDate}>May 2023</p>
      <p className={styles.projectDescription}>
        Developed an AI-powered smart classroom application with functionalities including Air Canvas for real-time screen annotation using computer vision techniques. Implemented color detection and tracking methods for enhanced accuracy and efficiency. Integrated voice recognition for downloading captions and saving notes, along with a tracker to monitor student engagement during live lectures.
      </p>
      <div className={styles.projectTags}>
        <span>OpenCV</span>
        <span>ReactJS</span>
        <span>NodeJS</span>
        <span>WebSpeech API</span>
        <span>CanvasJS</span>
        <span>MongoDB</span>
      </div>
      <div className={styles.projectLinks}>
        <a href="https://live-demo-link" className={styles.btnPrimary}>
          Live Demo
        </a>
        <a href="https://github.com/project-repo" className={styles.btnSecondary}>
          GitHub
        </a>
      </div>
    </div>
    <div className={styles.projectImageWrapper}>
      <Image
        src="/assets/virtualsync.png"
        alt="Virtual Sync Project"
        width={500}
        height={300}
        className={styles.projectImage}
      />
    </div>
  </div>
</section>



        {/* Contact Section */}
        <section
          id="contact"
          className={styles.contactSection}
        >
          <h3 className={styles.contactTitle}>
            Got a project in{" "}
            <span style={{ color: colors.primary }}>mind?</span>
          </h3>

          <form className={styles.contactForm}>
            <div className={`${styles.inputRow}`}>
              <input
                type="text"
                placeholder="Your name"
                className={styles.inputField}
                style={{
                  backgroundColor: colors.secondary,
                  color: colors.text,
                }}
              />
              <input
                type="email"
                placeholder="Your email"
                className={styles.inputField}
                style={{
                  backgroundColor: colors.secondary,
                  color: colors.text,
                }}
              />
            </div>
            <textarea
              placeholder="Your Message"
              className={styles.inputField}
              style={{
                backgroundColor: colors.secondary,
                color: colors.text,
                height: "150px",
              }}
            ></textarea>
            <button
              className={styles.btnPrimary}
              style={{
                backgroundColor: colors.primary,
                color: colors.text,
                margin: "0 auto",
                display: "block",
              }}
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer
        className={styles.footer}
        style={{ backgroundColor: colors.secondary }}
      >
        <nav>
          <ul className={styles.footerNav}>
            <li>
              <a
                href="#"
                className={styles.footerLink}
                style={{ color: colors.text }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={styles.footerLink}
                style={{ color: colors.text }}
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={styles.footerLink}
                style={{ color: colors.text }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className={styles.footerPolicies}>
          <a
            href="#"
            className={styles.footerLink}
            style={{ color: colors.text }}
          >
            Terms of Service
          </a>
          <a
            href="#"
            className={styles.footerLink}
            style={{ color: colors.text }}
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}
