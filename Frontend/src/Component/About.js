import React from 'react'

const About = () => {
  return (
    <>
          <div className="container-fluid p-5">
              <div className="row gx-5">
                  <div className="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: 500 }}>
                      <div className="position-relative h-100">
                          <img className="position-relative w-100 h-100 rounded" src="img/about.jpg" style={{ objectFit: 'cover' }} />
                      </div>
                  </div>
                  <div className="col-lg-7">
                      <div className="mb-4">
                          <h5 className="text-primary text-uppercase">About Us</h5>
                          <h1 className="display-3 text-uppercase mb-0">Welcome to FitFlare</h1>
                      </div>
                      <h4 className="text-body mb-4">Transform the body, transcend the limits. Embrace the burn, earn the results.Track your progress, witness your transformation.</h4>
                      <p className="mb-4">Fitness is not about being better than someone else; it's about being better than you used to be. Every heartbeat counts. Let your fitness tracker be the compass on your path to a healthier you. Make yourself proud. Every step, every beat, counts.</p>
                      <div className="rounded bg-dark p-5">
                          <ul className="nav nav-pills justify-content-between mb-3">
                              <li className="nav-item w-50">
                                  <a className="nav-link text-uppercase text-center w-100 active" data-bs-toggle="pill" href="#pills-1">About Us</a>
                              </li>
                              <li className="nav-item w-50">
                                  <a className="nav-link text-uppercase text-center w-100" data-bs-toggle="pill" href="#pills-2">Why Choose Us</a>
                              </li>
                          </ul>
                          <div className="tab-content">
                              <div className="tab-pane fade show active" id="pills-1">
                                  <p className="text-secondary mb-0">We’re more than just an app – we’re your partner in progress. At FitFlare, we believe fitness should be empowering, inclusive, and fun. With personalized workout and nutrition plans, expert guidance, and a supportive community cheering you on, we’re here to help you redefine your limits. Whether you're starting out or leveling up, we’re in this journey together. Let’s break barriers and build a stronger you!</p>
                              </div>
                              <div className="tab-pane fade" id="pills-2">
                                  <p className="text-secondary mb-0">At FitFlare, we go beyond the typical fitness app experience. You get tailored plans designed for your unique goals, constant motivation from a vibrant community, and features that grow with your progress. We don’t just help you work out – we help you stay consistent, accountable, and inspired. Choose FitFlare to feel supported, challenged, and unstoppable.</p>
                              </div>
                          </div>l
                      </div>
                  </div>
              </div>
          </div>
          {/* About End */}

    
    
    </>
  )
}

export default About
