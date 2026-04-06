"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import NetworkBackground from "@/components/3d/NetworkBackground";
import { Terminal } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      )
        .fromTo(
          ".hero-title-line",
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power4.out",
          },
          "-=0.6"
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0 },
          { opacity: 1, duration: 1.5, ease: "power2.out" },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <NetworkBackground />

      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col items-start">
        <div className="hero-badge flex items-center space-x-2 text-xs font-mono text-muted mb-6 border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1.5 rounded-full">
          <Terminal size={14} className="text-accent-aws" />
          <span>SYS.INIT // STATUS: DEPLOYING</span>
        </div>

        <div className="overflow-hidden font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9]">
          <div className="overflow-hidden">
            <h1 className="hero-title-line">Yury</h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="hero-title-line text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">
              Kuvaev
            </h1>
          </div>
        </div>

        <div className="hero-subtitle mt-8 max-w-xl text-lg md:text-xl text-muted font-sans font-light">
          Platform-minded DevOps Engineer building infrastructure that teams can
          actually use. Specializing in <span className="text-white font-medium">AWS</span>,{" "}
          <span className="text-white font-medium">Terraform</span>, and{" "}
          <span className="text-white font-medium">Kubernetes</span>.
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-pulse" />
      </div>
    </section>
  );
}