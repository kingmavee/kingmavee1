export default function Skills() {
    return (
      <>
        <div className="container py-5">
          <h2 className="text-center mb-4">My Skills</h2>
  
          <div className="row g-4">
  
            {/* Web Development */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">💻</div>
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    I create responsive, user-friendly websites using modern tools and best practices, focusing on clean UI, smooth functionality, and great user experiences.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Football Expertise */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">⚽</div>
                  <h5 className="card-title">Football Expertise</h5>
                  <p className="card-text">
                    With years of football experience, I have strong knowledge of the game, teamwork dynamics, match strategies, and player development.
                  </p>
                </div>
              </div>
            </div>
  
            {/* Talent Scouting */}
            <div className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body text-center">
                  <div className="fs-1 mb-3">🎯</div>
                  <h5 className="card-title">Talent Scouting</h5>
                  <p className="card-text">
                    Skilled in identifying football talent, analyzing player abilities, and recognizing potential across different levels of development.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </>
    );
  }
  