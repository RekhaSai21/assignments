import React, { Component } from "react";

const companyName = "TechNova Solutions";
const heroTitle = "Build Your Future With React";
const services = ["Web Development", "UI/UX", "Cloud", "Mobile Apps"];

class Navbar extends Component {
  render() {
    return (
      <nav className="company-navbar" aria-label="Main navigation">
        <a href="#home" className="company-navbar__brand">
          {companyName}
        </a>
        <a href="#services">Services</a>
      </nav>
    );
  }
}

class Hero extends Component {
  render() {
    return (
      <section
        id="home"
        className="company-hero"
        style={{
          backgroundColor: "#14213d",
          color: "#ffffff",
          padding: "64px 24px",
          textAlign: "center",
        }}
      >
        <h1>{heroTitle}</h1>
        <p>We create modern digital experiences for growing businesses.</p>
      </section>
    );
  }
}

class Services extends Component {
  render() {
    return (
      <section id="services" className="company-services">
        <h2>Our Services</h2>
        <ul>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="company-footer">
        <p>&copy; 2026 {companyName}</p>
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="company-site">
        <Navbar />
        <main>
          <Hero />
          <Services />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
