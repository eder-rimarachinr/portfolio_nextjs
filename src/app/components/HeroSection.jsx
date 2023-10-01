"use client";
import TypedText from "@/app/utils/TypeText";
import Image from "next/image";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section id="hero--section" className="hero--section">
      <div className="row flex-column-reverse flex-md-row">
        <div className="col-6 col-6-md">
          <div className="">
            <p className="section--title">Hey, I&apos;m Joaquin</p>
            <h1 className="hero--section--title">
              <span className="hero--section--title--color">Full Stack</span>{" "}
              <br />
            </h1>
            <span>
              <TypedText />
            </span>
            <p className="">
              I am a software engineer specializing in crafting (and
              occasionally designing) exceptional digital experiences.
              Currently, I focus on creating accessible and human-centered
              products.
            </p>
          </div>
          <button className="btn--cs btn-primary--cs">Get In Touch</button>
        </div>
        <div className=" col-6 col-6-md d-flex justify-content-center">
          <Image
            className="img-fluid hero--img "
            src="/hero_img.png"
            alt="hero section"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}
