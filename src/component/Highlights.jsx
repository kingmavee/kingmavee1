"use client"
import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "Professional Football Scouting Assistance",
    description:
      "I help clubs and agents identify and evaluate talented players through detailed scouting reports, performance analysis, and modern digital tools designed to make talent discovery more efficient and accurate.",
    media: "/mavee1.jpeg",
    type: "image",
  },
  {
    id: 2,
    title: "Player Evaluation and Talent Profiling",
    description:
      "I provide expert insights and create customized player profiles that include strengths, weaknesses, and potential career trajectories to assist clubs and scouts.",
    media: "/mavee2.jpeg",
    type: "image",
  },
  {
    id: 3,
    title: "Football Video Analysis & Scouting Reports",
    description:
      "Leveraging video tools, I perform in-depth analysis on player and team performance to highlight key metrics and tactical intelligence.",
    media: "/mavee3.mp4",
    type: "video",
  },
  {
    id: 4,
    title: "Scouting Consultation and Strategic Advice",
    description:
      "I work closely with agents and clubs to improve their scouting processes and use of data analytics in player recruitment.",
    media: "/mavee4.jpeg",
    type: "image",
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="row justify-content-center align-items-center text-light">
      {services.map((service) => (
        <div key={service.id} className="col-lg-3 col-12 col-md-4">
          <div className="card rounded-0 shadow my-4 rounded-4">
            {service.type === "image" ? (
              <img src={service.media} className="card-img-top p-3" alt={service.title} />
            ) : (
              <video className="card-img-top p-3" controls>
                <source src={service.media} type="video/mp4" />
              </video>
            )}
            <div className="card-body">
              <h5 className="fw-bold my-3">{service.title}</h5>
              <p className="text-truncate">{service.description}</p>
              <button
                className="btn btn-lg text-uppercase text-light bg-primary rounded-3 d-inline-flex align-items-center justify-content-center"
                onClick={() => setSelectedService(service)}
              >
                More Details
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedService && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.8)" }}
          tabIndex="-1"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()} // prevent modal close when clicking inside
          >
            <div className="modal-content bg-dark text-light">
              <div className="modal-header border-0">
                <h5 className="modal-title">{selectedService.title}</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedService(null)}
                ></button>
              </div>
              <div className="modal-body text-center">
                {selectedService.type === "image" ? (
                  <img
                    src={selectedService.media}
                    className="img-fluid rounded mb-3"
                    alt={selectedService.title}
                  />
                ) : (
                  <video
                    src={selectedService.media}
                    className="img-fluid rounded mb-3"
                    controls
                    autoPlay
                  />
                )}
                <p>{selectedService.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
