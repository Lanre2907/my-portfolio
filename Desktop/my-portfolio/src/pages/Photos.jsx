export default function Photos() {
  return (
    <div className="section">
      <h3>Photos</h3>
      <p>
        A few moments from my professional journey — work, learning, and growth
        as a data engineer.
      </p>

      {/* Profile */}
      <div className="profile-photo">
        <img src="/photos/profile.jpg" alt="Lukman Agbetu" />
        <p>Lukman Agbetu — Data Engineer</p>
      </div>

      {/* Gallery */}
      <div className="photo-grid">
        <div className="photo-card">
          <img src="/photos/conference.jpg" alt="Tech Conference" />
          <span>Tech Conference / Meetup</span>
        </div>

        <div className="photo-card">
          <img src="/photos/work.jpg" alt="Working on data projects" />
          <span>Working on Data Projects</span>
        </div>

        <div className="photo-card">
          <img src="/photos/graduation.jpg" alt="Graduation" />
          <span>Academic Milestone</span>
        </div>
      </div>
    </div>
  );
}
