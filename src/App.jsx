import './index.css'

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.75v9m0 0 3.25-3.25M10 11.75 6.75 8.5M3.5 13.25v2A1.75 1.75 0 0 0 5.25 17h9.5a1.75 1.75 0 0 0 1.75-1.75v-2" />
    </svg>
  )
}

function PencilIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m12.2 4.3 3.5 3.5M3.5 16.5l3.65-.85 9.2-9.2a1.55 1.55 0 0 0-2.2-2.2l-9.2 9.2-.85 3.05Z" />
    </svg>
  )
}

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>
}

function Editable({ children, className = '' }) {
  return (
    <span
      className={`editable ${className}`}
      contentEditable
      suppressContentEditableWarning
      spellCheck="false"
    >
      {children}
    </span>
  )
}

function App() {
  function exportPdf() {
    window.print()
  }

  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" aria-label="Forma resume home">
          <span className="brand-mark">f.</span>
          <span>forma<span className="brand-light">/resume</span></span>
        </a>
        <div className="topbar-right">
          <span className="save-status"><span className="status-dot" /> Ready to edit</span>
          <button className="export-button" onClick={exportPdf} type="button">
            <DownloadIcon />
            Export PDF
          </button>
        </div>
      </header>

      <section className="workspace">
        <div className="page-heading">
          <div>
            <div className="eyebrow">YOUR DOCUMENT <span>·</span> 01</div>
            <h1>Resume <span className="heading-muted">/</span> <Editable className="document-name">Untitled</Editable></h1>
          </div>
          <div className="edit-hint"><PencilIcon /> Click any text to edit</div>
        </div>

        <div className="resume-stage">
          <article className="resume-page" aria-label="Editable resume preview">
            <header className="resume-header">
              <div className="resume-name-block">
                <h2 className="person-name"><Editable>Kaustubh Patil</Editable></h2>
                <p className="person-title"><Editable>Software Engineer | Full-Stack Developer</Editable></p>
              </div>
              <div className="contact-list">
                <p><Editable>kaustubh3117@gmail.com</Editable></p>
                <p><Editable>+91 8830230003</Editable></p>
                <p><Editable>Pune, Maharashtra</Editable></p>
                <p><Editable>https://www.linkedin.com/in/kaustubh-patil-63b106108/</Editable></p>
              </div>
            </header>

            <section className="summary-section">
              <SectionTitle>Profile</SectionTitle>
              <p className="summary-copy">
                <Editable>
                  Software Engineer with 5+ years of experience engineering scalable web applications and AI-driven automation. Hands-on expertise in React, TypeScript, Node.js, Python, and Azure DevOps, paired with cutting-edge integration of Agentic AI, MCP, and LLM-assisted workflows across the entire SDLC.
                </Editable>
              </p>
            </section>

            <div className="resume-content">
              <section className="resume-section skills-section">
                <SectionTitle>Skills</SectionTitle>
                <ul className="skill-list">
                  <li><Editable>JavaScript (ES6+)</Editable></li>
                  <li><Editable>TypeScript</Editable></li>
                  <li><Editable>React</Editable></li>
                  <li><Editable>Redux</Editable></li>
                  <li><Editable>Redux-Saga</Editable></li>
                  <li><Editable>HTML5</Editable></li>
                  <li><Editable>CSS3</Editable></li>
                  <li><Editable>Node.js</Editable></li>
                  <li><Editable>Express</Editable></li>
                  <li><Editable>Python</Editable></li>
                  <li><Editable>Flask</Editable></li>
                  <li><Editable>FastAPI</Editable></li>
                  <li><Editable>SQL</Editable></li>
                  <li><Editable>Azure DevOps</Editable></li>
                  <li><Editable>CI/CD</Editable></li>
                  <li><Editable>Git</Editable></li>
                  <li><Editable>Agile / Scrum</Editable></li>
                  <li><Editable>Agentic AI</Editable></li>
                  <li><Editable>Multi-agent AI Systems</Editable></li>
                  <li><Editable>Agent Orchestration</Editable></li>
                  <li><Editable>LLMs</Editable></li>
                  <li><Editable>Prompt Engineering</Editable></li>
                  <li><Editable>MCP (Model Context Protocol)</Editable></li>
                  <li><Editable>GitHub Copilot</Editable></li>
                  <li><Editable>AI-assisted Development</Editable></li>
                </ul>
              </section>

              <section className="resume-section experience-section">
                <SectionTitle>Experience</SectionTitle>
                <div className="experience-item">
                  <div className="role-heading">
                    <div>
                      <h3><Editable>Software Engineer</Editable></h3>
                      <p className="company"><Editable>Tech Mahindra</Editable><span> · </span><Editable>Pune, India</Editable></p>
                    </div>
                    <p className="date"><Editable>Jul 2021 — Present</Editable></p>
                  </div>
                  <ul>
                    <li><Editable>Designed and implemented an AI-assisted, multi-agent workflow for the Dispatch Management System, using specialized coding, design, testing, and QA agents with GitHub Copilot Auto, MCP, and prompt engineering to support development, review, and validation.</Editable></li>
                    <li><Editable>Architected scalable project structures across three major projects, improving maintainability and supporting evolving business requirements.</Editable></li>
                    <li><Editable>Improved application performance using code splitting, caching, and database indexing to reduce page load times.</Editable></li>
                    <li><Editable>Built and deployed web applications through Azure DevOps CI/CD pipelines, following Agile and Scrum practices to support reliable releases.</Editable></li>
                    <li><Editable>Resolved critical workflow issues and collaborated with cross-functional teams to improve operational efficiency and deliver high-priority projects on time.</Editable></li>
                  </ul>
                </div>
                <div className="experience-item">
                  <div className="role-heading">
                    <div>
                      <h3><Editable>Associate Software Engineer</Editable></h3>
                      <p className="company"><Editable>Netfotech Solutions</Editable><span> · </span><Editable>Pune, India</Editable></p>
                    </div>
                    <p className="date"><Editable>Feb 2021 — Jun 2021</Editable></p>
                  </div>
                  <ul>
                    <li><Editable>Contributed to full-stack development of healthcare management software using JavaScript, React, Python, Django REST, and SQL.</Editable></li>
                    <li><Editable>Resolved defects and validated responsive, cross-browser behavior using software quality assurance practices.</Editable></li>
                  </ul>
                </div>
              </section>

              <section className="resume-section projects-section">
                <SectionTitle>Projects</SectionTitle>
                <div className="experience-item">
                  <div className="role-heading">
                    <div>
                      <h3><Editable>Dispatch Management System</Editable></h3>
                      <p className="company"><Editable>Tech Mahindra</Editable><span> · </span><Editable>Field Operations Platform</Editable></p>
                    </div>
                    <p className="date"><Editable>Jul 2021 — Present</Editable></p>
                  </div>
                  <ul>
                    <li><Editable>Developed dispatch capabilities for technician allocation, task assignment and reassignment, workforce coordination, and real-time field operations.</Editable></li>
                    <li><Editable>Built reporting dashboards and real-time tracking to help supervisors monitor technician progress, task completion, and SLA adherence.</Editable></li>
                    <li><Editable>Modernized the full-stack application using React, Node.js, Python, Redux, and Redux-Saga; introduced functional components and code splitting to improve maintainability and application performance.</Editable></li>
                    <li><Editable>Standardized project structure and UI patterns and refined error handling to improve maintainability and deliver a more consistent user experience.</Editable></li>
                    <li><Editable>Supported reliable releases through Azure DevOps CI/CD workflows and Agile/Scrum delivery practices.</Editable></li>
                  </ul>
                </div>
                <div className="experience-item">
                  <div className="role-heading">
                    <div>
                      <h3><Editable>Healthcare Management System</Editable></h3>
                      <p className="company"><Editable>Netfotech Solutions</Editable><span> · </span><Editable>Full-Stack Web Application</Editable></p>
                    </div>
                    <p className="date"><Editable>Feb 2021 — Jun 2021</Editable></p>
                  </div>
                  <ul>
                    <li><Editable>Developed healthcare workflows for appointment discovery and booking, video consultations, and management of patient, doctor, nurse, laboratory, and inpatient/outpatient information.</Editable></li>
                    <li><Editable>Automated hospital administration workflows, including employee records, salary information, and daily, monthly, and yearly reports.</Editable></li>
                    <li><Editable>Built responsive user interfaces with React and Redux and full-stack features using JavaScript, Python, Django REST, SQL, HTML, and CSS.</Editable></li>
                  </ul>
                </div>
                <div className="experience-item">
                  <div className="role-heading">
                    <div>
                      <h3><Editable>Reservation Management System</Editable></h3>
                      <p className="company"><Editable>Personal Project</Editable></p>
                    </div>
                    <p className="date"><Editable>Feb 2019 — Nov 2020</Editable></p>
                  </div>
                  <ul>
                    <li><Editable>Built a bus seat reservation application for schedule selection, seat availability, ticket booking, and payment details.</Editable></li>
                    <li><Editable>Implemented role-based workflows for users, agents, and administrators, including administrator approval for agents and controls for schedules, bookings, and system access.</Editable></li>
                    <li><Editable>Developed responsive web features using JavaScript, React, Redux, Python, Django REST, PrimeReact, HTML, CSS, and SQL.</Editable></li>
                  </ul>
                </div>
              </section>

              <section className="resume-section education-section">
                <SectionTitle>Education</SectionTitle>
                <div className="education-item">
                  <div>
                    <h3><Editable>Master in Computer Application</Editable></h3>
                    <p className="company"><Editable>Shivaji University</Editable><span> · </span><Editable>Kolhapur</Editable></p>
                    <p className="company"><Editable>Grade: A+</Editable></p>
                  </div>
                  <p className="date"><Editable>Jun 2017 — Mar 2020</Editable></p>
                </div>
                <div className="education-item">
                  <div>
                    <h3><Editable>Bachelor of Science</Editable></h3>
                    <p className="company"><Editable>Yashwantrao Chavan College of Science</Editable><span> · </span><Editable>Karad</Editable></p>
                    <p className="company"><Editable>Grade: A</Editable></p>
                  </div>
                  <p className="date"><Editable>Jun 2014 — Mar 2017</Editable></p>
                </div>
              </section>

              <section className="resume-section details-section">
                <SectionTitle>Additional</SectionTitle>
                <p className="detail-line"><strong>Languages</strong><span>English (Native), Spanish (Conversational)</span></p>
                <p className="detail-line"><strong>Recognition</strong><span>Young Ones ADC Merit, Digital Product (2022); Awwwards Honorable Mention (2020)</span></p>
              </section>
            </div>

            <footer className="resume-footer">
              <span>KAUSTUBH PATIL</span>
              <span>RESUME <span className="footer-divider">/</span> 2026</span>
            </footer>
          </article>
        </div>
        <p className="stage-note">Edits reset when you refresh this page. Export a PDF to keep your finished resume.</p>
      </section>
    </main>
  )
}

export default App
