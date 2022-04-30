import React from "react";

export default function PostForm() {
  return (
    <div className="postForm-wrapper">
      <form className="postForm-form">
        <section className="textSection">
          <label className="textSection-label" htmlFor="name">
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="textSection-input"
            />
          </label>
          <label className="textSection-label" htmlFor="email">
            <input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              className="textSection-input"
            />
          </label>
          <label className="textSection-label" htmlFor="phone">
            <input
              id="phone"
              name="phone"
              type="number"
              placeholder="Phone"
              className="textSection-input"
            />
            <span className="textSection-phone-example">
              +38 (XXX) XXX - XX - XX
            </span>
          </label>
        </section>
        <section className="sectionRadio">
          <h3 className="sectionRadio-header">Select your position</h3>
          <label className="sectionRadio-label" htmlFor="FrontEndDev">
            <input
              className="sectionRadio-input"
              checked="true"
              type="radio"
              name="FrontEndDev"
              id="FrontEndDev"
            />
            <span className="sectionRadio-text">Frontend developer</span>
          </label>
          <label className="sectionRadio-label" htmlFor="BackEndDev">
            <input
              className="sectionRadio-input"
              type="radio"
              name="BackEndDev"
              id="BackEndDev"
            />
            <span className="sectionRadio-text">Backend developer</span>
          </label>
          <label className="sectionRadio-label" htmlFor="Designer">
            <input
              className="sectionRadio-input"
              type="radio"
              name="Designer"
              id="Designer"
            />
            <span className="sectionRadio-text">Designer</span>
          </label>
          <label className="sectionRadio-label" htmlFor="QA">
            <input
              className="sectionRadio-input"
              type="radio"
              name="QA"
              id="QA"
            />
            <span className="sectionRadio-text">QA</span>
          </label>
        </section>

        <section className="sectionFile">
          <label htmlFor="file" className="sectionFile-label">
            <input
              id="file"
              name="file"
              className="sectionFile-input"
              type="file"
            />
            <span className="sectionFile-btn">Upload</span>
            <p className="sectionFile-fileName">Upload your photo</p>
          </label>
        </section>
        <button disabled type="submit" className="btn postForm-btn">Sign up</button>
      </form>
    </div>
  );
}
