import Link from "next/link";
import React from "react";

import { Button, buttonVariants } from "@/components/ui/button";

function HeroSection() {
  return (
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl md:py-20 bg-gradient-to-r from gray-00 to-gray-200 space-y-10">
      <h1 className="text-4xl font-bold tracking-tight ">
        BaliJava Spirit is your partner for high-quality{" "}
        <span className="text-pink-600">garment products</span>.
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">
        Welcome to BaliJava Spirit. Every products that we produced is verified by our profesional
        team to ensure our highest quality standards.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link href="/service-summary" className={buttonVariants()}>
          Browse Our Services
        </Link>
        <Link href="/quality-services">
        <Button variant="ghost">Our quality promise &rarr;</Button>
        </Link>
       
      </div>
      <div className="pt-10">
          <video className="rounded-xl" autoPlay muted loop>
            <source src="/content/hero-1.mp4" type="video/mp4" />
          </video>
        </div>
    </div>
  );
}

export default HeroSection;
