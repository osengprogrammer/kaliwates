import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";

import PageWrapper from "@/components/motions/PageWraper";
import HeroSection from "@/components/landingPage/HeroSection";
import FeatureSection from "@/components/landingPage/FeatureSection";
import IntronSection from "@/components/landingPage/IntronSection";


export default function Home() {
  return (
    <PageWrapper>
      <div className =" w-full h-full  bg-gray-50 text-gray-900 ">
        <HeroSection />
        <section className="border-t border-gray-200">
          <FeatureSection />
          <IntronSection />
        </section>
      </div>
    </PageWrapper>
  );
}
