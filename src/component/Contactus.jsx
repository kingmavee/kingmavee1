export default function ContactUs() {
    return (
      <>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-6">
              
              <div className="card shadow-sm border-0">
                <div className="card-body p-4">
                  <h3 className="text-center mb-4">Contact Us</h3>
  
                  <form>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" placeholder="Enter your name" required />
                    </div>
  
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" placeholder="Enter your email" required />
                    </div>
  
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea className="form-control" rows="4" placeholder="Write your message" required></textarea>
                    </div>
  
                    <button type="submit" className="btn btn-primary w-100">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </>
    );
  }
  