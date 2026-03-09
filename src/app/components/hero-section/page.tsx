"use client";
import { personalData } from "@/../utils/Data/PersonalData";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/dist/SplitText";
import Link from "next/link";
import { useRef } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import Tilt from "react-parallax-tilt";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const designationRef = useRef<HTMLElement>(null);
  const codeCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);

      const titles = personalData.designationAlternateWords;
      let index = 0;

      const introTl = gsap.timeline();
      introTl
        .fromTo(
          ".hero-tag",
          { opacity: 0, x: -20 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power3.out" },
        )
        .fromTo(
          ".hero-heading",
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1, ease: "power4.out" },
          "-=0.5",
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power2.out" },
          "-=0.6",
        )
        .fromTo(
          codeCardRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1.2, ease: "power4.out" },
          "-=1",
        );

      const runDesignationAnimation = () => {
        const el = designationRef.current;
        if (!el) return;

        const tl = gsap.timeline({
          onComplete: () => {
            index = (index + 1) % titles.length;
            runDesignationAnimation();
          },
        });

        el.textContent = titles[index];
        const split = new SplitText(el, { type: "chars" });

        tl.from(split.chars, {
          opacity: 0,
          y: 10,
          rotateX: -90,
          stagger: 0.04,
          duration: 0.6,
          ease: "back.out(1.7)",
        }).to(split.chars, {
          opacity: 0,
          y: -10,
          rotateX: 90,
          stagger: 0.02,
          duration: 0.5,
          ease: "back.in(1.7)",
          delay: 2,
          onComplete: () => split.revert(),
        });
      };

      runDesignationAnimation();

      gsap.to(".social-icon", {
        y: -5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
        ease: "sine.inOut",
      });
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 lg:py-24 overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/10 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-900/10 blur-[150px] rounded-full animate-pulse delay-700" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center px-4 md:px-8 relative z-10 w-full max-w-7xl mx-auto">
        
        {/* LEFT SIDE */}
        <div className="order-2 lg:order-1 flex flex-col items-start gap-8">
          
          <div className="flex flex-col gap-4">
            <span className="hero-tag px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold tracking-[0.3em] w-fit">
              WELCOME TO MY PORTFOLIO
            </span>

            <h1 className="hero-heading text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800">
                Modern
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-red-950">
                Web Applications
              </span>
            </h1>

            <p className="hero-heading text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-medium">
              I'm{" "}
              <span className="text-white font-bold">{personalData.name}</span>,
              a professional
              <span
                className="text-red-500 ml-2 font-bold inline-block min-w-[200px]"
                ref={designationRef}
              >
                {personalData.designation}
              </span>
              <br />
              passionate about building scalable full-stack applications using modern technologies.
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              
              <Link href={personalData.github} target="_blank" className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-red-500">
                <BsGithub size={24} />
              </Link>

              <Link href={personalData.linkedIn} target="_blank" className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-red-500">
                <BsLinkedin size={24} />
              </Link>

              <Link href={personalData.leetcode} target="_blank" className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-red-500">
                <SiLeetcode size={24} />
              </Link>

              <Link href={personalData.twitter} target="_blank" className="social-icon p-3 rounded-xl bg-white/5 border border-white/10 text-white hover:text-red-500">
                <FaTwitterSquare size={24} />
              </Link>

            </div>

            {/* BUTTONS */}
            <div className="hero-cta flex flex-wrap gap-4">
              
              <Link href="/#contact" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-900 text-white font-bold uppercase tracking-wider">
                Let's Collaborate <RiContactsFill />
              </Link>

              <Link href={personalData.resume} target="_blank" className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-bold uppercase tracking-wider flex items-center gap-2">
                Get Resume <MdDownload />
              </Link>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE CODE CARD */}
        <div className="order-1 lg:order-2 flex justify-center">
          <Tilt perspective={1000} glareEnable={true} glareMaxOpacity={0.1} scale={1.02} className="w-full max-w-[550px]">
            
            <div ref={codeCardRef} className="relative rounded-3xl border border-white/10 bg-[#050505]/80 backdrop-blur-xl overflow-hidden shadow-2xl group">

              <div className="p-6 lg:p-10">
                <code className="font-mono text-xs md:text-sm lg:text-base leading-relaxed">
                  
                  const developer = {"{"} <br/>

                  name: 'Md Altamash', <br/>

                  focus: 'MERN Stack Development', <br/>

                  skills: ['React','Next.js','Node.js','MongoDB'], <br/>

                  passionate: true, <br/>

                  motto: "Building Scalable Web Applications" <br/>

                  {"};"} <br/><br/>

                  developer.showcase();

                </code>
              </div>

            </div>

          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;