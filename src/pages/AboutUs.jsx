import React, { lazy } from "react";
import bannerImg from "../assets/images/aboutus-banner.webp";
import ourValuesBg from "../assets/images/our-values-bg.jpeg";
import { ArrowRight, Gem, MessagesSquare, PersonStanding } from "lucide-react";
import img1 from "../assets/images/aboutus-1.png";
import img2 from "../assets/images/aboutus-2.png";
import { Link } from "react-router-dom";
import { ArrowLinkButton } from "../components/ArrowButtons";

const ContactForm = lazy(() => import("../components/ContactForm"));
const WorkProcess = lazy(() => import("../components/WorkProcess"));
const Testimonials = lazy(() => import("../components/Testimonials"));
const ServicesWeProvide = lazy(() =>
  import("../components/website/ServicesWeProvide")
);

const AboutUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="min-h-screen relative flex items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 h-full w-full">
          <div
            data-aos="fade-up"
            className="pt-[10rem] pb-[3rem] wrapper text-white flex flex-col gap-3 justify-center items-center"
          >
            <h1 className="heading-2 max-w-5xl text-center">
              Custom Software Solutions Crafted by Expert Developers
            </h1>
            <p className="max-w-5xl text-center text-[1.1rem]">
              Welcome to Kalyx AI Labs — where technology meets innovation. We
              design and deliver end-to-end digital solutions tailored to your
              business goals. From mobile apps and web platforms to AI and cloud
              transformation, our team brings deep expertise, creative thinking,
              and real-world results to every project.
            </p>
            <ArrowLinkButton to="/contact">Get in Touch</ArrowLinkButton>
          </div>
        </div>
      </section>

      <section className="pt-14 !max-w-5xl text-center wrapper space-y-5">
        <h2 className="section-heading text-center">Who We Are</h2>
        <p className="desc">
          At Kalyx AI Labs, we’re not just tech enthusiasts—we’re builders,
          thinkers, and problem-solvers who are passionate about creating
          meaningful digital experiences. Our roots are grounded in the belief
          that technology should serve people, not complicate their lives.
          That’s why everything we create is designed with purpose, strategy,
          and a focus on real-world impact. We work with businesses of all
          sizes—startups taking their first steps, enterprises exploring digital
          transformation, and everything in between. Our goal is simple: to help
          you move forward with smart, scalable, and custom-built technology
          solutions.
        </p>
      </section>

      {/* Services Section */}
      <ServicesWeProvide />

      {/* Testimonials Section */}
      <section className="bg-[#F7F7F9]">
        <Testimonials />
      </section>

      {/* Values Section */}
      <section
        className="py-[7rem] bg-cover bg-center"
        style={{ backgroundImage: `url(${ourValuesBg})` }}
      >
        <div className="wrapper">
          <h2
            data-aos="fade-up"
            className="section-heading text-center text-white"
          >
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-7 mt-7">
            {[
              {
                title: "Integrity and Transparency",
                desc: "We maintain transparency and uphold integrity in every project by fostering clear communication and accountability.",
                Icon: MessagesSquare,
              },
              {
                title: "Innovation and Excellence",
                desc: "We embrace innovation to deliver top-tier digital products, staying ahead with evolving technologies and industry trends.",
                Icon: PersonStanding,
              },
              {
                title: "Customer-Centric Approach",
                desc: "Your goals are at the heart of what we build. We provide customized solutions designed to achieve your business objectives.",
                Icon: Gem,
              },
            ].map(({ title, desc, Icon }) => (
              <div
                key={title}
                data-aos="fade-up"
                className="p-5 bg-white/5 backdrop-blur-sm text-white space-y-3 rounded-xl"
              >
                <GradientIcon>
                  <Icon stroke="url(#myGradient)" strokeWidth={1} size={45} />
                </GradientIcon>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="">
        <WorkProcess />
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </>
  );
};

export default AboutUs;

const GradientIcon = ({ children }) => (
  <svg width="48" height="48">
    <defs>
      <linearGradient id="myGradient" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="#9935E8" />
        <stop offset="100%" stopColor="#F8B000" />
      </linearGradient>
    </defs>
    {children}
  </svg>
);
