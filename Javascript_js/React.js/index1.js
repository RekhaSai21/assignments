import React from "react";

const name = "Sai Balaji";
const age = 23;
const course = "React JS";
const batch = "MERN-25";
const city = "Hyderabad";
const email = "saibalaji@gmail.com";
const phone = "9876543210";
const skills = ["HTML", "CSS", "JavaScript", "React"];

function StudentCard() {
  return (
    <main className="student-dashboard">
      <article className="student-card">
        <header>
          <img
            src="https://placehold.co/160x160?text=Sai+Balaji"
            alt={`${name}'s profile`}
            className="student-card__image"
          />
          <h1 style={{ color: "#174ea6", textAlign: "center" }}>
            Student Profile
          </h1>
        </header>

        <section aria-label="Student details">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Course:</strong> {course}</p>
          <p><strong>Batch:</strong> {batch}</p>
          <p><strong>City:</strong> {city}</p>
          <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>
        </section>

        <section aria-label="Student skills">
          <h2>Skills</h2>
          <ul>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>
      </article>
    </main>
  );
}

export default StudentCard;
