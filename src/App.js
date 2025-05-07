import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <header className="header">
          <a href="#" className="logo">
            Portfolio
          </a>

          <nav className="navbar">
            <a href="#home" className="active">
              Home
            </a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="bx bx-moon" id="darkMode-icon"></div>

          <div className="bx bx-menu" id="menu-icon"></div>
        </header>
      </div>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, I am</h3>
          <h1>Garima</h1>
          <p>
            Hi! I'm a passionate Frontend Developer with a strong interest in
            building responsive, user-friendly web interfaces. With a background
            in Electrical Engineering and a recent transition into tech, I’ve
            dedicated the last year to mastering modern frontend technologies
            through hands-on projects and structured learning. I specialize in
            HTML, CSS, JavaScript, and React.js, and have experience working
            with tools like Redux, Tailwind CSS, Material UI, and API
            integration. I enjoy transforming designs into functional,
            accessible, and engaging user experiences. I’m actively seeking
            opportunities to grow as a frontend developer where I can contribute
            to real-world projects, collaborate with talented teams, and
            continue learning in a fast-paced environment.
          </p>

          <div className="social-media">
            <a href="mail to:dixitgarima24@gmail.com" target="_blank">
              <i className="bx bx-envelope"></i>
            </a>
            <a href="tel:+91 7800808480" target="_blank">
              <i className="bx  bx-phone"></i>
            </a>
            <a href="https://github.com/garimas24" target="_blank">
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/garima-dixit-38601a179/"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>

          <a
            href="https://drive.google.com/file/d/1VJim_hWSKuTKWwtaKP_7ONmVd8JUfhgs/view?usp=drive_link"
            target="_blank"
            className="btn"
          >
            Download CV
          </a>
        </div>

        <div className="profession-container">
          <div className="profession-box">
            <div className="profession" style={{ "--i": 0 }}>
              <i className="bx bx-code-alt"></i>
              <h3>Web Developer</h3>
            </div>
            <div className="profession" style={{ "--i": 1 }}>
              <i className="bx bx-user"></i>
              <h3>Freelancer</h3>
            </div>
            <div className="profession" style={{ "--i": 2 }}>
              <i className="bx bx-palette"></i>
              <h3>UX/UI Designer</h3>
            </div>
            <div className="circle"></div>
          </div>

          <div className="overlay"></div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <h3>
            I'm a freelance web developer with a passion for crafting intuitive
            and dynamic digital experiences. With a solid foundation in
            full-stack development, honed through completing a comprehensive{" "}
            <span>Java Full Stack</span> course at <span>Crio.Do</span>,
          </h3>
          <p>
            I specialize in building responsive websites and web applications
            using HTML, CSS, JavaScript, Bootstrap, React, Node.js, Express.js,
            and MongoDB.
          </p>
          <p>
            I'm currently seeking a full-time opportunity where I can leverage
            my expertise in web development to contribute to innovative
            projects, collaborate with talented teams, and make a meaningful
            impact in the digital landscape.
          </p>
          <a href="#" className="btn">
            Know More
          </a>
        </div>
      </section>
      <section className="services" id="services">
        <h2 className="heading">
          My<span>Services</span>
        </h2>

        <div className="services-container">
          <div className="services-box">
            <i className="bx bx-code-alt"></i>
            <h3>Web Development</h3>
            <p>
              I specialize in crafting dynamic websites and web applications
              using a range of technologies like HTML, CSS, JavaScript,
              Bootstrap, React, Node.js, Express.js, and MongoDB.{" "}
            </p>
            <a href="#portfolio" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bxs-paint"></i>
            <h3>UX/UI Designing</h3>
            <p>
              I specialize in creating beautiful and user-friendly interfaces.
              From wireframes to final designs, I ensure every detail enhances
              the user experience. digital presence{" "}
            </p>
            <a href="#portfolio" className="btn">
              Read More
            </a>
          </div>
          <div className="services-box">
            <i className="bx bx-user"></i>
            <h3>freelance</h3>
            <p>
              I'm a freelance web developer specializing in responsive websites
              and apps. With UX/UI design services, I ensure your digital
              presence stands out
            </p>
            <a href="#portfolio" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          Latest <span>Project</span>
        </h2>

        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src="images/qtdynamic.png" alt="qtrip" />

            <div className="portfolio-layer">
              <h4>QTripDynamic</h4>
              <p>
                QTrip is a travel website aimed at travellers looking for a
                multitude of adventures in different cities.{" "}
              </p>

              <a href="https://qtripdynamic-chi.vercel.app/" target="_blank">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src="images/qkartbackend.png" alt="" />

            <div className="portfolio-layer">
              <h4>QKart Backend</h4>
              <p>
                QKart is an E-commerce application offering a variety of
                products for customers to choose from.
              </p>
              <a
                href="https://glittery-chimera-fb9481.netlify.app"
                target="_blank"
              >
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src="images/xboard.png" alt="" />

            <div className="portfolio-layer">
              <h4>X Board</h4>
              <p>
                XBoard is a News Feed website that will feature the latest news
                for select topics, from Flipboard.
              </p>
              <a
                href="https://zippy-marzipan-cef2cc.netlify.app"
                target="_blank"
              >
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src="images/front.png" alt="" />

            <div className="portfolio-layer">
              <h4>QKart Frontend</h4>
              <p>
                QKart is an e-commerce application offering a variety of
                products for customers to choose from.
              </p>
              <a href="https://dixitgarima24-me-qkart-frontend-v2.vercel.app/">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src="images/static.png" alt="" />

            <div className="portfolio-layer">
              <h4>QTripStatic</h4>
              <p>
                QTrip is a travel website aimed at travellers looking for a
                multitude of adventures in different cities.
              </p>
              <a href="https://qtrip-static-theta.vercel.app/" target="_blank">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src="images/com.png" alt="" />

            <div className="portfolio-layer">
              <h4>Skills</h4>
              <p>
                With expertise in HTML, CSS, JavaScript, Bootstrap, React, Git,
                Linux, Node.js, MongoDB, Express.js, and a strong foundation in
                data structures and algorithms, I'm ready to build cutting-edge
                solutions that drive success.
              </p>
              <a href="#">
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <h2 class="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="contact.php" method="POST">
          <div class="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
          </div>
          <div class="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
          ></textarea>
          <input type="submit" value="Send Message" class="btn" />
        </form>
      </section>

      <footer class="footer">
        <div class="footer-text">
          <p>Copyright &copy; 2023 | All Rights Reserved.</p>
        </div>

        <div class="footer-iconTop">
          <a href="#home">
            <i class="bx bx-up-arrow-alt"></i>
          </a>
        </div>
      </footer>

      <script src="https://unpkg.com/scrollreveal"></script>

      {/* swiper js */}
      <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>

      {/* custom js */}
      <script src="js/script.js"></script>
    </div>
  );
}

export default App;
