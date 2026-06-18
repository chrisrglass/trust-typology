export default function Results({ submitting, error }) {
  return (
    <div className="results">
      {submitting ? (
        <div className="results-loading">
          <div className="spinner" />
          <p>Saving your responses...</p>
        </div>
      ) : error ? (
        <div className="results-error">
          <h2>Something went wrong</h2>
          <p>Your responses could not be saved at this time. Please try again later or contact the research team.</p>
          <p className="error-detail">{error}</p>
        </div>
      ) : (
        <>
          <div className="results-header">
            <div className="results-check">&#10003;</div>
            <h1>Thank you</h1>
          </div>

          <div className="results-body">
            <p>
              Your responses have been recorded. This research will be used to develop
              a typology of the distinct groups who relate to higher education with
              distinct concerns and distinct conditions for repair.
            </p>
            <p>
              Unlike a polling number, a typology names what each group actually
              wants from the institution, what they believe has gone wrong, and what
              kinds of action could plausibly rebuild their confidence. The goal is
              to give university presidents and policymakers a map, not a number.
            </p>
            <p>
              Results and analysis will be published at{' '}
              <a
                href="https://chrisglass.substack.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                chrisglass.substack.com
              </a>{' '}
              when the study is complete.
            </p>
          </div>

          <div className="results-footer">
            <p>
              Questions about this research? Contact{' '}
              <a href="mailto:crglass@bc.edu">crglass@bc.edu</a>.
            </p>
            <p className="results-attribution">
              Chris R. Glass · Boston College Lynch School of Education and Human Development
            </p>
          </div>
        </>
      )}
    </div>
  )
}
