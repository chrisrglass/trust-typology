export default function Landing({ onStart }) {
  return (
    <div className="landing">
      <header className="landing-header">
        <p className="eyebrow">Boston College · Research Instrument</p>
        <h1>The Trust Project</h1>
        <p className="subtitle">A Typology of Trust in American Higher Education</p>
      </header>

      <div className="landing-body">
        <div className="landing-description">
          <p>
            What does it mean to say Americans have "lost trust" in higher education?
            The annual surveys show a declining number. But a number doesn't tell a
            college president — or a state legislator — what has been lost, by whom, or why.
          </p>
          <p>
            This survey is designed to find out. It draws on the approach used by
            the Pew Research Center's 2026 Political Typology: instead of placing
            people on a single scale, it identifies the distinct groups who relate to
            higher education with distinct concerns, distinct values, and distinct
            conditions for repair.
          </p>
          <p>
            Trust in higher education is not one thing in decline. It is a set of
            relationships, each with its own history. This survey maps them.
          </p>
        </div>

        <div className="landing-details">
          <div className="detail-card">
            <span className="detail-number">47</span>
            <span className="detail-label">questions</span>
          </div>
          <div className="detail-card">
            <span className="detail-number">10–15</span>
            <span className="detail-label">minutes</span>
          </div>
          <div className="detail-card">
            <span className="detail-number">Research</span>
            <span className="detail-label">purpose only</span>
          </div>
        </div>

        <div className="landing-consent">
          <p>
            Your responses are collected anonymously for academic research on public
            attitudes toward higher education. No personally identifying information
            is collected. By clicking below you consent to participate.
          </p>
        </div>

        <button className="btn-primary" onClick={onStart}>
          Begin the Survey
        </button>
      </div>

      <footer className="landing-footer">
        <p>
          A research project by{' '}
          <a
            href="https://www.bc.edu/bc-web/schools/lynch-school/faculty-research/faculty/Chris-Glass.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chris R. Glass
          </a>
          , Director, Executive Doctor of Education in Higher Education,
          Boston College Lynch School of Education and Human Development.
        </p>
      </footer>
    </div>
  )
}
