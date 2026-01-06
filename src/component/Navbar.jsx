"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const ADMIN_PASSWORD = "Agbala2000$"; // 🔐 change this
  const [error, setError] = useState("");

  const handleAdminLogin = () => {
    const password = prompt("Enter admin password");
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem("isAdmin", "true"); // store login state
      router.push("/messages"); // redirect
      setError("");
    } else {
      setError("Incorrect password");
    }
  };

  return (
    <nav className="navbar navbar-expand-md shadow-sm py-1">
      <div className="container">
        <img
          src="/mavee.jpg"
          className="rounded-2"
          width={30}
          height={30}
          alt=""
        />
        <a href="/" className="navbar-brand fw-bolder text-uppercase">
          Kingmavee
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/about" className="nav-link fw-bold">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/skills" className="nav-link fw-bold">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="/highlights" className="nav-link fw-bold">
                Highlights
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link fw-bold">
                Contact
              </a>
            </li>

            {/* Admin Login Button */}
            <li className="nav-item">
              <button
                className="btn btn-lg tex btn-dark"
                onClick={handleAdminLogin}
              >
                Admin Login
              </button>
            </li>
          </ul>

          {/* Error message */}
          {error && (
            <small className="text-danger ms-3 d-none d-md-inline">
              {error}
            </small>
          )}
        </div>
      </div>
    </nav>
  );
}
