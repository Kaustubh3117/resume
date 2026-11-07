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
                      <h3><Editable>Senior Product Designer</Editable></h3>
                      <p className="company"><Editable>Northstar Studio</Editable><span> · </span><Editable>New York, NY</Editable></p>
                    </div>
                    <p className="date"><Editable>2021 — Present</Editable></p>
                  </div>
                  <ul>
                    <li><Editable>Led end-to-end design for a new analytics platform, growing adoption to 40k+ monthly active users.</Editable></li>
                    <li><Editable>Built a scalable design system that cut product design and engineering handoff time by 30%.</Editable></li>
                    <li><Editable>Partnered with product and research to shape roadmaps and validate ideas with customers.</Editable></li>
                  </ul>
                </div>
                <div className="experience-item">
                  <div className="role-heading">
                    <div>
                      <h3><Editable>Product Designer</Editable></h3>
                      <p className="company"><Editable>Fieldwork</Editable><span> · </span><Editable>New York, NY</Editable></p>
                    </div>
                    <p className="date"><Editable>2018 — 2021</Editable></p>
                  </div>
                  <ul>
                    <li><Editable>Designed mobile-first experiences for a suite of tools used by 12,000+ small businesses.</Editable></li>
                    <li><Editable>Improved onboarding completion by 22% through iterative testing and journey redesign.</Editable></li>
                  </ul>
                </div>
                <div className="experience-item">
                  <div className="role-heading">
                    <div>
                      <h3><Editable>Visual Designer</Editable></h3>
                      <p className="company"><Editable>Goodside Creative</Editable><span> · </span><Editable>Brooklyn, NY</Editable></p>
                    </div>
                    <p className="date"><Editable>2016 — 2018</Editable></p>
                  </div>
                  <ul>
                    <li><Editable>Created digital campaigns and brand systems for a range of early-stage and established clients.</Editable></li>
                  </ul>
                </div>
              </section>

              <section className="resume-section education-section">
                <SectionTitle>Education</SectionTitle>
                <div className="education-item">
                  <div>
                    <h3><Editable>BFA, Communication Design</Editable></h3>
                    <p className="company"><Editable>Parsons School of Design</Editable><span> · </span><Editable>New York, NY</Editable></p>
                  </div>
                  <p className="date"><Editable>2012 — 2016</Editable></p>
                </div>
              </section>

              <section className="resume-section details-section">
                <SectionTitle>Additional</SectionTitle>
                <p className="detail-line"><strong>Languages</strong><span>English (Native), Spanish (Conversational)</span></p>
                <p className="detail-line"><strong>Recognition</strong><span>Young Ones ADC Merit, Digital Product (2022); Awwwards Honorable Mention (2020)</span></p>
              </section>
            </div>

            <footer className="resume-footer">
              <span>ALEX MORGAN</span>
              <span>RESUME <span className="footer-divider">/</span> 2025</span>
            </footer>
          </article>
        </div>
        <p className="stage-note">Edits reset when you refresh this page. Export a PDF to keep your finished resume.</p>
      </section>
    </main>
  )
}

export default App
